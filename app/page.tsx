export const metadata = {
  title: "Invisible Mobile | AI Global Connectivity",
  description: "One eSIM. One subscription. AI handles everything.",
};

const features = [
  "One eSIM installed once",
  "AI-managed connectivity",
  "Global coverage ready",
  "No roaming complexity",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] text-[#111111]">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-6">
        <nav className="flex items-center justify-between">
          <div className="text-lg font-semibold tracking-tight">Invisible Mobile</div>
          <div className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm">
            AI Operator
          </div>
        </nav>

        <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 w-fit rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm">
              The invisible mobile operator
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              Internet everywhere. No effort.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60 sm:text-xl">
              One subscription, one eSIM, and an AI agent that manages connectivity,
              usage, support and account actions for the user.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="rounded-full bg-black px-7 py-4 text-center text-sm font-semibold text-white" href="#waitlist">
                Join early access
              </a>
              <a className="rounded-full border border-black/10 bg-white px-7 py-4 text-center text-sm font-semibold" href="#concept">
                See concept
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm rounded-[2.5rem] border border-black/10 bg-black p-3 shadow-2xl shadow-black/20">
            <div className="rounded-[2rem] bg-[#f7f5ef] p-5">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-medium">Global eSIM</span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Connected
                </span>
              </div>

              <div className="rounded-[1.7rem] bg-white p-5 shadow-sm">
                <p className="text-sm text-black/50">Available data</p>
                <div className="mt-3 text-5xl font-semibold tracking-tight">42.8 GB</div>
                <p className="mt-3 text-sm text-black/50">184 countries ready</p>
              </div>

              <div className="mt-4 rounded-[1.7rem] bg-black p-5 text-white">
                <p className="text-sm text-white/50">AI Telecom Agent</p>
                <p className="mt-3 text-xl font-semibold leading-7">
                  You are covered in your next destination. Nothing to configure.
                </p>
              </div>

              <button className="mt-4 w-full rounded-full bg-emerald-500 py-4 text-sm font-bold text-black">
                Talk to AI
              </button>
            </div>
          </div>
        </div>

        <div id="concept" className="grid gap-3 pb-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature} className="rounded-3xl border border-black/10 bg-white/70 p-5 text-sm font-medium">
              {feature}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
