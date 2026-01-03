import Image from 'next/image'
import { copy } from '../lib/copy'

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ lang?: string }>
}) {
  const params = await searchParams
  const lang = params?.lang === 'en' ? 'en' : 'it'

  const {
    hero,
    services,
    companyData,
  } = copy[lang]

  return (
    <main className="mx-auto max-w-6xl px-6 py-20 space-y-32">

      {/* =========================================================
         HERO
         ========================================================= */}
      <section className="grid gap-12 lg:grid-cols-2 items-center">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Cloudlast logo"
              width={48}
              height={48}
            />
            <span className="text-xl font-semibold brand">
              Cloudlast
            </span>
          </div>

          <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
            {hero.eyebrow}
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            {hero.title}
          </h1>

          <p className="text-lg text-neutral-300 max-w-xl">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#contatti" className="cta-primary">
              {hero.ctaPrimary}
            </a>
            <a href="#metodo" className="cta-secondary">
              Come lavoriamo
            </a>
          </div>
        </div>

        <div className="glass p-6 space-y-4 text-sm">
          <p className="font-semibold">Società di prodotto</p>
          <ul className="space-y-2 text-neutral-300">
            <li>— Sviluppo interno e controllo diretto</li>
            <li>— Stabilità e sicurezza come requisiti</li>
            <li>— Nessun over-engineering inutile</li>
            <li>— Comunicazione chiara e responsabile</li>
          </ul>
        </div>
      </section>

      {/* =========================================================
         SERVIZI
         ========================================================= */}
      <section id="servizi" className="space-y-12 scroll-mt-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold">
            {services.title}
          </h2>
          <p className="text-neutral-300 max-w-3xl mx-auto">
            {services.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.items.map((s) => (
            <article key={s.title} className="glass p-6 space-y-3">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-neutral-300">
                {s.description}
              </p>
              <ul className="text-sm space-y-1">
                {s.deliverables.map((d) => (
                  <li key={d}>— {d}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================
         METODO
         ========================================================= */}
      <section id="metodo" className="space-y-12 scroll-mt-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Come lavoriamo
          </h2>
          <p className="text-neutral-300 max-w-3xl mx-auto">
            Un processo graduale, senza pressioni inutili e senza promesse premature.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              t: 'Comprensione',
              d: 'Analisi del contesto, degli obiettivi e dei vincoli.',
            },
            {
              t: 'Progettazione',
              d: 'Scelte tecniche proporzionate e sostenibili.',
            },
            {
              t: 'Sviluppo',
              d: 'Iterazioni, verifiche e consolidamento.',
            },
          ].map((p) => (
            <div key={p.t} className="glass p-6 space-y-2">
              <h3 className="font-semibold">{p.t}</h3>
              <p className="text-sm text-neutral-300">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
         CONTATTI
         ========================================================= */}
      <section
        id="contatti"
        className="space-y-12 scroll-mt-16 text-center"
      >
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Contatti
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Scegli il canale che preferisci. Rispondiamo sempre, senza impegno.
          </p>
        </div>

        <div className="mx-auto max-w-xl grid gap-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/393204255705?text=Ciao%20Cloudlast,%20vorrei%20parlare%20di%20un%20progetto"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-5 flex items-center justify-between hover:bg-white/10 transition"
          >
            <div className="text-left">
              <p className="font-semibold">WhatsApp</p>
              <p className="text-sm text-neutral-300">
                Primo contatto rapido e informale
              </p>
            </div>
            <span className="text-sm text-neutral-400">→</span>
          </a>

          {/* Email */}
          <a
            href="mailto:carlo.gennaro@cloudlast.io?subject=Contatto%20dal%20sito%20Cloudlast"
            className="glass p-5 flex items-center justify-between hover:bg-white/10 transition"
          >
            <div className="text-left">
              <p className="font-semibold">Email</p>
              <p className="text-sm text-neutral-300">
                Per richieste strutturate o documentazione
              </p>
            </div>
            <span className="text-sm text-neutral-400">→</span>
          </a>
        </div>

        <p className="text-xs text-neutral-500 max-w-xl mx-auto">
          Nessuna newsletter, nessun follow-up automatico.<br />
          Solo conversazioni reali.
        </p>
      </section>

      {/* =========================================================
         DATI SOCIETARI
         ========================================================= */}
      <section className="space-y-8 text-center">
        <h2 className="text-2xl font-semibold">
          {companyData.title}
        </h2>

        <div className="glass p-6">
          <dl className="grid md:grid-cols-2 gap-4 text-sm">
            {companyData.items.map((item) => (
              <div key={item.label}>
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
