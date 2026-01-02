import './globals.css'
import { Suspense } from 'react'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import Header from '../components/Header'

export const metadata: Metadata = {
  title: {
    default: 'Cloudlast',
    template: '%s · Cloudlast',
  },
  description: 'Think cloud. Build last.',
}

export const viewport: Viewport = {
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="it"
      className="dark"
      suppressHydrationWarning
    >
      <head>
        {/* Force dark mode before first paint */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
        >
          {`
            try {
              document.documentElement.classList.add('dark');
            } catch {}
          `}
        </Script>
      </head>

      <body className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
        <Suspense fallback={null}>
          <Header />
        </Suspense>

        <main className="flex min-h-[calc(100vh-64px)] flex-col">
          {children}
        </main>
      </body>
    </html>
  )
}
