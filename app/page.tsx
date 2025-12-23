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
