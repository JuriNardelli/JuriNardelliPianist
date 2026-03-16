"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function OnlinePianoLessonsSkepticConvert() {
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
              {/* Back link */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-400 transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to articles
              </Link>

              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-zinc-500 mb-6">
                <span className="px-2 py-1 rounded-full bg-zinc-500/10 text-zinc-400 text-xs">
                  Teaching
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  December 2025
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  8 min read
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold text-white sm:text-4xl leading-tight">
                I Was Skeptical About Online Piano Lessons. Then I Tried
                Teaching Them.
              </h1>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-zinc-500/50 via-zinc-800 to-transparent" />

              {/* Content */}
              <div className="mt-10 prose prose-invert prose-zinc max-w-none">
                <p className="text-zinc-300 text-lg leading-relaxed">
                  In 2020, the world shut down and I had a choice: stop teaching
                  or figure out how to do it through a screen. I chose the
                  screen. I expected it to be a temporary compromise. I was
                  wrong.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  Four thousand lessons later, I don&apos;t just tolerate online
                  teaching &mdash; I prefer it for most students. That sentence
                  would have made the 2019 version of me laugh. But the evidence
                  is overwhelming, and I&apos;ve had to update my beliefs.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  The camera doesn&apos;t lie
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  When I sit next to a student at a physical piano, I see their
                  hands from the side. It&apos;s the angle every teacher knows.
                  But online, with the camera positioned above the keyboard, I
                  see something better: the exact view the student sees. Every
                  finger, every angle of the wrist, every tiny collapse of a
                  knuckle.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  I catch technical problems online that I might miss in person.
                  That&apos;s not a theory &mdash; it happened. Students
                  I&apos;d been teaching in person for months had issues I only
                  spotted once we moved to video. The overhead camera angle is
                  simply superior for hand observation.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  The comfort factor
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  Something unexpected happens when a student learns at their own
                  piano, in their own home. They relax. The slight tension that
                  comes from sitting at an unfamiliar instrument in someone
                  else&apos;s studio &mdash; it vanishes. They play more
                  naturally. They take more risks. They ask more questions.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  Adult students especially benefit from this. Many of them
                  already feel vulnerable learning something new. Removing the
                  commute, the unfamiliar environment, the performance pressure
                  of being in a studio &mdash; it lets them focus on what
                  matters: the music.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  What I thought I&apos;d lose
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  I was convinced that online lessons would mean sacrificing
                  sound quality. That I wouldn&apos;t be able to hear the
                  subtleties of touch, the pedaling, the voicing between hands.
                  And in the early days, with poor microphones and bad
                  connections, that was partly true.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  But technology caught up quickly. With a decent microphone and
                  a stable connection, I can hear everything I need to hear. Not
                  perfectly &mdash; I won&apos;t pretend it&apos;s the same as
                  being in the room. But close enough that the trade-offs are
                  worth it. And I developed a method around it: I focus more on
                  demonstration, on singing phrases, on explaining the
                  &ldquo;why&rdquo; behind musical decisions. My teaching
                  actually got better because I had to communicate more clearly.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  The reach changed everything
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  Before 2020, my students lived within driving distance of my
                  studio. Now I teach people across Europe, in the US, in Asia.
                  A marketing executive in London. A retired doctor in Toronto. A
                  software engineer in Tokyo who wakes up early for his Saturday
                  lesson.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  These people would never have found a conservatory-trained
                  teacher locally. Not because good teachers don&apos;t exist
                  everywhere, but because the specific match &mdash; the right
                  teacher for the right student &mdash; is rare. Online teaching
                  removes geography from the equation. The best possible match
                  can happen regardless of where either person lives.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  What I still miss
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  I&apos;d be dishonest if I said online is better in every way.
                  I miss being able to physically guide a student&apos;s hand
                  into the right position. I miss the shared experience of
                  sitting at a beautiful grand piano together. I miss the
                  spontaneous moments &mdash; the student who stays after the
                  lesson to play something they&apos;ve been working on
                  secretly.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  For advanced students preparing for competitions or auditions,
                  occasional in-person sessions are valuable. The energy of being
                  in the same room matters when you&apos;re polishing a
                  performance. But for the vast majority of adult learners
                  &mdash; people who want to play well, play beautifully, and
                  enjoy the process &mdash; online lessons are not just adequate.
                  They&apos;re excellent.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  The numbers speak
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  Over four thousand online lessons. Hundreds of students.
                  I&apos;ve seen adults go from absolute beginners to playing
                  Chopin, Debussy, Beethoven. Not simplified versions &mdash; the
                  real thing. I&apos;ve watched people discover that they&apos;re
                  capable of far more than they believed.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  The method works. The technology works. The only thing that
                  was ever really in the way was my own skepticism &mdash; and
                  I&apos;m glad I got over it.
                </p>

                <div className="mt-12 p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <p className="text-zinc-300 font-medium">
                    Curious about online lessons?
                  </p>
                  <p className="text-zinc-500 text-sm mt-2">
                    I teach adults at all levels, from complete beginners to
                    advanced players. Every lesson is tailored to you.
                  </p>
                  <Link
                    href="/learn"
                    className="inline-block mt-4 text-sm text-zinc-400 hover:text-amber-300 transition-colors"
                  >
                    See how it works &rarr;
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
