"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export function BiographyStory() {
  return (
    <section className="min-h-screen bg-black pb-32 pt-32 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 60, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 blur-3xl"
        />
      </div>

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Header */}
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-light tracking-[0.3em] uppercase text-zinc-500"
        >
          Biography
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"
        >
          The Story
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-zinc-600 to-transparent"
        />
      </div>

      {/* Chapters with Timeline */}
      <div className="mx-auto mt-24 max-w-6xl px-6 relative">
        {/* Vertical timeline line - centered on desktop, left on mobile */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
        {/* Glowing timeline accent */}
        <motion.div
          className="absolute left-6 md:left-1/2 top-0 w-px h-32 bg-gradient-to-b from-cyan-500/50 to-transparent blur-sm"
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {chapters.map((chapter, index) => (
          <motion.div
            key={chapter.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            className={`relative flex flex-col items-center gap-10 py-20 pl-12 md:pl-0 md:flex-row md:gap-20 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline dot - left on mobile, centered on desktop */}
            <div className="absolute left-6 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="relative"
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-3 w-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 ring-4 ring-black" />
                <div className="absolute inset-0 h-3 w-3 rounded-full bg-cyan-500/50 blur-md" />
              </motion.div>
            </div>

            {/* Circular Photo */}
            <div className="relative flex-shrink-0 group">
              {/* Animated glow ring on hover */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500/0 via-cyan-500/0 to-amber-500/0 blur-xl transition-all duration-500 group-hover:from-purple-500/20 group-hover:via-cyan-500/20 group-hover:to-amber-500/20" />
              <div className="relative h-64 w-64 overflow-hidden rounded-full border border-zinc-800 bg-zinc-900 sm:h-72 sm:w-72 lg:h-80 lg:w-80 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={chapter.image}
                  alt={chapter.title}
                  fill
                  className={`object-cover ${chapter.imagePosition} transition-transform duration-700 group-hover:scale-110`}
                />
                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-zinc-800/50 transition-all duration-500 group-hover:border-zinc-700/50 group-hover:-inset-4" />
            </div>

            {/* Text Content */}
            <div className={`flex-1 ${index % 2 === 1 ? "md:text-right" : ""}`}>
              <span className="inline-block px-3 py-1 text-xs font-light tracking-widest text-zinc-500 border border-zinc-800 rounded-full">
                {chapter.year}
              </span>
              <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                {chapter.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-zinc-400">
                {chapter.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Closing */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
        className="mx-auto mt-16 max-w-2xl px-6 text-center"
      >
        <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
        <p className="mt-12 text-lg font-light italic text-zinc-500">
          "Music is the universal language that speaks directly to the soul."
        </p>
        <p className="mt-4 text-sm text-zinc-600">— Juri Nardelli</p>
      </motion.div>
    </section>
  );
}
