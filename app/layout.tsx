import './globals.css'
import Header from '../components/Header'
import { Suspense } from 'react'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'

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
    <html lang="it" className="dark" suppressHydrationWarning>
      <head>
        {/* forza il dark mode prima del render */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              document.documentElement.classList.add('dark');
            } catch {}
          `}
        </Script>
      </head>

      <body className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
        <Suspense>
          <Header />
        </Suspense>
        {children}
      </body>
    </html>
  )
}
