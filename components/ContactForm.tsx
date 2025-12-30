'use client'

import { useState } from 'react'

type State = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<State>('idle')
  const [message, setMessage] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    setState('submitting')
    setMessage(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          role: formData.get('role'),
          project: formData.get('project'),
          agree: formData.get('agree') === 'on',
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Errore di invio')
      setState('success')
      setMessage('Richiesta inviata. Ti risponderemo entro 24 ore.')
      form.reset()
    } catch (err: any) {
      setState('error')
      setMessage(err.message || 'Errore di invio')
    }
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto grid max-w-2xl gap-4 text-left">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm text-neutral-300">Nome e cognome</label>
        <input id="name" name="name" required className="input-field" autoComplete="name" />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm text-neutral-300">Email di lavoro</label>
        <input id="email" name="email" type="email" required className="input-field" autoComplete="email" />
      </div>
      <div className="grid gap-2">
        <label htmlFor="role" className="text-sm text-neutral-300">Ruolo</label>
        <input id="role" name="role" className="input-field" />
      </div>
      <div className="grid gap-2">
        <label htmlFor="project" className="text-sm text-neutral-300">Tema o contesto del progetto</label>
        <textarea id="project" name="project" required rows={4} className="input-field" />
      </div>
      <label className="flex items-start gap-3 text-sm text-neutral-300">
        <input name="agree" type="checkbox" required className="mt-1" />
        <span>
          Acconsento al trattamento dei dati per essere ricontattato. Leggi
          la <a href="/privacy" className="underline">Privacy Policy</a>.
        </span>
      </label>
      <div className="flex items-center gap-3">
        <button disabled={state==='submitting'} className="cta-primary" type="submit">
          {state === 'submitting' ? 'Invio…' : 'Richiedi contatto'}
        </button>
        <a href="https://wa.me/393204255705" className="cta-secondary">Scrivi su WhatsApp</a>
      </div>
      {message && (
        <p className={`text-sm ${state === 'error' ? 'text-rose-300' : 'text-emerald-300'}`}>{message}</p>
      )}
      <p className="text-xs text-neutral-400">
        Cosa succede dopo: rispondiamo entro 24h con un breve scambio
        per capire obiettivi e vincoli. Nessuna vendita aggressiva.
      </p>
    </form>
  )
}

