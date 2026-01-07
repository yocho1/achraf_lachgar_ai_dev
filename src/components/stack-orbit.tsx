"use client";

import { motion } from "framer-motion";
import type { StackItem } from "@/lib/profile";

export function StackOrbit({ stack }: { stack: StackItem[] }) {
  return (
    <section className="space-y-6" id="stack">
      <div className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Technical credibility</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Stack, tools, and how they are used</h2>
        <p className="text-base text-slate-300">
          Interactive honeycomb shows exactly how each technology is applied in production workflows.
        </p>
      </div>
      <div className="neural-grid">
        <div className="grid auto-rows-[150px] gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stack.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.04, duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.03, rotate: 0.5 }}
              className="hexagon glass relative flex items-center justify-center text-center shadow-lg"
              title={item.usage}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-cyan-300/10" />
              <div className="relative px-4 text-slate-100">
                <p className="text-lg font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-xs text-slate-300">{item.usage}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
