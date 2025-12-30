export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-center">
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Pagina non trovata</h1>
        <p className="text-neutral-400">
          La risorsa richiesta non esiste.
        </p>
        <a href="/" className="underline underline-offset-4">
          Torna alla home
        </a>
      </div>
    </main>
  )
}
