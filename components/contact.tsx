
'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import {
  Mail,
  Code2,
  User,
  Send,
  MessageSquare,
  Clock3,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  Bot,
  ArrowRight,
} from 'lucide-react'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

type FormData = {
  name: string
  email: string
  message: string
}

const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    description: "Let's start a conversation",
    href: 'mailto:phoemelakylesebastian@gmail.com',
    iconStyle: 'bg-purple-50 text-purple-600 group-hover:bg-purple-100',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    description: 'Connect professionally',
    href: 'https://www.linkedin.com/in/phoemela-kyle-sebastian-358a00349/',
    iconStyle: 'bg-violet-50 text-violet-600 group-hover:bg-violet-100',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    description: 'Explore my repositories',
    href: 'https://github.com/phoemelakyle',
    iconStyle: 'bg-slate-100 text-slate-700 group-hover:bg-slate-200',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  const [isOpeningEmail, setIsOpeningEmail] = useState(false)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const recipient = 'phoemelakylesebastian@gmail.com'

    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${formData.name}`,
    )

    const body = encodeURIComponent(
      `Hello Phoemela Kyle,\n\n${formData.message}\n\nName: ${formData.name}\nEmail: ${formData.email}`,
    )

    const mailtoLink =
      `mailto:${recipient}?subject=${subject}&body=${body}`

    setIsOpeningEmail(true)
    window.location.href = mailtoLink
  }

  return (
    <section
      id="contact"
className="relative isolate min-h-screen overflow-hidden bg-slate-50 px-4 pb-16 pt-0 text-slate-900 sm:px-6 sm:pb-20 sm:pt-0 md:px-8 md:pb-24 md:pt-0"
>
      {/* DECORATIVE BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-200/30 blur-[120px]" />

        <div className="absolute -right-32 top-[30rem] h-96 w-96 rounded-full bg-fuchsia-200/25 blur-[130px]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(243,232,255,0.45),transparent_60%)]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'radial-gradient(#64748b 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* HEADER */}
        <header className="mb-12 sm:mb-14">
          <p className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-purple-100 bg-gradient-to-r from-purple-50 to-fuchsia-50 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-purple-700 sm:px-4 sm:text-[11px] sm:tracking-[0.2em]">
            <Sparkles className="h-3.5 w-3.5" />
            Let&apos;s Connect
          </p>

          <h2 className="mb-5 max-w-4xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-6xl">
            Let&apos;s Build Something{' '}
            <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              Amazing.
            </span>

            <span className="mt-3 block bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-500 bg-clip-text text-base font-semibold tracking-normal text-transparent sm:text-lg md:text-xl">
              Ideas, collaboration &amp; opportunities
            </span>
          </h2>

          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Have an idea, a project, or an exciting opportunity?
            Let&apos;s connect, exchange ideas, and turn your vision
            into something meaningful.
          </p>

          {/* HIGHLIGHTS */}
          <div className="mt-7 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3.5 py-2 text-xs font-medium text-slate-600 shadow-sm sm:text-sm">
              <Zap className="h-4 w-4 text-amber-500" />
              Innovation-driven
            </div>

            <div className="flex items-center gap-2 rounded-full border border-purple-100 bg-white/80 px-3.5 py-2 text-xs font-medium text-slate-600 shadow-sm sm:text-sm">
              <Bot className="h-4 w-4 text-purple-600" />
              Tech-focused
            </div>

            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3.5 py-2 text-xs font-medium text-slate-600 shadow-sm sm:text-sm">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              Professional
            </div>
          </div>
        </header>

        {/* MAIN CONTACT GRID */}
        <div className="grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          {/* CONTACT FORM */}
          <div className="group/form relative">
            <div className="absolute -inset-px rounded-[28px] bg-gradient-to-br from-purple-300/70 via-violet-200/50 to-fuchsia-200/60 opacity-70 blur-[1px] transition-opacity duration-500 group-hover/form:opacity-100" />

            <div className="relative rounded-[27px] border border-white/80 bg-white/95 p-5 shadow-xl shadow-purple-950/[0.04] backdrop-blur-xl sm:p-8 lg:p-9">
              <div className="mb-8 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/25">
                  <Send className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                      Send a Message
                    </h3>

                    <span className="rounded-full border border-purple-100 bg-purple-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-purple-700">
                      Let&apos;s connect
                    </span>
                  </div>

                  <p className="mt-1.5 text-sm leading-6 text-slate-500">
                    Share your ideas and let&apos;s explore the possibilities.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* NAME */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Your name
                  </label>

                  <div className="group/input relative">
                    <User className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400 transition-colors group-focus-within/input:text-purple-600" />

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      placeholder="Enter your full name"
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-purple-200 focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-500/10"
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email address
                  </label>

                  <div className="group/input relative">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400 transition-colors group-focus-within/input:text-purple-600" />

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-purple-200 focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-500/10"
                    />
                  </div>
                </div>

                {/* MESSAGE */}
                <div>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-semibold text-slate-700"
                    >
                      Your message
                    </label>

                    <span className="text-xs tabular-nums text-slate-400">
                      {formData.message.length}/3000
                    </span>
                  </div>

                  <div className="group/input relative">
                    <MessageSquare className="pointer-events-none absolute left-4 top-4 h-[18px] w-[18px] text-slate-400 transition-colors group-focus-within/input:text-purple-600" />

                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      maxLength={3000}
                      placeholder="Tell me about your project, idea, or opportunity..."
                      required
                      className="w-full resize-y rounded-2xl border border-slate-200 bg-slate-50/70 py-3.5 pl-12 pr-4 text-sm leading-6 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-purple-200 focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-500/10"
                    />
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="group/button relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 bg-[length:200%_100%] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-right hover:shadow-xl hover:shadow-purple-500/25 focus:outline-none focus:ring-4 focus:ring-purple-500/20 active:translate-y-0"
                >
                  <span className="absolute inset-0 bg-white/0 transition-colors group-hover/button:bg-white/[0.06]" />

                  {isOpeningEmail ? (
                    <>
                      <CheckCircle2 className="relative h-5 w-5" />
                      <span className="relative">Email App Requested</span>
                    </>
                  ) : (
                    <>
                      <Send className="relative h-[18px] w-[18px] transition-transform duration-300 group-hover/button:translate-x-1" />
                      <span className="relative">Send Your Message</span>
                      <ArrowRight className="relative h-4 w-4 opacity-70 transition-all duration-300 group-hover/button:translate-x-1 group-hover/button:opacity-100" />
                    </>
                  )}
                </button>

                <p
                  aria-live="polite"
                  className="text-center text-xs leading-5 text-slate-400"
                >
                  {isOpeningEmail
                    ? 'Your email app should open with your message prepared. Review and send it there.'
                    : 'Your email app will open so you can review and send your message.'}
                </p>
              </form>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-5">
            {/* CONTACT INFORMATION */}
            <div className="rounded-[26px] border border-slate-200/80 bg-white/90 p-5 shadow-lg shadow-slate-900/[0.025] backdrop-blur-sm transition-all duration-300 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-950/[0.04] sm:p-7">
              <div className="mb-6 flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-50 to-violet-100 text-purple-600">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-bold tracking-tight text-slate-900">
                    Contact Information
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    The easiest way to reach me.
                  </p>
                </div>
              </div>

              <a
                href="mailto:phoemelakylesebastian@gmail.com"
                className="group/email flex min-w-0 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-3.5 transition-all duration-300 hover:border-purple-200 hover:bg-purple-50/60 sm:p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-purple-600 shadow-sm ring-1 ring-purple-100">
                  <Mail className="h-[18px] w-[18px]" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-xs font-medium text-slate-500">
                    Email address
                  </p>
                  <p className="break-all text-sm font-semibold leading-5 text-slate-800">
                    phoemelakylesebastian@gmail.com
                  </p>
                </div>

                <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400 transition-all duration-300 group-hover/email:-translate-y-0.5 group-hover/email:translate-x-0.5 group-hover/email:text-purple-600" />
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <div className="rounded-[26px] border border-slate-200/80 bg-white/90 p-5 shadow-lg shadow-slate-900/[0.025] backdrop-blur-sm transition-all duration-300 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-950/[0.04] sm:p-7">
              <div className="mb-5 flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-50 to-fuchsia-100 text-purple-600">
                  <Code2 className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-bold tracking-tight text-slate-900">
                    Find Me Online
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Explore my work and connect.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.label}: ${link.description}`}
                      className="group/social flex items-center gap-3 rounded-2xl border border-transparent bg-slate-50/80 p-3.5 transition-all duration-300 hover:translate-x-1 hover:border-purple-100 hover:bg-white hover:shadow-sm sm:p-4"
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${link.iconStyle}`}
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-slate-800">
                          {link.label}
                        </p>
                        <p className="mt-0.5 text-xs text-slate-500">
                          {link.description}
                        </p>
                      </div>

                      <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400 transition-all duration-300 group-hover/social:-translate-y-0.5 group-hover/social:translate-x-0.5 group-hover/social:text-purple-600" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* RESPONSE TIME */}
            <div className="group/status relative isolate overflow-hidden rounded-[26px] border border-purple-100/80 bg-gradient-to-br from-purple-50 via-white to-fuchsia-50 p-5 shadow-lg shadow-purple-950/[0.025] transition-all duration-300 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-950/[0.05] sm:p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 -z-10 h-36 w-36 rounded-full bg-fuchsia-200/40 blur-3xl transition-transform duration-500 group-hover/status:scale-150"
              />

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/20">
                  <Clock3 className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-purple-700">
                      Response Time
                    </p>
                    <span className="rounded-full border border-emerald-200/80 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                      Stay Connected
                    </span>
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-slate-900">
                    Every great idea starts with a conversation.
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Send me a message, and I&apos;ll respond as soon as I
                    can. I look forward to hearing from you.
                  </p>
                </div>
              </div>
            </div>

            {/* INNOVATION CARD */}
            <div className="relative overflow-hidden rounded-[26px] border border-purple-100/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-purple-200 hover:shadow-md hover:shadow-purple-500/5 sm:p-6">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-purple-100/70 blur-2xl"
              />

              <div className="relative flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-50 to-fuchsia-100 text-purple-600">
                  <Sparkles className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-slate-800">
                    Ideas into Innovation
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Creative thinking. Smart solutions. Meaningful results.
                  </p>
                </div>

                <ArrowUpRight className="h-4 w-4 shrink-0 text-purple-400" />
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-purple-100/80 pt-7 text-center sm:mt-16 sm:flex-row sm:text-left">
          <p className="text-xs leading-5 text-slate-400 sm:text-sm">
            Designed with purpose. Built for meaningful connections.
          </p>

          <a
            href="mailto:phoemelakylesebastian@gmail.com"
            className="group/footer inline-flex items-center gap-2 text-sm font-semibold text-purple-600 transition-colors hover:text-fuchsia-600"
          >
            Let&apos;s talk
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/footer:-translate-y-0.5 group-hover/footer:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
