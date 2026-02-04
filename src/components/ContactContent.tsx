"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { ContactForm } from "./ContactForm";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function ContactContent() {
  return (
    <div className="relative min-h-screen pt-32 pb-24">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-black to-black" />

      <div className="relative z-10 mx-auto max-w-2xl px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center"
        >
          <p className="text-sm font-light tracking-[0.3em] uppercase text-zinc-500">
            Get in Touch
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Contact
          </h1>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
          <p className="mx-auto mt-6 max-w-md text-lg text-zinc-400">
            Have a question or want to work together? Send me a message and I'll get back to you soon.
          </p>

          {/* Direct Email */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex items-center justify-center gap-2 text-zinc-400"
          >
            <Mail className="h-4 w-4" />
            <span>Or email directly:</span>
            <a
              href="mailto:juri@jnpianist.com"
              className="text-amber-500 hover:text-amber-400 transition-colors"
            >
              juri@jnpianist.com
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12"
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
}
