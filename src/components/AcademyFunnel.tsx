"use client";

import { motion } from "framer-motion";
import { Check, Music, Users, MessageCircle, Award, ArrowRight } from "lucide-react";
import Image from "next/image";
import { ApplicationForm } from "./ApplicationForm";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const painPoints = [
  "You've always dreamed of playing piano but don't want to waste years on the wrong approach",
  "You're returning after a break and want to finally do it right",
  "You feel stuck, practicing for hours without real progress",
  "You've outgrown your current teacher and need expert guidance to reach the next level",
];

const features = [
  {
    icon: Music,
    title: "1-on-1 Private Lessons",
    description: "Personalized sessions tailored to your goals, technique, and repertoire with an internationally trained concert pianist.",
  },
  {
    icon: Users,
    title: "Workshops & Masterclasses",
    description: "Regular group sessions covering interpretation, performance psychology, and advanced techniques.",
  },
  {
    icon: MessageCircle,
    title: "Unlimited Feedback",
    description: "Send recordings anytime and receive detailed, actionable feedback to accelerate your progress between lessons.",
  },
  {
    icon: Award,
    title: "Exclusive Community",
    description: "Join a private circle of dedicated pianists. Share your journey, get inspired, and grow together.",
  },
];

const steps = [
  { number: "01", title: "Apply", description: "Fill out a short application telling me about your goals" },
  { number: "02", title: "Connect", description: "We'll have a free consultation call to see if we're a good fit" },
  { number: "03", title: "Transform", description: "Begin your journey with personalized mentorship" },
];

export function AcademyFunnel() {
  return (
    <div className="relative min-h-screen">
      {/* Elegant animated background */}
      <div className="fixed inset-0 bg-black">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            background: [
              "radial-gradient(ellipse at 20% 20%, rgba(245,158,11,0.08) 0%, transparent 50%)",
              "radial-gradient(ellipse at 80% 80%, rgba(245,158,11,0.08) 0%, transparent 50%)",
              "radial-gradient(ellipse at 20% 80%, rgba(245,158,11,0.08) 0%, transparent 50%)",
              "radial-gradient(ellipse at 80% 20%, rgba(245,158,11,0.08) 0%, transparent 50%)",
              "radial-gradient(ellipse at 20% 20%, rgba(245,158,11,0.08) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(rgba(245,158,11,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-sm font-light tracking-[0.3em] uppercase text-amber-500/80"
          >
            Private Piano Mentorship
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Transform Your Playing
            <br />
            <motion.span
              className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% center", "100% center", "0% center"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: "200% 100%" }}
            >
              With Expert Guidance
            </motion.span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400"
          >
            For dedicated pianists ready to break through plateaus and reach their full potential.
            Limited spots available for serious students only.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mt-10"
          >
            <motion.a
              href="#apply"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 text-sm font-semibold text-black overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ opacity: 0.5 }}
              />
              <span className="relative z-10">Start Now</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="relative z-10 border-t border-zinc-800/50 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Does This Sound Like You?
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="mt-12 space-y-6"
          >
            {painPoints.map((point, index) => (
              <motion.li
                key={index}
                variants={fadeIn}
                className="flex items-start gap-4 rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-5"
              >
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20">
                  <Check className="h-4 w-4 text-amber-500" />
                </div>
                <p className="text-lg text-zinc-300">{point}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-10 text-center text-xl text-white"
          >
            If you nodded to any of these, <span className="text-amber-400">you're in the right place.</span>
          </motion.p>
        </div>
      </section>

      {/* About / Value Proposition */}
      <section className="relative z-10 border-t border-zinc-800/50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <Image
                src="/portrait.jpg"
                alt="Juri Nardelli"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <p className="text-sm font-light tracking-[0.3em] uppercase text-amber-500/80">
                Your Mentor
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Juri Nardelli
              </h2>
              <p className="mt-2 text-lg text-zinc-500">
                Concert Pianist · Educator · Master in Piano Performance MMus
              </p>

              <div className="mt-6 space-y-4 text-zinc-400">
                <p>
                  Trained at Italy's finest institutions—the G. Verdi Conservatory in Milan and
                  ISSM Siena—and later at the Conservatorium van Maastricht under Igor Roma,
                  winner of the Liszt Competition.
                </p>
                <p>
                  With over a decade of performing across Europe's most prestigious venues and
                  years of experience as a professional opera répétiteur, I've developed a
                  teaching methodology that transforms dedicated students into confident,
                  expressive pianists.
                </p>
                <p className="text-white">
                  My mission: to turn your guesswork into <span className="text-amber-400">tangible, lasting progress.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 border-t border-zinc-800/50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <p className="text-sm font-light tracking-[0.3em] uppercase text-amber-500/80">
              What You Get
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              The Mentorship Experience
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="mt-16 grid gap-8 sm:grid-cols-2"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-8 cursor-pointer overflow-hidden"
              >
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative z-10">
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="h-6 w-6" />
                  </motion.div>
                  <h3 className="mt-6 text-xl font-semibold text-white group-hover:text-amber-50 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-zinc-400 group-hover:text-zinc-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border border-amber-500/0 group-hover:border-amber-500/40 transition-colors duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 border-t border-zinc-800/50 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <p className="text-sm font-light tracking-[0.3em] uppercase text-amber-500/80">
              How It Works
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Three Simple Steps
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="mt-16 grid gap-8 sm:grid-cols-3"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10">
                  <span className="text-2xl font-bold text-amber-500">{step.number}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-zinc-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="relative z-10 border-t border-zinc-800/50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <p className="text-sm font-light tracking-[0.3em] uppercase text-amber-500/80">
              Results Speak Louder
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              What's Possible With Dedicated Practice
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
              This is one of my adult students performing Chopin's Étude Op. 10 No. 3 —
              a piece that demands extraordinary sensitivity and musical depth.
              Proof that with the right guidance, there are no limits to what you can achieve.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-12"
          >
            {/* Video Container */}
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
              <video
                className="w-full h-auto"
                controls
                preload="auto"
              >
                <source src="/leon-chopin.mov" type="video/quicktime" />
                <source src="/leon-chopin.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Caption */}
            <p className="mt-6 text-center text-zinc-500">
              Leon performing Chopin Étude Op. 10 No. 3 in E major —
              <span className="text-amber-500/80"> "Tristesse"</span>
            </p>
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-16 text-center"
          >
            <p className="text-xl font-light italic leading-relaxed text-zinc-300">
              "Juri showed me that with structured practice and expert guidance,
              pieces I thought were out of reach became achievable.
              His approach transformed my understanding of the piano."
            </p>
            <footer className="mt-6">
              <p className="font-semibold text-white">— Leon, Academy Student</p>
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 border-t border-zinc-800/50 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <p className="text-sm font-light tracking-[0.3em] uppercase text-amber-500/80">
              Questions
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Frequently Asked
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="mt-12 space-y-6"
          >
            {[
              {
                q: "How do lessons work?",
                a: "Lessons are conducted online via Zoom, making it easy to learn from anywhere in the world. Each session is 60 minutes of focused, personalized instruction.",
              },
              {
                q: "What level of students do you accept?",
                a: "I work with students of all levels — from beginners taking their first steps to advanced pianists preparing for competitions or auditions. The key requirement is dedication.",
              },
              {
                q: "What if I need to reschedule a lesson?",
                a: "Life happens. With 24 hours notice, you can reschedule your lesson at no charge. I understand that flexibility is important.",
              },
              {
                q: "How often are lessons?",
                a: "The mentorship includes weekly 60-minute private lessons. Consistency is key to progress, and weekly sessions ensure steady improvement.",
              },
              {
                q: "What platform do you use for video feedback?",
                a: "You can send recordings via WhatsApp, email, or any platform you prefer. I'll respond with detailed video or written feedback within 48 hours.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{faq.q}</h3>
                <p className="mt-3 text-zinc-400">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="relative z-10 border-t border-zinc-800/50 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <p className="text-sm font-light tracking-[0.3em] uppercase text-amber-500/80">
              Start Your Journey
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Apply for Mentorship
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
            <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
              Limited spots available. Fill out the form below and I'll reach out
              to schedule a free consultation call.
            </p>
          </motion.div>

          <div className="mt-12">
            <ApplicationForm />
          </div>
        </div>
      </section>

    </div>
  );
}
