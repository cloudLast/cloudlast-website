import Image from 'next/image'
import { copy } from '../lib/copy'

export default function Home() {
  const { hero, services, about, contact } = copy.it
  const [primaryService, secondaryService, tertiaryService] = services.items

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 md:py-24 space-y-24 md:space-y-32">
      <section className="grid grid-cols-1 items-center gap-8 md:gap-14 lg:grid-cols-[1.05fr,0.95fr]">
        <div className="space-y-6 md:space-y-8 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <Image
              src="/logo.png"
              alt="Cloudlast logo"
              width={56}
              height={56}
              className="h-12 w-12"
            />
            <span className="text-xl font-semibold leading-none">
              <span className="brand">Cloudlast</span>
            </span>
          </div>

          <div className="space-y-3 md:space-y-4">
            <p className="accent-gradient text-sm font-semibold uppercase tracking-[0.3em]">
              {hero.eyebrow}
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
              {hero.title}
            </h1>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              {hero.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:max-w-3xl">
            {hero.highlights?.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-left shadow-lg shadow-cyan-500/5"
              >
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p className="text-sm text-neutral-400">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <a
              href={hero.founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full sm:w-auto items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 pr-4 shadow-lg shadow-cyan-500/10 transition hover:-translate-y-[1px] hover:border-cyan-400/60"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-emerald-300 to-violet-500 text-sm font-semibold text-black">
                {hero.founder.initials}
              </span>
              <span className="text-left">
                <span className="block text-sm font-semibold text-white">
                  {hero.founder.name}
                </span>
                <span className="block text-xs text-neutral-400">
                  {hero.founder.role}
                </span>
              </span>
              <span className="text-xs font-semibold text-cyan-300">LinkedIn ↗</span>
            </a>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a href="#contatti" className="cta-primary w-full sm:w-auto">
                {hero.ctaPrimary}
              </a>
              <a href="#servizi" className="cta-secondary w-full sm:w-auto">
                {hero.ctaSecondary}
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-emerald-400/5 to-violet-500/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur">
            <div className="flex items-center justify-between text-sm text-neutral-300">
              <span className="font-semibold">Mappa di delivery</span>
              <span className="rounded-full bg-white/10 px-2 py-1 text-[11px] uppercase tracking-wide text-white">
                Live
              </span>
            </div>

            <div className="mt-5 grid grid-cols-12 items-end gap-1 h-28">
              {[36, 52, 64, 80, 58, 72, 90, 68, 84, 60, 76, 92].map((height, index) => (
                <div
                  key={index}
                  className="rounded-full bg-gradient-to-t from-cyan-500/30 via-sky-400/50 to-white"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                <p className="text-xs text-neutral-400">Stabilità piattaforme</p>
                <p className="text-lg font-semibold text-white">99,95%</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                <p className="text-xs text-neutral-400">Tempo al valore</p>
                <p className="text-lg font-semibold text-white">-27%</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                <p className="text-xs text-neutral-400">AI cases consegnati</p>
                <p className="text-lg font-semibold text-white">30+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servizi" className="space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
            {services.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {services.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-neutral-800/60 bg-neutral-900/40 p-6 space-y-3">
            <h3 className="text-lg font-semibold">{primaryService?.title}</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {primaryService?.description}
            </p>
          </div>
          <div className="rounded-xl border border-neutral-800/60 bg-neutral-900/40 p-6 space-y-3">
            <h3 className="text-lg font-semibold">{secondaryService?.title}</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {secondaryService?.description}
            </p>
          </div>
          <div className="rounded-xl border border-neutral-800/60 bg-neutral-900/40 p-6 space-y-3">
            <h3 className="text-lg font-semibold">{tertiaryService?.title}</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {tertiaryService?.description}
            </p>
          </div>
        </div>
      </section>

      <section id="chi-siamo" className="space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
            {about.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {about.title}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-neutral-300 leading-relaxed">{about.description}</p>
        </div>
      </section>

      <section id="contatti" className="space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
            {contact.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {contact.title}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-lg text-neutral-300 leading-relaxed">{contact.description}</p>

          <a href="mailto:info@cloudlast.it" className="cta-primary">
            {contact.cta}
          </a>
        </div>
      </section>
    </main>
  )
}
