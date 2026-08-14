'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Header({
  activeSection,
  setActiveSection,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Work', id: 'work' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ]

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    setIsOpen(false)

    const element = document.getElementById(id)

    element?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="#"
          onClick={() => {
            setActiveSection('home')
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }}
          className="hover:opacity-80 transition-opacity cursor-pointer"
        >
          <Image
            src="/icon.png"
            alt="PKS Logo"
            width={40}
            height={40}
            priority
            unoptimized
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`cursor-pointer text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? 'text-accent'
                  : 'text-foreground/70 hover:text-blue-500'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden cursor-pointer p-2 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`cursor-pointer text-left text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-accent'
                      : 'text-foreground/70 hover:text-blue-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}