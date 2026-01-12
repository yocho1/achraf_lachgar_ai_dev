"use client";

import { useParams, useRouter } from "next/navigation";
import { profile } from "@/lib/profile";
import { ArrowLeft, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const project = profile.projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">Project not found</h1>
          <button
            onClick={() => router.push("/")}
            className="mt-4 text-cyan-400 hover:text-cyan-300"
          >
            ← Back to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.push("/")}
          className="mb-6 sm:mb-8 flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to portfolio</span>
        </motion.button>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 sm:mb-8"
        >
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              {project.title}
            </h1>
            {project.period && (
              <span className="text-sm text-slate-500">{project.period}</span>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.metrics.map((metric) => (
              <span
                key={metric}
                className="rounded-full bg-cyan-500/10 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold text-cyan-400"
              >
                {metric}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Video Section */}
        {project.videoId ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16 w-full"
          >
            <div className="w-full">
              <div className="relative mx-auto aspect-video w-full max-w-6xl overflow-hidden rounded-2xl bg-black shadow-2xl">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${project.videoId}`}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        ) : null}

        {/* Project Details */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6 sm:space-y-8"
          >
            {/* Problem */}
            <div className="glass rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6">
              <h2 className="mb-3 text-lg sm:text-xl font-semibold text-white">
                The Problem
              </h2>
              <p className="text-sm sm:text-base text-slate-300">{project.problem}</p>
            </div>

            {/* Solution */}
            <div className="glass rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6">
              <h2 className="mb-3 text-lg sm:text-xl font-semibold text-white">
                The Solution
              </h2>
              <p className="text-sm sm:text-base text-slate-300">{project.solution}</p>
            </div>

            {/* Impact */}
            <div className="glass rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6">
              <h2 className="mb-3 text-lg sm:text-xl font-semibold text-white">Impact</h2>
              <p className="text-sm sm:text-base text-slate-300">{project.impact}</p>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Technologies */}
            <div className="glass rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6">
              <h2 className="mb-4 text-lg sm:text-xl font-semibold text-white">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="glass rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6">
              <h2 className="mb-4 text-lg sm:text-xl font-semibold text-white">Links</h2>
              <div className="space-y-3">
                <a
                  href={project.links.source}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-lg bg-white/5 px-4 py-3 text-sm sm:text-base text-white transition hover:bg-white/10"
                >
                  <Github className="h-5 w-5" />
                  <span className="font-medium">View Source Code</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
