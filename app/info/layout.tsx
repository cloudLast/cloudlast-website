import type { Metadata } from 'next'
import InfoHeader from '@/components/InfoHeader'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: {
    default: 'CloudLast · Info',
    template: '%s · CloudLast Info',
  },
  description: 'Sicurezza, responsabilità e approccio tecnico CloudLast',
}

export default function InfoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-black dark:text-neutral-100 antialiased">
      <Suspense>
        <InfoHeader />
      </Suspense>
      {children}
      <footer className="mt-24 border-t border-white/10 bg-[#121419]">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-neutral-400">
          <div className="flex items-center justify-between">
            <span>© 2025 CloudLast</span>
            <div className="flex items-center gap-4">
              <span>v1.0.0</span>
              <a className="hover:text-white" href="https://cloudlast.it">cloudlast.it</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
