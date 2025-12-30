export const metadata = {
  title: 'Sicurezza e responsabilità',
  description: 'Controlli, principi e trasparenza operativa di CloudLast',
}

export default function SicurezzaPage({ searchParams }: { searchParams?: { lang?: string } }) {
  const lang = searchParams?.lang === 'en' ? 'en' : 'it'
  const t = lang === 'en'
    ? {
        title: 'Security and responsibility',
        intro: 'We treat security and reliability as an ongoing responsibility. No generic claims: we explain what we do, how and why.',
        items: [
          { h: 'Principles', p: 'Least privilege, defense-in-depth, separate environments, verifiable logging.' },
          { h: 'Data and access', p: 'Personal accounts, mandatory MFA, periodic credential rotation, audit trail.' },
          { h: 'Deployment and changes', p: 'CI/CD with approvals, tested rollbacks, operational change log.' },
          { h: 'Business continuity', p: 'Backups, verified restore, product-defined RTO/RPO.' },
        ],
        note: 'Note: implementation details vary by product and context.'
      }
    : {
        title: 'Sicurezza e responsabilità',
        intro: 'Trattiamo sicurezza e affidabilità come responsabilità continua. Niente claim generici: spieghiamo cosa facciamo, come e perché.',
        items: [
          { h: 'Principi', p: 'Least privilege, defense-in-depth, separazione ambienti, logging verificabile.' },
          { h: 'Dati e accessi', p: 'Accessi personali, MFA obbligatoria, rotazione periodica credenziali, audit trail.' },
          { h: 'Deployment e cambiamenti', p: 'CI/CD con approvazioni, roll-back testati, change log operativo.' },
          { h: 'Business continuity', p: 'Backup, ripristino verificato, RTO/RPO definiti per prodotto.' },
        ],
        note: 'Nota: dettagli implementativi variano per prodotto e contesto.'
      }
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-neutral-300">
      <h1 className="text-2xl md:text-3xl font-semibold text-white mb-6">{t.title}</h1>

      <section className="space-y-4">
        <p>{t.intro}</p>
        <ul className="grid gap-3">
          {t.items.map((item) => (
            <li key={item.h} className="glass p-4">
              <p className="font-semibold text-white">{item.h}</p>
              <p className="text-neutral-300 text-sm">{item.p}</p>
            </li>
          ))}
        </ul>
        <p className="text-sm text-neutral-400">{t.note}</p>
      </section>
    </main>
  )
}
