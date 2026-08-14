import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Phoemela Kyle Sebastian - Portfolio',
  description:
    'Showcasing creative work and professional expertise in design and development',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
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
  colorScheme: 'dark',
  themeColor: '#070f20',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="
          antialiased
          bg-[#070f20]
          text-white
        "
      >
        {/* =========================
            GLOBAL BACKGROUND
            Covers the entire website
        ========================== */}
        <div
          className="
            fixed
            inset-0
            -z-10
            overflow-hidden
            bg-[#070f20]
          "
        >
          {/* Top / Center Blue Glow */}
          <div
            className="
              absolute
              left-1/2
              top-[5%]
              h-[700px]
              w-[700px]
              -translate-x-1/2
              rounded-full
              bg-blue-500/[0.08]
              blur-[150px]
            "
          />

          {/* Bottom Right Orange Glow */}
          <div
            className="
              absolute
              bottom-[-250px]
              right-[-150px]
              h-[650px]
              w-[650px]
              rounded-full
              bg-orange-400/[0.10]
              blur-[150px]
            "
          />

          {/* Bottom Left Blue Glow */}
          <div
            className="
              absolute
              bottom-[-250px]
              left-[-200px]
              h-[650px]
              w-[650px]
              rounded-full
              bg-blue-600/[0.08]
              blur-[150px]
            "
          />

          {/* Middle Blue Glow */}
          <div
            className="
              absolute
              left-[15%]
              top-[45%]
              h-[450px]
              w-[450px]
              rounded-full
              bg-blue-400/[0.035]
              blur-[140px]
            "
          />

          {/* Overall subtle radial lighting */}
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_50%_25%,rgba(35,67,120,0.14),transparent_38%)]
            "
          />

          {/* Very subtle dark gradient */}
          <div
            className="
              absolute
              inset-0
              bg-[linear-gradient(to_bottom,rgba(7,15,32,0),rgba(7,15,32,0.35))]
            "
          />
        </div>

        {/* =========================
            PAGE CONTENT
        ========================== */}
        <main className="relative z-0">
          {children}
        </main>

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}