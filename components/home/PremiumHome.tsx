"use client";

import { useState } from "react";
import type { Lang } from "@/app/data/content";
import { content, languages } from "@/app/data/content";

export default function PremiumHome() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  return (
    <main className="min-h-screen bg-[#f4f1e8] text-black">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f4f1e8]/85 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <strong className="text-xl tracking-tight">Invisible Mobile</strong>

          <select
            value={lang}
            onChange={(event) => setLang(event.target.value as Lang)}
            className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold"
            aria-label="Select language"
          >
            {languages.map((language) => (
              <option key={language.code} value={language.code}>
                {language.label}
              </option>
            ))}
          </select>
        </div>
      </nav>

      <section className="relative min-h-screen overflow-hidden px-6 pt-32">
        <div className="hero-video-effect" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold">
              AI-first global mobile infrastructure
            </p>

            <h1 className="max-w-5xl text-6xl font-semibold leading-[0.88] tracking-[-0.07em] sm:text-8xl">
              {t.heroTitle}
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-black/60">
              {t.heroSubtitle}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a className="rounded-full bg-black px-8 py-4 text-center text-sm font-semibold text-white">
                {t.primaryCta}
              </a>
              <a className="rounded-full border border-black/10 bg-white px-8 py-4 text-center text-sm font-semibold">
                {t.secondaryCta}
              </a>
            </div>
          </div>

          <div className="relative mx-auto h-[680px] w-full max-w-[480px]">
            <div className="phone-frame">
              <div className="phone-screen-pro">
                <div className="animated-network" />
                <div className="phone-ui">
                  <div className="flex justify-between text-sm font-semibold text-white">
                    <span>Global eSIM</span>
                    <span>Connected</span>
                  </div>

                  <div className="mt-auto rounded-[2rem] bg-white/90 p-6 text-black backdrop-blur-xl">
                    <p className="text-sm text-black/45">Available data</p>
                    <p className="mt-2 text-6xl font-semibold tracking-[-0.06em]">
                      42.8 GB
                    </p>
                    <p className="mt-2 text-sm text-black/45">
                      184 countries ready
                    </p>
                  </div>

                  <div className="mt-3 rounded-[2rem] bg-black/80 p-6 text-white backdrop-blur-xl">
                    <p className="text-sm text-white/45">Invisible AI</p>
                    <p className="mt-2 text-2xl font-semibold leading-7">
                      You are covered. Nothing to configure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-card-pro left-card">
              <span>Network</span>
              <strong>5G Ready</strong>
            </div>

            <div className="floating-card-pro right-card">
              <span>AI Action</span>
              <strong>Auto setup</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-black py-5 text-white">
        <div className="marquee text-2xl font-semibold">
          ONE ESIM · ONE SUBSCRIPTION · AI OPERATOR · GLOBAL CONNECTIVITY · ZERO ROAMING COMPLEXITY ·
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            ["Platform", "One eSIM. One account. Global access."],
            ["AI Operator", "Support, setup, usage and travel become conversational."],
            ["Coverage", "Designed to scale through eSIM infrastructure partners."],
            ["Security", "Identity, payment and account access protected."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[2rem] border border-black/10 bg-white/75 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/40">
                {title}
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em]">
                {text}
              </h2>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          {["Product", "Company", "Legal", "Support"].map((title) => (
            <div key={title}>
              <h4 className="font-semibold">{title}</h4>
              <div className="mt-4 space-y-3 text-sm text-black/50">
                <p>Platform</p>
                <p>AI Operator</p>
                <p>Coverage</p>
                <p>Contact</p>
              </div>
            </div>
          ))}
        </div>
      </footer>
    </main>
  );
}
