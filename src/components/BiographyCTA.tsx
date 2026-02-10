"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function BiographyCTA() {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Subtle glow background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-2xl px-6 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6"
        >
          <Sparkles className="w-6 h-6 text-cyan-400" />
        </motion.div>

        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Ready to Start Your Journey?
        </h2>
        <p className="mt-4 text-lg text-zinc-400">
          Learn from someone who's been there. Join the Academy and transform your playing.
        </p>

        <motion.a
          href="/academy"
          className="mt-8 group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-8 py-4 text-sm font-semibold text-black overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.3)]"
          whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(34,211,238,0.5)" }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Animated shine */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
            animate={{ x: ["-200%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
          />
          <span className="relative z-10">Explore the Academy</span>
          <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </motion.a>
      </motion.div>
    </section>
  );
}
