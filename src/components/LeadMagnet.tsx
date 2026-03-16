"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, Check, Loader2 } from "lucide-react";
import { useState, FormEvent } from "react";

const secrets = [
  "The 20-minute rule that beats 2 hours of unfocused practice",
  "A 3-pass method used by conservatory students worldwide",
  "The mental practice technique that accelerates memorization",
  "How to know when a piece is truly ready to perform",
];

export function LeadMagnet() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !email.trim()) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: firstName.trim(), email: email.trim() }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setDownloadUrl(data.downloadUrl || "/downloads/4-practice-secrets.pdf");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative z-10 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-zinc-900/80 via-zinc-900/60 to-amber-950/20"
        >
          {/* Background glow */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />

          <div className="relative grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:gap-12">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-amber-400">
                <FileText className="h-3.5 w-3.5" />
                FREE PDF GUIDE
              </div>

              <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl leading-tight">
                4 Practice Secrets
                <br />
                <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                  From a Concert Pianist
                </span>
              </h2>

              <p className="mt-4 text-zinc-400 text-sm leading-relaxed">
                The techniques I teach my private students — now yours for free.
                Transform how you practice in one afternoon.
              </p>

              <ul className="mt-6 space-y-3">
                {secrets.map((secret, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-sm text-zinc-300"
                  >
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20">
                      <Check className="h-3 w-3 text-amber-400" />
                    </div>
                    {secret}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right: Form */}
            <div className="flex items-center">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full text-center"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                      <Check className="h-8 w-8 text-green-400" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-white">
                      Check your inbox!
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400">
                      The guide is on its way. You can also download it
                      directly:
                    </p>
                    <a
                      href={downloadUrl}
                      download
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-8 py-3 text-sm font-bold text-black hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] transition-shadow"
                    >
                      <Download className="h-4 w-4" />
                      Download PDF Now
                    </a>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="w-full space-y-4"
                  >
                    <div>
                      <label
                        htmlFor="lead-first-name"
                        className="block text-xs font-medium text-zinc-400 mb-1.5"
                      >
                        First name
                      </label>
                      <input
                        id="lead-first-name"
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Your first name"
                        className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lead-email"
                        className="block text-xs font-medium text-zinc-400 mb-1.5"
                      >
                        Email
                      </label>
                      <input
                        id="lead-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full group relative overflow-hidden rounded-lg bg-gradient-to-r from-amber-500 to-amber-400 px-6 py-3.5 text-sm font-bold text-black shadow-[0_0_30px_rgba(251,191,36,0.3)] disabled:opacity-70"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 40px rgba(251,191,36,0.5)",
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12"
                        animate={{ x: ["-200%", "200%"] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {status === "loading" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Download className="h-4 w-4" />
                            Send Me the Free Guide
                          </>
                        )}
                      </span>
                    </motion.button>

                    {status === "error" && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center text-xs text-red-400"
                      >
                        Something went wrong. Please try again.
                      </motion.p>
                    )}

                    <p className="text-center text-[11px] text-zinc-600">
                      No spam, ever. Unsubscribe anytime.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
