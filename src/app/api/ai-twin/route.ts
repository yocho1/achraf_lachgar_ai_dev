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
  try {
    if (!process.env.OPENROUTER_API_KEY) {
      return new Response("Missing OPENROUTER_API_KEY", { status: 500 });
    }

    const { messages, resume } = (await req.json()) as {
      messages?: Array<{ role: string; content: string }>;
      resume?: typeof profile;
    };

    console.log("API received messages:", messages?.length, messages);

    if (!messages || !Array.isArray(messages)) {
      return new Response("Invalid messages format", { status: 400 });
    }

    const resumeData = resume || profile;

    const system = `You are Achraf Lachgar's AI twin. Provide concise, recruiter-focused answers. Always ground responses in the provided resume and project data. Highlight measurable outcomes, stack choices, and production details. If asked about tools, mention Vercel AI SDK, OpenAI AgentKit (tool access & policies), RAG control planes, eval harnesses, and observability. Keep answers under 140 words unless the user asks for deep detail. Context: ${JSON.stringify(
      {
        name: resumeData.name,
        title: resumeData.title,
        location: resumeData.location,
        specialties: resumeData.specialties,
        projects: resumeData.projects,
        metrics: resumeData.metrics,
        experience: resumeData.experience,
      },
    )}`;

    const result = await streamText({
      model: openrouter(process.env.OPENROUTER_MODEL || "openai/gpt-4o-mini"),
      system,
      messages,
      maxTokens: 320,
      temperature: 0.3,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("API error:", error);
    return new Response(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`, { status: 500 });
  }
}
