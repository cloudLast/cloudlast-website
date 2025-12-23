'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const focusableSelectors = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input[type="text"]:not([disabled])',
  'input[type="radio"]:not([disabled])',
  'input[type="checkbox"]:not([disabled])',
  'select:not([disabled])'
].join(',')

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const toggleButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = ''
      return
    }

    const focusable = panelRef.current?.querySelectorAll<HTMLElement>(focusableSelectors)
    focusable?.[0]?.focus()
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setIsMenuOpen(false)
        toggleButtonRef.current?.focus()
        return
      }

      if (event.key !== 'Tab') return
      if (!focusable?.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement as HTMLElement | null

      if (event.shiftKey) {
        if (active === first || !panelRef.current?.contains(active)) {
          event.preventDefault()
          last.focus()
        }
      } else {
        if (active === last || !panelRef.current?.contains(active)) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const handleClose = () => {
    setIsMenuOpen(false)
    toggleButtonRef.current?.focus()
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#1a1c22]/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">

        {/* Brand */}
        <Link
          href="/"
          aria-label="Homepage"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="brand text-lg">
            Cloudlast
          </span>
        </Link>

        {/* Navigation */}
        <nav
          aria-label="Navigazione principale"
          className="hidden md:flex items-center gap-8 text-sm text-neutral-300"
        >
          <Link
            href="/#servizi"
            className="hover:text-white transition"
          >
            Servizi
          </Link>
          <Link
            href="/#chi-siamo"
            className="hover:text-white transition"
          >
            Chi siamo
          </Link>
          <Link
            href="/#contatti"
            className="hover:text-white transition"
          >
            Contatti
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          ref={toggleButtonRef}
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">{isMenuOpen ? 'Chiudi menu' : 'Apri menu'}</span>
          <span
            aria-hidden
            className="relative flex h-4 w-5 flex-col justify-between"
          >
            <span className={`h-[2px] w-full rounded-full bg-white transition-transform duration-300 ${isMenuOpen ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`h-[2px] w-full rounded-full bg-white transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`h-[2px] w-full rounded-full bg-white transition-transform duration-300 ${isMenuOpen ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 md:hidden bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        aria-hidden={!isMenuOpen}
        onClick={handleClose}
      />

      <div
        id="mobile-menu"
        ref={panelRef}
        className={`fixed right-0 top-0 z-50 h-full w-72 max-w-[80%] border-l border-white/10 bg-[#1a1c22]/90 backdrop-blur-xl shadow-2xl transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'pointer-events-none translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu mobile"
        aria-hidden={!isMenuOpen}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-white/10">
          <span className="font-semibold tracking-tight">Menu</span>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 text-sm font-medium text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition"
            onClick={handleClose}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <span className="sr-only">Chiudi menu</span>
            <span aria-hidden className="h-4 w-4 rotate-45">+</span>
          </button>
        </div>

        <div className="flex flex-col gap-1 p-5 text-base text-neutral-200">
          <Link
            href="/#servizi"
            className="rounded-lg px-3 py-2 hover:bg-white/5 transition"
            onClick={() => setIsMenuOpen(false)}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            Servizi
          </Link>
          <Link
            href="/#chi-siamo"
            className="rounded-lg px-3 py-2 hover:bg-white/5 transition"
            onClick={() => setIsMenuOpen(false)}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            Chi siamo
          </Link>
          <Link
            href="/#contatti"
            className="rounded-lg px-3 py-2 hover:bg-white/5 transition"
            onClick={() => setIsMenuOpen(false)}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            Contatti
          </Link>
        </div>
      </div>
    </header>
  )
}
