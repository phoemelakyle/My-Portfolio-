
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import Header from '@/components/header'
import './globals.css'

export const metadata: Metadata = {
  title: 'Phoemela Kyle Sebastian - Portfolio',
  description:
    'Showcasing creative work and professional expertise in software development, web development, and design.',
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F8FAFC',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
        {/* Global Light Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-50"
        >
          {/* Top Center Blue Glow */}
          <div className="absolute left-1/2 top-[-200px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-200/30 blur-[140px]" />

          {/* Top Right Soft Blue Glow */}
          <div className="absolute right-[-200px] top-[20%] h-[500px] w-[500px] rounded-full bg-sky-200/25 blur-[140px]" />

          {/* Bottom Left Blue Glow */}
          <div className="absolute bottom-[-200px] left-[-150px] h-[550px] w-[550px] rounded-full bg-blue-100/50 blur-[140px]" />

          {/* Bottom Right Violet Glow */}
          <div className="absolute bottom-[-200px] right-[-150px] h-[500px] w-[500px] rounded-full bg-indigo-100/35 blur-[140px]" />

          {/* Subtle Overall Lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(219,234,254,0.35),transparent_55%)]" />
        </div>

        {/* Shared Navigation */}
        <Header />

        {/* Current Page */}
        <main className="relative min-h-screen">
          {children}
        </main>

        {/* Vercel Analytics */}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
