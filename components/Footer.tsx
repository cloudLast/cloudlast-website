import Image from 'next/image'
import Link from 'next/link'
import { copy } from '@/lib/copy'

export default function Footer() {
  const footer = copy.it.footer
  if (!footer) return null

  return (
    <footer className="mt-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12 text-sm text-white/60 space-y-8">

        {/* Logo + Brand */}
        <Link
          href="/"
          aria-label="Homepage"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="Cloudlast logo"
            width={28}
            height={28}
            className="drop-shadow-[0_0_8px_rgba(34,211,238,0.25)]"
          />
          <span className="brand">Cloudlast</span>
        </Link>

        {/* Legal */}
        {footer.legal && (
          <div className="space-y-1">
            {footer.legal.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        )}

        {/* Links */}
        {footer.links && (
          <div className="flex flex-wrap gap-4">
            {footer.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-cyan-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {/* Contacts */}
        {footer.contacts && (
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-white">
              Contatti
            </h2>
            <div className="flex flex-col gap-2">
              {footer.contacts.map((contact) => (
                <a
                  key={contact.href}
                  href={contact.href}
                  className="inline-flex items-center gap-2 text-white/80 transition hover:text-cyan-300"
                  target={
                    contact.href.startsWith('http')
                      ? '_blank'
                      : undefined
                  }
                  rel={
                    contact.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-cyan-400/70"
                    aria-hidden
                  />
                  {contact.label}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Version */}
        <div className="pt-4 border-t border-white/10 text-xs text-neutral-400 flex items-center justify-between">
          <span>© 2025 Cloudlast</span>
          <span>v1.0.0</span>
        </div>
      </div>
    </footer>
  )
}
