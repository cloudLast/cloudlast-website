"use client"
import { useSearchParams } from 'next/navigation'
import ThemeToggle from '@/components/ThemeToggle'
import LocaleToggle from '@/components/LocaleToggle'

export default function InfoHeader() {
  const params = useSearchParams()
  const lang = (params.get('lang') === 'en') ? 'en' : 'it'
  const labels = lang === 'en'
    ? { sicurezza: 'Security', come: 'How we work', faq: 'Technical FAQ' }
    : { sicurezza: 'Sicurezza', come: 'Come lavoriamo', faq: 'FAQ tecniche' }
  const qs = params.toString()
  const withLang = (path: string) => qs ? `${path}?${qs}` : path

  return (
    <header className="border-b border-white/10 bg-[#1a1c22]/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href={withLang('/')} className="brand">CloudLast</a>
        <nav className="text-sm text-neutral-300 flex items-center gap-6">
          <a href={withLang('/info/sicurezza')} className="hover:text-white">{labels.sicurezza}</a>
          <a href={withLang('/info/come-lavoriamo')} className="hover:text-white">{labels.come}</a>
          <a href={withLang('/info/faq')} className="hover:text-white">{labels.faq}</a>
        </nav>
        <div className="flex items-center gap-3">
          <LocaleToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

