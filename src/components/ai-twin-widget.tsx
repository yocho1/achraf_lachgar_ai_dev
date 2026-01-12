"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Expand, Minimize2, Send } from "lucide-react";
import type { Profile } from "@/lib/profile";

export function AiTwinWidget({ profile }: { profile: Profile }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFull, setIsFull] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: string; content: string; id: string }>>([]);
  const [input, setInput] = useState("");
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener("open-ai-widget", handler as EventListener);
    return () => window.removeEventListener("open-ai-widget", handler as EventListener);
  }, []);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="glass flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white shadow-lg"
        >
          <Bot className="h-4 w-4 text-cyan-300" />
          AI Twin
        </button>
      )}

      {isOpen && (
        <div
          className={`glass-strong relative max-w-[92vw] rounded-3xl border border-white/15 bg-gradient-to-b from-slate-900/90 to-slate-950/95 shadow-2xl ${
            isFull ? "h-[70vh] w-[420px] sm:w-[520px]" : "w-[360px]"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-slate-300">
              <Bot className="h-4 w-4 text-cyan-300" /> AI Twin
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-white/10 p-2 hover:border-white/30"
                aria-label="Minimize chat"
              >
                <Minimize2 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsFull((open) => !open)}
                className="rounded-full border border-white/10 p-2 hover:border-white/30"
                aria-label="Toggle full-screen"
              >
                {isFull ? <Minimize2 className="h-4 w-4" /> : <Expand className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <div className="divider" />

          <div
            ref={messagesRef}
            className={`overflow-y-auto px-4 py-3 space-y-3 text-sm text-slate-100 ${
              isFull ? "max-h-[52vh]" : "max-h-[360px]"
            }`}
          >
            {messages.length === 0 && (
              <div className="text-slate-400">
                Ask anything a recruiter would: &quot;Does this engineer have RAG experience?&quot;, &quot;Explain the fine-tuning pipeline&quot;, &quot;What tools are in production?&quot;
              </div>
            )}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${message.role === "user" ? "bg-cyan-300 text-slate-900" : "bg-white/10 text-white"}`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (input.trim()) {
                setMessages([...messages, { role: "user", content: input, id: Date.now().toString() }]);
                setInput("");
              }
            }}
            className="flex items-center gap-2 px-4 py-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Achraf's experience"
              className="h-11 flex-1 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
            />
            <button
              type="submit"
              disabled={input.trim().length === 0}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300 text-slate-900 shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
