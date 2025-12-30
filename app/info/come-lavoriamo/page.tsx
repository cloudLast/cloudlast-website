export const metadata = {
  title: 'Come lavoriamo',
  description: 'Processi chiari, ambienti separati, manutenzione continua',
}

export default function ComeLavoriamoPage({ searchParams }: { searchParams?: { lang?: string } }) {
  const lang = searchParams?.lang === 'en' ? 'en' : 'it'
  const t = lang === 'en'
    ? {
        title: 'How we work',
        phases: 'Phases',
        steps: [
          'Goal and constraints alignment',
          'Essential, understandable technical design',
          'Iterative implementation with checks',
          'Controlled release and observability',
        ],
        env: 'Environments',
        envText: 'Separate development, test and production. Isolated data and secrets. Minimum permissions.',
        maint: 'Maintenance',
        maintText: 'Updates, backups, cost monitoring, error budget and capacity plans.',
      }
    : {
        title: 'Come lavoriamo',
        phases: 'Fasi',
        steps: [
          'Allineamento obiettivi e limitazioni',
          'Design tecnico essenziale, comprensibile',
          'Implementazione iterativa con verifiche',
          'Rilascio controllato e osservabilità',
        ],
        env: 'Ambienti',
        envText: 'Sviluppo, test e produzione separati. Dati e segreti isolati. Permessi minimi.',
        maint: 'Manutenzione',
        maintText: 'Aggiornamenti, backup, monitoraggio costi, error budget e piani di capacità.',
      }
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-neutral-300">
      <h1 className="text-2xl md:text-3xl font-semibold text-white mb-6">{t.title}</h1>
      <div className="space-y-6">
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-white">{t.phases}</h2>
          <ul className="list-disc pl-5 space-y-1">
            {t.steps.map((s) => (<li key={s}>{s}</li>))}
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-white">{t.env}</h2>
          <p className="text-sm">{t.envText}</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-white">{t.maint}</h2>
          <p className="text-sm">{t.maintText}</p>
        </section>
      </div>
    </main>
  )
}
