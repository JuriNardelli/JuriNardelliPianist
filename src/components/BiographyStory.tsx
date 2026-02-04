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
    year: "2018 – 2020",
    text: "At the Conservatorium van Maastricht, I completed my MMus in Piano Performance under the mentorship of Igor Roma, winner of the prestigious Liszt Competition. This period marked a transformative deepening of my musical identity.",
    image: "/bio/chapter-5.jpg",
    imagePosition: "object-top",
  },
  {
    id: 5,
    title: "Opera & The Stage",
    year: "2017 – 2019",
    text: "I worked as a professional opera répétiteur, collaborating with singers and gaining awards and recognitions. During this period, I performed solo recitals in concert halls and venues across Europe, refining my artistry through every performance.",
    image: "/bio/chapter-4.jpg",
    imagePosition: "object-[center_30%]",
  },
  {
    id: 6,
    title: "Educator & Innovator",
    year: "Present",
    text: "Today, I balance performance with education, believing that music's greatest gift is its ability to be shared. Through teaching and technology, I'm building bridges between classical tradition and modern accessibility.",
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
    <section className="min-h-screen bg-black pb-32 pt-32">
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
        {/* Vertical timeline line - hidden on mobile */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent hidden md:block" />

        {chapters.map((chapter, index) => (
          <motion.div
            key={chapter.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            className={`relative flex flex-col items-center gap-10 py-20 md:flex-row md:gap-20 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline dot - hidden on mobile */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
              <div className="h-3 w-3 rounded-full bg-zinc-700 ring-4 ring-black" />
            </div>

            {/* Circular Photo */}
            <div className="relative flex-shrink-0">
              <div className="relative h-64 w-64 overflow-hidden rounded-full border border-zinc-800 bg-zinc-900 sm:h-72 sm:w-72 lg:h-80 lg:w-80 transition-transform duration-500 hover:scale-105">
                <Image
                  src={chapter.image}
                  alt={chapter.title}
                  fill
                  className={`object-cover ${chapter.imagePosition}`}
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-zinc-800/50" />
              {/* Glow effect on hover */}
              <div className="absolute -inset-6 rounded-full bg-white/5 blur-2xl opacity-0 transition-opacity duration-500 hover:opacity-100 pointer-events-none" />
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
