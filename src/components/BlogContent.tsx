"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    slug: "five-pieces-every-adult-beginner-should-learn",
    title: "5 Pieces Every Adult Beginner Should Learn First",
    excerpt: "Repertoire choice matters more than you think. These five pieces will teach you technique, expression, and the joy of real music.",
    date: "March 2026",
    readTime: "9 min read",
    category: "Repertoire",
  },
  {
    slug: "how-to-practice-piano-efficiently",
    title: "How to Practice Piano Efficiently (From a Teacher Who's Heard Every Excuse)",
    excerpt: "You don't need two hours a day. You need twenty focused minutes. Here's exactly how to use them.",
    date: "February 2026",
    readTime: "7 min read",
    category: "Practice",
  },
  {
    slug: "why-adults-make-better-piano-students",
    title: "Why Adults Make Better Piano Students Than They Think",
    excerpt: "The myth of the child prodigy has convinced millions of adults they've missed their window. Here's why that's nonsense.",
    date: "January 2026",
    readTime: "6 min read",
    category: "Learning",
  },
  {
    slug: "best-setup-for-online-piano-lessons",
    title: "The Best Setup for Online Piano Lessons",
    excerpt: "Camera angles, microphones, lighting, and software settings. Everything you need for a great online lesson experience.",
    date: "January 2026",
    readTime: "10 min read",
    category: "Technology",
  },
  {
    slug: "online-piano-lessons-skeptic-convert",
    title: "I Was Skeptical About Online Piano Lessons. Then I Tried Teaching Them.",
    excerpt: "After 4,000+ online lessons, I've learned that the camera doesn't lie - and that's actually a good thing.",
    date: "December 2025",
    readTime: "8 min read",
    category: "Teaching",
  },
  {
    slug: "best-software-and-apps-for-piano-students",
    title: "The Best Software and Apps for Piano Students",
    excerpt: "The tools I actually recommend to my students — and the popular ones I tell them to avoid.",
    date: "November 2025",
    readTime: "8 min read",
    category: "Technology",
  },
  {
    slug: "what-to-look-for-in-a-piano-teacher",
    title: "What to Look for in a Piano Teacher (And What to Run From)",
    excerpt: "Not all teachers are created equal. Here's how to find one who will actually help you grow.",
    date: "November 2025",
    readTime: "7 min read",
    category: "Learning",
  },
  {
    slug: "why-chopin-is-perfect-for-adult-learners",
    title: "Why Chopin Is the Perfect Composer for Adult Learners",
    excerpt: "He wrote music that speaks directly to the heart. And he wrote it specifically for the piano. Here's why adults connect with Chopin like no other composer.",
    date: "October 2025",
    readTime: "8 min read",
    category: "Repertoire",
  },
];

export function BlogContent() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pt-24">
        {/* Hero */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-black" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-zinc-500/5 rounded-full blur-3xl" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-light tracking-[0.3em] uppercase text-zinc-400/80">
                Thoughts on Piano
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                From the Studio
              </h1>
              <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
                Notes on teaching, learning, and the piano life.
              </p>
              <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-zinc-500 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-6">
            <div className="space-y-12">
              {articles.map((article, index) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link href={`/blog/${article.slug}`} className="group block">
                    <div className="flex items-center gap-4 text-sm text-zinc-500 mb-3">
                      <span className="px-2 py-1 rounded-full bg-zinc-500/10 text-zinc-400 text-xs">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {article.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl font-semibold text-white group-hover:text-zinc-400 transition-colors">
                      {article.title}
                    </h2>
                    <p className="mt-3 text-zinc-400 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-400 group-hover:gap-3 transition-all">
                      Read more <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
