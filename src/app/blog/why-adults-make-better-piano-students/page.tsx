"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ArticlePage() {
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
                  Learning
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  January 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  6 min read
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold text-white sm:text-4xl leading-tight">
                Why Adults Make Better Piano Students Than They Think
              </h1>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-zinc-500/50 via-zinc-800 to-transparent" />

              {/* Content */}
              <div className="mt-10 prose prose-invert prose-zinc max-w-none">
                <p className="text-zinc-300 text-lg leading-relaxed">
                  Last month, a 52-year-old surgeon told me she was &ldquo;probably too old&rdquo; to learn piano properly. She operates on human hearts for a living. The irony wasn&apos;t lost on either of us.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  This myth &mdash; that you need to start young or not bother starting at all &mdash; is everywhere. It&apos;s in well-meaning comments from family members. It&apos;s in YouTube videos that worship child prodigies. It&apos;s in the guilty feeling adults get when they sit down at a piano for the first time at 40 or 50 or 60.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  But here&apos;s what 4,000+ lessons have taught me: adults aren&apos;t worse piano students. They&apos;re different. And in many ways, they&apos;re better.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  You understand music already
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  When I teach a child that a phrase should &ldquo;breathe,&rdquo; I&apos;m speaking in metaphors they don&apos;t fully grasp. When I say the same thing to an adult who&apos;s listened to thousands of songs, who&apos;s been moved by music at weddings and funerals and on late-night drives &mdash; they get it immediately.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  Adults have emotional context. They know what music feels like. The technical part is just learning to translate that feeling into finger movements.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  You know how to learn
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  Children do what they&apos;re told. Adults ask why. At first, this seems like a disadvantage &mdash; lessons move slower, there are more questions. But within a few months, the adult students who asked &ldquo;why this fingering?&rdquo; and &ldquo;why practice slowly first?&rdquo; start to pull ahead. They understand the principles, not just the instructions.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  You&apos;ve already learned complex skills in your life. You know what focused practice feels like. You know the difference between going through the motions and actually improving. That knowledge transfers directly to piano.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  You actually want to be here
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  This is the big one. Most children take lessons because their parents signed them up. Adults take lessons because something inside them said &ldquo;I need to do this.&rdquo;
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  That internal motivation is worth years of head start. I&apos;ve seen adults make more progress in two years than some child students make in eight &mdash; not because adults are more talented, but because they practice with intention. Every session matters to them.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  The honest part
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  Will you become a concert pianist? Probably not. But neither will 99.9% of children who start lessons.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  What you can become is someone who sits down at the piano after a long day and plays something beautiful. Someone who understands why Chopin makes people cry. Someone who has a relationship with an instrument that will stay with them for life.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  That surgeon I mentioned? Six months later, she played Debussy&apos;s &ldquo;Reverie&rdquo; at her hospital&apos;s charity gala. Not perfectly. But beautifully. Her hands that save lives also made music that moved people.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  She wasn&apos;t too old. She was exactly the right age &mdash; old enough to appreciate what she was learning.
                </p>

                <div className="mt-12 p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <p className="text-zinc-300 font-medium">
                    Thinking about starting?
                  </p>
                  <p className="text-zinc-500 text-sm mt-2">
                    I offer trial lessons for adults who want to see if this is right for them. No pressure, no commitment.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block mt-4 text-sm text-zinc-400 hover:text-amber-300 transition-colors"
                  >
                    Get in touch &rarr;
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
