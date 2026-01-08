"use client";

import { motion } from "framer-motion";
import { ArrowDownToLine, Github, Linkedin } from "lucide-react";
import type { Profile } from "@/lib/profile";

export function CtaFooter({ profile }: { profile: Profile }) {
  return (
    <footer className="glass-strong mt-16 rounded-3xl border border-white/10 px-6 py-8 text-slate-100">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Next step</p>
          <h3 className="text-2xl font-semibold text-white">Let's build your next AI solution</h3>
          <p className="text-slate-300">
            Open for AI engineering roles and freelance projects.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <motion.a
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg"
            href={profile.contact.resume}
            target="_blank"
            rel="noreferrer"
          >
            <ArrowDownToLine className="h-4 w-4" />
            Download ATS-Ready Resume (PDF)
          </motion.a>
          <a
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-white transition hover:border-white/40"
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-white transition hover:border-white/40"
            href={profile.contact.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3 text-xs text-slate-400">
        <div className="flex flex-wrap items-center gap-3">
          <span>© {new Date().getFullYear()} Achraf Lachgar</span>
          <span className="rounded-full bg-white/10 px-3 py-1">Casablanca, Morocco</span>
        </div>
        {profile.languages && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-500">Languages:</span>
            {profile.languages.map((lang) => (
              <span key={lang.language} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                {lang.language} — {lang.proficiency}
              </span>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
