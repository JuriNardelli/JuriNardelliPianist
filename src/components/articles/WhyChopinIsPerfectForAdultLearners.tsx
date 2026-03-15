"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function WhyChopinIsPerfectForAdultLearners() {
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
                  October 2025
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  8 min read
                </span>
              </div>

              <h1 className="text-3xl font-bold text-white sm:text-4xl leading-tight">
                Why Chopin Is the Perfect Composer for Adult Learners
              </h1>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-zinc-500/50 via-zinc-800 to-transparent" />

              <div className="mt-10 prose prose-invert prose-zinc max-w-none">
                <p className="text-zinc-300 text-lg leading-relaxed">
                  Of all the composers I teach, Chopin is the one who makes
                  adults fall in love with the piano. Not Bach, whose genius
                  requires patience to appreciate. Not Beethoven, whose fire can
                  feel distant at first. Chopin speaks directly to the heart, and
                  he does it through the only instrument he ever truly cared
                  about: the piano.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  He wrote for the piano, not the orchestra
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  Unlike almost every other major composer, Chopin wrote almost
                  exclusively for solo piano. He wasn&apos;t thinking about
                  orchestral colors or operatic voices. He was thinking about
                  your fingers, the hammers, the strings, the pedal. Every note
                  was conceived for exactly the instrument sitting in your living
                  room.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  This matters because Chopin&apos;s music feels natural under
                  the hands in a way that transcriptions and arrangements never
                  do. The fingerings make sense. The stretches are pianistic. The
                  pedaling is built into the texture. It was written by someone
                  who sat at the piano every day and knew exactly what it could
                  do.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  The singing quality adults respond to
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  Chopin&apos;s melodies sing. They breathe, they rise and fall,
                  they pause at exactly the right moment. When an adult student
                  plays a Chopin Nocturne for the first time, something clicks.
                  They recognize the language &mdash; not because they&apos;ve
                  studied music theory, but because they&apos;ve listened to
                  music their entire lives and this speaks to them.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  Children often don&apos;t have the emotional vocabulary to
                  connect with this kind of music. Adults do. They know what
                  longing sounds like. They know what beauty mixed with sadness
                  feels like. Chopin wrote that feeling down in notes.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  Accessible entry points
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  Many people assume Chopin is only for advanced players. That&apos;s
                  wrong. The Preludes, Op. 28 contain pieces ranging from
                  beginner-friendly to virtuosic. The E minor Prelude (No. 4) is
                  one of the most accessible pieces in the classical repertoire
                  &mdash; slow, mostly single notes in the right hand, and
                  unbearably beautiful.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  The Waltzes offer another entry point. The B minor Waltz, Op.
                  69 No. 2 is manageable for an intermediate student and sounds
                  far more impressive than its difficulty suggests. The same goes
                  for several of the Mazurkas &mdash; short, characterful pieces
                  that build technique without overwhelming.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  A natural technical progression
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  What I love about teaching Chopin is that his catalog offers a
                  natural difficulty curve. You can start with the simpler
                  Preludes and Waltzes, move to the Nocturnes, then to the more
                  demanding Ballades and Scherzos as your technique grows. Each
                  level builds on the skills you developed at the previous one.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  His music teaches legato playing, pedal control, rubato, and
                  voicing &mdash; all essential skills that transfer to every
                  other composer. Learn Chopin well and Debussy, Liszt, and
                  Rachmaninov all become more accessible.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  Emotional depth that rewards adult understanding
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  There&apos;s a reason Chopin is the composer people cry to.
                  His music carries nostalgia, loss, tenderness, and joy
                  &mdash; sometimes all within the same piece. An adult who has
                  lived, loved, and lost brings something to Chopin that no
                  amount of technical skill can replace: life experience.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  I&apos;ve had students play technically imperfect performances
                  of Chopin Nocturnes that moved me more than competition
                  winners. Because they understood what the music was saying.
                  They didn&apos;t need to be told to slow down at the
                  climax &mdash; they felt it.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  Where to start
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  If you&apos;re a beginner: Prelude in E minor, Op. 28 No. 4.
                  Then the Prelude in B minor, No. 6. These are short, slow, and
                  deeply musical.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  Early intermediate: Waltz in B minor, Op. 69 No. 2 or the
                  Waltz in A minor, KK IVb No. 11. More movement, more
                  character, still manageable.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  Intermediate: Nocturne in E-flat major, Op. 9 No. 2 &mdash;
                  the most famous Nocturne, and for good reason. It&apos;s the
                  piece that makes students realize they can play something truly
                  beautiful.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  Save the Ballades, the Polonaises, and the Etudes for later.
                  They&apos;ll be waiting for you when you&apos;re ready, and
                  they&apos;ll be worth the wait.
                </p>

                <div className="mt-12 p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <p className="text-zinc-300 font-medium">
                    Want to learn Chopin with guidance?
                  </p>
                  <p className="text-zinc-500 text-sm mt-2">
                    I help students find the right Chopin piece for their level
                    and guide them through every phrase.
                  </p>
                  <Link
                    href="/academy"
                    className="inline-block mt-4 text-sm text-zinc-400 hover:text-amber-300 transition-colors"
                  >
                    Learn Chopin with me &rarr;
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
