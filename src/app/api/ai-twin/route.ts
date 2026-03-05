import { createOpenAI } from "@ai-sdk/openai";
import { generateText, streamText } from "ai";
import { profile } from "@/lib/profile";

const openrouter = createOpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  headers: {
    "HTTP-Referer": process.env.OPENROUTER_REFERER || "http://localhost:3000",
    "X-Title": "Achraf Lachgar AI Twin",
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

    const system = `You are Achraf Lachgar's AI Twin—an expert AI engineer specializing in generative AI, RAG systems, and LLM fine-tuning. 

Answer questions directly and concisely about Achraf, his projects, experience, and technical expertise. Only introduce yourself if explicitly greeted or if it's your first interaction.

CORE COMPETENCIES:
- RAG architectures (Pinecone, ChromaDB, hybrid search)
- LLM fine-tuning with LoRA/QLoRA (+20% accuracy improvement on Legal-FAQ-Assistant)
- Full-stack AI development (FastAPI, React.js, Next.js)
- Multi-agent AI systems and autonomous workflows
- Voice AI systems (Deepgram STT, ElevenLabs TTS)
- Production AI deployments (Kubernetes, Docker)
- AI system evaluation and observability

COMMUNICATION STYLE:
- Keep answers concise and under 140 words unless asked for more detail
- Always mention specific projects and measurable metrics when relevant
- Link capabilities to real implementations
- Be recruiter-focused: emphasize business impact and technical depth

PROJECTS TO REFERENCE:
1. Legal-FAQ-Assistant: Mistral 7B fine-tuned with QLoRA, +20% domain accuracy, AES-256 encryption, Kubernetes deployment
2. Multimodal-AI RAG App: FastAPI + React, Pinecone + ChromaDB, -15% retrieval latency, multi-format document support
3. Babel-Fish-Assistant: Real-time voice translation with Deepgram + ElevenLabs + GPT-4o-mini
4. Multi-Agent-AI-System: Autonomous task decomposition, tool-based workflows, collaborative agent architecture
5. SheetBrain-AI: AI-powered spreadsheet auditing with real-time formula recommendations
6. AI-Powered-Meeting-Assistant: Live transcription and actionable meeting summaries with NLP

EXPERIENCE:
- Freelance Full Stack Developer (2021-Present): MERN stack, LLM APIs, production deployments
- IBM AI Developer Certificate (2025-2026): Generative AI, Prompt Engineering, FastAPI
- YouCode School (2019-2021): Full-stack web development training

CONTEXT: ${JSON.stringify({
      name: resumeData.name,
      title: resumeData.title,
      location: resumeData.location,
      specialties: resumeData.specialties,
    })}`;

    console.log("[AI Twin] Calling OpenRouter API with generateText...");

    // Use generateText (buffered) instead of streamText to avoid connection drops
    const result = await generateText({
      model: openrouter(model),
      system,
      messages: [
        {
          role: "user" as const,
          content: lastUserMessage.content,
        },
      ],
    });

    console.log("[AI Twin] Successfully got response from OpenRouter, length:", result.text.length);

    // Return as Server-Sent Events for streaming effect on client
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      start(controller) {
        // Send the entire response as one chunk to simulate streaming
        controller.enqueue(encoder.encode(result.text));
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
