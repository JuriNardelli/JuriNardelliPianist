"use client";

import { motion } from "framer-motion";
import { useMemo, useEffect, useState } from "react";

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

interface SpaceBackgroundProps {
  variant?: "default" | "warm" | "cool";
  intensity?: "light" | "normal" | "intense";
}

export function SpaceBackground({ variant = "default", intensity = "normal" }: SpaceBackgroundProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const starCount = isMobile ? 40 : (intensity === "intense" ? 120 : intensity === "light" ? 60 : 80);
  const stars = useMemo(() => generateStars(starCount), [starCount]);

  const nebulaColors = {
    default: {
      primary: "from-purple-900/30 via-violet-900/20",
      secondary: "from-cyan-900/20 via-teal-900/15",
      accent: "from-amber-900/15 via-orange-900/10",
    },
    warm: {
      primary: "from-amber-900/30 via-orange-900/20",
      secondary: "from-rose-900/20 via-pink-900/15",
      accent: "from-purple-900/15 via-violet-900/10",
    },
    cool: {
      primary: "from-cyan-900/30 via-blue-900/20",
      secondary: "from-purple-900/20 via-indigo-900/15",
      accent: "from-teal-900/15 via-emerald-900/10",
    },
  };

  const colors = nebulaColors[variant];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#0a0a1a] to-black" />

      {/* Starfield */}
      <div className="absolute inset-0">
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
            animate={{ opacity: [0.2, 0.9, 0.2] }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Nebula clouds */}
      <div className="absolute inset-0">
        <div className={`absolute -top-1/4 -left-1/4 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-to-br ${colors.primary} to-transparent blur-3xl`} />
        <div className={`absolute top-1/3 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-l ${colors.secondary} to-transparent blur-3xl`} />
        <div className={`absolute -bottom-1/4 left-1/4 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-tr ${colors.accent} to-transparent blur-3xl`} />
      </div>

      {/* Distant galaxies */}
      {!isMobile && (
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-[15%] right-[20%] w-16 h-16"
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 via-transparent to-transparent blur-sm" />
            <div className="absolute inset-[30%] rounded-full bg-white/40 blur-[1px]" />
          </motion.div>
          <motion.div
            className="absolute bottom-[25%] left-[10%] w-10 h-10"
            animate={{ rotate: -360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/15 via-transparent to-transparent blur-sm" />
            <div className="absolute inset-[30%] rounded-full bg-white/30 blur-[1px]" />
          </motion.div>
        </div>
      )}

      {/* Bright stars */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-[20%] left-[15%] h-1.5 w-1.5 rounded-full bg-white"
          animate={{ scale: [1, 1.8, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-[60%] right-[20%] h-2 w-2 rounded-full bg-cyan-300"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-[30%] left-[40%] h-1 w-1 rounded-full bg-amber-300"
          animate={{ scale: [1, 2, 1], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
        />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_black_75%)]" />
    </div>
  );
}
