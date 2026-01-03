export const dynamic = 'force-dynamic'

import Link from 'next/link'

export default function CloudLanding() {
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div className="glass glass-highlight p-8 max-w-xl w-full text-center space-y-4">
        <h1 className="text-2xl md:text-3xl font-semibold">Cloudlast Cloud</h1>
        <p className="text-neutral-300">Soluzioni operative per lavoro reale. Accesso su invito.</p>
        <div className="flex items-center justify-center gap-3">
          <Link href="/?#contatti" className="cta-primary">Richiedi informazioni</Link>
          <Link href="/?#prodotti" className="cta-secondary">Prodotti</Link>
        </div>
      </div>
    </main>
  )
}
