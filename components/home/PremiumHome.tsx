"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Globe2, LockKeyhole, RadioTower, ShieldCheck, Smartphone, Sparkles, Wifi, Zap } from "lucide-react";
import type { Lang } from "@/app/data/content";
import { content, languages } from "@/app/data/content";

const heroVideo = "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4";

const phonePhotos = [
  "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=1200&q=95",
  "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1200&q=95",
  "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?auto=format&fit=crop&w=1200&q=95",
];

const peoplePhotos = [
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=95",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=95",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=95",
];

const icons = [Smartphone, Bot, Globe2, Wifi, Zap, ShieldCheck];

const reveal = {
  initial: { opacity: 0, y: 48 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-90px" },
  transition: { duration: 0.7 },
};

export default function PremiumHome() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  return (
    <main className="overflow-hidden bg-[#f4f1e8] text-[#070707]">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/45 text-white backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[1480px] items-center justify-between px-6 py-4">
          <a className="text-xl font-semibold tracking-[-0.04em]" href="#">{t.brand}</a>

          <div className="hidden gap-7 text-sm font-medium text-white/65 lg:flex">
            {t.nav.map((item, index) => (
              <a key={item} href={`#section-${index}`}>{item}</a>
            ))}
          </div>

          <select
            value={lang}
            onChange={(event) => setLang(event.target.value as Lang)}
            className="h-11 rounded-xl border border-white/15 bg-white/10 px-4 text-sm font-semibold text-white outline-none"
          >
            {languages.map((language) => (
              <option key={language.code} value={language.code} className="text-black">
                {language.label}
              </option>
            ))}
          </select>
        </div>
      </nav>

      <section className="relative min-h-screen overflow-hidden bg-black px-6 pt-32 text-white">
        <video className="absolute inset-0 h-full w-full object-cover opacity-100" autoPlay muted loop playsInline src={heroVideo} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(16,185,129,.35),transparent_28%),linear-gradient(90deg,rgba(0,0,0,.25),rgba(0,0,0,.05),rgba(0,0,0,.15))]" />
        <div className="absolute inset-0 video-grid" />

        <div className="relative mx-auto grid min-h-[820px] max-w-[1480px] items-center gap-16 lg:grid-cols-[1.02fr_.98fr]">
          <motion.div initial={{ opacity: 0, y: 45 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold backdrop-blur-xl">
              <Sparkles size={16} /> {t.heroKicker}
            </p>

            <h1 className="max-w-5xl text-6xl font-semibold leading-[.86] tracking-[-.075em] sm:text-8xl xl:text-[7.4rem]">
              {t.heroTitle}
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-white/65">{t.heroSubtitle}</p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#pricing" className="rounded-full bg-white px-8 py-4 text-center text-sm font-semibold text-black">
                {t.primaryCta}
              </a>
              <a href="#section-1" className="rounded-full border border-white/15 bg-white/10 px-8 py-4 text-center text-sm font-semibold text-white backdrop-blur-xl">
                {t.secondaryCta}
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl gap-3 sm:grid-cols-3">
              {t.heroStats.map((stat) => (
                <div key={stat} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-semibold backdrop-blur-xl">
                  {stat}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative mx-auto h-[760px] w-full max-w-[640px]">
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />

            <motion.div initial={{ opacity: 0, rotate: -10, y: 70 }} animate={{ opacity: 1, rotate: -4, y: 0 }} transition={{ duration: 1.15 }} className="premium-phone main-phone">
              <div className="phone-notch" />
              <div className="phone-display">
                <img src={phonePhotos[0]} alt="Premium smartphone" className="absolute inset-0 h-full w-full object-cover opacity-45" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />
                <div className="relative z-10 flex h-full flex-col p-6">
                  <div className="flex justify-between text-xs font-semibold text-white/80">
                    <span>{t.brand}</span>
                    <span>5G</span>
                  </div>

                  <div className="mt-auto rounded-[30px] bg-white/92 p-6 text-black backdrop-blur-2xl">
                    <p className="text-xs font-semibold text-black/40">{t.phoneDataLabel}</p>
                    <p className="mt-2 text-6xl font-semibold tracking-[-.07em]">42.8 GB</p>
                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-black/10">
                      <div className="h-full w-[76%] rounded-full bg-black" />
                    </div>
                    <p className="mt-3 text-xs text-black/45">{t.phoneNetworkText}</p>
                  </div>

                  <div className="mt-3 rounded-[30px] bg-black/82 p-6 text-white backdrop-blur-2xl">
                    <p className="text-xs text-white/40">{t.phoneAiLabel}</p>
                    <p className="mt-2 text-xl font-semibold leading-6">{t.phoneAiText}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="glass-chip chip-left">
              <span>{t.chipNetworkLabel}</span>
              <strong>{t.chipNetworkValue}</strong>
            </div>

            <div className="glass-chip chip-right">
              <span>{t.chipAiLabel}</span>
              <strong>{t.chipAiValue}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-black/10 bg-black py-5 text-white">
        <div className="marquee text-2xl font-semibold">
          {t.marquee}
        </div>
      </section>

      <section id="section-0" className="mx-auto max-w-[1480px] px-6 py-32">
        <motion.div {...reveal} className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.22em] text-black/40">{t.platformEyebrow}</p>
            <h2 className="mt-5 text-5xl font-semibold leading-[.95] tracking-[-.06em] sm:text-8xl">{t.platformTitle}</h2>
          </div>
          <p className="max-w-2xl self-end text-xl leading-9 text-black/55">{t.platformText}</p>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.cards.map(([title, text], index) => {
            const Icon = icons[index];
            return (
              <motion.article {...reveal} key={title} className="feature-card">
                <Icon key={`${title}-icon`} size={30} strokeWidth={1.6} />
                <h3 key={`${title}-heading`} className="mt-16 text-2xl font-semibold tracking-[-.04em]">{title}</h3>
                <p key={`${title}-text`} className="mt-4 leading-7 text-black/50">{text}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="section-1" className="px-6 py-24">
        <div className="mx-auto max-w-[1480px] overflow-hidden rounded-[52px] bg-black p-8 text-white sm:p-16">
          <div className="grid gap-16 lg:grid-cols-2">
            <motion.div {...reveal}>
              <p className="text-sm font-semibold uppercase tracking-[.22em] text-white/40">{t.aiEyebrow}</p>
              <h2 className="mt-5 text-5xl font-semibold leading-[.95] tracking-[-.06em] sm:text-7xl">{t.aiTitle}</h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-white/55">{t.aiText}</p>
            </motion.div>

            <motion.div {...reveal} className="space-y-4">
              {t.aiMessages.map(([role, message], index) => (
                <div key={`${role}-${index}`} className={index % 2 === 0 ? "ml-auto max-w-md rounded-[28px] bg-white p-6 text-black" : "max-w-md rounded-[28px] border border-white/10 bg-white/10 p-6"}>
                  <p className="text-xs font-semibold uppercase tracking-[.18em] opacity-50">{role}</p>
                  <p className="mt-3 font-medium leading-7">{message}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="section-2" className="mx-auto max-w-[1480px] px-6 py-32">
        <motion.div {...reveal} className="grid gap-10 lg:grid-cols-[1fr_.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.22em] text-black/40">{t.appEyebrow}</p>
            <h2 className="mt-5 text-5xl font-semibold leading-[.95] tracking-[-.06em] sm:text-8xl">{t.appTitle}</h2>
          </div>
          <p className="self-end text-xl leading-9 text-black/55">{t.appText}</p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {t.appCards.map(([title, text], index) => (
            <motion.div {...reveal} key={title} className="app-phone">
              <div className="app-display">
                <img src={phonePhotos[index]} alt={title} className="absolute inset-0 h-full w-full object-cover opacity-45" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                <div className="relative z-10 flex h-full flex-col p-6 text-white">
                  <p className="text-sm font-semibold text-white/60">Invisible Mobile</p>
                  <h3 className="mt-2 text-4xl font-semibold tracking-[-.05em]">{title}</h3>
                  <div className="mt-auto rounded-[30px] bg-white/92 p-6 text-black backdrop-blur-xl">
                    <p className="text-sm text-black/45">{text}</p>
                    <p className="mt-3 text-2xl font-semibold">{t.appReadyText}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="section-3" className="mx-auto max-w-[1480px] px-6 py-32">
        <motion.div {...reveal} className="grid gap-10 lg:grid-cols-[.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.22em] text-black/40">{t.coverageEyebrow}</p>
            <h2 className="mt-5 text-5xl font-semibold leading-[.95] tracking-[-.06em] sm:text-8xl">{t.coverageTitle}</h2>
          </div>
          <p className="self-end text-xl leading-9 text-black/55">{t.coverageText}</p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {peoplePhotos.map((src, index) => (
            <motion.article {...reveal} key={src} className="group relative h-[590px] overflow-hidden rounded-[40px]">
              <img key={`${src}-image`} src={src} alt={t.people[index][0]} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div key={`${src}-overlay`} className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div key={`${src}-content`} className="absolute bottom-0 p-8 text-white">
                <h3 className="text-3xl font-semibold tracking-[-.04em]">{t.people[index][0]}</h3>
                <p className="mt-3 max-w-sm text-white/65">{t.people[index][1]}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="section-4" className="mx-auto max-w-[1480px] px-6 py-32">
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div {...reveal} className="rounded-[44px] bg-[#dedbd2] p-10 sm:p-14">
            <p className="text-sm font-semibold uppercase tracking-[.22em] text-black/40">{t.securityEyebrow}</p>
            <h2 className="mt-5 text-5xl font-semibold tracking-[-.06em]">{t.securityTitle}</h2>
            <p className="mt-6 leading-8 text-black/55">{t.securityText}</p>
            <div className="mt-14 space-y-4">
              {t.securityItems.map((item) => (
                <div key={item} className="flex items-center justify-between border-b border-black/10 py-5">
                  <span className="font-medium">{item}</span>
                  <LockKeyhole size={20} />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...reveal} className="comparison-card">
            <p className="text-sm font-semibold uppercase tracking-[.22em] text-white/40">{t.comparisonEyebrow}</p>
            <h2 className="mt-5 text-5xl font-semibold tracking-[-.06em] text-white">{t.comparisonTitle}</h2>
            <div className="mt-14 grid grid-cols-2 gap-4">
              <div className="rounded-[28px] bg-white/10 p-6 text-white/55">
                <p className="font-semibold text-white">{t.comparison.oldTitle}</p>
                {t.comparison.old.map((item) => <p key={item} className="mt-4">{item}</p>)}
              </div>
              <div className="rounded-[28px] bg-white p-6 text-black">
                <p className="font-semibold">{t.comparison.newTitle}</p>
                {t.comparison.next.map((item) => <p key={item} className="mt-4">{item}</p>)}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-[1480px] px-6 py-32">
        <motion.div {...reveal} className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[.22em] text-black/40">{t.pricingEyebrow}</p>
          <h2 className="mx-auto mt-5 max-w-5xl text-5xl font-semibold tracking-[-.06em] sm:text-8xl">{t.pricingTitle}</h2>
        </motion.div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {t.plans.map(([name, description], index) => (
            <motion.article {...reveal} key={name} className={index === 1 ? "price-card price-featured" : "price-card"}>
              <p className="text-3xl font-semibold">{name}</p>
              <p className="mt-4 text-black/50">{description}</p>
              <p className="mt-16 text-sm text-black/40">{t.pricingNote}</p>
              <button className="mt-8 w-full rounded-full bg-black py-4 text-sm font-semibold text-white">{t.primaryCta}</button>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="section-6" className="mx-auto max-w-5xl px-6 py-32">
        <motion.div {...reveal} className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[.22em] text-black/40">{t.faqEyebrow}</p>
          <h2 className="mt-5 text-5xl font-semibold tracking-[-.06em] sm:text-7xl">{t.faqTitle}</h2>
        </motion.div>

        <div className="mt-14 space-y-3">
          {t.faq.map(([question, answer]) => (
            <details key={question} className="rounded-[24px] border border-black/10 bg-white p-6">
              <summary className="cursor-pointer font-semibold">{question}</summary>
              <p className="mt-4 max-w-3xl leading-7 text-black/50">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <motion.div {...reveal} className="cta-scene mx-auto max-w-[1480px] overflow-hidden rounded-[52px] p-10 text-center sm:p-20">
          <h2 className="mx-auto max-w-5xl text-6xl font-semibold leading-[.9] tracking-[-.075em] sm:text-9xl">{t.finalTitle}</h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-black/55">{t.finalText}</p>
          <button className="mt-10 rounded-full bg-black px-8 py-4 text-sm font-semibold text-white">{t.primaryCta}</button>
        </motion.div>
      </section>

      <footer className="border-t border-black/10 px-6 py-16">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid gap-12 md:grid-cols-5">
            <div className="md:col-span-2">
              <p className="text-2xl font-semibold tracking-[-.04em]">Invisible Mobile</p>
              <p className="mt-5 max-w-sm leading-7 text-black/45">{t.footer.description}</p>
            </div>

            {t.footer.columns.map(([title, ...links]) => (
              <div key={title}>
                <p className="font-semibold">{title}</p>
                <div className="mt-5 space-y-3 text-sm text-black/45">
                  {links.map((link) => <p key={link}>{link}</p>)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col justify-between gap-4 border-t border-black/10 pt-8 text-sm text-black/40 sm:flex-row">
            <p>© 2026 Invisible Mobile.</p>
            <p>{t.footerTagline}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}





