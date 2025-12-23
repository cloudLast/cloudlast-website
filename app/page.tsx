import Image from 'next/image'
import { copy } from '../lib/copy'

export default function Home() {
  const { hero, services, about, contact } = copy.it
  const [primaryService, secondaryService, tertiaryService] = services.items

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 md:py-24 space-y-24 md:space-y-32">
      <section className="flex flex-col items-center gap-8 text-center">
        <div className="flex items-center gap-3">
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

        <div className="space-y-4">
          <p className="accent-gradient text-sm font-semibold uppercase tracking-[0.3em]">
            {hero.eyebrow}
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            {hero.title}
          </h1>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            {hero.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contatti" className="cta-primary">
            {hero.ctaPrimary}
          </a>
          <a href="#servizi" className="cta-secondary">
            {hero.ctaSecondary}
          </a>
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
