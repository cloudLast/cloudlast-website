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
    about,
    products,
    reliability,
    contact,
    companyData,
  } = copy[lang]

  const [primaryService, secondaryService, tertiaryService] =
    services.items

  /* =========================================================
     FAQ SCHEMA — SEO
     ========================================================= */
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Cloudlast vende consulenza o prodotti?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Cloudlast è una società di prodotto. Sviluppa software proprietario e lavora su progetti con visione di medio-lungo periodo.',
        },
      },
      {
        '@type': 'Question',
        name: 'Vi occupate anche di formazione?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Sì. Cloudlast svolge attività di formazione e divulgazione su sicurezza dei dati, intelligenza artificiale e impatto delle tecnologie.',
        },
      },
      {
        '@type': 'Question',
        name: 'Qual è il vostro approccio all’AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Un approccio critico, pragmatico e consapevole dei limiti e dei rischi.',
        },
      },
      {
        '@type': 'Question',
        name: 'Avete un codice etico?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Sì. Cloudlast adotta un Codice Etico pubblico che definisce principi, responsabilità e criteri di condotta.',
        },
      },
    ],
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 md:py-24 space-y-24 md:space-y-32">

      {/* =========================================================
         HERO
         ========================================================= */}
      <section className="grid grid-cols-1 items-center gap-10 md:gap-14 lg:grid-cols-[1.05fr,0.95fr]">
        <div className="space-y-8 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <Image
              src="/logo.png"
              alt="Cloudlast logo"
              width={56}
              height={56}
              className="h-12 w-12"
            />
            <span className="text-xl font-semibold brand">
              Cloudlast
            </span>
          </div>

          <div className="space-y-4">
            <p className="accent-gradient text-sm font-semibold uppercase tracking-[0.3em]">
              {hero.eyebrow}
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
              {hero.title}
            </h1>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto lg:mx-0">
              {hero.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#contatti" className="cta-primary">
              {hero.ctaPrimary}
            </a>
            <a href="#metodo" className="cta-secondary">
              Come lavoriamo
            </a>
          </div>
        </div>

        <div className="glass glass-highlight p-6">
          <div className="flex justify-between text-sm text-neutral-300">
            <span className="font-semibold">Struttura</span>
            <span className="badge">Società di prodotto</span>
          </div>

          <ul className="mt-6 space-y-3 text-sm text-neutral-200">
            <li>— Sviluppo interno e controllo diretto</li>
            <li>— Stabilità e sicurezza come requisiti</li>
            <li>— Nessun over-engineering inutile</li>
            <li>— Comunicazione come competenza</li>
          </ul>
        </div>
      </section>

      {/* =========================================================
         SERVICES
         ========================================================= */}
      <section id="cosa-facciamo" className="space-y-10">
        <div className="text-center space-y-3">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[primaryService, secondaryService, tertiaryService].map(
            (service) => (
              <article key={service.title} className="glass p-6 space-y-4">
                <h3 className="font-semibold">{service.title}</h3>
                <p className="text-sm text-neutral-300">
                  {service.description}
                </p>
                <ul className="text-sm text-neutral-200 space-y-2">
                  {service.deliverables.map((d) => (
                    <li key={d}>— {d}</li>
                  ))}
                </ul>
              </article>
            )
          )}
        </div>
      </section>

      {/* =========================================================
         PRINCIPI
         ========================================================= */}
      <section id="principi" className="space-y-10">
        <div className="text-center space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
            Principi
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Valori operativi
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              t: 'Stabilità',
              d: 'Preferiamo sistemi prevedibili a rilasci affrettati.',
            },
            {
              t: 'Responsabilità',
              d: 'Tecnologia valutata per utilità e impatto reale.',
            },
            {
              t: 'Semplicità',
              d: 'La complessità è un costo, non un vanto.',
            },
            {
              t: 'Persone',
              d: 'Soft skills, rispetto e sostenibilità umana.',
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
         METODO CLIENTI
         ========================================================= */}
      <section id="metodo" className="space-y-10">
        <div className="text-center space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
            Metodo
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Come lavoriamo con i clienti
          </h2>
          <p className="text-neutral-300 text-lg max-w-3xl mx-auto">
            Un processo graduale, senza pressioni inutili.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass p-6 space-y-3">
            <h3 className="font-semibold">1. Comprensione</h3>
            <p className="text-sm text-neutral-300">
              Analisi del contesto, degli obiettivi e dei vincoli.
              In questa fase non si promette nulla e non si scrive codice.
            </p>
          </div>

          <div className="glass p-6 space-y-3">
            <h3 className="font-semibold">2. Progettazione</h3>
            <p className="text-sm text-neutral-300">
              Scelte tecniche proporzionate al problema,
              condivise e sostenibili nel tempo.
            </p>
          </div>

          <div className="glass p-6 space-y-3">
            <h3 className="font-semibold">3. Sviluppo</h3>
            <p className="text-sm text-neutral-300">
              Iterazioni, verifiche e consolidamento.
              Il tempo non è un problema, è parte della qualità.
            </p>
          </div>
        </div>

        <p className="text-center text-sm text-neutral-400 max-w-3xl mx-auto">
          <strong>Nessuna pressione, nessuna corsa forzata.</strong><br />
          Il buon software nasce da chiarezza, fiducia e collaborazione.
        </p>
      </section>

      {/* =========================================================
         FAQ
         ========================================================= */}
      <section id="faq" className="space-y-10">
        <div className="text-center space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Approccio e responsabilità
          </h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          <div className="glass p-5">
            <h3 className="font-semibold">Avete un codice etico?</h3>
            <p className="text-sm text-neutral-300">
              Sì. Cloudlast adotta un Codice Etico pubblico.{' '}
              <a
                href="/ethics.pdf"
                download
                className="underline underline-offset-4"
              >
                Scarica il PDF
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
         COMPANY DATA
         ========================================================= */}
      <section id="dati-societari" className="space-y-8 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
          {companyData.eyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {companyData.title}
        </h2>

        <div className="glass p-6">
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {companyData.items.map((item) => (
              <div key={item.label}>
                <dt className="text-neutral-400">{item.label}</dt>
                <dd className="text-white">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="mt-6 text-xs text-neutral-500">
          Powered by <span className="font-semibold text-neutral-300">Cloudlast</span> —
          tecnologia responsabile, senza scorciatoie.
        </p>
      </section>

      {/* =========================================================
         FAQ JSON-LD
         ========================================================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </main>
  )
}
