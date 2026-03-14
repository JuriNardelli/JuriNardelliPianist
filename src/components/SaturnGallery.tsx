"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { X } from "lucide-react";

const photos = [
  { src: "/bio/photo-stage-standing.jpg", alt: "On stage", caption: "The Stage" },
  { src: "/bio/photo-front-piano.jpg", alt: "At the piano", caption: "Focus" },
  { src: "/bio/photo-orbetello.jpg", alt: "Concert in Orbetello", caption: "Orbetello" },
  { src: "/bio/photo-side-profile.jpg", alt: "Side profile playing", caption: "Performance" },
  { src: "/bio/photo-headshot.jpg", alt: "Headshot", caption: "Portrait" },
  { src: "/bio/photo-beige-suit.jpg", alt: "Playing in beige suit", caption: "In Concert" },
  { src: "/bio/photo-steinway.jpg", alt: "At the Steinway", caption: "Studio" },
  { src: "/bio/photo-violin-duo.jpg", alt: "With violinist", caption: "Chamber Music" },
  { src: "/bio/photo-concert-modern.jpg", alt: "Modern concert hall", caption: "Recital" },
  { src: "/bio/photo-teaching.jpg", alt: "Teaching session", caption: "Teaching" },
  { src: "/bio/photo-studio.jpg", alt: "Studio portrait", caption: "Studio" },
  { src: "/bio/photo-forest-piano.jpg", alt: "Natural light", caption: "Light" },
];

export function SaturnGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closeModal = useCallback(() => {
    setSelectedPhoto(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedPhoto) {
        closeModal();
      }
    };

    if (selectedPhoto) {
      document.addEventListener("keydown", handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedPhoto, closeModal]);

  return (
    <>
      <section className="relative bg-black py-24 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/[0.03] blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <p className="text-sm font-light tracking-[0.3em] uppercase text-cyan-400/70">
              Gallery
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Moments on Stage
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          </motion.div>

          {/* Photo grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setSelectedPhoto(photo)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-light tracking-wider text-white">
                    {photo.caption}
                  </p>
                </div>
                {/* Subtle border */}
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 group-hover:ring-cyan-400/30 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label="Photo lightbox"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-h-[90vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                width={1200}
                height={800}
                className="max-h-[85vh] w-auto rounded-lg object-contain"
              />
              <p className="mt-4 text-center text-sm font-light tracking-widest text-cyan-400/80">
                {selectedPhoto.caption}
              </p>
            </motion.div>

            <button
              ref={closeButtonRef}
              onClick={closeModal}
              className="absolute top-6 right-6 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              aria-label="Close photo (Escape)"
            >
              <X className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
