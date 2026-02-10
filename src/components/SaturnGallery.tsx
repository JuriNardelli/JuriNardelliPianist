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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
        {/* Background stars */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px w-px bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8 + 0.2,
              }}
            />
          ))}
        </div>

        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <p className="text-sm font-light tracking-[0.3em] uppercase text-cyan-400/70">
              Gallery
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Moments in Orbit
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          </motion.div>

          {/* Saturn Container */}
          <div className="relative mx-auto" style={{ maxWidth: "900px", aspectRatio: "1" }}>
            {/* The Planet (Saturn) */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56"
            >
              {/* Planet glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/30 via-blue-600/20 to-purple-600/30 blur-xl scale-150" />

              {/* Planet body */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-[0_0_60px_rgba(34,211,238,0.4)]">
                {/* Surface details */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-cyan-300/30 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-blue-700/40 blur-sm" />
                <div className="absolute top-6 left-6 w-4 h-4 rounded-full bg-cyan-300/50 blur-sm" />
              </div>
            </motion.div>

            {/* Photo Ring */}
            <div className="relative w-full h-full">
              {photos.map((photo, index) => {
                const angle = (index / photos.length) * 360 - 90;
                const radiusX = 42; // % from center
                const radiusY = 18; // % from center (ellipse)
                const x = 50 + radiusX * Math.cos((angle * Math.PI) / 180);
                const y = 50 + radiusY * Math.sin((angle * Math.PI) / 180);
                const isHovered = hoveredIndex === index;
                const zIndex = isHovered ? 50 : Math.round(20 + 10 * Math.sin((angle * Math.PI) / 180));

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="absolute cursor-pointer"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                      zIndex,
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setSelectedPhoto(photo)}
                  >
                    <motion.div
                      animate={{
                        scale: isHovered ? 1.8 : 1,
                        boxShadow: isHovered
                          ? "0 0 40px rgba(34,211,238,0.6)"
                          : "0 0 15px rgba(34,211,238,0.3)",
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="relative overflow-hidden rounded-full border-2 border-cyan-400/40 bg-zinc-900"
                      style={{
                        width: "clamp(50px, 8vw, 80px)",
                        height: "clamp(50px, 8vw, 80px)",
                      }}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover object-top"
                        sizes="80px"
                      />
                      {/* Hover overlay with caption */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/70 via-transparent to-transparent p-1"
                          >
                            <span className="text-[8px] sm:text-[10px] font-medium text-white text-center truncate">
                              {photo.caption}
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Ring glow effect */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                width: "90%",
                height: "40%",
                background: "radial-gradient(ellipse, rgba(34,211,238,0.1) 0%, transparent 70%)",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>

          {/* Mobile alternative - beautiful card grid */}
          <div className="mt-8 md:hidden">
            <p className="text-center text-xs text-zinc-500 mb-6">Tap any photo to view full size</p>
            <div className="grid grid-cols-3 gap-2 px-2">
              {photos.map((photo, index) => (
                <motion.div
                  key={`mobile-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative aspect-square"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden border border-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover object-top"
                      sizes="33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-1 left-1 right-1">
                      <p className="text-[9px] text-white/80 truncate text-center">{photo.caption}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
