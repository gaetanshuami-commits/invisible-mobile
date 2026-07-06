"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Lang = "en" | "fr";

const copy = {
  en: {
    nav: ["Platform", "AI Operator", "Coverage", "Security", "Pricing"],
    title: "A global mobile operator powered by AI.",
    subtitle:
      "One eSIM, one subscription, one intelligent operator. Invisible Mobile removes the complexity of roaming, setup, support and data management.",
    cta: "Request early access",
    secondary: "Explore platform",
    language: "Language",
  },
  fr: {
    nav: ["Plateforme", "Opérateur IA", "Couverture", "Sécurité", "Prix"],
    title: "Un opérateur mobile mondial piloté par IA.",
    subtitle:
      "Une eSIM, un abonnement, un opérateur intelligent. Invisible Mobile supprime la complexité du roaming, de la configuration, du support et de la gestion data.",
    cta: "Demander un accès",
    secondary: "Voir la plateforme",
    language: "Langue",
  },
};

const sections = [
  {
    kicker: "Platform",
    title: "One eSIM. One account. Global access.",
    text: "Users install once and manage their mobile connectivity from a single AI-powered account.",
  },
  {
    kicker: "AI Operator",
    title: "Support becomes conversational.",
    text: "Coverage, usage, billing, setup and troubleshooting can be handled through a simple AI interface.",
  },
  {
    kicker: "Coverage",
    title: "Built for international mobility.",
    text: "Designed to connect through eSIM infrastructure partners and scale across supported countries.",
  },
  {
    kicker: "Security",
    title: "Identity, payment and account protection.",
    text: "The platform is designed around secure onboarding, payment control and protected account access.",
  },
];

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = copy[lang];

  return (
    <main className="bg-[#f4f1e8] text-black">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f4f1e8]/85 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-xl font-semibold tracking-tight">Invisible Mobile</div>

          <div className="hidden gap-8 text-sm font-medium text-black/55 lg:flex">
            {t.nav.map((item) => (
              <a key={item} href="#platform">
                {item}
              </a>
            ))}
          </div>

          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold outline-none"
            aria-label={t.language}
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
        </div>
      </nav>

      <section className="relative min-h-screen overflow-hidden px-6 pt-32">
        <div className="cinematic-bg" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_1fr]">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-6 inline-flex rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold">
              AI-first global mobile infrastructure
            </div>

            <h1 className="max-w-5xl text-6xl font-semibold leading-[0.88] tracking-[-0.07em] sm:text-8xl">
              {t.title}
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-black/60">{t.subtitle}</p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#pricing" className="rounded-full bg-black px-8 py-4 text-center text-sm font-semibold text-white">
                {t.cta}
              </a>
              <a href="#platform" className="rounded-full border border-black/10 bg-white px-8 py-4 text-center text-sm font-semibold">
                {t.secondary}
              </a>
            </div>
          </motion.div>

          <div className="relative mx-auto h-[680px] w-full max-w-[480px]">
            <div className="signal-ring ring-one" />
            <div className="signal-ring ring-two" />
            <div className="signal-ring ring-three" />

            <motion.div
              className="phone-shell"
              initial={{ opacity: 0, rotate: -6, y: 40 }}
              animate={{ opacity: 1, rotate: 0, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="phone-screen">
                <div className="video-layer layer-one" />
                <div className="video-layer layer-two" />
                <div className="video-layer layer-three" />

                <div className="screen-content">
                  <div className="screen-top">
                    <span>Global eSIM</span>
                    <span>Connected</span>
                  </div>

                  <div className="data-card">
                    <p>Available data</p>
                    <strong>42.8 GB</strong>
                    <span>184 countries ready</span>
                  </div>

                  <div className="ai-card">
                    <p>Invisible AI</p>
                    <strong>You are covered. Nothing to configure.</strong>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="floating-card card-left">
              <span>Network</span>
              <strong>5G Ready</strong>
            </div>

            <div className="floating-card card-right">
              <span>AI Action</span>
              <strong>Auto setup</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-black py-5 text-white">
        <div className="marquee text-2xl font-semibold tracking-tight">
          ONE ESIM · ONE SUBSCRIPTION · AI OPERATOR · GLOBAL CONNECTIVITY · ZERO ROAMING COMPLEXITY ·
        </div>
      </section>

      <section id="platform" className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[2rem] border border-black/10 bg-white/75 p-8 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/40">{section.kicker}</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em]">{section.title}</h2>
              <p className="mt-5 leading-8 text-black/55">{section.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-28">
        <div className="rounded-[3rem] bg-black p-10 text-white sm:p-16">
          <h2 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">
            Simple pricing. Built after wholesale validation.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {["One", "Global", "Ultra"].map((plan) => (
              <div key={plan} className="rounded-[2rem] bg-white/10 p-8">
                <h3 className="text-3xl font-semibold">{plan}</h3>
                <p className="mt-5 leading-7 text-white/55">
                  Early concept plan. Final pricing depends on telecom infrastructure partner conditions.
                </p>
              </div>
            ))}
          </div>
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
