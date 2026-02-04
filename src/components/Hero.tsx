"use client";

import { motion } from "framer-motion";
import { ArrowRight, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";

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

// Generate stars for the galaxy
function generateStars(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));
}

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const stars = useMemo(() => generateStars(150), []);
  const shootingStars = useMemo(() => generateStars(5), []);

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
      {/* Deep space background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-black to-black" />

      {/* Starfield */}
      <div className="pointer-events-none absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {shootingStars.map((star, i) => (
          <motion.div
            key={`shooting-${star.id}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-white to-zinc-400"
            style={{
              width: "100px",
              top: `${10 + i * 15}%`,
              left: "-100px",
            }}
            animate={{
              x: ["0vw", "120vw"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 4 + star.delay * 2,
              repeatDelay: 8,
            }}
          />
        ))}
      </div>

      {/* Subtle moving nebula - monochrome */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -left-1/4 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-white/[0.03] via-zinc-500/[0.02] to-transparent blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
          transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/4 -right-1/4 h-[900px] w-[900px] rounded-full bg-gradient-to-tl from-white/[0.02] via-zinc-600/[0.015] to-transparent blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-zinc-400/[0.02] to-transparent blur-3xl"
        />
      </div>

      {/* Floating particles - subtle movement */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-white/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Mouse-following subtle glow */}
      <motion.div
        className="pointer-events-none absolute h-[400px] w-[400px] rounded-full hidden lg:block"
        animate={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="h-full w-full rounded-full bg-white/[0.03] blur-3xl" />
      </motion.div>

      {/* Bright stars - white only */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute top-[12%] right-[30%] h-1.5 w-1.5 rounded-full bg-white"
          animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-[45%] left-[8%] h-1 w-1 rounded-full bg-white"
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-[30%] right-[15%] h-1 w-1 rounded-full bg-white"
          animate={{ scale: [1, 1.6, 1], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Subtle diagonal light band */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-[5%] -left-[20%] w-[150%] h-[50%] -rotate-[20deg] origin-center"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent blur-3xl" />
        </motion.div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.01]"
        style={{
          backgroundImage: `linear-gradient(rgba(100,200,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(100,200,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "120px 120px",
        }}
      />

      {/* Vignette - softer */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_black_80%)]" />

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
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-white/15 via-zinc-400/10 to-white/15 blur-lg"
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
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-white/15 via-zinc-400/10 to-white/15 blur-xl"
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
