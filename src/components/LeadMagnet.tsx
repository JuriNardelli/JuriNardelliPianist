"use client";

import { useEffect } from "react";
import Script from "next/script";
import { motion } from "framer-motion";

export function LeadMagnet() {
  useEffect(() => {
    // Brevo form global config
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
    <section className="relative z-10 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-zinc-900/80 via-zinc-900/60 to-amber-950/20 p-8 sm:p-12"
        >
          {/* Background glow */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />

          <div className="relative text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl leading-tight">
              Get the Free Guide: 4 Practice Secrets I Learned From One of the{" "}
              <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                World&apos;s Greatest Concert Pianists
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-zinc-400 text-sm leading-relaxed">
              I studied with one of the greatest concert pianists in the world. These are
              the 4 practice secrets he passed on to me — things no regular piano teacher
              will ever show you. Free, yours instantly.
            </p>

            {/* Brevo Embed Form */}
            <div className="mx-auto mt-8 max-w-[540px]">
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                    #sib-container input:-ms-input-placeholder { text-align:left; font-family:Helvetica,sans-serif; color:#71717a; }
                    #sib-container input::placeholder { text-align:left; font-family:Helvetica,sans-serif; color:#71717a; }
                    #sib-container textarea::placeholder { text-align:left; font-family:Helvetica,sans-serif; color:#71717a; }
                    #sib-container a { text-decoration:underline; color:#fbbf24; }
                    #sib-container .input { background-color: rgba(39,39,42,0.5) !important; border-color: #3f3f46 !important; color: #fff !important; }
                    #sib-container .input:focus { border-color: rgba(245,158,11,0.5) !important; }
                    #sib-container .sib-form-block__button { background-color: #f59e0b !important; color: #000 !important; border-radius: 8px !important; }
                    #sib-container .sib-form-block__button:hover { background-color: #fbbf24 !important; }
                    #sib-container .entry__specification { color: #71717a !important; }
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
                      fontSize: 16,
                      textAlign: "left",
                      fontFamily: "Helvetica, sans-serif",
                      color: "#661d1d",
                      backgroundColor: "#ffeded",
                      borderRadius: 3,
                      borderColor: "#ff4949",
                      maxWidth: 540,
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
                      fontSize: 16,
                      textAlign: "left",
                      fontFamily: "Helvetica, sans-serif",
                      color: "#085229",
                      backgroundColor: "#e7faf0",
                      borderRadius: 3,
                      borderColor: "#13ce66",
                      maxWidth: 540,
                    }}
                  >
                    <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                      <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                        <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
                      </svg>
                      <span className="sib-form-message-panel__inner-text">
                        Check your inbox — your free guide is on its way!
                      </span>
                    </div>
                  </div>

                  <div
                    id="sib-container"
                    className="sib-container--large sib-container--vertical"
                    style={{
                      textAlign: "center",
                      backgroundColor: "transparent",
                      maxWidth: 540,
                      borderRadius: 3,
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
                      <div style={{ padding: "8px 0" }}>
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
                                  placeholder="EMAIL"
                                  data-required="true"
                                  required
                                />
                              </div>
                            </div>
                            <label
                              className="entry__error entry__error--primary"
                              style={{
                                fontSize: 16,
                                textAlign: "left",
                                fontFamily: "Helvetica, sans-serif",
                                color: "#661d1d",
                                backgroundColor: "#ffeded",
                                borderRadius: 3,
                                borderColor: "#ff4949",
                              }}
                            />
                            <label
                              className="entry__specification"
                              style={{
                                fontSize: 12,
                                textAlign: "left",
                                fontFamily: "Helvetica, sans-serif",
                                color: "#8390A4",
                              }}
                            >
                              Your email address
                            </label>
                          </div>
                        </div>
                      </div>
                      <div style={{ padding: "8px 0" }}>
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
                      <div style={{ padding: "8px 0" }}>
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
            </div>
          </div>
        </motion.div>
      </div>

      <Script
        src="https://sibforms.com/forms/end-form/build/main.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://www.google.com/recaptcha/api.js?render=6LfYE4wsAAAAAF-3-E4szNHyVQCla37nFEvOb_Uj&hl=en"
        strategy="lazyOnload"
      />
    </section>
  );
}
