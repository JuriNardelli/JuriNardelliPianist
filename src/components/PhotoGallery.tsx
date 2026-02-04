"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  { src: "/bio/photo-stage-standing.jpg", alt: "On stage", caption: "The Stage", position: "object-top" },
  { src: "/bio/photo-front-piano.jpg", alt: "At the piano", caption: "Focus", position: "object-top" },
  { src: "/bio/photo-orbetello.jpg", alt: "Concert in Orbetello", caption: "Orbetello", position: "object-center" },
  { src: "/bio/photo-side-profile.jpg", alt: "Side profile playing", caption: "Performance", position: "object-center" },
  { src: "/bio/photo-headshot.jpg", alt: "Headshot", caption: "Portrait", position: "object-top" },
  { src: "/bio/photo-beige-suit.jpg", alt: "Playing in beige suit", caption: "In Concert", position: "object-center" },
  { src: "/bio/photo-steinway.jpg", alt: "At the Steinway", caption: "Studio", position: "object-center" },
  { src: "/bio/photo-violin-duo.jpg", alt: "With violinist", caption: "Chamber Music", position: "object-top" },
  { src: "/bio/photo-concert-modern.jpg", alt: "Modern concert hall", caption: "Recital", position: "object-top" },
  { src: "/bio/photo-teaching.jpg", alt: "Teaching session", caption: "Teaching", position: "object-top" },
  { src: "/bio/photo-studio.jpg", alt: "Studio portrait", caption: "Studio", position: "object-top" },
  { src: "/bio/photo-forest-piano.jpg", alt: "Natural light", caption: "Light", position: "object-top" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function PhotoGallery() {
  return (
    <section className="bg-black py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-light tracking-[0.3em] uppercase text-zinc-500">
            Gallery
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Moments
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
        </motion.div>

        {/* Masonry-style Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6"
        >
          {/* Row 1 */}
          <motion.div variants={itemVariants} className="group relative col-span-2 row-span-2 aspect-square overflow-hidden rounded-2xl md:aspect-auto md:h-full">
            <Image src={photos[0].src} alt={photos[0].alt} fill className={`object-cover transition-transform duration-700 group-hover:scale-105 ${photos[0].position}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm font-light tracking-widest text-white/90">{photos[0].caption}</p>
            </div>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </motion.div>

          <motion.div variants={itemVariants} className="group relative col-span-2 aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src={photos[1].src} alt={photos[1].alt} fill className={`object-cover transition-transform duration-700 group-hover:scale-105 ${photos[1].position}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-xs font-light tracking-widest text-white/90">{photos[1].caption}</p>
            </div>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </motion.div>

          <motion.div variants={itemVariants} className="group relative col-span-1 aspect-square overflow-hidden rounded-2xl">
            <Image src={photos[4].src} alt={photos[4].alt} fill className={`object-cover transition-transform duration-700 group-hover:scale-105 ${photos[4].position}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </motion.div>

          <motion.div variants={itemVariants} className="group relative col-span-1 aspect-square overflow-hidden rounded-2xl">
            <Image src={photos[7].src} alt={photos[7].alt} fill className={`object-cover transition-transform duration-700 group-hover:scale-105 ${photos[7].position}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </motion.div>

          {/* Row 2 */}
          <motion.div variants={itemVariants} className="group relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image src={photos[2].src} alt={photos[2].alt} fill className={`object-cover transition-transform duration-700 group-hover:scale-105 ${photos[2].position}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-xs font-light tracking-widest text-white/90">{photos[2].caption}</p>
            </div>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </motion.div>

          <motion.div variants={itemVariants} className="group relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image src={photos[5].src} alt={photos[5].alt} fill className={`object-cover transition-transform duration-700 group-hover:scale-105 ${photos[5].position}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-xs font-light tracking-widest text-white/90">{photos[5].caption}</p>
            </div>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </motion.div>

          {/* Row 3 */}
          <motion.div variants={itemVariants} className="group relative col-span-1 aspect-square overflow-hidden rounded-2xl">
            <Image src={photos[10].src} alt={photos[10].alt} fill className={`object-cover transition-transform duration-700 group-hover:scale-105 ${photos[10].position}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </motion.div>

          <motion.div variants={itemVariants} className="group relative col-span-1 aspect-square overflow-hidden rounded-2xl">
            <Image src={photos[8].src} alt={photos[8].alt} fill className={`object-cover transition-transform duration-700 group-hover:scale-105 ${photos[8].position}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </motion.div>

          <motion.div variants={itemVariants} className="group relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image src={photos[6].src} alt={photos[6].alt} fill className={`object-cover transition-transform duration-700 group-hover:scale-105 ${photos[6].position}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-xs font-light tracking-widest text-white/90">{photos[6].caption}</p>
            </div>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </motion.div>

          <motion.div variants={itemVariants} className="group relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image src={photos[11].src} alt={photos[11].alt} fill className={`object-cover transition-transform duration-700 group-hover:scale-105 ${photos[11].position}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-xs font-light tracking-widest text-white/90">{photos[11].caption}</p>
            </div>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </motion.div>

          {/* Row 4 */}
          <motion.div variants={itemVariants} className="group relative col-span-2 aspect-[4/3] overflow-hidden rounded-2xl md:col-span-3">
            <Image src={photos[3].src} alt={photos[3].alt} fill className={`object-cover transition-transform duration-700 group-hover:scale-105 ${photos[3].position}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm font-light tracking-widest text-white/90">{photos[3].caption}</p>
            </div>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </motion.div>

          <motion.div variants={itemVariants} className="group relative col-span-2 aspect-[4/3] overflow-hidden rounded-2xl md:col-span-3">
            <Image src={photos[9].src} alt={photos[9].alt} fill className={`object-cover transition-transform duration-700 group-hover:scale-105 ${photos[9].position}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm font-light tracking-widest text-white/90">{photos[9].caption}</p>
            </div>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
