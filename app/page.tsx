const stats = [
  ["184+", "countries ready"],
  ["60 sec", "to connect"],
  ["1", "eSIM forever"],
  ["24/7", "AI support"],
];

const features = [
  "Install once, stay connected",
  "AI selects the simplest path",
  "No country-by-country shopping",
  "No roaming stress",
  "Smart usage alerts",
  "Instant top-up ready",
];

const steps = [
  ["01", "Create your account", "Sign up in seconds with a clean mobile-first onboarding."],
  ["02", "Install one eSIM", "Your global eSIM stays on your phone and follows your travel."],
  ["03", "Let AI handle it", "Ask anything. Coverage, data, support, billing and setup become effortless."],
];

const people = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=90",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=90",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=90",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=90",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] text-[#0d0d0d]">
      <nav className="sticky top-0 z-50 border-b border-black/10 bg-[#f6f4ef]/80 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="text-xl font-black tracking-tight">Invisible Mobile</div>
          <div className="hidden gap-8 text-sm font-medium text-black/60 md:flex">
            <a href="#ai">AI Operator</a>
            <a href="#how">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
          <a className="rounded-full bg-black px-5 py-3 text-sm font-bold text-white" href="#pricing">
            Early access
          </a>
        </div>
      </nav>

      <section className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold">
            The invisible AI mobile operator
          </div>
          <h1 className="max-w-5xl text-6xl font-black leading-[0.9] tracking-[-0.07em] sm:text-8xl">
            Global mobile internet. Zero effort.
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-black/60">
            One subscription, one eSIM, one AI operator. Your phone stays connected across the world while AI manages coverage, data, support and account actions.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a className="rounded-full bg-black px-8 py-4 text-center text-sm font-bold text-white" href="#pricing">
              Join early access
            </a>
            <a className="rounded-full border border-black/10 bg-white px-8 py-4 text-center text-sm font-bold" href="#how">
              See how it works
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -left-10 top-10 h-44 w-44 rounded-full bg-emerald-300/40 blur-3xl" />
          <div className="absolute -right-10 bottom-10 h-44 w-44 rounded-full bg-blue-300/40 blur-3xl" />
          <div className="relative rounded-[3rem] border border-black/10 bg-black p-3 shadow-2xl shadow-black/25">
            <div className="rounded-[2.4rem] bg-[#f6f4ef] p-5">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Global eSIM</span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">Connected</span>
              </div>
              <div className="mt-7 rounded-[2rem] bg-white p-6 shadow-sm">
                <p className="text-sm text-black/40">Available data</p>
                <p className="mt-2 text-6xl font-black tracking-tight">42.8 GB</p>
                <p className="mt-2 text-sm text-black/40">184 countries ready</p>
              </div>
              <div id="ai" className="mt-4 rounded-[2rem] bg-black p-6 text-white">
                <p className="text-sm text-white/40">AI Telecom Agent</p>
                <p className="mt-3 text-2xl font-black leading-8">
                  You are covered. Nothing to configure.
                </p>
              </div>
              <button className="mt-4 w-full rounded-full bg-emerald-400 py-4 text-sm font-black text-black">
                Talk to AI
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-black py-5 text-white overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-2xl font-black tracking-tight">
          ONE ESIM · ONE SUBSCRIPTION · AI SUPPORT · GLOBAL COVERAGE · NO ROAMING STRESS · INSTALL ONCE · STAY CONNECTED ·
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <div className="rounded-[2rem] border border-black/10 bg-white/70 p-8" key={label}>
              <p className="text-5xl font-black tracking-tight">{value}</p>
              <p className="mt-3 text-sm font-semibold text-black/50">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">Built for humans</p>
            <h2 className="mt-4 text-5xl font-black tracking-[-0.05em] sm:text-7xl">
              Mobile connectivity without menus.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <div className="rounded-[1.5rem] border border-black/10 bg-white p-5 text-sm font-bold" key={feature}>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {people.map((src, index) => (
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white" key={src}>
              <img className="h-80 w-full object-cover" src={src} alt={`Invisible Mobile global customer ${index + 1}`} />
              <div className="p-5">
                <p className="text-sm font-black">Connected anywhere</p>
                <p className="mt-1 text-sm text-black/50">One experience for the whole world.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">How it works</p>
          <h2 className="mt-4 text-5xl font-black tracking-[-0.05em] sm:text-7xl">
            From signup to connected in under a minute.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map(([number, title, text]) => (
            <div className="rounded-[2rem] border border-black/10 bg-white p-8" key={number}>
              <p className="text-sm font-black text-emerald-700">{number}</p>
              <h3 className="mt-10 text-3xl font-black tracking-tight">{title}</h3>
              <p className="mt-4 leading-7 text-black/55">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[3rem] bg-black p-8 text-white sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-300">AI Operator</p>
              <h2 className="mt-4 text-5xl font-black tracking-[-0.05em] sm:text-7xl">
                Don’t search. Just ask.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/60">
                The AI agent can explain coverage, check usage, guide installation, prepare travel, suggest the right plan and help users without traditional telecom friction.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white/10 p-6">
              <p className="text-sm text-white/50">User</p>
              <p className="mt-2 rounded-3xl bg-white p-5 font-bold text-black">I’m going to Japan tomorrow. Am I covered?</p>
              <p className="mt-6 text-sm text-white/50">Invisible AI</p>
              <p className="mt-2 rounded-3xl bg-emerald-400 p-5 font-black text-black">
                Yes. Your eSIM is ready. No new purchase, no QR code, no setup.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">Pricing concept</p>
          <h2 className="mt-4 text-5xl font-black tracking-[-0.05em] sm:text-7xl">
            Simple plans. No roaming confusion.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["One", "9.99€", "Essential global connectivity"],
            ["Global", "19.99€", "More data, more countries, AI support"],
            ["Ultra", "29.99€", "Designed for heavy travel and remote work"],
          ].map(([name, price, text]) => (
            <div className="rounded-[2rem] border border-black/10 bg-white p-8" key={name}>
              <h3 className="text-3xl font-black">{name}</h3>
              <p className="mt-6 text-5xl font-black">{price}</p>
              <p className="mt-4 leading-7 text-black/55">{text}</p>
              <button className="mt-8 w-full rounded-full bg-black py-4 text-sm font-black text-white">
                Join waitlist
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-center text-5xl font-black tracking-[-0.05em]">FAQ</h2>
        <div className="mt-10 space-y-3">
          {[
            ["Is it a traditional operator?", "No. Invisible Mobile is designed as an AI-first digital mobile experience powered by eSIM infrastructure partners."],
            ["Do users install a new eSIM every trip?", "The goal is install once, then manage connectivity from the same account depending on provider capabilities."],
            ["Is the pricing final?", "No. Final pricing depends on wholesale data conditions from telecom infrastructure partners."],
          ].map(([q, a]) => (
            <div className="rounded-[1.5rem] border border-black/10 bg-white p-6" key={q}>
              <h3 className="font-black">{q}</h3>
              <p className="mt-3 leading-7 text-black/55">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[3rem] bg-emerald-400 p-10 text-center sm:p-16">
          <h2 className="text-5xl font-black tracking-[-0.06em] sm:text-8xl">
            Install once. Go anywhere.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8">
            The future mobile operator is invisible, intelligent and always ready.
          </p>
          <a className="mt-10 inline-flex rounded-full bg-black px-8 py-4 text-sm font-black text-white" href="#pricing">
            Join early access
          </a>
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-black/50 sm:flex-row">
          <p className="font-bold text-black">Invisible Mobile</p>
          <p>AI-powered global mobile connectivity platform.</p>
        </div>
      </footer>
    </main>
  );
}
