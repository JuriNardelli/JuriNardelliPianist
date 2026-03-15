"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function FivePiecesEveryAdultBeginnerShouldLearn() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pt-24">
        <article className="py-16">
          <div className="mx-auto max-w-2xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-400 transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to articles
              </Link>

              <div className="flex items-center gap-4 text-sm text-zinc-500 mb-6">
                <span className="px-2 py-1 rounded-full bg-zinc-500/10 text-zinc-400 text-xs">
                  Repertoire
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  March 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  9 min read
                </span>
              </div>

              <h1 className="text-3xl font-bold text-white sm:text-4xl leading-tight">
                5 Pieces Every Adult Beginner Should Learn First
              </h1>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-zinc-500/50 via-zinc-800 to-transparent" />

              <div className="mt-10 prose prose-invert prose-zinc max-w-none">
                <p className="text-zinc-300 text-lg leading-relaxed">
                  The biggest mistake adult beginners make isn&apos;t buying the
                  wrong keyboard or practicing too little. It&apos;s choosing the
                  wrong pieces. Play something too easy and you&apos;ll get
                  bored. Too hard and you&apos;ll get frustrated. But choose
                  wisely, and every piece teaches you something while making you
                  feel like a real musician.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  These are the five pieces I recommend most to my adult
                  students. Not simplified versions &mdash; the real thing, or as
                  close to it as your level allows. Each one is here for a
                  reason.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  1. Beethoven &mdash; F&uuml;r Elise
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  Yes, it&apos;s a cliché. And yes, you should learn it anyway.
                  The opening section of F&uuml;r Elise is one of the most
                  satisfying things a beginner can play. The melody is
                  immediately recognizable, the left hand pattern is simple, and
                  the finger movements introduce essential technique without
                  overwhelming you.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  What it teaches: hand independence, simple ornamentation, and
                  the A minor tonality that appears everywhere in classical
                  music. Most beginners can play the first section within two to
                  three months. The middle sections are significantly harder
                  &mdash; save those for later.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  2. Satie &mdash; Gymnop&eacute;die No. 1
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  This piece is pure patience in musical form. The tempo is slow,
                  the harmonies are gorgeous, and the left hand moves in a
                  gentle, predictable waltz pattern. But don&apos;t be fooled by
                  its simplicity &mdash; playing it beautifully requires
                  listening, control, and a soft touch.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  What it teaches: pedaling (essential and often neglected),
                  voicing the melody above the accompaniment, and musical
                  patience. This is the piece that teaches you to breathe at the
                  piano. Timeline: three to four months for a musically
                  satisfying version.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  3. Chopin &mdash; Prelude in E minor, Op. 28 No. 4
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  This might be the most emotionally powerful piece a beginner
                  can learn. The right hand plays a single melody line &mdash;
                  mostly one note at a time. The left hand plays slow, descending
                  chords. Technically, it&apos;s approachable. Musically,
                  it&apos;s devastating.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  What it teaches: expressive playing, dynamic control, and the
                  idea that simple notes can carry enormous emotion. This is
                  often the piece where my students realize that piano isn&apos;t
                  about playing fast or playing lots of notes. It&apos;s about
                  making people feel something. Timeline: two to three months.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  4. Debussy &mdash; Clair de Lune (first section)
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  The opening of Clair de Lune is one of the most beautiful
                  things ever written for piano. The first 26 bars are
                  surprisingly accessible &mdash; the tempo is free, the melody
                  is lyrical, and the left hand provides a gentle harmonic
                  foundation. The middle section gets much harder, but the
                  opening stands on its own.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  What it teaches: rubato (flexible timing), layered textures,
                  and the art of using the pedal to create atmosphere. This piece
                  is a gateway to Impressionism and will change how you think
                  about sound at the piano. Timeline: four to six months for the
                  first section.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  5. Bach &mdash; Prelude in C Major, BWV 846
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  The first piece in Bach&apos;s Well-Tempered Clavier. It&apos;s
                  entirely made of broken chords &mdash; arpeggios that flow like
                  water. There are no surprises in the pattern, which makes it
                  meditative to practice. But it teaches you something nothing
                  else on this list does: evenness.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  What it teaches: finger independence, even tone across all
                  fingers, and the harmonic language that underpins all Western
                  music. Every chord progression you&apos;ll ever encounter has
                  its roots here. This is the piece that makes everything else
                  click. Timeline: three to four months.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  A note on order
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  You don&apos;t need to learn these in sequence. Start with
                  whichever one excites you most &mdash; motivation is more
                  important than pedagogy. A student who loves what they&apos;re
                  playing will always outwork a student who&apos;s grinding
                  through assigned exercises.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  That said, F&uuml;r Elise and the Chopin Prelude are the most
                  accessible starting points. The Bach and Debussy require a bit
                  more control. Satie sits beautifully in between.
                </p>

                <div className="mt-12 p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <p className="text-zinc-300 font-medium">
                    Ready to start your first piece?
                  </p>
                  <p className="text-zinc-500 text-sm mt-2">
                    In the Academy, I guide you through repertoire selection and
                    help you build a learning path that keeps you motivated.
                  </p>
                  <Link
                    href="/academy"
                    className="inline-block mt-4 text-sm text-zinc-400 hover:text-amber-300 transition-colors"
                  >
                    Start your journey &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
