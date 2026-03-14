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

const accentColors = [
  "from-cyan-400/20 via-blue-500/10",
  "from-amber-400/20 via-orange-500/10",
  "from-emerald-400/20 via-teal-500/10",
  "from-violet-400/20 via-purple-500/10",
  "from-rose-400/20 via-pink-500/10",
  "from-fuchsia-400/20 via-pink-500/10",
];

const borderColors = [
  "border-cyan-400/30",
  "border-amber-400/30",
  "border-emerald-400/30",
  "border-violet-400/30",
  "border-rose-400/30",
  "border-fuchsia-400/30",
];

const yearColors = [
  { text: "text-cyan-400", bg: "bg-cyan-400/10", border: "border-cyan-400/30" },
  { text: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/30" },
  { text: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/30" },
  { text: "text-violet-400", bg: "bg-violet-400/10", border: "border-violet-400/30" },
  { text: "text-rose-400", bg: "bg-rose-400/10", border: "border-rose-400/30" },
  { text: "text-fuchsia-400", bg: "bg-fuchsia-400/10", border: "border-fuchsia-400/30" },
];

export function BiographyFull() {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Space background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#0a0a1a] to-black" />

      {/* Nebula accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] -left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-900/15 via-transparent to-transparent blur-3xl" />
        <div className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-l from-cyan-900/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute top-[70%] -left-[5%] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-violet-900/10 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="pt-32 pb-16 px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-sm font-light tracking-[0.3em] uppercase text-zinc-400">
              Journey Through Time
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              The Story
            </h1>
            <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-rose-500 via-cyan-500 to-fuchsia-500" />
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
                  {/* Glow behind image */}
                  <div
                    className={`absolute -inset-3 rounded-2xl bg-gradient-to-br ${accentColors[index]} to-transparent blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700`}
                  />
                  <div
                    className={`relative h-64 w-64 sm:h-72 sm:w-72 lg:h-80 lg:w-80 overflow-hidden rounded-2xl border ${borderColors[index]} shadow-lg`}
                  >
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
                  <span
                    className={`inline-block px-3 py-1 text-xs font-light tracking-widest uppercase rounded-full border ${yearColors[index].text} ${yearColors[index].bg} ${yearColors[index].border}`}
                  >
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
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent mb-8" />
          <p className="text-lg font-light italic text-zinc-500">
            "Music is the universal language that speaks directly to the soul."
          </p>
          <p className="mt-4 text-sm text-zinc-600">— Juri Nardelli</p>
        </motion.div>
      </div>
    </section>
  );
}
