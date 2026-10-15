
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  User,
  BriefcaseBusiness,
  Wrench,
  Mail,
  Menu,
  X,
  Sparkles,
} from 'lucide-react'

const navItems = [
  { label: 'About', href: '/about', icon: User },
  {
    label: 'Projects',
    href: '/work',
    icon: BriefcaseBusiness,
  },
  { label: 'Skills', href: '/skills', icon: Wrench },
  { label: 'Contact', href: '/contact', icon: Mail },
]

const focusClass =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2'

const primaryButtonClass =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-purple-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-purple-700 hover:to-fuchsia-700 hover:shadow-lg hover:shadow-purple-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Close the mobile menu when Escape is pressed.
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const profileLink = (
    <Link
      href="/"
      aria-label="Go to homepage"
      onClick={() => setIsOpen(false)}
      className={`group flex items-center gap-3 rounded-xl text-left transition-opacity hover:opacity-80 ${focusClass}`}
    >
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-purple-200 bg-purple-50 shadow-sm transition-colors duration-300 group-hover:border-fuchsia-300">
        <Image
          src="/profile.JPG"
          alt="Phoemela Kyle Sebastian"
          fill
          sizes="48px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>

      <div className="min-w-0">
        <p className="text-sm font-bold text-slate-900 transition-colors group-hover:text-purple-700">
          Phoemela Kyle
        </p>

        <p className="mt-0.5 text-xs text-slate-500">
          Computer Science
        </p>
      </div>
    </Link>
  )

  const renderNavItems = (mobile = false) =>
    navItems.map((item) => {
      const Icon = item.icon

      const active =
        pathname === item.href ||
        (item.href !== '/' &&
          pathname.startsWith(`${item.href}/`))

      return (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setIsOpen(false)}
          aria-current={active ? 'page' : undefined}
          className={`group flex min-h-11 w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${
            active
              ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-md shadow-purple-600/20'
              : 'text-slate-600 hover:bg-purple-50 hover:text-purple-700'
          } ${mobile ? 'min-h-12' : ''}`}
        >
          <Icon
            className={`h-[18px] w-[18px] shrink-0 transition-all duration-200 ${
              active
                ? 'text-white'
                : 'text-slate-400 group-hover:scale-110 group-hover:text-purple-600'
            }`}
          />

          <span>{item.label}</span>

          {active && (
            <span className="ml-auto h-1.5 w-1.5 rounded-full bg-white shadow-sm" />
          )}
        </Link>
      )
    })

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden h-screen w-[250px] flex-col border-r border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl lg:flex">
        {/* Profile */}
        <div className="border-b border-slate-100 px-6 py-7">
          {profileLink}
        </div>

        {/* Navigation */}
        <nav
          aria-label="Main navigation"
          className="flex-1 overflow-y-auto px-4 py-7"
        >
          <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Main Menu
          </p>

          <div className="space-y-1.5">
            {renderNavItems()}
          </div>
        </nav>

        {/* Contact Card */}
        <div className="border-t border-slate-100 p-4">
          <div className="group overflow-hidden rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 via-white to-fuchsia-50 p-4 transition-all duration-300 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-500/5">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white shadow-md shadow-purple-600/20 transition-transform duration-300 group-hover:scale-105">
                <Sparkles className="h-4 w-4" />
              </div>

              <div>
                <p className="text-xs font-bold text-slate-900">
                  Open to Work
                </p>

                <p className="mt-0.5 text-[10px] text-emerald-600">
                  Open to opportunities
                </p>
              </div>
            </div>

            <p className="mt-3 text-[11px] leading-5 text-slate-600">
              Software Development · Data · AI · UI/UX
            </p>

            <Link
              href="/contact"
              className={`${primaryButtonClass} mt-4 w-full text-xs`}
            >
              <Mail className="h-3.5 w-3.5" />
              Contact Me
            </Link>
          </div>

          <p className="mt-4 text-center text-[10px] text-slate-400">
            © {new Date().getFullYear()} Phoemela Kyle
          </p>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl lg:hidden">
        <div className="flex h-16 items-center justify-between gap-3 px-4 sm:px-6">
          {/* Mobile Profile */}
          <Link
            href="/"
            aria-label="Go to homepage"
            onClick={() => setIsOpen(false)}
            className={`group flex min-w-0 items-center gap-3 rounded-xl ${focusClass}`}
          >
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-purple-200 bg-purple-50 transition-colors duration-300 group-hover:border-fuchsia-300">
              <Image
                src="/profile.JPG"
                alt="Phoemela Kyle Sebastian"
                fill
                sizes="36px"
                className="object-cover"
                priority
              />
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-slate-900 transition-colors group-hover:text-purple-700">
                Phoemela Kyle
              </p>

              <p className="text-[10px] text-slate-500">
                Computer Science
              </p>
            </div>
          </Link>

          {/* Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-all duration-200 hover:border-purple-200 hover:bg-purple-50 hover:text-purple-700 ${focusClass}`}
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-slate-100 bg-white px-4 py-4 sm:px-6"
          >
            <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Navigation
            </p>

            <div className="space-y-1.5">
              {renderNavItems(true)}
            </div>

            {/* Mobile Contact Card */}
            <div className="mt-4 rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50/80 via-white to-fuchsia-50/80 p-4">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white shadow-sm">
                  <Mail className="h-4 w-4" />
                </div>

                <p className="text-sm font-semibold text-slate-900">
                  Let&apos;s work together
                </p>
              </div>

              <p className="mt-2 text-xs leading-5 text-slate-600">
                Have a project or opportunity in mind? Feel free to get
                in touch.
              </p>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={`${primaryButtonClass} mt-3 w-full`}
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </Link>
            </div>

            <p className="mt-4 text-center text-[10px] text-slate-400">
              © {new Date().getFullYear()} Phoemela Kyle
            </p>
          </nav>
        )}
      </header>
    </>
  )
}
