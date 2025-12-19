const services = [
  {
    title: 'Strategia & architettura',
    description:
      'Blueprint cloud moderni, sicuri e sostenibili per scalare senza sorprese.',
    badge: 'Design first',
  },
  {
    title: 'Automazione e platform',
    description:
      'Pipeline CI/CD, infrastruttura as code e piattaforme self-service per i team.',
    badge: 'DevEx',
  },
  {
    title: 'Affidabilità & costi',
    description:
      'Osservabilità, governance e ottimizzazione della spesa con guardrail chiari.',
    badge: 'SLO-driven',
  },
]

const highlights = [
  'Kubernetes & serverless',
  'Cloud native security',
  'FinOps e ottimizzazione',
  'Modernizzazione applicativa',
]

export default function Home() {
  return (
    <main className="min-h-screen px-6 pb-24">
      <section className="mx-auto max-w-6xl grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-2 text-xs uppercase tracking-[0.2em] text-neutral-400">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-rose-400 via-amber-300 to-sky-300" />
            Think cloud. Build last.
          </p>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
              Soluzioni cloud progettate per durare
            </h1>
            <p className="text-lg text-neutral-400 max-w-2xl">
              Cloudlast aiuta aziende e professionisti a progettare, costruire e mantenere
              infrastrutture cloud affidabili, scalabili e semplici da gestire.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-300">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-neutral-800 bg-neutral-900/40 px-4 py-2"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contatti"
              className="px-6 py-3 rounded-xl bg-cloud-gradient text-black font-medium hover:opacity-90 transition"
            >
              Contattaci
            </a>

            <a
              href="#servizi"
              className="px-6 py-3 rounded-xl border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 transition"
            >
              I nostri servizi
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 p-8 shadow-[0_20px_70px_-35px_rgba(0,0,0,0.8)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,77,77,0.1),transparent),radial-gradient(circle_at_80%_0%,rgba(77,210,255,0.12),transparent)]" />
          <div className="relative space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-400">Cloud Maturity</p>
                <p className="text-3xl font-semibold">Enterprise-ready</p>
              </div>
              <div className="rounded-full bg-neutral-800 px-4 py-2 text-sm text-neutral-300">
                24/7 SRE desk
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-neutral-300">
              <div className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-4">
                <p className="text-xs uppercase tracking-wide text-neutral-500">Affidabilità</p>
                <p className="mt-2 text-2xl font-semibold">99.95%</p>
                <p className="text-xs text-neutral-500">Target SLO su workload critici.</p>
              </div>
              <div className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-4">
                <p className="text-xs uppercase tracking-wide text-neutral-500">Tempo di rollout</p>
                <p className="mt-2 text-2xl font-semibold">3 settimane</p>
                <p className="text-xs text-neutral-500">Da design a piattaforma funzionante.</p>
              </div>
              <div className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-4">
                <p className="text-xs uppercase tracking-wide text-neutral-500">Riduzione costi</p>
                <p className="mt-2 text-2xl font-semibold">-30%</p>
                <p className="text-xs text-neutral-500">Ottimizzazione cloud guidata dai dati.</p>
              </div>
              <div className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-4">
                <p className="text-xs uppercase tracking-wide text-neutral-500">Coverage</p>
                <p className="mt-2 text-2xl font-semibold">Multi-cloud</p>
                <p className="text-xs text-neutral-500">AWS, Azure, GCP, Kubernetes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servizi" className="mx-auto max-w-6xl space-y-8">
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Servizi</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Operiamo su tutto il ciclo cloud</h2>
          <p className="text-neutral-400 max-w-3xl">
            Dalla definizione della strategia alla gestione continua: integriamo processi, persone e tecnologia
            per creare piattaforme che crescono insieme al business.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 shadow-[0_15px_50px_-40px_rgba(0,0,0,0.8)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-500/0 via-amber-400/0 to-sky-400/0 opacity-0 transition duration-500 group-hover:opacity-10" />
              <div className="relative space-y-4">
                <span className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/70 px-3 py-1 text-xs text-neutral-300">
                  {service.badge}
                </span>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{service.description}</p>
                <div className="text-sm font-medium text-neutral-200">Approfondisci →</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="chi-siamo"
        className="mx-auto mt-16 max-w-6xl grid gap-10 rounded-3xl border border-neutral-800 bg-neutral-950/60 px-8 py-12 md:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Chi siamo</p>
          <h2 className="text-3xl font-semibold tracking-tight">Un team di ingegneri, product e SRE</h2>
          <p className="text-neutral-400 leading-relaxed">
            Lavoriamo accanto ai team di sviluppo e di business per trasformare la strategia cloud in risultati
            concreti. Preferiamo partnership di lungo periodo, con roadmap chiare e KPI condivisi.
          </p>
          <ul className="space-y-3 text-neutral-300">
            <li>• Delivery iterativa con cicli brevi e demo continue.</li>
            <li>• Standardizzazioni IaC e policy-as-code per governance e sicurezza.</li>
            <li>• Coaching su piattaforma, osservabilità e reliability engineering.</li>
          </ul>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            { label: 'Progetti completati', value: '120+' },
            { label: 'Lead time medio', value: '2.8 settimane' },
            { label: 'Engagement NPS', value: '68' },
            { label: 'Regioni coperte', value: 'EMEA & US' },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
              <p className="text-sm text-neutral-500">{item.label}</p>
              <p className="text-2xl font-semibold mt-2">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contatti"
        className="mx-auto mt-16 max-w-6xl rounded-3xl border border-neutral-800 bg-gradient-to-r from-rose-500/10 via-amber-400/10 to-sky-400/10 px-8 py-12"
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Contatti</p>
            <h2 className="text-3xl font-semibold tracking-tight">Parliamo del tuo prossimo progetto</h2>
            <p className="text-neutral-300 max-w-2xl">
              Raccontaci gli obiettivi e le sfide: prepareremo rapidamente una proposta con priorità, timeline e
              team dedicato.
            </p>
          </div>

          <a
            href="mailto:hello@cloudlast.it"
            className="inline-flex items-center gap-3 rounded-xl bg-neutral-100 px-6 py-3 text-neutral-900 font-medium shadow-lg shadow-rose-500/10 transition hover:-translate-y-0.5"
          >
            hello@cloudlast.it
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </main>
  )
}
