export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <section className="max-w-3xl text-center space-y-8">
        <p className="uppercase tracking-widest text-sm text-neutral-400">
          Think cloud. Build last.
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Soluzioni cloud
          <br />
          progettate per durare
        </h1>

        <p className="text-lg text-neutral-400">
          Cloudlast aiuta aziende e professionisti a progettare,
          costruire e mantenere infrastrutture cloud affidabili,
          scalabili e semplici da gestire.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <a
            href="#contatti"
            className="px-6 py-3 rounded-xl bg-cloud-gradient text-black font-medium hover:opacity-90 transition"
          >
            Contattaci
          </a>

          <a
            href="#servizi"
            className="px-6 py-3 rounded-xl border border-neutral-700 hover:bg-neutral-900 transition"
          >
            I nostri servizi
          </a>
        </div>
      </section>
    </main>
  )
}
