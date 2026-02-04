"use client";

import { motion } from "framer-motion";
import { ArrowRight, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: "easeOut" as const,
    },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Subtle ambient gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black" />

      {/* Social icons - top left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 lg:flex"
      >
        <a
          href="https://www.instagram.com/jnpianist/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-zinc-600 transition-colors hover:text-white"
        >
          <Instagram className="h-5 w-5" strokeWidth={1.5} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCW__wlOO7iwwM2lGz8J8ywQ"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="text-zinc-600 transition-colors hover:text-white"
        >
          <Youtube className="h-5 w-5" strokeWidth={1.5} />
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
      </motion.div>

      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-8 py-24 lg:grid-cols-2 lg:gap-16 lg:px-16">
        {/* Left: Content */}
        <div className="relative z-10 flex flex-col order-2 lg:order-1">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="relative"
          >
            {/* Glow layer */}
            <div className="absolute inset-0 text-5xl font-bold leading-[1.1] tracking-tight text-white/30 blur-2xl sm:text-6xl lg:text-7xl">
              Juri Nardelli
            </div>

            {/* Main title */}
            <h1 className="relative text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-b from-white via-white to-zinc-500 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(255,255,255,0.25)]">
                Juri Nardelli
              </span>
            </h1>

            {/* Reflection */}
            <div
              className="mt-1 text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
              style={{ transform: 'scaleY(-1)' }}
            >
              <span className="bg-gradient-to-b from-transparent via-zinc-800/30 to-zinc-600/10 bg-clip-text text-transparent">
                Juri Nardelli
              </span>
            </div>
          </motion.div>

          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="mt-4 text-base font-light tracking-widest text-zinc-500 sm:text-lg"
          >
            Concert Pianist · Educator · Master in Piano Performance MMus
          </motion.p>

          {/* Mobile Image - shown only on mobile, between text and CTAs */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="relative mt-8 flex items-center justify-center lg:hidden"
          >
            <div className="relative">
              <div className="relative h-56 w-56 overflow-hidden rounded-full border border-zinc-800 sm:h-64 sm:w-64">
                <Image
                  src="/portrait.jpg"
                  alt="Juri Nardelli"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-zinc-800/50" />
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:mt-10 lg:justify-start"
          >
            <a
              href="/biography"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-7 py-3.5 text-sm font-medium text-white transition-all hover:border-zinc-600 hover:bg-zinc-800"
            >
              Read Biography
            </a>
            <a
              href="/academy"
              className="group relative inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              Explore Academy
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

        </div>

        {/* Right: Image - desktop only */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="relative hidden items-center justify-center lg:flex order-1 lg:order-2"
        >
          <div className="relative">
            <div className="relative h-[28rem] w-[28rem] overflow-hidden rounded-full border border-zinc-800 xl:h-[32rem] xl:w-[32rem]">
              <Image
                src="/portrait.jpg"
                alt="Juri Nardelli"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-full border border-zinc-800/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
