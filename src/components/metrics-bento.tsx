"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Gauge, ShieldCheck, Sparkles } from "lucide-react";
import type { Profile } from "@/lib/profile";

export function MetricsBento({ profile }: { profile: Profile }) {
  const metricToProject: Record<string, string> = {
    "Fine-tuning accuracy": "legal-faq-assistant",
    "Retrieval latency": "multimodal-ai-rag-app",
    "AI projects": "projects",
  };

  const handleMetricClick = (label: string) => {
    const projectId = metricToProject[label];
    if (projectId) {
      const element = document.getElementById(projectId);
      element?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="space-y-6" id="proof">
      <div className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Liquid Glass 2.0</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Proof-first Bento grid</h2>
        <p className="text-base text-slate-300">
          Frosted glass cards with container-query intelligence, highlighting velocity, reliability, and measurable outputs.
        </p>
      </div>
      <div className="cq-card grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          whileHover={{ y: -4 }}
          className="glass rounded-3xl p-6 shadow-lg"
        >
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-slate-300">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            Systems that tell the truth
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-white">Eval-driven delivery</h3>
          <p className="mt-2 text-slate-300">
            Golden sets + adversarial synthetic tests. Blocking regressions and monitoring hallucination risk before release.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {profile.metrics.slice(0, 4).map((metric) => {
              const isClickable = metricToProject[metric.label];
              return (
                <motion.div
                  key={metric.label}
                  onClick={() => handleMetricClick(metric.label)}
                  className={`rounded-2xl border border-white/10 bg-white/5 p-4 ${
                    isClickable ? "cursor-pointer transition-all hover:border-cyan-300/50 hover:bg-white/10" : ""
                  }`}
                  whileHover={isClickable ? { scale: 1.05 } : {}}
                  whileTap={isClickable ? { scale: 0.98 } : {}}
                >
                  <p className="text-sm text-slate-400">{metric.label}</p>
                  <p className="text-2xl font-semibold text-white">{metric.value}</p>
                  <p className="text-xs text-slate-400">{metric.description}</p>
                  {isClickable && (
                    <p className="mt-2 text-[10px] uppercase tracking-wider text-cyan-300">Click to view project →</p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          <motion.div whileHover={{ y: -4 }} className="glass rounded-3xl p-6">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-slate-300">
              <Gauge className="h-4 w-4 text-emerald-300" />
              Latency-aware pipelines
            </div>
            <h3 className="mt-3 text-xl font-semibold text-white">Performance under budget</h3>
            <p className="text-sm text-slate-300">
              Prompt packing, cache tiering, and hybrid retrieval keep p95s low while maintaining factuality.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-100">
              {"Hybrid search • Async routing • Token budgets".split(" • ").map((item) => (
                <span key={item} className="rounded-full bg-white/10 px-3 py-1">{item}</span>
              ))}
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="glass rounded-3xl p-6">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-slate-300">
              <ShieldCheck className="h-4 w-4 text-cyan-300" />
              Guardrails & safety
            </div>
            <h3 className="mt-3 text-xl font-semibold text-white">Policies and observability</h3>
            <p className="text-sm text-slate-300">
              Structured output validation, safety classifiers, and per-route scorecards visible in dashboards.
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-100">
              {["Policy-based tool access", "Structured outputs with JSON schemas", "Cost ceilings per task"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
