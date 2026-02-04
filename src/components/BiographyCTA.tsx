"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function BiographyCTA() {
  return (
    <section className="bg-black py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl px-6 text-center"
      >
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Ready to Start Your Journey?
        </h2>
        <p className="mt-4 text-lg text-zinc-400">
          Learn from someone who's been there. Join the Academy and transform your playing.
        </p>
        <a
          href="/academy"
          className="mt-8 group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:from-amber-400 hover:to-amber-500 hover:shadow-[0_0_40px_rgba(245,158,11,0.3)]"
        >
          Explore the Academy
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </section>
  );
}
