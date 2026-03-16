"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, Music } from "lucide-react";
import Script from "next/script";

type FloatingStyle = "bar" | "widget" | "panel";

function BrevoFormInline({ id = "sib-form-floating" }: { id?: string }) {
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
            .floating-brevo input:-ms-input-placeholder { text-align:left; font-family:Helvetica,sans-serif; color:#71717a; }
            .floating-brevo input::placeholder { text-align:left; font-family:Helvetica,sans-serif; color:#71717a; }
            .floating-brevo .input { background-color: rgba(39,39,42,0.8) !important; border-color: #3f3f46 !important; color: #fff !important; border-radius: 8px !important; }
            .floating-brevo .input:focus { border-color: rgba(245,158,11,0.5) !important; }
            .floating-brevo .sib-form-block__button { background-color: #f59e0b !important; color: #000 !important; border-radius: 8px !important; font-weight: 700 !important; }
            .floating-brevo .sib-form-block__button:hover { background-color: #fbbf24 !important; }
            .floating-brevo .entry__specification { color: #71717a !important; }
            .floating-brevo .sib-form-message-panel { max-width: 100% !important; }
          `,
        }}
      />
      <link
        rel="stylesheet"
        href="https://sibforms.com/forms/end-form/build/sib-styles.css"
      />
      <div className="floating-brevo sib-form" style={{ textAlign: "center" }}>
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
              <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
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
              <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
              </svg>
              <span className="sib-form-message-panel__inner-text">
                Check your inbox &mdash; your free guide is on its way!
              </span>
            </div>
          </div>

          <div
            id="sib-container"
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
              id={id}
              method="POST"
              action="https://60a76cb1.sibforms.com/serve/MUIFADAV1c6pt9Z65_slSqqThRF2nokozLqDan_dAAffCzQRx6Fv7sTfEBrPSiD2brY08u53SfSQ4iOdVmd3hhWjJ6aVpZdP2ZAive9v_snAOJxV-GXx_gR44L--EUr-s7LViQknM8xeiqjcTqhAgEqe9HnBHAKHhjUcqhKLOgAWU_agBa4VaE5PQD8-ppvUROUWaBzijjWIkExEfw=="
              data-type="subscription"
            >
              <div style={{ padding: "4px 0" }}>
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
              <div style={{ padding: "4px 0" }}>
                <div className="sib-form-block" style={{ textAlign: "left" }}>
                  <button
                    className="sib-form-block__button sib-form-block__button-with-loader"
                    style={{
                      fontSize: 16,
                      textAlign: "left",
                      fontWeight: 700,
                      fontFamily: "Helvetica, sans-serif",
                      color: "#FFFFFF",
                      backgroundColor: "#3E4857",
                      borderRadius: 3,
                      borderWidth: 0,
                    }}
                    form={id}
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

/* ─── STYLE 1: Sticky Bottom Bar ─── */
function StickyBar({
  onOpen,
  onDismiss,
}: {
  onOpen: () => void;
  onDismiss: () => void;
}) {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-amber-500/20 bg-zinc-950/95 backdrop-blur-lg"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3 min-w-0">
          <div className="hidden sm:flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-amber-500/10">
            <FileText className="h-4 w-4 text-amber-500" />
          </div>
          <p className="text-sm text-zinc-300 truncate">
            <span className="font-semibold text-white">Free Guide:</span>{" "}
            4 Practice Secrets From a Concert Pianist
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={onOpen}
            className="rounded-full bg-amber-500 px-5 py-2 text-sm font-bold text-black hover:bg-amber-400 transition-colors"
          >
            Get It Free
          </button>
          <button
            onClick={onDismiss}
            className="p-1.5 text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── STYLE 2: Floating Corner Widget ─── */
function CornerWidget({
  onOpen,
  onDismiss,
}: {
  onOpen: () => void;
  onDismiss: () => void;
}) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <button
        onClick={onDismiss}
        className="absolute -top-2 -right-2 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-600 transition-colors"
      >
        <X className="h-3 w-3" />
      </button>
      <button
        onClick={onOpen}
        className="group flex items-center gap-3 rounded-2xl border border-amber-500/20 bg-zinc-900/95 px-5 py-4 shadow-2xl shadow-amber-500/10 backdrop-blur-lg hover:border-amber-500/40 transition-all"
      >
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-amber-500/15 group-hover:bg-amber-500/25 transition-colors">
          <Music className="h-5 w-5 text-amber-500" />
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold text-white">Free Guide</p>
          <p className="text-xs text-zinc-500">4 Practice Secrets</p>
        </div>
      </button>
    </motion.div>
  );
}

/* ─── STYLE 3: Slide-Up Panel ─── */
function SlidePanel({
  onDismiss,
}: {
  onDismiss: () => void;
}) {
  return (
    <motion.div
      initial={{ y: 300 }}
      animate={{ y: 0 }}
      exit={{ y: 300 }}
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-amber-500/20 bg-zinc-950/98 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-lg px-6 py-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-amber-500" />
            <h3 className="text-sm font-bold text-white">
              Free Guide: 4 Practice Secrets
            </h3>
          </div>
          <button
            onClick={onDismiss}
            className="p-1 text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <p className="text-xs text-zinc-500 mb-3">
          From a Liszt Competition winner &mdash; transform how you practice.
        </p>
        <BrevoFormInline id="sib-form-panel" />
      </div>
    </motion.div>
  );
}

/* ─── MODAL (for bar + widget styles) ─── */
function FormModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-2xl border border-amber-500/20 bg-zinc-950 p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-zinc-500 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <FileText className="h-4 w-4 text-amber-500" />
          <span className="text-xs font-medium tracking-wide text-amber-400">
            FREE PDF GUIDE
          </span>
        </div>

        <h3 className="text-xl font-bold text-white leading-tight mb-2">
          4 Practice Secrets I Learned From One of the World&apos;s Greatest
          Concert Pianists
        </h3>

        <p className="text-sm text-zinc-500 mb-6">
          The techniques from a Liszt Competition winner &mdash; yours for free.
        </p>

        <BrevoFormInline id="sib-form-modal" />

        <p className="text-center text-[11px] text-zinc-600 mt-3">
          No spam, ever. Unsubscribe anytime.
        </p>
      </motion.div>
    </motion.div>
  );
}

/* ─── MAIN COMPONENT ─── */
export function FloatingLeadMagnet() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [style, setStyle] = useState<FloatingStyle>("bar");

  // Read style from URL param for preview: ?float=bar|widget|panel
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const s = params.get("float") as FloatingStyle | null;
    if (s && ["bar", "widget", "panel"].includes(s)) {
      setStyle(s);
    }
  }, []);

  // Show after scrolling past hero
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > window.innerHeight * 0.5;
      if (scrolled && !dismissed) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  const handleDismiss = useCallback(() => {
    setDismissed(true);
    setVisible(false);
  }, []);

  const handleOpen = useCallback(() => {
    setModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  return (
    <>
      <AnimatePresence>
        {visible && !dismissed && !modalOpen && (
          <>
            {style === "bar" && (
              <StickyBar onOpen={handleOpen} onDismiss={handleDismiss} />
            )}
            {style === "widget" && (
              <CornerWidget onOpen={handleOpen} onDismiss={handleDismiss} />
            )}
            {style === "panel" && (
              <SlidePanel onDismiss={handleDismiss} />
            )}
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {modalOpen && <FormModal onClose={handleCloseModal} />}
      </AnimatePresence>

      <Script
        src="https://sibforms.com/forms/end-form/build/main.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://www.google.com/recaptcha/api.js?render=6LfYE4wsAAAAAF-3-E4szNHyVQCla37nFEvOb_Uj&hl=en"
        strategy="lazyOnload"
      />
    </>
  );
}
