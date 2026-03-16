"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Music,
  Users,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Target,
  FileText,
  ArrowDown,
  Mic2,
  Disc3,
  BookOpen,
  Heart,
} from "lucide-react";
import Image from "next/image";
import Script from "next/script";
import { ApplicationForm } from "./ApplicationForm";

/* ─── ANIMATION VARIANTS ─── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

/* ─── DATA ─── */

const guideTeasers = [
  "Why finding the right intensity changes everything about your sound",
  "The one thing most pianists overlook \u2014 and why it unlocks real progress",
  "A counterintuitive practice drill that fixes your hardest passages",
  "How slow practice really works (most students get this wrong)",
];

const pillars = [
  {
    icon: Music,
    title: "1-on-1 Private Lessons",
    description:
      "Personalized sessions built entirely around your repertoire, technique, and musical goals. No generic curriculum \u2014 every minute is about you.",
  },
  {
    icon: Users,
    title: "Collective Sessions",
    description:
      "Monthly community workshops on interpretation, performance psychology, and music theory. Learn alongside other dedicated adult pianists.",
  },
  {
    icon: Mic2,
    title: "Live Recitals",
    description:
      "Perform in several live recitals throughout the year in a real concert setting. Because music was made to be shared.",
  },
  {
    icon: Disc3,
    title: "Recording Workshops",
    description:
      "Learn to record, analyse, and use recordings as a powerful practice tool. Keep memories of your playing forever \u2014 and produce your own music.",
  },
  {
    icon: BookOpen,
    title: "Music Theory & Appreciation",
    description:
      "Deepen your understanding of the music you play \u2014 history, harmony, and the art of listening. Know the why behind every note.",
  },
  {
    icon: Heart,
    title: "Community",
    description:
      "Join a private circle of serious adult pianists who share your dedication. Support, inspiration, and friendships that go beyond the keyboard.",
  },
];

const faqs = [
  {
    q: "I\u2019m a complete beginner \u2014 is this for me?",
    a: "Absolutely. Many of my students started as adults with zero experience. Adults often progress faster because they bring focus, life experience, and a genuine reason for wanting to play. I\u2019ll show you exactly how to start \u2014 the right way.",
  },
  {
    q: "I\u2019ve been playing for years but feel stuck. Can you help?",
    a: "This is exactly what I specialize in. Most plateaus come from technique issues or practice methods that were never corrected. I\u2019ll identify what\u2019s holding you back and give you concert-level guidance to break through.",
  },
  {
    q: "What\u2019s in the free guide?",
    a: "Four practice techniques I learned studying under a winner of the International Franz Liszt Piano Competition. They\u2019re the same methods I use with my private students \u2014 condensed into a short PDF you can apply in one afternoon.",
  },
  {
    q: "How do online lessons work?",
    a: "We meet weekly on Zoom for 60 minutes. You\u2019ll get a personalized practice plan after every session, plus you can send me recordings anytime for detailed video feedback between lessons.",
  },
];

/* ─── BREVO FORM (inlined for the guide) ─── */

function BrevoGuideForm() {
  useEffect(() => {
    const w = window as unknown as Record<string, unknown>;
    w.REQUIRED_CODE_ERROR_MESSAGE = "Please choose a country code";
    w.LOCALE = "en";
    w.EMAIL_INVALID_MESSAGE =
      "The information provided is invalid. Please review the field format and try again.";
    w.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";
    w.GENERIC_INVALID_MESSAGE =
      "The information provided is invalid. Please review the field format and try again.";
    w.translation = {
      common: {
        selectedList: "{quantity} list selected",
        selectedLists: "{quantity} lists selected",
        selectedOption: "{quantity} selected",
        selectedOptions: "{quantity} selected",
      },
    };
    w.AUTOHIDE = false;
  }, []);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            #sib-container-learn input:-ms-input-placeholder { text-align:left; font-family:Helvetica,sans-serif; color:#71717a; }
            #sib-container-learn input::placeholder { text-align:left; font-family:Helvetica,sans-serif; color:#71717a; }
            #sib-container-learn .input { background-color: rgba(39,39,42,0.5) !important; border-color: #3f3f46 !important; color: #fff !important; border-radius: 8px !important; padding: 14px 16px !important; font-size: 16px !important; }
            #sib-container-learn .input:focus { border-color: rgba(245,158,11,0.5) !important; }
            #sib-container-learn .sib-form-block__button { background-color: #f59e0b !important; color: #000 !important; border-radius: 8px !important; width: 100% !important; padding: 14px !important; font-size: 16px !important; }
            #sib-container-learn .sib-form-block__button:hover { background-color: #fbbf24 !important; }
            #sib-container-learn .entry__specification { color: #71717a !important; }
          `,
        }}
      />
      <link
        rel="stylesheet"
        href="https://sibforms.com/forms/end-form/build/sib-styles.css"
      />

      <div className="sib-form" style={{ textAlign: "center" }}>
        <div id="sib-form-container" className="sib-form-container">
          <div
            id="error-message"
            className="sib-form-message-panel"
            style={{
              fontSize: 14,
              textAlign: "left",
              fontFamily: "Helvetica, sans-serif",
              color: "#661d1d",
              backgroundColor: "#ffeded",
              borderRadius: 8,
              borderColor: "#ff4949",
              maxWidth: "100%",
            }}
          >
            <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
              <svg
                viewBox="0 0 512 512"
                className="sib-icon sib-notification__icon"
              >
                <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
              </svg>
              <span className="sib-form-message-panel__inner-text">
                Your subscription could not be saved. Please try again.
              </span>
            </div>
          </div>

          <div
            id="success-message"
            className="sib-form-message-panel"
            style={{
              fontSize: 14,
              textAlign: "left",
              fontFamily: "Helvetica, sans-serif",
              color: "#085229",
              backgroundColor: "#e7faf0",
              borderRadius: 8,
              borderColor: "#13ce66",
              maxWidth: "100%",
            }}
          >
            <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
              <svg
                viewBox="0 0 512 512"
                className="sib-icon sib-notification__icon"
              >
                <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
              </svg>
              <span className="sib-form-message-panel__inner-text">
                Check your inbox &mdash; your free guide is on its way!
              </span>
            </div>
          </div>

          <div
            id="sib-container-learn"
            className="sib-container--large sib-container--vertical"
            style={{
              textAlign: "center",
              backgroundColor: "transparent",
              maxWidth: "100%",
              borderWidth: 0,
              direction: "ltr",
            }}
          >
            <form
              id="sib-form"
              method="POST"
              action="https://60a76cb1.sibforms.com/serve/MUIFADAV1c6pt9Z65_slSqqThRF2nokozLqDan_dAAffCzQRx6Fv7sTfEBrPSiD2brY08u53SfSQ4iOdVmd3hhWjJ6aVpZdP2ZAive9v_snAOJxV-GXx_gR44L--EUr-s7LViQknM8xeiqjcTqhAgEqe9HnBHAKHhjUcqhKLOgAWU_agBa4VaE5PQD8-ppvUROUWaBzijjWIkExEfw=="
              data-type="subscription"
            >
              <div style={{ padding: "6px 0" }}>
                <div className="sib-input sib-form-block">
                  <div className="form__entry entry_block">
                    <div className="form__label-row">
                      <div className="entry__field">
                        <input
                          className="input"
                          type="text"
                          id="EMAIL"
                          name="EMAIL"
                          autoComplete="off"
                          placeholder="Your email address"
                          data-required="true"
                          required
                        />
                      </div>
                    </div>
                    <label
                      className="entry__error entry__error--primary"
                      style={{
                        fontSize: 14,
                        textAlign: "left",
                        fontFamily: "Helvetica, sans-serif",
                        color: "#661d1d",
                        backgroundColor: "#ffeded",
                        borderRadius: 3,
                        borderColor: "#ff4949",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div style={{ padding: "6px 0" }}>
                <div
                  className="sib-form-block"
                  style={{ textAlign: "center" }}
                >
                  <button
                    className="sib-form-block__button sib-form-block__button-with-loader"
                    style={{
                      fontSize: 16,
                      textAlign: "center",
                      fontWeight: 700,
                      fontFamily: "Helvetica, sans-serif",
                      color: "#FFFFFF",
                      backgroundColor: "#3E4857",
                      borderRadius: 8,
                      borderWidth: 0,
                    }}
                    form="sib-form"
                    type="submit"
                  >
                    <svg
                      className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                      viewBox="0 0 512 512"
                    >
                      <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                    </svg>
                    Download the Free Guide
                  </button>
                </div>
              </div>
              <div style={{ padding: "4px 0" }}>
                <div
                  className="g-recaptcha-v3"
                  data-sitekey="6LfYE4wsAAAAAF-3-E4szNHyVQCla37nFEvOb_Uj"
                  style={{ display: "none" }}
                />
              </div>
              <input
                type="text"
                name="email_address_check"
                value=""
                className="input--hidden"
                readOnly
              />
              <input type="hidden" name="locale" value="en" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export function LearnPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Subtle background */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.04)_0%,transparent_50%)]" />
      </div>

      {/* ═══ 1. HERO ═══ */}
      <section className="relative z-10 flex min-h-[90vh] items-center justify-center px-6 pt-24 pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-light tracking-[0.3em] uppercase text-amber-500/70"
          >
            Concert-Level Piano Guidance for Adults
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Whether you&apos;re starting from zero
            <br />
            or finally ready to{" "}
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              sound like the pianist{" "}
              <br className="hidden sm:block" />
              you know you can be
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400"
          >
            I help adults play the piano they&apos;ve always wanted to play.
            Real technique, real musicality &mdash; the way professionals
            actually learn.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href="#free-guide"
              className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-10 py-4 text-base font-bold text-black overflow-hidden shadow-[0_0_40px_rgba(251,191,36,0.25)] hover:shadow-[0_0_60px_rgba(251,191,36,0.4)] transition-shadow"
            >
              Get the Free Practice Guide
              <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
            </a>
            <a
              href="#apply"
              className="text-sm text-zinc-500 hover:text-amber-400 transition-colors"
            >
              or book a free discovery call
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══ 2. FREE GUIDE (lead magnet) ═══ */}
      <section id="free-guide" className="relative z-10 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-zinc-900/80 via-zinc-900/60 to-amber-950/20"
          >
            {/* Glow effects */}
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />

            <div className="relative grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:gap-12">
              {/* Left: Guide content */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-amber-400">
                  <FileText className="h-3.5 w-3.5" />
                  FREE PDF GUIDE
                </div>

                <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl leading-tight">
                  Start Here: 4 Practice Secrets I Learned From One of the{" "}
                  <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                    World&apos;s Greatest Concert Pianists
                  </span>
                </h2>

                <p className="mt-4 text-zinc-400 text-sm leading-relaxed">
                  I studied with one of the greatest concert pianists in the
                  world. These are the 4 practice secrets he passed on to me
                  &mdash; things no regular piano teacher will ever show you.
                  Free, yours instantly.
                </p>

                <ul className="mt-6 space-y-3">
                  {guideTeasers.map((teaser, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 text-sm text-zinc-300"
                    >
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20">
                        <Check className="h-3 w-3 text-amber-400" />
                      </div>
                      {teaser}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Right: Brevo form */}
              <div className="flex items-center">
                <div className="w-full">
                  <BrevoGuideForm />
                  <p className="text-center text-[11px] text-zinc-600 mt-3">
                    No spam, ever. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 3. PAIN POINTS — DUAL AVATAR ═══ */}
      <section className="relative z-10 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Does This Sound Like You?
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {/* Avatar 1 — The Dreamer */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                  <Sparkles className="h-5 w-5 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Never Started?
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  "\u201CI\u2019ve always wanted to learn piano but never found the right moment.\u201D",
                  "\u201CI don\u2019t know if I have the talent for it.\u201D",
                  "\u201CMaybe it\u2019s too late for me to start.\u201D",
                  "\u201CI tried an app but it felt pointless.\u201D",
                  "\u201CI want someone to actually guide me, not just videos.\u201D",
                ].map((quote, i) => (
                  <p
                    key={i}
                    className="text-zinc-400 italic text-sm leading-relaxed"
                  >
                    {quote}
                  </p>
                ))}
              </div>
              <div className="mt-6 border-t border-zinc-800/50 pt-6">
                <p className="text-amber-400 font-medium text-sm">
                  It&apos;s not too late. You just need the right approach.
                </p>
              </div>
            </motion.div>

            {/* Avatar 2 — The Frustrated Pianist */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                  <Target className="h-5 w-5 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Playing for Years but Still Stuck?
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  "\u201CI\u2019ve been playing for years but I still don\u2019t sound like a real pianist.\u201D",
                  "\u201CI can get through the notes but it doesn\u2019t sound musical.\u201D",
                  "\u201CI want to play Chopin but nobody ever showed me how to approach it properly.\u201D",
                  "\u201CI have bad habits I can\u2019t shake on my own.\u201D",
                  "\u201CI need someone at a real concert level, not just another teacher.\u201D",
                ].map((quote, i) => (
                  <p
                    key={i}
                    className="text-zinc-400 italic text-sm leading-relaxed"
                  >
                    {quote}
                  </p>
                ))}
              </div>
              <div className="mt-6 border-t border-zinc-800/50 pt-6">
                <p className="text-amber-400 font-medium text-sm">
                  It&apos;s not your talent. It&apos;s that nobody ever gave you
                  concert-level guidance.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center text-xl text-white"
          >
            If you nodded yes,{" "}
            <span className="font-semibold text-amber-400">
              you&apos;re in the right place.
            </span>
          </motion.p>
        </div>
      </section>

      {/* ═══ 4. SOCIAL PROOF: LEON VIDEO ═══ */}
      <section className="relative z-10 border-t border-zinc-800/50 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <p className="text-sm font-light tracking-[0.3em] uppercase text-amber-500/70">
              Real Results
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              This Could Be You
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 mx-auto max-w-sm"
          >
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
              <video
                className="w-full h-auto"
                controls
                preload="metadata"
                playsInline
              >
                <source src="/leon-chopin.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="mt-4 text-center text-zinc-500 text-sm">
              Leon &mdash; Adult student performing Chopin&apos;s{" "}
              <span className="text-amber-500/80">Etude Op. 10 No. 3</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 mx-auto max-w-xl text-center"
          >
            <p className="text-lg text-zinc-300 leading-relaxed">
              Leon started as an amateur in 2023. With consistent mentorship,
              he reached a{" "}
              <span className="font-semibold text-white">
                semi-professional level
              </span>{" "}
              &mdash; now performing pieces most adult learners only dream of.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ 5. MEET YOUR MENTOR ═══ */}
      <section className="relative z-10 border-t border-zinc-800/50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[3/2] overflow-hidden rounded-2xl"
            >
              <Image
                src="/bio/mentor-portrait.jpg"
                alt="Juri Nardelli"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-sm font-light tracking-[0.3em] uppercase text-amber-500/70">
                Your Mentor
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white">
                Juri Nardelli
              </h2>
              <p className="mt-1 text-zinc-500">
                Concert Pianist &middot; MMus Piano Performance
              </p>

              <div className="mt-6 space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  I trained at G. Verdi Milan and the Conservatorium Maastricht
                  under Igor Roma &mdash; winner of the International Franz
                  Liszt Piano Competition. For over a decade, I performed across
                  Europe&apos;s most prestigious stages.
                </p>
                <p>
                  Today, I work with adults at every stage &mdash; complete
                  beginners who&apos;ve always dreamed of playing, and
                  experienced players who are ready to finally sound like a real
                  pianist. My approach comes straight from the concert stage.
                </p>
                <p className="text-white font-medium">
                  The Chopin nocturne you&apos;ve always wanted to play matters
                  more than my Master&apos;s degree &mdash; but my Master&apos;s
                  degree is why you can trust me to get you there.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ 6. TRANSFORMATION / OUTCOMES ═══ */}
      <section className="relative z-10 border-t border-zinc-800/50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Where This Takes You
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {/* Beginner outcomes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-zinc-300 mb-6">
                Starting from zero, you&apos;ll&hellip;
              </h3>
              {[
                "Finally start and make real, visible progress",
                "Feel guided by someone who truly knows the instrument",
                "Play a real piece you love \u2014 not just exercises",
                "Prove to yourself it\u2019s not too late",
              ].map((outcome, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-amber-500/10 bg-amber-500/5 p-4"
                >
                  <Check className="h-5 w-5 flex-shrink-0 text-amber-400 mt-0.5" />
                  <p className="text-zinc-200">{outcome}</p>
                </div>
              ))}
            </motion.div>

            {/* Experienced outcomes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-zinc-300 mb-6">
                Ready to level up, you&apos;ll&hellip;
              </h3>
              {[
                "Finally play the pieces you love and have them sound right",
                "Understand the music \u2014 the phrasing, the dynamics, the intention",
                "Fix the technique issues that have held you back for years",
                "Feel like a real pianist, not just someone who plays piano",
              ].map((outcome, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-amber-500/10 bg-amber-500/5 p-4"
                >
                  <Check className="h-5 w-5 flex-shrink-0 text-amber-400 mt-0.5" />
                  <p className="text-zinc-200">{outcome}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ 7. WHAT'S INCLUDED — 6 PILLARS ═══ */}
      <section
        id="how-it-works"
        className="relative z-10 border-t border-zinc-800/50 py-28"
      >
        {/* Section background accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.03)_0%,transparent_60%)]" />

        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <p className="text-sm font-light tracking-[0.3em] uppercase text-amber-500/70">
              The Full Experience
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Everything You Need.{" "}
              <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                Nothing You Don&apos;t.
              </span>
            </h2>
            <div className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-8 hover:border-amber-500/30 transition-colors"
              >
                {/* Subtle hover glow */}
                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-amber-500/0 blur-2xl group-hover:bg-amber-500/5 transition-colors" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 text-amber-500 ring-1 ring-amber-500/20">
                    <pillar.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 8. FAQ ═══ */}
      <section className="relative z-10 border-t border-zinc-800/50 py-24">
        <div className="mx-auto max-w-2xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Common Questions
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
          </motion.div>

          <div className="mt-12 space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-zinc-800/50 bg-zinc-900/30 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === i ? null : i)
                  }
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-white pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 flex-shrink-0 text-zinc-500 transition-transform ${
                      expandedFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {expandedFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 pb-5"
                    >
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 9. DUAL CTA — Guide + Discovery Call ═══ */}
      <section
        id="apply"
        className="relative z-10 border-t border-zinc-800/50 py-24"
      >
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Your Next Step
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {/* Option A: Free Guide */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-8 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10">
                <FileText className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">
                Start With the Free Guide
              </h3>
              <p className="mt-3 text-sm text-zinc-400">
                Not ready for lessons yet? No problem. Download the practice
                guide and start improving today.
              </p>
              <a
                href="#free-guide"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 px-6 py-3 text-sm font-semibold text-amber-400 hover:bg-amber-500/10 transition-colors"
              >
                Get the Free Guide
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            {/* Option B: Discovery Call */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-zinc-900/80 to-amber-950/20 p-8 text-center"
            >
              <p className="text-xs font-medium tracking-wide text-amber-500/70 uppercase">
                Limited Spots
              </p>
              <h3 className="mt-3 text-xl font-bold text-white">
                Book a Free Discovery Call
              </h3>
              <p className="mt-3 text-sm text-zinc-400">
                Ready to start? Book a free 20-minute call. No pressure &mdash;
                just a conversation about where you are and where you want to
                go.
              </p>
              <div className="mt-6">
                <ApplicationForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brevo scripts */}
      <Script
        src="https://sibforms.com/forms/end-form/build/main.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://www.google.com/recaptcha/api.js?render=6LfYE4wsAAAAAF-3-E4szNHyVQCla37nFEvOb_Uj&hl=en"
        strategy="lazyOnload"
      />
    </div>
  );
}
