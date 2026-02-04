"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";

const features = [
  "Weekly 1-on-1 private lessons (60 min)",
  "Unlimited feedback on recordings",
  "Access to exclusive workshops",
  "Private community membership",
  "Personalized practice plans",
  "Direct messaging support",
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function PricingSection() {
  const [currency, setCurrency] = useState<"usd" | "eur">("usd");
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currency }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <section id="pricing" className="border-t border-zinc-900 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center"
        >
          <p className="text-sm font-light tracking-[0.3em] uppercase text-amber-500/80">
            Investment
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Monthly Mentorship
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-12"
        >
          {/* Currency Toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-full border border-zinc-800 bg-zinc-900/50 p-1">
              <button
                onClick={() => setCurrency("usd")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  currency === "usd"
                    ? "bg-amber-500 text-black"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                USD $
              </button>
              <button
                onClick={() => setCurrency("eur")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  currency === "eur"
                    ? "bg-amber-500 text-black"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                EUR €
              </button>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="mx-auto max-w-md">
            <div className="rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-zinc-900/40 p-8 backdrop-blur">
              {/* Price */}
              <div className="text-center">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-white">
                    {currency === "usd" ? "$499" : "€499"}
                  </span>
                  <span className="text-zinc-500">/month</span>
                </div>
                <p className="mt-2 text-sm text-zinc-500">
                  Cancel anytime. No long-term commitment.
                </p>
              </div>

              {/* Features */}
              <ul className="mt-8 space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20">
                      <Check className="h-3 w-3 text-amber-500" />
                    </div>
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={handleCheckout}
                disabled={loading}
                className="mt-8 w-full group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 text-base font-semibold text-black transition-all duration-300 hover:from-amber-400 hover:to-amber-500 hover:shadow-[0_0_40px_rgba(245,158,11,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Start Your Journey
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <p className="mt-4 text-center text-xs text-zinc-600">
                Secure payment via Stripe. You'll be redirected to checkout.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
