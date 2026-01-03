import { NextResponse } from 'next/server'

function isValidEmail(email: string) {
  return /.+@.+\..+/.test(email)
}

export async function POST(req: Request) {
  try {
    const { name, email, role, project, agree } = await req.json()

    if (!name || !email || !project || !agree) {
      return NextResponse.json({ error: 'Dati mancanti' }, { status: 400 })
    }
    if (!isValidEmail(String(email))) {
      return NextResponse.json({ error: 'Email non valida' }, { status: 400 })
    }

    const payload = {
      name: String(name),
      email: String(email),
      role: role ? String(role) : undefined,
      project: String(project),
      ts: new Date().toISOString(),
      source: 'cloudlast.it',
    }

    // Optional: forward to external webhook if configured
    const webhook = process.env.CONTACT_WEBHOOK_URL
    if (webhook) {
      try {
        await fetch(webhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      } catch {
        // ignore webhook errors, still respond success
        console.error('Webhook error')
      }
    } else {
      console.log('CONTACT REQUEST', payload)
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Errore imprevisto' }, { status: 500 })
  }
}
