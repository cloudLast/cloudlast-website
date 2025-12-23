import Image from 'next/image'
import { copy } from '@/lib/copy'

export default function Footer() {
  const footer = copy.it.footer
  if (!footer) return null

  return (
    <footer className="mt-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12 text-sm text-white/70 space-y-8">

        {/* Logo + Brand + CTAs */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <a href="/" aria-label="Homepage" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Cloudlast logo"
              width={28}
              height={28}
              className="drop-shadow-[0_0_8px_rgba(34,211,238,0.25)]"
            />
            <span className="brand text-base">{footer.brand}</span>
          </a>

          {footer.ctas && (
            <div className="flex flex-wrap gap-3 text-sm">
              {footer.ctas.map((cta) => (
                <a
                  key={cta.href}
                  href={cta.href}
                  className="inline-flex items-center rounded-full border border-cyan-400/30 px-4 py-2 font-medium text-cyan-50 hover:border-cyan-300/60 hover:bg-cyan-400/10 transition"
                >
                  {cta.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="h-px bg-white/10" aria-hidden />

        <div className="grid gap-10 md:grid-cols-2">
          {/* Legal + Note */}
          <div className="space-y-3">
            <div className="space-y-1">
              {footer.legal?.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>

            {footer.note && (
              <p className="text-xs text-white/50">
                {footer.note}
              </p>
            )}

            {footer.links && (
              <div className="flex flex-wrap gap-4 text-sm">
                {footer.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="hover:text-cyan-300 transition"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Contacts */}
          {footer.contacts && (
            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-white">Contatti</h2>
              <div className="flex flex-col gap-2 text-sm">
                {footer.contacts.map((contact) => (
                  <a
                    key={contact.href}
                    href={contact.href}
                    className="inline-flex items-center gap-2 text-white/80 hover:text-cyan-300 transition"
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/70" aria-hidden />
                    {contact.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
