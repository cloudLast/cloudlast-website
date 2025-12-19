import './globals.css'
import Header from '../components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Cloudlast',
    template: '%s · Cloudlast',
  },
  description: 'Think cloud. Build last.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="dark">
      <body className="min-h-screen bg-black text-neutral-100 antialiased">
        <Header />
        {children}
      </body>
    </html>
  )
}