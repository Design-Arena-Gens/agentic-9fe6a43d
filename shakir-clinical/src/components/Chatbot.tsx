"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Marhaba! I\'m the Shakir Lab assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const toggle = () => setOpen((prev) => !prev);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.content }),
      });

      const data = (await response.json()) as { reply: string };
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I\'m sorry, I couldn\'t connect right now. Please try again or reach us via phone.",
        },
      ]);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="mb-4 w-80 rounded-3xl border border-brand-900/10 bg-white shadow-xl shadow-teal-500/20">
          <div className="flex items-center justify-between rounded-t-3xl bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-3 text-white">
            <div>
              <p className="text-sm font-semibold">Shakir Lab Assistant</p>
              <p className="text-[11px] text-teal-100">Usually replies instantly</p>
            </div>
            <button type="button" onClick={toggle} className="rounded-full p-1 hover:bg-white/20">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div ref={scrollRef} className="flex max-h-80 flex-col gap-3 overflow-y-auto px-4 py-4 text-sm">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`rounded-2xl px-4 py-3 leading-relaxed shadow-sm ${
                    message.role === "assistant"
                      ? "bg-brand-50 text-brand-800"
                      : "bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {loading ? (
              <div className="text-xs text-brand-500">The assistant is typing…</div>
            ) : null}
          </div>
          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-brand-900/10 px-4 py-3">
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about services, timings, more"
              className="flex-1 rounded-full border border-brand-900/10 px-3 py-2 text-xs text-brand-900 outline-none focus:border-teal-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 p-2 text-white transition hover:opacity-90 disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      ) : null}
      <button
        type="button"
        onClick={toggle}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/40"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}
