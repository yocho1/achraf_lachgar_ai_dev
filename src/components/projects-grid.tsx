"use client";

import { motion } from "framer-motion";
import { Play, Github } from "lucide-react";
import type { Project } from "@/lib/profile";
import Link from "next/link";

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="space-y-6">
      <div className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Evidence over claims</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Projects with measurable impact</h2>
        <p className="text-base text-slate-300">
          Glass cards highlight the problem, architecture, and measurable outcomes for each build.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, idx) => {
          const projectId = project.title.toLowerCase().replace(/\s+/g, "-");
          return (
            <motion.div
              key={project.title}
              id={projectId}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="glass relative overflow-hidden rounded-3xl border border-white/10 p-6 shadow-xl scroll-mt-24"
            >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-cyan-200/10" />
            <div className="relative space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    {project.period && (
                      <span className="text-xs text-slate-500">{project.period}</span>
                    )}
                  </div>
                  <p className="text-sm text-slate-400">{project.problem}</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-wide"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate-200">{project.solution}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-200">
                {project.videoId && (
                  <Link
                    href={`/project/${projectId}`}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-white transition hover:from-cyan-400 hover:to-blue-400"
                  >
                    <Play className="h-4 w-4" />
                    View Demo
                  </Link>
                )}
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-white transition hover:border-white/40"
                  href={project.links.source}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-4 w-4" />
                  Source Code
                </a>
                <span className="text-slate-400">Impact: {project.impact}</span>
              </div>
            </div>
          </motion.div>
          );
        })}
      </div>

      {/* More Projects Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 flex justify-center"
      >
        <a
          href="https://github.com/yocho1"
          target="_blank"
          rel="noreferrer"
          className="group relative inline-flex items-center gap-3 rounded-lg border border-white/20 bg-gradient-to-r from-white/5 to-white/10 px-10 py-5 font-semibold text-white transition-all hover:border-white/40 hover:from-white/10 hover:to-white/20 hover:shadow-lg hover:shadow-cyan-500/20"
        >
          <span>Explore More on GitHub</span>
          <Github className="h-5 w-5 transition-transform group-hover:scale-110" />
        </a>
      </motion.div>    </section>
  );
}