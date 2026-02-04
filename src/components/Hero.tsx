"use client";

import { motion } from "framer-motion";
import { ArrowRight, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/3 h-72 w-72 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 blur-3xl"
        />
      </div>

      {/* Mouse-following glow */}
      <div
        className="pointer-events-none absolute h-96 w-96 rounded-full bg-gradient-to-r from-white/5 to-transparent blur-3xl transition-all duration-300 ease-out"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Noise texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/0 via-black/50 to-black" />

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

            {/* Main title with shimmer effect */}
            <h1 className="relative text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="relative inline-block">
                <span className="bg-gradient-to-b from-white via-white to-zinc-500 bg-clip-text text-transparent">
                  Juri Nardelli
                </span>
                {/* Shimmer overlay */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["200% center", "-200% center"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 5,
                    ease: "easeInOut",
                  }}
                  style={{
                    backgroundSize: "200% 100%",
                  }}
                >
                  Juri Nardelli
                </motion.span>
              </span>
            </h1>
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
              {/* Animated glow */}
              <motion.div
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-amber-500/20 blur-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative h-56 w-56 overflow-hidden rounded-full border border-zinc-700/50 sm:h-64 sm:w-64">
                <Image
                  src="/portrait.jpg"
                  alt="Juri Nardelli"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
              </div>
              {/* Decorative rings */}
              <motion.div
                className="absolute -inset-3 rounded-full border border-zinc-800/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
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
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-zinc-700 bg-zinc-900/80 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-800/80"
            >
              <span className="relative z-10">Read Biography</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            </a>
            <a
              href="/academy"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,255,255,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Academy
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-200/50 via-white to-cyan-200/50"
                animate={{
                  backgroundPosition: ["0% center", "200% center"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ backgroundSize: "200% 100%" }}
              />
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
            {/* Animated glow ring */}
            <motion.div
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-amber-500/20 blur-xl"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <div className="relative h-[28rem] w-[28rem] overflow-hidden rounded-full border border-zinc-700/50 xl:h-[32rem] xl:w-[32rem]">
              <Image
                src="/portrait.jpg"
                alt="Juri Nardelli"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
            </div>
            {/* Outer decorative rings */}
            <motion.div
              className="absolute -inset-4 rounded-full border border-zinc-800/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -inset-8 rounded-full border border-dashed border-zinc-800/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
