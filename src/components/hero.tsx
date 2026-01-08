"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Database, Settings, Code, Layers } from "lucide-react";
import { HeroCanvas } from "./hero-canvas";
import type { Profile } from "@/lib/profile";

export function Hero({ profile }: { profile: Profile }) {
  const handleOpenChat = () => {
    window.dispatchEvent(new CustomEvent("open-ai-widget"));
  };

  return (
    <section className="relative overflow-hidden pb-24 pt-20 sm:pt-28">
      <HeroCanvas />
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/70 pointer-events-none" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-300/80">
          <span className="glass-strong rounded-full px-4 py-2">Junior AI Engineer</span>
          <span className="glass rounded-full px-4 py-2">Generative AI • RAG • Agents</span>
          <span className="glass rounded-full px-4 py-2">Casablanca, Morocco</span>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-emerald-200">Production-Grade AI Systems</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              className="max-w-2xl text-lg leading-relaxed text-slate-300"
            >
              Generative AI • RAG Architectures • LLM Fine-Tuning • AI Agents
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.6, ease: "easeOut" }}
              className="max-w-2xl text-base leading-relaxed text-slate-300/90"
            >
              {profile.bio}
            </motion.p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ y: -2, scale: 1.01 }}
                className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300/90 to-emerald-300/80 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-cyan-500/20"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <motion.button
                whileHover={{ y: -2, scale: 1.01 }}
                onClick={handleOpenChat}
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                Chat With My AI Twin
              </motion.button>
            </div>

            <div className="cq-card grid gap-4 rounded-2xl glass p-4 sm:p-5 lg:max-w-3xl">
              <div className="grid cq-split gap-4">
                {profile.metrics.slice(0, 3).map((metric) => (
                  <div key={metric.label} className="glass rounded-xl p-4">
                    <p className="text-sm text-slate-400">{metric.label}</p>
                    <p className="text-2xl font-semibold text-white">{metric.value}</p>
                    <p className="text-sm text-slate-400">{metric.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.7, ease: "easeOut" }}
            className="glass-strong relative overflow-hidden rounded-3xl border border-white/10 p-6 shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-cyan-300/10" />
            <div className="relative space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-300/80">Capability Map</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">End-to-end AI delivery</h3>
              </div>
              <div className="space-y-4">
                {profile.specialties.map((item, index) => {
                  const capabilityInfo: Record<string, { icon: any; project: string; metric: string }> = {
                    "Retrieval-augmented generation architectures": {
                      icon: Database,
                      project: "Multimodal-AI RAG App",
                      metric: "-15% latency",
                    },
                    "LLM fine-tuning with LoRA and QLoRA": {
                      icon: Settings,
                      project: "Legal-FAQ-Assistant",
                      metric: "+20% accuracy",
                    },
                    "AI application development with FastAPI and React": {
                      icon: Code,
                      project: "SheetBrain-AI",
                      metric: "Enterprise automation",
                    },
                    "Full-stack AI integration patterns": {
                      icon: Layers,
                      project: "Multiple projects",
                      metric: "4+ years experience",
                    },
                  };

                  const info = capabilityInfo[item] || { icon: Code, project: "See portfolio", metric: "" };
                  const IconComponent = info.icon;

                  return (
                    <motion.div
                      key={item}
                      className="group relative flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 transition-all hover:border-cyan-300/30 hover:bg-white/10"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IconComponent className="mt-0.5 h-5 w-5 text-cyan-300" />
                      <p className="flex-1 text-sm text-slate-200">{item}</p>
                      
                      {/* Tooltip */}
                      <motion.div
                        className="pointer-events-none absolute -top-16 left-1/2 z-50 -translate-x-1/2 rounded-xl border border-cyan-300/30 bg-slate-900/95 px-4 py-2 text-center opacity-0 shadow-xl backdrop-blur-sm group-hover:opacity-100"
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="whitespace-nowrap text-xs font-medium text-cyan-300">
                          {info.project}
                        </p>
                        {info.metric && (
                          <p className="whitespace-nowrap text-xs text-slate-400">
                            {info.metric}
                          </p>
                        )}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
              <div className="divider" />
              <div className="grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between">
                  <span>Location</span>
                  <span className="text-white">{profile.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Availability</span>
                  <span className="text-white">Open for junior AI roles & consulting</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
