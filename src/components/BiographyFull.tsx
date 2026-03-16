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
    text: "I touched the piano for the first time as a child. What started as curiosity quickly transformed into obsession. At age 8, I met my first teacher — the mentor who shaped me into a musician. I owe him everything. His guidance is the reason I now dedicate myself to teaching: to give back what was so generously given to me.",
    image: "/bio/chapter-2.jpg",
    imagePosition: "object-top",
  },
  {
    id: 3,
    title: "The Conservatory Years",
    year: "2010 – 2016",
    text: "My path led me to Italy's finest institutions — the G. Verdi Conservatory in Milan, studying with E. Fedrigotti and E. Borri, and the ISSM in Siena under H. Moreno. These years were marked by growth and recognition: victories at Lamporecchio, S. Vincenzo, Città di Firenze, and Città di Grosseto, and the honour of the Torricelli Scholarship. It all culminated on 21 June 2016, when I stepped onto the stage of Teatro dei Rinnovati in Siena to perform Rachmaninov's Second Piano Concerto — my first time as soloist with orchestra.",
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
    text: "I've performed as soloist, chamber musician, and opera répétiteur at venues like Amiata Piano Festival, Muziekgebouw Eindhoven, Theater Vrijthof Maastricht, Concertzaal Tilburg, Auditorio Tenerife, Conservatorio Verdi Milan, Salone dei Cinquecento Florence, Teatro dei Rozzi Siena, Teatro dei Rinnovati Siena, Sala Rosa Siena, Festival Duino, Orbetello Piano Festival, Piano City Milan, and many others across Italy, France, Belgium, Germany, Spain, and England — collaborating with artists such as conductor Christopher Franklin and mezzo-soprano Siena Licht Miller.",
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

export function BiographyFull() {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Subtle gradient background — matching site style */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-black to-black" />

      {/* Subtle floating orbs */}
      <motion.div
        className="absolute top-[15%] left-[10%] w-80 h-80 rounded-full bg-white/[0.02] blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[50%] right-[5%] w-64 h-64 rounded-full bg-zinc-500/[0.02] blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[80%] left-[20%] w-72 h-72 rounded-full bg-white/[0.015] blur-3xl"
        animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="pt-32 pb-16 px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-sm font-light tracking-[0.3em] uppercase text-zinc-500">
              The Story
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Biography
            </h1>
            <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
          </motion.div>
        </div>

        {/* Chapters */}
        <div className="max-w-5xl mx-auto px-6 pb-12">
          {/* Timeline line — desktop only */}
          <div className="hidden md:block absolute left-1/2 top-[280px] bottom-48 w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent" />

          {chapters.map((chapter, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-14 mb-24 last:mb-0 ${
                  !isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="relative flex-shrink-0 group">
                  {/* Subtle glow behind image */}
                  <div className="absolute -inset-3 rounded-2xl bg-white/[0.03] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative h-64 w-64 sm:h-72 sm:w-72 lg:h-80 lg:w-80 overflow-hidden rounded-2xl border border-white/10 shadow-lg">
                    <Image
                      src={chapter.image}
                      alt={chapter.title}
                      fill
                      className={`object-cover ${chapter.imagePosition} transition-transform duration-700 group-hover:scale-105`}
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl" />
                  </div>
                </div>

                {/* Text */}
                <div
                  className={`flex-1 text-center ${
                    isEven ? "md:text-left" : "md:text-right"
                  }`}
                >
                  <span className="inline-block px-3 py-1 text-xs font-light tracking-widest uppercase rounded-full border border-white/10 bg-white/5 text-zinc-400">
                    {chapter.year}
                  </span>
                  <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                    {chapter.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
                    {chapter.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pb-24 text-center max-w-2xl mx-auto px-6"
        >
          <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-zinc-600 to-transparent mb-8" />
          <p className="text-lg font-light italic text-zinc-500">
            "Music is the universal language that speaks directly to the soul."
          </p>
          <p className="mt-4 text-sm text-zinc-600">— Juri Nardelli</p>
        </motion.div>
      </div>
    </section>
  );
}
