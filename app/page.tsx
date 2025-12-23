import Image from 'next/image'
import { copy } from '../lib/copy'

const CloudIcon = () => (
  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500/70 via-cyan-400/60 to-emerald-400/60 text-neutral-950 shadow-lg shadow-sky-500/20">
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path
        fill="currentColor"
        d="M8 18h8a5 5 0 1 0-1.08-9.86A6 6 0 0 0 5.1 11.3 4.5 4.5 0 0 0 8 18Z"
      />
    </svg>
  </span>
)

const AiIcon = () => (
  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500/80 via-violet-500/70 to-sky-400/70 text-neutral-950 shadow-lg shadow-fuchsia-500/20">
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path
        fill="currentColor"
        d="M4 12a8 8 0 0 1 14.48-4.16l.52.74-.88.37A5 5 0 0 0 15 14.17L14 20l-1.83-3.2A8 8 0 0 1 4 12Zm14.5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0ZM9 10.5A1.5 1.5 0 1 0 9 13a1.5 1.5 0 0 0 0-2.5Z"
      />
    </svg>
  </span>
)

const CoachingIcon = () => (
  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-400/80 via-rose-400/70 to-sky-400/70 text-neutral-950 shadow-lg shadow-amber-400/20">
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path
        fill="currentColor"
        d="M12 3a5 5 0 0 1 4.77 6.66A4 4 0 0 1 16 18h-.38l.33 1.33a1 1 0 0 1-1.94.5L13.7 18H8a1 1 0 0 1-.93-1.36l1.26-3.18A5 5 0 0 1 12 3Zm-6.5 16A1.5 1.5 0 0 0 4 20.5H3a2.5 2.5 0 0 1 1.5-2.3Z"
      />
    </svg>
  </span>
)

const serviceIcons = [CloudIcon, AiIcon, CoachingIcon]

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
          <p className="text-neutral-300 text-lg max-w-3xl mx-auto">
            {services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {[primaryService, secondaryService, tertiaryService].map((service, index) => {
            const Icon = serviceIcons[index]
            return (
              <article
                key={service?.title ?? index}
                id={service?.learnMoreHref?.replace('#', '')}
                className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-neutral-700/60 via-neutral-800/50 to-neutral-900/60 hover:from-sky-500/50 hover:via-fuchsia-500/40 hover:to-emerald-500/40 transition-all duration-500"
              >
                <div className="relative h-full rounded-[15px] bg-neutral-950/80 p-6 sm:p-7 md:p-8 flex flex-col gap-4 overflow-hidden shadow-lg shadow-black/20">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(244,114,182,0.12),transparent_30%)]" />
                  <div className="flex items-start gap-4 relative">
                    {Icon && <Icon />}
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold">{service?.title}</h3>
                      <p className="text-sm text-neutral-300 leading-relaxed">
                        {service?.description}
                      </p>
                    </div>
                  </div>

                  <ul className="relative space-y-2 text-sm text-neutral-200">
                    {service?.deliverables?.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 rounded-lg bg-neutral-900/60 px-3 py-2 border border-neutral-800/80"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="relative flex flex-wrap gap-3 pt-1">
                    <a
                      href={service?.learnMoreHref}
                      className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/80 px-4 py-2 text-sm font-semibold text-neutral-100 transition hover:border-sky-400 hover:text-white hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35)]"
                    >
                      {service?.cta ?? 'Scopri'}
                      <span aria-hidden="true">→</span>
                    </a>
                    <a
                      href="#contatti"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-neutral-950 shadow-lg shadow-sky-500/30 hover:shadow-fuchsia-500/30 transition"
                    >
                      Parla con noi
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
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
