"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { X, ZoomIn } from "lucide-react";

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

interface PhotoItemProps {
  photo: typeof photos[0];
  className?: string;
  showCaption?: boolean;
  onClick: () => void;
}

function PhotoItem({ photo, className = "", showCaption = true, onClick }: PhotoItemProps) {
  return (
    <motion.div
      variants={itemVariants}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl ${className}`}
      onClick={onClick}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className={`object-cover transition-transform duration-700 group-hover:scale-110 ${photo.position}`}
      />
      <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/40" />

      {/* Zoom icon on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
          <ZoomIn className="h-6 w-6 text-white" />
        </div>
      </div>

      {showCaption && (
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-sm font-light tracking-widest text-white/90">{photo.caption}</p>
        </div>
      )}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
    </motion.div>
  );
}

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closeModal = useCallback(() => {
    setSelectedPhoto(null);
  }, []);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedPhoto) {
        closeModal();
      }
    };

    if (selectedPhoto) {
      document.addEventListener("keydown", handleKeyDown);
      // Focus the close button when modal opens for accessibility
      setTimeout(() => closeButtonRef.current?.focus(), 100);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedPhoto, closeModal]);

  return (
    <>
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
            <PhotoItem photo={photos[0]} className="col-span-2 row-span-2 aspect-square md:aspect-auto md:h-full" onClick={() => setSelectedPhoto(photos[0])} />
            <PhotoItem photo={photos[1]} className="col-span-2 aspect-[4/3]" onClick={() => setSelectedPhoto(photos[1])} />
            <PhotoItem photo={photos[4]} className="col-span-1 aspect-square" showCaption={false} onClick={() => setSelectedPhoto(photos[4])} />
            <PhotoItem photo={photos[7]} className="col-span-1 aspect-square" showCaption={false} onClick={() => setSelectedPhoto(photos[7])} />
            <PhotoItem photo={photos[2]} className="col-span-2 aspect-[16/9]" onClick={() => setSelectedPhoto(photos[2])} />
            <PhotoItem photo={photos[5]} className="col-span-2 aspect-[16/9]" onClick={() => setSelectedPhoto(photos[5])} />
            <PhotoItem photo={photos[10]} className="col-span-1 aspect-square" showCaption={false} onClick={() => setSelectedPhoto(photos[10])} />
            <PhotoItem photo={photos[8]} className="col-span-1 aspect-square" showCaption={false} onClick={() => setSelectedPhoto(photos[8])} />
            <PhotoItem photo={photos[6]} className="col-span-2 aspect-[16/9]" onClick={() => setSelectedPhoto(photos[6])} />
            <PhotoItem photo={photos[11]} className="col-span-2 aspect-[16/9]" onClick={() => setSelectedPhoto(photos[11])} />
            <PhotoItem photo={photos[3]} className="col-span-2 aspect-[4/3] md:col-span-3" onClick={() => setSelectedPhoto(photos[3])} />
            <PhotoItem photo={photos[9]} className="col-span-2 aspect-[4/3] md:col-span-3" onClick={() => setSelectedPhoto(photos[9])} />
          </motion.div>
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
              <p className="mt-4 text-center text-sm font-light tracking-widest text-zinc-400">
                {selectedPhoto.caption}
              </p>
            </motion.div>

            {/* Close button */}
            <button
              ref={closeButtonRef}
              onClick={closeModal}
              className="absolute top-6 right-6 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
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
