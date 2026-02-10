"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Biography", href: "/biography" },
  { label: "Academy", href: "/academy" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-4 left-4 right-4 z-50"
      >
        <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 backdrop-blur-xl">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-white transition-opacity hover:opacity-80"
          >
            Juri Nardelli <span className="font-normal text-zinc-500">— Pianist</span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 md:hidden p-2"
            aria-label="Menu"
          >
            <span
              className={`h-0.5 w-5 bg-white/80 rounded transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white/80 rounded transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white/80 rounded transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu overlay - premium feel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-2xl md:hidden"
          >
            {/* Subtle background glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-white/[0.02] blur-3xl" />

            <nav className="flex h-full flex-col items-center justify-center gap-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.08, type: "spring", stiffness: 200 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group relative block text-3xl font-light tracking-wide text-white/80 transition-all duration-300 hover:text-white"
                  >
                    <span className="relative z-10">{item.label}</span>
                    {/* Hover underline glow */}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:w-full transition-all duration-300"
                    />
                  </Link>
                </motion.div>
              ))}

              {/* Social hint at bottom */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-12 text-xs text-zinc-600 tracking-widest"
              >
                JURI NARDELLI
              </motion.p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
