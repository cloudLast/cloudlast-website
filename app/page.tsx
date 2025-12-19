import { copy } from '../lib/copy'

export default function Home() {
  const { hero, services, about, contact } = copy.it

  return (
    <main>
      {/* HERO */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
          <p className="text-sm uppercase tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-amber-400 to-sky-400">
            {hero.eyebrow}
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            {hero.title}
          </h1>

          <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
            {hero.description}
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <a
              href="#contatti"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 via-amber-400 to-sky-400 text-black font-medium shadow-lg shadow-fuchsia-500/20 hover:opacity-90 transition"
            >
              {hero.ctaPrimary}
            </a>

            <a
              href="#servizi"
              className="px-6 py-3 rounded-xl border border-neutral-700 bg-white/5 hover:bg-neutral-900 transition"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servizi" className="py-24 md:py-32 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-widest text-neutral-400">
              {services.eyebrow}
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {services.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.items.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-neutral-800/70 bg-white/5 backdrop-blur-md p-6 space-y-3 shadow-inner shadow-white/5"
              >
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-sm text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="chi-siamo" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-widest text-neutral-400">
              {about.eyebrow}
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {about.title}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-neutral-400">
              {about.description}
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contatti" className="py-24 md:py-32 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-widest text-neutral-400">
              {contact.eyebrow}
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {contact.title}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-lg text-neutral-400">
              {contact.description}
            </p>

            <a
              href="mailto:info@cloudlast.it"
              className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-fuchsia-500 via-amber-400 to-sky-400 text-black font-medium shadow-lg shadow-fuchsia-500/20 hover:opacity-90 transition"
            >
              {contact.cta}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
