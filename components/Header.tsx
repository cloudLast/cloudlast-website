import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#1a1c22]/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">

        {/* Brand */}
        <Link href="/" aria-label="Homepage" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="brand text-lg">Cloudlast</span>
        </Link>

        {/* Navigation */}
        <nav
          aria-label="Navigazione principale"
          className="hidden md:flex items-center gap-8 text-sm text-neutral-300"
        >
          <Link href="/#servizi" className="hover:text-white transition">
            Servizi
          </Link>
          <Link href="/#chi-siamo" className="hover:text-white transition">
            Chi siamo
          </Link>
          <Link href="/#contatti" className="hover:text-white transition">
            Contatti
          </Link>
        </nav>
      </div>
    </header>
  )
}
