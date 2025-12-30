export const metadata = {
  title: 'FAQ tecniche',
  description: 'Risposte pratiche e non marketing',
}

export default function FaqPage({ searchParams }: { searchParams?: { lang?: string } }) {
  const lang = searchParams?.lang === 'en' ? 'en' : 'it'
  const faqs = lang === 'en'
    ? [
        { q: 'Do you use vanity metrics or generic promises?', a: 'No. We communicate contextualized, verifiable outcomes. Where we cannot measure, we state limits clearly.' },
        { q: 'How do you handle personal data?', a: 'Data minimization, encryption in transit and, when required, at rest. Personal and auditable access.' },
        { q: 'Do you enforce technological lock-in?', a: 'We avoid unnecessary dependencies. We document choices and exit plans. We use managed services when they add value.' },
        { q: 'Is AI used everywhere?', a: 'No. We integrate it only when it truly improves the service. We explain risks and controls adopted.' },
      ]
    : [
        { q: 'Usate metriche “vanity” o promesse generiche?', a: 'No. Comunichiamo risultati contestualizzati e verificabili. Dove non possiamo misurare, descriviamo chiaramente i limiti.' },
        { q: 'Come gestite i dati personali?', a: 'Principio di minimizzazione, cifratura in transito e, quando richiesto, a riposo. Accessi personali e auditabili.' },
        { q: 'Fate lock-in tecnologico?', a: 'Evitiamo dipendenze inutili. Documentiamo scelte e piani di uscita. Usiamo servizi gestiti quando portano valore.' },
        { q: 'L’AI è usata ovunque?', a: 'No. La integriamo solo se migliora davvero il servizio. Spieghiamo rischi e controlli adottati.' },
      ]

  const title = lang === 'en' ? 'Technical FAQ' : 'FAQ tecniche'

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-neutral-300">
      <h1 className="text-2xl md:text-3xl font-semibold text-white mb-6">{title}</h1>
      <dl className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="glass p-4">
            <dt className="font-semibold text-white">{f.q}</dt>
            <dd className="text-sm text-neutral-300 mt-1">{f.a}</dd>
          </div>
        ))}
      </dl>
    </main>
  )
}
