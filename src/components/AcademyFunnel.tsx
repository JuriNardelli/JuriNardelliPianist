"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, Music, Users, MessageCircle, Award, ArrowRight, ChevronDown, Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
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
    description: "Personalized sessions tailored to your goals, technique, and repertoire.",
  },
  {
    icon: Users,
    title: "Workshops & Masterclasses",
    description: "Regular group sessions on interpretation and performance psychology.",
  },
  {
    icon: MessageCircle,
    title: "Unlimited Feedback",
    description: "Send recordings anytime. Get detailed feedback within 48 hours.",
  },
  {
    icon: Award,
    title: "Exclusive Community",
    description: "Join a private circle of dedicated pianists.",
  },
];

const faqs = [
  {
    q: "How do lessons work?",
    a: "Online via Zoom, 60 minutes of focused, personalized instruction.",
  },
  {
    q: "What level do you accept?",
    a: "All levels — from beginners to advanced. The key requirement is dedication.",
  },
  {
    q: "Can I reschedule?",
    a: "Yes, with 24 hours notice, at no charge.",
  },
  {
    q: "How often are lessons?",
    a: "Weekly 60-minute sessions for consistent progress.",
  },
];

export function AcademyFunnel() {
  const [currentStep, setCurrentStep] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 5));

  return (
    <div className="relative min-h-screen">
      {/* Animated background */}
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
      </div>

      {/* Progress indicator */}
      <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 hidden md:flex gap-2">
        {[0, 1, 2, 3, 4, 5].map((step) => (
          <motion.div
            key={step}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              step <= currentStep ? "bg-amber-500 w-8" : "bg-zinc-700 w-4"
            }`}
            whileHover={{ scale: 1.2 }}
            onClick={() => step <= currentStep && setCurrentStep(step)}
            style={{ cursor: step <= currentStep ? "pointer" : "default" }}
          />
        ))}
      </div>

      {/* Step 0: Hero */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-light tracking-[0.3em] uppercase text-amber-500/80"
          >
            Private Piano Mentorship
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Transform Your Playing
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              With Expert Guidance
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-lg text-zinc-400"
          >
            Limited spots for serious students only.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onClick={nextStep}
            className="mt-10 group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-10 py-5 text-base font-bold text-black overflow-hidden shadow-[0_0_40px_rgba(251,191,36,0.4)]"
            whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(251,191,36,0.6)" }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Animated shine */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
              animate={{ x: ["-200%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />
            <span className="relative z-10">See If This Is For You</span>
            <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>
      </section>

      {/* Step 1: Pain Points */}
      <AnimatePresence>
        {currentStep >= 1 && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 border-t border-zinc-800/50 py-24"
          >
            <div className="mx-auto max-w-3xl px-6">
              <h2 className="text-3xl font-bold text-white text-center sm:text-4xl">
                Does This Sound Like You?
              </h2>
              <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

              <div className="mt-12 space-y-4">
                {painPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 }}
                    className="flex items-start gap-4 rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-5"
                  >
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20">
                      <Check className="h-4 w-4 text-amber-500" />
                    </div>
                    <p className="text-lg text-zinc-300">{point}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-12 text-center"
              >
                <p className="text-xl text-white mb-10">
                  If you nodded yes, <span className="text-amber-400 font-semibold">you're in the right place.</span>
                </p>
                <motion.button
                  onClick={nextStep}
                  className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-10 py-5 text-base font-bold text-black shadow-[0_0_40px_rgba(251,191,36,0.4)]"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(251,191,36,0.6)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                  <span className="relative z-10">See What's Possible</span>
                  <ChevronDown className="relative z-10 h-5 w-5 transition-transform group-hover:translate-y-1" />
                </motion.button>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Step 2: Video Testimonial */}
      <AnimatePresence>
        {currentStep >= 2 && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 border-t border-zinc-800/50 py-24"
          >
            <div className="mx-auto max-w-4xl px-6 text-center">
              <p className="text-sm font-light tracking-[0.3em] uppercase text-amber-500/80">
                Real Results
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                This Could Be You
              </h2>
              <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-12 relative mx-auto max-w-sm"
              >
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
                  <video
                    className="w-full h-auto"
                    controls
                    preload="metadata"
                    playsInline
                  >
                    <source src="/leon-chopin.mp4" type="video/mp4" />
                    <source src="/leon-chopin.webm" type="video/webm" />
                  </video>
                </div>
                <p className="mt-4 text-zinc-500 text-sm">
                  Leon — Adult student performing Chopin's <span className="text-amber-500/80">"Tristesse"</span>
                </p>
              </motion.div>

              <motion.blockquote
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-10 max-w-xl mx-auto"
              >
                <p className="text-lg italic text-zinc-400">
                  "Pieces I thought were out of reach became achievable."
                </p>
                <p className="mt-2 text-white font-medium">— Leon</p>
              </motion.blockquote>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={nextStep}
                className="mt-12 group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-10 py-5 text-base font-bold text-black shadow-[0_0_40px_rgba(251,191,36,0.4)]"
                whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(251,191,36,0.6)" }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
                <span className="relative z-10">Meet Your Mentor</span>
                <ChevronDown className="relative z-10 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </motion.button>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Step 3: About Mentor */}
      <AnimatePresence>
        {currentStep >= 3 && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 border-t border-zinc-800/50 py-24"
          >
            <div className="mx-auto max-w-5xl px-6">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative aspect-[4/5] overflow-hidden rounded-2xl"
                >
                  <Image
                    src="/portrait.jpg"
                    alt="Juri Nardelli"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                </motion.div>

                <div>
                  <p className="text-sm font-light tracking-[0.3em] uppercase text-amber-500/80">
                    Your Mentor
                  </p>
                  <h2 className="mt-4 text-3xl font-bold text-white">Juri Nardelli</h2>
                  <p className="mt-2 text-zinc-500">MMus Piano Performance</p>

                  <div className="mt-6 space-y-4 text-zinc-400">
                    <p>Trained at G. Verdi Milan & Conservatorium Maastricht under Igor Roma (Liszt Competition winner).</p>
                    <p>A decade performing across Europe's top venues. Now dedicated to transforming students into confident pianists.</p>
                  </div>

                  <motion.button
                    onClick={nextStep}
                    className="mt-10 group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-10 py-5 text-base font-bold text-black shadow-[0_0_40px_rgba(251,191,36,0.4)]"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(251,191,36,0.6)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                      animate={{ x: ["-200%", "200%"] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    />
                    <span className="relative z-10">See What You'll Get</span>
                    <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Step 4: Features */}
      <AnimatePresence>
        {currentStep >= 4 && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 border-t border-zinc-800/50 py-24"
          >
            <div className="mx-auto max-w-5xl px-6">
              <div className="text-center">
                <p className="text-sm font-light tracking-[0.3em] uppercase text-amber-500/80">
                  The Experience
                </p>
                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                  What You Get
                </h2>
                <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
              </div>

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-6 cursor-pointer"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500 group-hover:bg-amber-500/20 transition-colors">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="mt-2 text-sm text-zinc-400">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Quick FAQs */}
              <div className="mt-16">
                <h3 className="text-xl font-semibold text-white text-center mb-6">Quick Questions</h3>
                <div className="space-y-3">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="rounded-lg border border-zinc-800/50 bg-zinc-900/30 overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-4 text-left"
                      >
                        <span className="font-medium text-white">{faq.q}</span>
                        <ChevronDown className={`h-4 w-4 text-zinc-500 transition-transform ${expandedFaq === index ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {expandedFaq === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="px-4 pb-4"
                          >
                            <p className="text-sm text-zinc-400">{faq.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-16 text-center"
              >
                <motion.button
                  onClick={nextStep}
                  className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-12 py-6 text-lg font-bold text-black shadow-[0_0_50px_rgba(251,191,36,0.5)]"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 80px rgba(251,191,36,0.7)" }}
                  whileTap={{ scale: 0.98 }}
                  animate={{ boxShadow: ["0 0 40px rgba(251,191,36,0.4)", "0 0 60px rgba(251,191,36,0.6)", "0 0 40px rgba(251,191,36,0.4)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                  />
                  <span className="relative z-10">I'm Ready to Apply</span>
                  <ArrowRight className="relative z-10 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Step 5: Application */}
      <AnimatePresence>
        {currentStep >= 5 && (
          <motion.section
            id="apply"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 border-t border-zinc-800/50 py-24"
          >
            <div className="mx-auto max-w-2xl px-6">
              <div className="text-center">
                <p className="text-sm font-light tracking-[0.3em] uppercase text-amber-500/80">
                  Final Step
                </p>
                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                  Apply Now
                </h2>
                <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
                <p className="mt-6 text-zinc-400">
                  Limited spots. I'll reach out to schedule a free consultation.
                </p>
              </div>

              <div className="mt-12">
                <ApplicationForm />
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

    </div>
  );
}
