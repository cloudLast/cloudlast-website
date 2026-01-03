"use client"

import { useEffect, useState } from 'react'

function getInitialTheme(): boolean {
  if (typeof window === 'undefined') return true
  try {
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
  } catch {}
  return true
}

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch {}
  }, [dark])

  return (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 text-xs font-medium text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition"
      aria-pressed={dark}
      onClick={() => setDark((v) => !v)}
    >
      {dark ? 'Dark' : 'Light'}
    </button>
  )
}
