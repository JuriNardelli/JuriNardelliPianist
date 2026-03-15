"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BestSetupForOnlinePianoLessons() {
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
                  Technology
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  January 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  10 min read
                </span>
              </div>

              <h1 className="text-3xl font-bold text-white sm:text-4xl leading-tight">
                The Best Setup for Online Piano Lessons (From Someone
                Who&apos;s Taught 4,000+ of Them)
              </h1>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-zinc-500/50 via-zinc-800 to-transparent" />

              <div className="mt-10 prose prose-invert prose-zinc max-w-none">
                <p className="text-zinc-300 text-lg leading-relaxed">
                  When I started teaching piano online, I spent weeks testing
                  cameras, microphones, angles, and software. I made every
                  mistake you can make &mdash; terrible audio, blinding
                  backlighting, laggy video that made my playing look like a
                  slideshow. After thousands of lessons, I&apos;ve refined the
                  setup to something that actually works. Here&apos;s everything
                  I&apos;ve learned.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  The camera: angle matters more than resolution
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  Your teacher needs to see your hands clearly. That&apos;s the
                  non-negotiable. A side angle showing both hands and the full
                  keyboard from roughly a 45-degree overhead perspective is
                  ideal. Most students make the mistake of pointing a laptop
                  camera at their face &mdash; useful for conversation, useless
                  for teaching piano.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  You don&apos;t need an expensive camera. A phone on a flexible
                  gooseneck mount works brilliantly. Clip it to the music desk
                  or a shelf above the piano and angle it down toward the keys.
                  If you use a webcam, get one with a wide-angle lens so the
                  full keyboard is visible without being ten feet away.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  Two cameras are even better if your software supports it
                  &mdash; one on your hands, one on your face. But if you can
                  only have one, choose the hands every time.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  Audio: the single biggest upgrade you can make
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  A laptop microphone will make your piano sound like it&apos;s
                  being played inside a tin can. This is the area where a small
                  investment makes the biggest difference. An external USB
                  microphone placed about two feet from the piano, roughly at
                  hammer height, transforms the audio quality.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  Condenser microphones capture the dynamics and tone of the
                  piano far better than built-in mics. You don&apos;t need a
                  studio-grade setup &mdash; a decent USB condenser in the 50 to
                  100 dollar range is more than enough for lessons. Place it
                  slightly above the open lid of an upright or near the strings
                  of a grand.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  Critical: turn off all noise suppression and audio processing
                  in your video call software. Zoom, Skype, and others have
                  built-in noise cancellation designed for speech. It
                  aggressively filters out piano sound, especially quiet
                  passages and sustain pedal resonance. In Zoom, go to Settings,
                  then Audio, and select &ldquo;Original Sound&rdquo; &mdash;
                  this preserves the full range of your piano&apos;s voice.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  Lighting: avoid the silhouette
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  If there&apos;s a window behind you, your teacher sees a dark
                  shadow playing a vaguely visible keyboard. Face the window
                  instead, or close the blinds and use a desk lamp. The light
                  should illuminate your hands and the keys, not your face.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  A simple LED desk lamp angled toward the keyboard solves
                  most lighting problems. Warm white light is easier on the
                  eyes than cool white. Avoid overhead fluorescent lights that
                  create harsh shadows across the keys.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  Internet connection: wired beats wireless
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  Video calls are only as good as your connection. WiFi is
                  convenient but introduces latency spikes and occasional
                  dropouts that make real-time musical communication difficult.
                  If your piano is near your router, use an ethernet cable. If
                  it&apos;s not, a powerline adapter can route ethernet through
                  your home&apos;s electrical wiring.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  You need at least 10 Mbps upload speed for decent quality
                  video. Most home connections have this, but check during your
                  typical lesson time &mdash; if your family is streaming video
                  simultaneously, your bandwidth drops. Close other
                  applications, especially anything that uploads or downloads in
                  the background.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  Software settings that make a difference
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  Zoom is the most widely used platform for online lessons, and
                  with the right settings it works very well. Beyond enabling
                  Original Sound, set your audio to &ldquo;High Fidelity Music
                  Mode&rdquo; if available. Disable &ldquo;Automatically adjust
                  microphone volume&rdquo; &mdash; this prevents the software
                  from boosting volume during quiet passages and creating
                  distortion during loud ones.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  For video, enable HD if your connection supports it. Turn off
                  virtual backgrounds &mdash; they consume processing power and
                  can create visual artifacts around your hands. A clean, simple
                  background is better than a virtual beach.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  Piano placement and room acoustics
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  The room itself affects what your teacher hears. Hard surfaces
                  create echo and harshness. A carpeted room with some soft
                  furnishings naturally absorbs excess reverb. You don&apos;t
                  need acoustic treatment &mdash; a bookshelf, curtains, and a
                  rug do most of the work.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  Position the piano so you can place the camera and microphone
                  without them being in your way. Leave enough space to sit
                  comfortably and move your arms freely. If you use a digital
                  piano, you can also connect it directly to your computer via
                  USB or audio interface for pristine sound quality &mdash;
                  though this requires a bit more technical setup.
                </p>

                <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                  The budget setup vs. the ideal setup
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  Budget (under 50 dollars): Your phone as a second camera on a
                  gooseneck mount, earbuds with a built-in microphone (better
                  than laptop mic), and a desk lamp for lighting. This is enough
                  to get started and learn effectively.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  Ideal (100 to 200 dollars): A USB condenser microphone on a
                  small stand, an external webcam with wide angle or your phone
                  on a mount, good lighting, and a wired internet connection.
                  This setup delivers audio and video quality that approaches
                  what I use for my own teaching.
                </p>

                <p className="text-zinc-400 leading-relaxed mt-6">
                  Don&apos;t let gear anxiety stop you from starting. I&apos;ve
                  given excellent lessons to students using nothing but an iPad
                  propped on a stack of books. The technology enables the
                  teaching &mdash; it doesn&apos;t replace it. Start with what
                  you have and upgrade as you go.
                </p>

                <div className="mt-12 p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <p className="text-zinc-300 font-medium">
                    Ready to try an online lesson?
                  </p>
                  <p className="text-zinc-500 text-sm mt-2">
                    I&apos;ll help you optimize your setup in the first session
                    so every lesson after that sounds and looks great.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block mt-4 text-sm text-zinc-400 hover:text-amber-300 transition-colors"
                  >
                    Book your first lesson &rarr;
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
