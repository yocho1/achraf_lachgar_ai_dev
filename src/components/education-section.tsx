"use client";

import { motion } from "framer-motion";
import { GraduationCap, ExternalLink } from "lucide-react";
import type { Education } from "@/lib/profile";

export function EducationSection({ education }: { education: Education[] }) {
  return (
    <section className="space-y-6" id="education">
      <div className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Education & Certifications</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Academic background and training</h2>
        <p className="text-base text-slate-300">
          Formal education, professional certifications, and specialized training programs.
        </p>
      </div>

      <div className="relative space-y-8 border-l border-white/10 pl-6">
        {education.map((item, idx) => (
          <motion.div
            key={item.degree + item.institution}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.05, duration: 0.5, ease: "easeOut" }}
            className="relative glass overflow-hidden rounded-2xl border border-white/10 p-5"
          >
            <span className="absolute -left-[34px] flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-300 to-pink-300 text-slate-900 shadow-lg shadow-purple-500/30">
              <GraduationCap className="h-5 w-5" />
            </span>
            <div className="absolute left-[-1px] top-10 h-full w-[2px] bg-gradient-to-b from-purple-300/70 via-white/40 to-transparent" />
            <div className="space-y-2">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-white/90">
                      {item.institution}
                    </span>
                    <span className="text-sm text-slate-300">{item.period}</span>
                  </div>
                </div>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1 text-sm text-cyan-300 hover:text-cyan-200"
                  >
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:scale-110" />
                  </a>
                )}
              </div>
              <ul className="space-y-2 text-sm text-slate-200">
                {item.achievements.map((ach) => (
                  <li key={ach} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-300" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
