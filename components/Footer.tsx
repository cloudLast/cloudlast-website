import Image from 'next/image'
import { copy } from '@/lib/copy'

export default function Footer() {
  const footer = copy.it.footer
  if (!footer) return null

  return (
    <footer className="mt-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12 text-sm text-white/60">

        {/* Logo + Brand */}
        <a href="/" aria-label="Homepage" className="mb-6 flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Cloudlast logo"
            width={28}
            height={28}
            className="drop-shadow-[0_0_8px_rgba(34,211,238,0.25)]"
          />
          <span className="brand">Cloudlast</span>
        </a>

        {/* Legal */}
        <div className="space-y-1">
          {footer.legal?.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        {/* Links */}
        {footer.links && (
          <div className="mt-4 flex flex-wrap gap-4">
            {footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-cyan-400 transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {/* Note */}
        {footer.note && (
          <p className="mt-6 text-xs text-white/40">
            {footer.note}
          </p>
        )}
      </div>
    </footer>
  )
}
