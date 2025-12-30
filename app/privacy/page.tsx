export default function PrivacyPage({ searchParams }: { searchParams?: { lang?: string } }) {
  const lang = searchParams?.lang === 'en' ? 'en' : 'it'
  const t = lang === 'en'
    ? {
        title: 'Privacy Policy',
        p1: 'This site does not collect personal data through forms, newsletters or tracking systems.',
        p2a: 'Cloudlast acts in full compliance with Italian and EU data protection regulations. Data voluntarily provided by email will be used solely to respond to requests and will not be shared with third parties.',
        owner: 'Data Controller:'
      }
    : {
        title: 'Privacy Policy',
        p1: 'Questo sito non raccoglie dati personali tramite form, newsletter o sistemi di tracciamento.',
        p2a: 'Cloudlast agisce in pieno rispetto delle normative italiane ed europee in termini di protezione dei dati personali. I dati forniti volontariamente via email verranno utilizzati esclusivamente per rispondere alle richieste e non saranno condivisi con terze parti.',
        owner: 'Titolare del trattamento:'
      }
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-neutral-300">
      <h1 className="mb-6 text-2xl font-semibold text-white">{t.title}</h1>

      <p className="mb-4">{t.p1}</p>

      <p className="mb-4">
        <span className="brand">Cloudlast</span>{' '} 
        {t.p2a}
      </p>

      <p className="text-sm text-neutral-400">
        {t.owner}{' '}
        <span className="brand">Cloudlast</span>
      </p>
    </main>
  )
}
