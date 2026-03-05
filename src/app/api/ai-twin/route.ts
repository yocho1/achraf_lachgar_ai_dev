import { createOpenAI } from "@ai-sdk/openai";
import { generateText, streamText } from "ai";
import { profile } from "@/lib/profile";

// Configure OpenRouter with conservative token limits
const openrouter = createOpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  headers: {
    "HTTP-Referer": process.env.OPENROUTER_REFERER || "http://localhost:3000",
    "X-Title": "Achraf Lachgar AI Twin",
  },
  fetch: async (url, options) => {
    // Force max_tokens limit in the request body
    if (options?.body) {
      const body = JSON.parse(options.body as string);
      body.max_tokens = 200; // Force strict limit
      options.body = JSON.stringify(body);
    }
    return fetch(url, options);
  },
});

function getCommonHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function POST(req: Request) {
  try {
    // Validate environment variables first
    if (!process.env.OPENROUTER_API_KEY) {
      console.error("[AI Twin] Missing OPENROUTER_API_KEY");
      return new Response(
        JSON.stringify({ error: "Missing OPENROUTER_API_KEY - contact support" }),
        { status: 500, headers: { ...getCommonHeaders(), "Content-Type": "application/json" } }
      );
    }

    const model = process.env.OPENROUTER_MODEL || "openai/gpt-4o-mini";
    console.log("[AI Twin] Using model:", model);

    const { messages, resume } = (await req.json()) as {
      messages?: Array<{ role: string; content: string }>;
      resume?: typeof profile;
    };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "Invalid messages format" }), {
        status: 400,
        headers: { ...getCommonHeaders(), "Content-Type": "application/json" },
      });
    }

    const resumeData = resume || profile;
    const lastUserMessage = messages.findLast((msg) => msg.role === "user");

    if (!lastUserMessage) {
      return new Response(JSON.stringify({ error: "No user message found" }), {
        status: 400,
        headers: { ...getCommonHeaders(), "Content-Type": "application/json" },
      });
    }

    console.log("[AI Twin] Processing message:", lastUserMessage.content.substring(0, 50));

    // Shortened system prompt to reduce token usage
    const system = `You are Achraf Lachgar's AI Twin. Answer in under 100 words.

SKILLS: RAG/LLM fine-tuning (LoRA/QLoRA), FastAPI, React, Multi-agent AI, Voice AI (Deepgram/ElevenLabs)

KEY PROJECTS:
1. Legal-FAQ-Assistant: Mistral 7B + QLoRA, +20% accuracy
2. Multimodal RAG: Pinecone + ChromaDB, -15% latency
3. Babel-Fish: Real-time voice translation
4. Multi-Agent-AI: Autonomous workflows

EXPERIENCE: Freelance Full Stack Dev (2021+), IBM AI Certificate (2025-26)

${resumeData.name} | ${resumeData.title} | ${resumeData.location}`;

    console.log("[AI Twin] Calling OpenRouter API with token limits...");

    // Use generateText with strict token limits (under 200 tokens output)
    const result = await generateText({
      model: openrouter.languageModel(model, {
        structuredOutputs: false,
      }),
      system,
      messages: [
        {
          role: "user" as const,
          content: lastUserMessage.content,
        },
      ],
      maxTokens: 200, // Strict limit: 200 tokens output (~800 chars)
    });

    // Truncate response to stay within token limits (aim for ~500 chars = ~125 tokens)
    const truncatedText = result.text.length > 500 
      ? result.text.substring(0, 500) + "..."
      : result.text;

    console.log("[AI Twin] Successfully got response from OpenRouter, length:", truncatedText.length);

    // Return as Server-Sent Events for streaming effect on client
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      start(controller) {
        // Send the entire response as one chunk to simulate streaming
        controller.enqueue(encoder.encode(truncatedText));
        controller.close();
      },
    });

    return new Response(stream, {
      status: 200,
      headers: {
        ...getCommonHeaders(),
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("[AI Twin] Error:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorStack = error instanceof Error ? error.stack : "";

    console.error("[AI Twin] Error details:", {
      message: errorMessage,
      stack: errorStack,
      type: error?.constructor?.name,
    });

    return new Response(
      JSON.stringify({
        error: "Failed to generate response",
        message: errorMessage,
        context: process.env.NODE_ENV === "development" ? errorStack : undefined,
      }),
      {
        status: 500,
        headers: { ...getCommonHeaders(), "Content-Type": "application/json" },
      }
    );
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: getCommonHeaders(),
  });
}
