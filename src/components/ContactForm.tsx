"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/xkozdkbq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
          <CheckCircle className="h-8 w-8 text-green-500" />
        </div>
        <h3 className="mt-6 text-xl font-semibold text-white">Message Sent!</h3>
        <p className="mt-3 text-zinc-400">
          Thank you for reaching out. I'll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-400">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-600 transition-colors focus:border-zinc-500/50 focus:outline-none focus:ring-1 focus:ring-zinc-500/50"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-400">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-600 transition-colors focus:border-zinc-500/50 focus:outline-none focus:ring-1 focus:ring-zinc-500/50"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-zinc-400">
          Subject
        </label>
        <select
          id="subject"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-white transition-colors focus:border-zinc-500/50 focus:outline-none focus:ring-1 focus:ring-zinc-500/50"
        >
          <option value="" className="bg-zinc-900">Select a subject</option>
          <option value="Performance Inquiry" className="bg-zinc-900">Performance Inquiry</option>
          <option value="Piano Lessons" className="bg-zinc-900">Piano Lessons</option>
          <option value="Collaboration" className="bg-zinc-900">Collaboration</option>
          <option value="Other" className="bg-zinc-900">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-400">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="mt-2 w-full resize-none rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-600 transition-colors focus:border-zinc-500/50 focus:outline-none focus:ring-1 focus:ring-zinc-500/50"
          placeholder="Your message..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-zinc-500 to-zinc-400 px-8 py-4 text-base font-semibold text-black transition-all duration-300 hover:from-zinc-300 hover:to-zinc-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
}
