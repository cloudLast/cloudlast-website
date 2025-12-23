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
  const { hero, services, about, contact, results } = copy.it
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

      <section id="risultati" className="space-y-10">
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
            {results.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {results.title}
          </h2>
          <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto">
            {results.description}
          </p>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0 justify-start md:justify-center">
          {results.badges.map((badge) => (
            <span
              key={badge.label}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-neutral-100"
            >
              {badge.label}
            </span>
          ))}
        </div>

        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0">
          {results.items.map((item) => (
            <article
              key={item.client}
              className="min-w-[280px] snap-start rounded-xl border border-neutral-800/60 bg-neutral-900/50 p-6 space-y-3 md:min-w-0"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm uppercase tracking-wide text-neutral-400">
                  {item.client}
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                  {item.metric}
                </span>
              </div>
              <p className="text-base font-semibold text-white">{item.outcome}</p>
              <p className="text-sm text-neutral-300 leading-relaxed">{item.detail}</p>
            </article>
          ))}
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

        <div className="grid gap-6 lg:grid-cols-[1.6fr,1fr]">
          <div className="rounded-2xl border border-neutral-800/60 bg-neutral-900/40 p-6 md:p-8 space-y-6">
            <div className="space-y-3">
              <p className="text-lg text-neutral-300 leading-relaxed">
                {contact.description}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="badge border-emerald-400/30 bg-emerald-500/10 text-emerald-100">
                  {contact.promise}
                </span>
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

              <label className="space-y-2">
                <span className="text-sm text-neutral-300">{contact.form.roleLabel}</span>
                <input
                  type="text"
                  name="Ruolo"
                  placeholder="Es. CTO, Head of Product"
                  className="input-field"
                />
              </label>

              <label className="space-y-2 md:col-span-2">
                <span className="text-sm text-neutral-300">{contact.form.projectLabel}</span>
                <textarea
                  name="Tema del progetto"
                  rows={3}
                  placeholder="Es. Modernizzazione piattaforma, AI assistant per supporto, review architettura"
                  className="input-field min-h-[120px]"
                />
              </label>

              <div className="md:col-span-2 flex flex-col sm:flex-row gap-3">
                <button type="submit" className="cta-primary w-full sm:w-auto">
                  {contact.form.primaryCta}
                </button>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-secondary w-full sm:w-auto"
                >
                  {contact.form.secondaryCta}
                </a>
              </div>

              <p className="md:col-span-2 text-sm text-neutral-400">
                Preferisci scrivere via email? <a href={`mailto:${contact.email}`} className="text-cyan-300 underline underline-offset-4">info@cloudlast.it</a>
              </p>
            </form>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-6 md:p-8 space-y-4">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
                {contact.booking.title}
              </p>
              <p className="text-lg font-semibold text-white">
                {contact.booking.description}
              </p>
            </div>

            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-cyan-300">•</span>
                <span>Slot da 25 minuti, agenda pensata per mobile.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-cyan-300">•</span>
                <span>Link Meet/Calendly generato subito dopo la prenotazione.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-cyan-300">•</span>
                <span>Reminder automatici e recap con next steps.</span>
              </li>
            </ul>

            <a
              href={contact.booking.linkHref}
              target="_blank"
              rel="noreferrer"
              className="cta-secondary w-full justify-center"
            >
              {contact.booking.linkLabel}
            </a>

            <p className="text-sm text-neutral-400">{contact.booking.secondary}</p>
          </div>
        </div>
      </section>
    </main>
  )
}
