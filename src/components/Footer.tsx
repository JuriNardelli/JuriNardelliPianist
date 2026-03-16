"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="flex flex-col items-center gap-10">

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-10">
            {[
              { label: "Home", href: "/" },
              { label: "Biography", href: "/biography" },
              { label: "Learn", href: "/learn" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="relative text-sm tracking-wide text-zinc-500 transition-all duration-300 hover:text-white"
                whileHover={{ y: -1 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-16 h-px bg-zinc-800" />

          {/* Social + Email row */}
          <div className="flex items-center gap-8">
            {[
              { icon: Instagram, href: "https://www.instagram.com/jnpianist/", label: "Instagram" },
              { icon: Youtube, href: "https://www.youtube.com/channel/UCW__wlOO7iwwM2lGz8J8ywQ", label: "YouTube" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-zinc-600 transition-all duration-300 hover:text-white"
                whileHover={{
                  scale: 1.15,
                  filter: "drop-shadow(0 0 6px rgba(255,255,255,0.4))"
                }}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
            <motion.a
              href="https://www.tiktok.com/@jnpianist"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-zinc-600 transition-all duration-300 hover:text-white"
              whileHover={{
                scale: 1.15,
                filter: "drop-shadow(0 0 6px rgba(255,255,255,0.4))"
              }}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://www.facebook.com/jnpianist/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-zinc-600 transition-all duration-300 hover:text-white"
              whileHover={{
                scale: 1.15,
                filter: "drop-shadow(0 0 6px rgba(255,255,255,0.4))"
              }}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </motion.a>

            <span className="text-zinc-800">|</span>

            <motion.a
              href="mailto:juri@jnpianist.com"
              className="flex items-center gap-2 text-sm text-zinc-600 transition-all duration-300 hover:text-white"
              whileHover={{ scale: 1.02 }}
            >
              <Mail className="h-4 w-4" />
              <span>juri@jnpianist.com</span>
            </motion.a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-zinc-700">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
