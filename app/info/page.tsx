export default function InfoHome({ searchParams }: { searchParams?: { lang?: string } }) {
  const lang = searchParams?.lang === 'en' ? 'en' : 'it'
  const t = lang === 'en'
    ? {
        title: 'Cloudlast · Technical information',
        subtitle: 'Short docs on security, working approach, and practical technical answers.',
        sicurezza: { title: 'Security and responsibility', desc: 'Controls, principles and operational transparency.' },
        come: { title: 'How we work', desc: 'Clear processes, separate environments, maintenance.' },
        faq: { title: 'Technical FAQ', desc: 'Frequent questions, honest answers.' },
      }
    : {
        title: 'Cloudlast · Informazioni tecniche',
        subtitle: 'Documentazione sintetica su sicurezza, approccio al lavoro e risposte tecniche senza marketing.',
        sicurezza: { title: 'Sicurezza e responsabilità', desc: 'Controlli, principi e trasparenza operativa.' },
        come: { title: 'Come lavoriamo', desc: 'Processi chiari, ambienti separati, manutenzione.' },
        faq: { title: 'FAQ tecniche', desc: 'Domande frequenti, risposte oneste.' },
      }
  const qs = searchParams && searchParams.lang ? `?lang=${searchParams.lang}` : ''
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">{t.title}</h1>
      <p className="text-neutral-300 mb-8">{t.subtitle}</p>
      <ul className="grid gap-4 md:grid-cols-3 text-sm">
        <li className="glass p-4">
          <a href={`/info/sicurezza${qs}`} className="font-semibold hover:underline">{t.sicurezza.title}</a>
          <p className="text-neutral-400 mt-1">{t.sicurezza.desc}</p>
        </li>
        <li className="glass p-4">
          <a href={`/info/come-lavoriamo${qs}`} className="font-semibold hover:underline">{t.come.title}</a>
          <p className="text-neutral-400 mt-1">{t.come.desc}</p>
        </li>
        <li className="glass p-4">
          <a href={`/info/faq${qs}`} className="font-semibold hover:underline">{t.faq.title}</a>
          <p className="text-neutral-400 mt-1">{t.faq.desc}</p>
        </li>
      </ul>
    </main>
  )
}
