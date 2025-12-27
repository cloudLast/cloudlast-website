import Image from 'next/image'
import { copy } from '../lib/copy'

const CloudIcon = () => (
  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rose-500/80 via-amber-400/70 to-cyan-400/70 text-neutral-950 shadow-lg shadow-rose-500/20">
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path
        fill="currentColor"
        d="M8 18h8a5 5 0 1 0-1.08-9.86A6 6 0 0 0 5.1 11.3 4.5 4.5 0 0 0 8 18Z"
      />
    </svg>
  </span>
)

const AiIcon = () => (
  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-400/80 via-emerald-400/70 to-sky-400/70 text-neutral-950 shadow-lg shadow-amber-400/20">
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path
        fill="currentColor"
        d="M4 12a8 8 0 0 1 14.48-4.16l.52.74-.88.37A5 5 0 0 0 15 14.17L14 20l-1.83-3.2A8 8 0 0 1 4 12Zm14.5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0ZM9 10.5A1.5 1.5 0 1 0 9 13a1.5 1.5 0 0 0 0-2.5Z"
      />
    </svg>
  </span>
)

const CoachingIcon = () => (
  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500/80 via-violet-500/70 to-cyan-400/70 text-neutral-950 shadow-lg shadow-fuchsia-500/20">
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path
        fill="currentColor"
        d="M12 3a5 5 0 0 1 4.77 6.66A4 4 0 0 1 16 18h-.38l.33 1.33a1 1 0 0 1-1.94.5L13.7 18H8a1 1 0 0 1-.93-1.36l1.26-3.18A5 5 0 0 1 12 3Zm-6.5 16A1.5 1.5 0 0 0 4 20.5H3a2.5 2.5 0 0 1 1.5-2.3Z"
      />
    </svg>
  </span>
)

const CloudBarberIcon = () => (
  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
    <svg viewBox="0 0 64 64" aria-hidden="true" className="h-8 w-8">
      <defs>
        <linearGradient id="cloudbarberGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff4d6d" />
          <stop offset="45%" stopColor="#ffb347" />
          <stop offset="75%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <path
        d="M20 10l24 24M44 10L20 34"
        stroke="url(#cloudbarberGradient)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle
        cx="18"
        cy="38"
        r="10"
        stroke="url(#cloudbarberGradient)"
        strokeWidth="4"
        fill="none"
      />
      <circle
        cx="46"
        cy="38"
        r="10"
        stroke="url(#cloudbarberGradient)"
        strokeWidth="4"
        fill="none"
      />
      <circle cx="32" cy="28" r="3" fill="#f5f5f5" />
    </svg>
  </span>
)

const serviceIcons = [CloudIcon, AiIcon, CoachingIcon]

export default function Home() {
  const { hero, services, about, products, reliability, contact, companyData } =
    copy.it
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

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a href="#contatti" className="cta-primary w-full sm:w-auto">
              {hero.ctaPrimary}
            </a>
            <a href="#prodotti" className="cta-secondary w-full sm:w-auto">
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-emerald-400/5 to-violet-500/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur">
            <div className="flex items-center justify-between text-sm text-neutral-300">
              <span className="font-semibold">Struttura e operatività</span>
              <span className="rounded-full bg-white/10 px-2 py-1 text-[11px] uppercase tracking-wide text-white">
                Società di prodotto
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {[
                'Sviluppo interno e roadmap controllate',
                'Qualità, stabilità e sicurezza come priorità',
                'Prodotti verticali con focus su operatività',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                  <p className="text-sm text-neutral-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cosa-facciamo" className="space-y-10">
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

                  <div className="relative pt-1">
                    <a
                      href={service?.learnMoreHref}
                      className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/80 px-4 py-2 text-sm font-semibold text-neutral-100 transition hover:border-sky-400 hover:text-white hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35)]"
                    >
                      {service?.cta ?? 'Scopri'}
                      <span aria-hidden="true">→</span>
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

      <section id="prodotti" className="space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
            {products.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {products.title}
          </h2>
          <p className="text-neutral-300 text-lg max-w-3xl mx-auto">
            {products.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.items.map((product) => (
            <article
              key={product.name}
              className="rounded-2xl border border-neutral-800/60 bg-neutral-900/50 p-6 md:p-8 space-y-4"
            >
              <div className="flex items-start gap-4">
                <CloudBarberIcon />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {product.summary}
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-100">
                {product.status}
              </span>

              <div>
                <a href="#contatti" className="cta-secondary w-full sm:w-auto">
                  {product.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="affidabilita" className="space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
            {reliability.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {reliability.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reliability.items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-neutral-800/60 bg-neutral-900/50 p-6 space-y-3"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
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

        <div className="rounded-2xl border border-neutral-800/60 bg-neutral-900/40 p-6 md:p-8 space-y-6">
          <div className="space-y-3">
            <p className="text-lg text-neutral-300 leading-relaxed">
              {contact.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 text-cyan-300"
                  aria-hidden="true"
                >
                  <path d="M12 1.5 3.75 5.25v5.692c0 5.197 3.5 9.99 8.25 11.558 4.75-1.568 8.25-6.36 8.25-11.558V5.25L12 1.5Zm0 10.615 6-3.23v2.057c0 4.103-2.448 7.79-6 9.26-3.552-1.47-6-5.157-6-9.26V8.885l6 3.23Zm0-1.73L6.74 7.5 12 4.885 17.26 7.5 12 10.385Z" />
                </svg>
                {contact.privacyBadge}
              </span>
            </div>
          </div>

          <form
            className="grid gap-4 md:grid-cols-2"
            method="POST"
            action={`mailto:${contact.email}`}
            encType="text/plain"
          >
            <label className="space-y-2">
              <span className="text-sm text-neutral-300">{contact.form.nameLabel}</span>
              <input
                type="text"
                name="Nome"
                required
                placeholder="Es. Laura Rossi"
                className="input-field"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm text-neutral-300">{contact.form.emailLabel}</span>
              <input
                type="email"
                name="Email"
                required
                placeholder="nome@azienda.it"
                className="input-field"
              />
            </label>

            <label className="space-y-2 md:col-span-2">
              <span className="text-sm text-neutral-300">
                {contact.form.messageLabel}
              </span>
              <textarea
                name="Messaggio"
                rows={4}
                placeholder="Descrivi brevemente la tua richiesta"
                className="input-field min-h-[140px]"
              />
            </label>

            <div className="md:col-span-2 flex flex-col sm:flex-row gap-3">
              <button type="submit" className="cta-primary w-full sm:w-auto">
                {contact.form.primaryCta}
              </button>
            </div>

            <p className="md:col-span-2 text-sm text-neutral-400">
              Email: <a href={`mailto:${contact.email}`} className="text-cyan-300 underline underline-offset-4">info@cloudlast.it</a>{' '}
              · PEC: <a href={`mailto:${contact.pec}`} className="text-cyan-300 underline underline-offset-4">cloudlast@pec.it</a>
            </p>
          </form>
        </div>
      </section>

      <section id="dati-societari" className="space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
            {companyData.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {companyData.title}
          </h2>
        </div>

        <div className="rounded-2xl border border-neutral-800/60 bg-neutral-900/50 p-6 md:p-8">
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-neutral-300">
            {companyData.items.map((item) => (
              <div key={item.label} className="space-y-1">
                <dt className="text-neutral-400">{item.label}</dt>
                <dd className="text-white">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  )
}
