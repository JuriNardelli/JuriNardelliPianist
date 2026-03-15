"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function WhatToLookForInAPianoTeacher() {
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
                  Learning
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  November 2025
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  7 min read
                </span>
              </div>

              <h1 className="text-3xl font-bold text-white sm:text-4xl leading-tight">
                What to Look for in a Piano Teacher (And What to Run From)
              </h1>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-zinc-500/50 via-zinc-800 to-transparent" />

              <div className="mt-10 prose prose-invert prose-zinc max-w-none">
                <p className="text-zinc-300 text-lg leading-relaxed">
                  Choosing a piano teacher is one of the most important decisions
                  you&apos;ll make in your musical journey. A great teacher
                  transforms your playing. A bad one can kill your motivation
                  entirely. And the difference isn&apos;t always obvious from the
                  outside.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  Performance experience matters &mdash; but not the way you
                  think
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  A teacher who has performed knows what it feels like to sit on
                  stage with shaking hands, to recover from a memory slip, to
                  shape a phrase under pressure. That experience is invaluable
                  because they&apos;ve lived what they&apos;re teaching.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  But a great performer isn&apos;t automatically a great teacher.
                  Some of the best pianists in the world are terrible at
                  explaining what they do instinctively. Teaching requires a
                  different skill: the ability to break down complex actions into
                  simple steps, to diagnose problems, to adapt to each
                  student&apos;s learning style. Look for someone who does both
                  &mdash; performs and teaches regularly.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  Method vs. personality
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  Some teachers follow a strict method book progression. Others
                  build custom curricula for each student. Neither approach is
                  inherently better, but for adult learners, flexibility matters
                  more. You&apos;re not a blank slate. You have musical
                  preferences, physical limitations, time constraints, and
                  specific goals.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  A good teacher listens to what you want and builds a path
                  toward it. If you say &ldquo;I want to play Debussy&rdquo; and
                  they say &ldquo;first we need to spend two years on method
                  books,&rdquo; that&apos;s a red flag. A skilled teacher can
                  work toward your dream piece while building technique along the
                  way.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  The first lesson is a two-way audition
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  Most teachers offer a trial lesson. Use it. But don&apos;t
                  just evaluate whether they seem nice &mdash; pay attention to
                  whether they actually listen to you play, ask about your goals,
                  and give you something concrete to work on before the next
                  lesson.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  A great first lesson should leave you excited and slightly
                  overwhelmed with new ideas. If you walk away feeling like
                  nothing happened, or like the teacher talked about themselves
                  the entire time, trust that instinct.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  Red flags
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  Run from teachers who never demonstrate at the piano. If they
                  only talk and never play, they either can&apos;t play well
                  enough or don&apos;t care enough to show you what the music
                  should sound like. Demonstration is the most powerful teaching
                  tool we have.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  Be wary of teachers who use the same method book for every
                  student regardless of age or experience. A twelve-year-old and
                  a forty-year-old surgeon have nothing in common as learners.
                  Their lessons shouldn&apos;t look the same.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  Avoid teachers who make you feel stupid for asking questions.
                  Questions are how adults learn. A teacher who dismisses them is
                  a teacher who doesn&apos;t understand adult education.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  What good teaching looks like
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  The best teachers I&apos;ve studied with &mdash; and the
                  standard I hold myself to &mdash; share a few traits. They
                  explain the &ldquo;why&rdquo; behind every instruction. They
                  demonstrate constantly. They adjust their approach when
                  something isn&apos;t working. They celebrate progress without
                  being patronizing. They push you without breaking you.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  Most importantly, they make you want to practice. Not out of
                  guilt or obligation, but because they&apos;ve shown you a
                  glimpse of what&apos;s possible and you can&apos;t wait to get
                  closer to it.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  Online vs. in-person
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  Don&apos;t limit your search to teachers in your city. The
                  right teacher might be in another country. Online lessons have
                  become remarkably effective, and they open up your options
                  dramatically. The best teacher for you is the one who
                  understands your goals, communicates clearly, and inspires you
                  &mdash; regardless of where they sit.
                </p>

                <div className="mt-12 p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <p className="text-zinc-300 font-medium">
                    Want to see if we&apos;re the right fit?
                  </p>
                  <p className="text-zinc-500 text-sm mt-2">
                    I offer trial lessons where we can talk about your goals and
                    see how we work together. No commitment required.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block mt-4 text-sm text-zinc-400 hover:text-amber-300 transition-colors"
                  >
                    Book a trial lesson &rarr;
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
