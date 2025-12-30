import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CloudLast Cloud',
  description: 'Soluzioni operative CloudLast',
}

export default function CloudLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-white text-neutral-900 dark:bg-black dark:text-neutral-100 antialiased">{children}</div>
}
