"use client";

import { Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-black py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/jnpianist/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-zinc-600 transition-colors hover:text-white"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCW__wlOO7iwwM2lGz8J8ywQ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-zinc-600 transition-colors hover:text-white"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href="https://www.tiktok.com/@jnpianist"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-zinc-600 transition-colors hover:text-white"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>

          {/* Email */}
          <a
            href="mailto:juri@jnpianist.com"
            className="text-sm text-zinc-500 transition-colors hover:text-white"
          >
            juri@jnpianist.com
          </a>

          {/* Copyright */}
          <p className="text-sm text-zinc-700">
            © {new Date().getFullYear()} Juri Nardelli. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
