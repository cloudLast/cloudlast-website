"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

function buildHref(pathname: string, searchParams: URLSearchParams, lang: 'it'|'en') {
  const next = new URLSearchParams(searchParams)
  if (lang === 'it') next.delete('lang')
  else next.set('lang', 'en')
  const qs = next.toString()
  return qs ? `${pathname}?${qs}` : pathname
}

export default function LocaleToggle() {
  const pathname = usePathname()
  const params = useSearchParams()
  const lang = (params.get('lang') === 'en') ? 'en' : 'it'

  return (
    <div className="inline-flex items-center rounded-md border border-white/10 bg-white/5 p-0.5 text-xs">
      <Link
        href={buildHref(pathname, new URLSearchParams(params), 'it')}
        className={`px-2 py-1 rounded-sm ${lang==='it' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white'}`}
        aria-current={lang==='it' ? 'true' : undefined}
      >IT</Link>
      <Link
        href={buildHref(pathname, new URLSearchParams(params), 'en')}
        className={`px-2 py-1 rounded-sm ${lang==='en' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white'}`}
        aria-current={lang==='en' ? 'true' : undefined}
      >EN</Link>
    </div>
  )
}

