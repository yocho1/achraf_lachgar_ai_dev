"use client";

import { motion } from "framer-motion";
import type { StackItem } from "@/lib/profile";

export function StackOrbit({ stack }: { stack: StackItem[] }) {
  // Map each technology to its most critical project
  const techToProject: Record<string, { id: string; name: string }> = {
    "Large Language Models": { id: "legal-faq-assistant", name: "Legal-FAQ-Assistant" },
    "LLM Fine-Tuning": { id: "legal-faq-assistant", name: "Legal-FAQ-Assistant" },
    "RAG Architectures": { id: "multimodal-ai-rag-app", name: "Multimodal-AI RAG App" },
    "Vector Databases": { id: "multimodal-ai-rag-app", name: "Multimodal-AI RAG App" },
    "FastAPI": { id: "multimodal-ai-rag-app", name: "Multimodal-AI RAG App" },
    "React.js & Next.js": { id: "babel-fish-assistant", name: "Babel-Fish-Assistant" },
    "Python": { id: "ai-powered-meeting-assistant", name: "AI-Powered-Meeting-Assistant" },
    "Docker & Kubernetes": { id: "legal-faq-assistant", name: "Legal-FAQ-Assistant" },
    "Prompt Engineering": { id: "multi-agent-ai-system", name: "Multi-Agent-AI-System" },
    "PostgreSQL": { id: "sheetbrain-ai", name: "SheetBrain-AI" },
  };

  const handleTechClick = (techName: string) => {
    const project = techToProject[techName];
    if (project) {
      const element = document.getElementById(project.id);
      element?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="space-y-6" id="stack">
      <div className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Technical credibility</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Stack, tools, and how they are used</h2>
        <p className="text-base text-slate-300">
          Interactive honeycomb shows exactly how each technology is applied in production workflows. Click to see implementation.
        </p>
      </div>
      <div className="neural-grid">
        <div className="grid auto-rows-[150px] gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stack.map((item, idx) => {
            const project = techToProject[item.name];
            const isClickable = !!project;

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.04, duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.03, rotate: 0.5 }}
                onClick={() => handleTechClick(item.name)}
                className={`glass relative flex items-center justify-center overflow-visible rounded-3xl text-center shadow-lg ${
                  isClickable ? "cursor-pointer transition-all hover:border-cyan-300/50 hover:shadow-cyan-300/20" : ""
                }`}
                title={isClickable ? `${item.usage} → See ${project.name}` : item.usage}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-cyan-300/10" />
                <div className="relative w-full px-3 py-4 text-slate-100">
                  <p className="text-base font-semibold leading-tight text-white">{item.name}</p>
                  <p className="mt-2 text-[11px] leading-snug text-slate-300">{item.usage}</p>
                  {isClickable && (
                    <p className="mt-2 text-[9px] uppercase tracking-wider text-cyan-300 opacity-0 transition-opacity hover:opacity-100">
                      → {project.name}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
