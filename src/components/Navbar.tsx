"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Biography", href: "/biography" },
  { label: "Academy", href: "/academy" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  return (
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
          Juri Nardelli
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
        <button className="flex flex-col gap-1 md:hidden" aria-label="Menu">
          <span className="h-0.5 w-5 bg-white/80 rounded" />
          <span className="h-0.5 w-5 bg-white/80 rounded" />
        </button>
      </nav>
    </motion.header>
  );
}
