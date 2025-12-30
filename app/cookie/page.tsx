export default function CookiePage({ searchParams }: { searchParams?: { lang?: string } }) {
  const lang = searchParams?.lang === 'en' ? 'en' : 'it'
  const t = lang === 'en'
    ? {
        title: 'Cookie Policy',
        p1: 'This site does not use profiling cookies nor tracking tools.',
        p2: 'Technical cookies necessary for the framework to function may be present.',
        p3: 'No third-party cookies are currently in use.',
      }
    : {
        title: 'Cookie Policy',
        p1: 'Questo sito non utilizza cookie di profilazione né strumenti di tracciamento.',
        p2: 'Possono essere presenti cookie tecnici necessari al corretto funzionamento del framework.',
        p3: 'Nessun cookie di terze parti è attualmente in uso.',
      }
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-neutral-300">
      <h1 className="mb-6 text-2xl font-semibold text-white">{t.title}</h1>

      <p className="mb-4">{t.p1}</p>
      <p className="mb-4">{t.p2}</p>
      <p className="text-sm text-neutral-400">{t.p3}</p>
    </main>
  )
}
