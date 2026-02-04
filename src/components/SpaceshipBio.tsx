"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useMemo, useEffect } from "react";
import { Rocket, ChevronDown } from "lucide-react";

const chapters = [
  {
    id: 1,
    title: "The Beginning",
    year: "Early Years",
    text: "Born in Italy, my journey with music began before I could even reach the piano keys. Growing up surrounded by classical recordings, the language of music became my mother tongue.",
    image: "/bio/chapter-1.jpg",
    imagePosition: "object-[center_60%]",
  },
  {
    id: 2,
    title: "First Keys",
    year: "Childhood",
    text: "I touched the piano for the first time as a child. What started as curiosity quickly transformed into obsession. Hours would pass unnoticed as I discovered the infinite world hidden within 88 keys.",
    image: "/bio/chapter-2.jpg",
    imagePosition: "object-top",
  },
  {
    id: 3,
    title: "The Conservatory Years",
    year: "2010 – 2016",
    text: "I trained at some of Italy's most prestigious institutions: the G. Verdi Conservatory in Milan and the ISSM Superior Musical Institute in Siena. In 2016, I was awarded a scholarship as the best student of the year and made my orchestral debut.",
    image: "/bio/debut.jpg",
    imagePosition: "object-[65%_center]",
  },
  {
    id: 4,
    title: "Master of Music",
    year: "2017 – 2019",
    text: "At the Conservatorium van Maastricht, I completed my MMus in Piano Performance under Igor Roma, winner of the Liszt Competition. I was recipient of the Vocalis Scholarship for collaborative pianists and graduated with full marks, honour and distinction — the jury noting it as one of the best final performances in recent years.",
    image: "/bio/chapter-5.jpg",
    imagePosition: "object-top",
  },
  {
    id: 5,
    title: "Opera & The Stage",
    year: "2002 – Present",
    text: "Award winner at competitions including S.Vincenzo, Lamporecchio, Città di Firenze, Vocalis, Città di Grosseto, and the Maastricht Music Award. I've performed as soloist, chamber musician, and opera répétiteur at venues like Amiata Piano Festival, Muziekgebouw Eindhoven, Theater Vrijthof Maastricht, Concertzaal Tilburg, Auditorio Tenerife, Conservatorio Verdi Milan, Salone dei Cinquecento Florence, Teatro dei Rozzi Siena, Teatro dei Rinnovati Siena, Sala Rosa Siena, Festival Duino, Orbetello Piano Festival, Piano City Milan, and many others across Italy, France, Belgium, Germany, Spain, and England — collaborating with artists such as conductor Christopher Franklin and mezzo-soprano Siena Licht Miller.",
    image: "/bio/chapter-4.jpg",
    imagePosition: "object-[center_30%]",
  },
  {
    id: 6,
    title: "Educator & Innovator",
    year: "2020 – Present",
    text: "Since 2020, I've run an online piano academy, delivering over 4,000 classes to students worldwide. I'm a pioneer of online teaching, developing a method that brings conservatory-level instruction to adult learners through technology.",
    image: "/bio/chapter-6.jpg",
    imagePosition: "object-[left_35%]",
  },
];

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

export function SpaceshipBio() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [isFlying, setIsFlying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect mobile for performance optimization
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fewer stars on mobile for better performance
  const stars = useMemo(() => generateStars(isMobile ? 30 : 80), [isMobile]);

  const navigateToChapter = (index: number) => {
    if (isFlying || index === activeChapter) return;
    setIsFlying(true);

    setTimeout(() => {
      setActiveChapter(index);
      setIsFlying(false);
    }, 800);
  };

  const nextChapter = () => {
    if (activeChapter < chapters.length - 1) {
      navigateToChapter(activeChapter + 1);
    }
  };

  const currentChapter = chapters[activeChapter];

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black overflow-hidden">
      {/* Space background */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#050510] via-[#0a0a1a] to-black" />

      {/* Starfield */}
      <div className="fixed inset-0 pointer-events-none">
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
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Nebula - static on mobile for performance */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-to-r from-purple-900/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-l from-cyan-900/15 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center px-6 py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <p className="text-sm font-light tracking-[0.3em] uppercase text-cyan-400/80">
            Journey Through Time
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            The Story
          </h1>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        </motion.div>

        {/* Spaceship navigation - isolated container */}
        <div className="w-full max-w-4xl mb-16 px-8">
          <div className="relative h-16 flex items-center">
            {/* Connection line */}
            <div className="absolute top-1/2 left-4 right-4 h-px bg-zinc-800" />

            {/* Progress line */}
            <motion.div
              className="absolute top-1/2 left-4 h-px bg-gradient-to-r from-cyan-500 to-purple-500"
              initial={{ width: "0%" }}
              animate={{ width: `calc(${(activeChapter / (chapters.length - 1)) * 100}% * (100% - 32px) / 100%)` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ width: `${(activeChapter / (chapters.length - 1)) * (100 - 3)}%` }}
            />

            {/* Planet/chapter indicators */}
            <div className="relative w-full flex justify-between items-center px-4">
              {chapters.map((chapter, index) => (
                <motion.button
                  key={chapter.id}
                  onClick={() => navigateToChapter(index)}
                  className={`relative group z-10 ${index === activeChapter ? 'scale-110' : ''}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Planet */}
                  <div
                    className={`w-4 h-4 sm:w-6 sm:h-6 rounded-full transition-all duration-500 ${
                      index === activeChapter
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_20px_rgba(34,211,238,0.5)]'
                        : index < activeChapter
                        ? 'bg-zinc-600'
                        : 'bg-zinc-800 border border-zinc-700'
                    }`}
                  />
                  {/* Planet ring for active */}
                  {index === activeChapter && (
                    <motion.div
                      className="absolute -inset-2 rounded-full border border-cyan-400/30"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                  {/* Label on hover */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    <span className="text-xs text-zinc-400">{chapter.year}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Spaceship */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 z-20 pointer-events-none"
              animate={{
                left: `calc(${(activeChapter / (chapters.length - 1)) * 100}% * (100% - 32px) / 100% + 16px)`,
                rotate: isFlying ? [0, -10, 10, 0] : 0,
              }}
              transition={{
                left: { duration: 0.8, ease: "easeInOut" },
                rotate: { duration: 0.4, repeat: isFlying ? 2 : 0 },
              }}
              style={{
                left: `calc(${(activeChapter / (chapters.length - 1)) * (100 - 3)}% + 16px)`,
                marginLeft: "-12px"
              }}
            >
              <motion.div
                animate={isFlying ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.4 }}
              >
                <Rocket className="w-6 h-6 text-cyan-400 rotate-90 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              </motion.div>
              {/* Engine glow */}
              {isFlying && (
                <motion.div
                  className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-2 bg-gradient-to-l from-cyan-400 via-orange-400 to-transparent rounded-full blur-sm"
                  animate={{ opacity: [0.5, 1, 0.5], scaleX: [1, 1.5, 1] }}
                  transition={{ duration: 0.2, repeat: 4 }}
                />
              )}
            </motion.div>
          </div>
        </div>

        {/* Chapter content - separate container */}
        <div className="w-full max-w-5xl">
          {/* Chapter content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChapter}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
            >
              {/* Photo */}
              <div className="relative flex-shrink-0">
                {/* Static glow on mobile, animated on desktop */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-amber-500/20 blur-2xl md:hidden" />
                {!isMobile && (
                  <motion.div
                    className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-amber-500/20 blur-2xl hidden md:block"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                )}
                <div className="relative h-56 w-56 sm:h-64 sm:w-64 lg:h-80 lg:w-80 overflow-hidden rounded-full border-2 border-cyan-500/30">
                  <Image
                    src={currentChapter.image}
                    alt={currentChapter.title}
                    fill
                    className={`object-cover ${currentChapter.imagePosition}`}
                  />
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
                </div>
                {/* Orbital rings - desktop only */}
                {!isMobile && (
                  <>
                    <motion.div
                      className="absolute -inset-6 rounded-full border border-dashed border-cyan-500/20 hidden md:block"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                      className="absolute -inset-10 rounded-full border border-dotted border-purple-500/10 hidden md:block"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    />
                  </>
                )}
              </div>

              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-4 py-1.5 text-xs font-light tracking-widest text-cyan-400 border border-cyan-500/30 rounded-full bg-cyan-500/5"
                >
                  {currentChapter.year}
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 text-2xl font-semibold text-white sm:text-3xl lg:text-4xl"
                >
                  {currentChapter.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 text-lg leading-relaxed text-zinc-400"
                >
                  {currentChapter.text}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Next button */}
          {activeChapter < chapters.length - 1 && (
            <motion.button
              onClick={nextChapter}
              className="mt-16 mx-auto flex flex-col items-center gap-2 text-zinc-500 hover:text-cyan-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm tracking-widest uppercase">Next Chapter</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </motion.button>
          )}
        </div>

        {/* Closing quote */}
        {activeChapter === chapters.length - 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-20 text-center max-w-2xl"
          >
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-8" />
            <p className="text-lg font-light italic text-zinc-500">
              "Music is the universal language that speaks directly to the soul."
            </p>
            <p className="mt-4 text-sm text-zinc-600">— Juri Nardelli</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
