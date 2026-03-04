import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { profile } from "@/lib/profile";

const openrouter = createOpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  headers: {
    "HTTP-Referer": process.env.OPENROUTER_REFERER || "http://localhost:3000",
    "X-Title": "Achraf Lachgar AI Twin",
  },
});

export async function POST(req: Request) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    if (!process.env.OPENROUTER_API_KEY) {
      console.error("Missing OPENROUTER_API_KEY");
      return new Response(JSON.stringify({ error: "Missing OPENROUTER_API_KEY" }), {
        status: 500,
        headers: { ...headers, "Content-Type": "application/json" },
      });
    }

    if (!process.env.OPENROUTER_MODEL || !process.env.OPENROUTER_REFERER) {
      console.error("Missing OPENROUTER_MODEL or OPENROUTER_REFERER");
      return new Response(
        JSON.stringify({ error: "Missing required environment variables" }),
        { status: 500, headers: { ...headers, "Content-Type": "application/json" } }
      );
    }

    const { messages, resume } = (await req.json()) as {
      messages?: Array<{ role: string; content: string }>;
      resume?: typeof profile;
    };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "Invalid messages format" }), {
        status: 400,
        headers: { ...headers, "Content-Type": "application/json" },
      });
    }

    const resumeData = resume || profile;

    // Get only the last user message to avoid OpenRouter validation issues with multi-turn
    const lastUserMessage = messages.findLast((msg) => msg.role === "user");

    if (!lastUserMessage) {
      return new Response(JSON.stringify({ error: "No user message found" }), {
        status: 400,
        headers: { ...headers, "Content-Type": "application/json" },
      });
    }

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

    console.log("Calling OpenRouter with model:", process.env.OPENROUTER_MODEL);

    const result = await streamText({
      model: openrouter(process.env.OPENROUTER_MODEL),
      system,
      messages: [
        {
          role: "user" as const,
          content: lastUserMessage.content,
        },
      ],
    });

    const response = result.toTextStreamResponse();
    // Add CORS headers to stream response
    const newHeaders = new Headers(response.headers);
    Object.entries(headers).forEach(([key, value]) => {
      newHeaders.set(key, value);
    });

    return new Response(response.body, {
      status: response.status,
      headers: newHeaders,
    });
  } catch (error) {
    console.error("API error:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Error details:", { type: error?.constructor?.name, message: errorMessage });

    return new Response(
      JSON.stringify({ error: "Failed to generate response", details: errorMessage }),
      { status: 500, headers: { ...headers, "Content-Type": "application/json" } }
    );
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
