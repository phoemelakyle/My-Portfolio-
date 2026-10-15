
'use client'

import {
  GraduationCap,
  BriefcaseBusiness,
  ArrowUpRight,
  Code2,
  Sparkles,
  Bot,
  Zap,
  Globe,
  ShieldCheck,
  Workflow,
  CheckCircle2,
  Clock3,
  ChevronRight,
} from 'lucide-react'

const focusClass =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2'

const primaryButtonClass =
  'group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-purple-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-600/25'

const secondaryButtonClass =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/90 px-7 py-3 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:bg-purple-50 hover:text-purple-700'

const cardClass =
  'rounded-2xl border border-slate-200/80 bg-white/85 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/5'

const iconBoxClass =
  'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-100 bg-gradient-to-br from-purple-50 to-fuchsia-50 text-purple-600'

const careerFocus = [
  { label: 'Software Development', icon: Code2 },
  { label: 'Data & AI', icon: Bot },
  { label: 'UI/UX Design', icon: Sparkles },
]

const automationFeatures = [
  {
    title: 'Technical Skills',
    description: 'Development, data and AI',
    icon: Code2,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    title: 'Smart Workflows',
    description: 'Automation-focused thinking',
    icon: Workflow,
    color: 'text-fuchsia-600',
    bg: 'bg-fuchsia-50',
  },
  {
    title: 'User-Centered Design',
    description: 'Practical digital experiences',
    icon: Globe,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#faf9ff] text-slate-900"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-purple-200/35 blur-[100px]" />

        <div className="absolute -right-40 top-32 h-[440px] w-[440px] rounded-full bg-fuchsia-200/30 blur-[110px]" />

        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-indigo-100/50 blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.23]"
          style={{
            backgroundImage:
              'radial-gradient(#a78bfa 0.8px, transparent 0.8px)',
            backgroundSize: '25px 25px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1180px] px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:px-10 lg:pb-24 lg:pt-16">

        {/* Top status bar */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-3">
          <a
            href="#home"
            className={`inline-flex items-center gap-2.5 rounded-full border border-white/90 bg-white/75 px-3.5 py-2 shadow-sm backdrop-blur-xl transition hover:border-purple-200 ${focusClass}`}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white">
              <Code2 className="h-4 w-4" />
            </span>

            <span className="text-xs font-extrabold tracking-tight text-slate-800">
              PKS<span className="text-purple-600">.DEV</span>
            </span>
          </a>

          <div className="flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white/80 px-3.5 py-2 shadow-sm backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-700 sm:text-xs">
              Open to opportunities
            </span>
          </div>
        </div>

        {/* Main hero layout */}
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_390px] lg:gap-16">

          {/* Left: Profile and introduction */}
          <div className="min-w-0 text-center lg:text-left">

            {/* LinkedIn-style cover banner */}
            <div className="mb-8">
              <div className="relative mx-auto w-full max-w-[540px] lg:mx-0">

                {/* Cover */}
                <div className="group relative h-36 w-[120%] overflow-hidden rounded-2xl border border-purple-200/60 bg-gradient-to-br from-[#211442] via-purple-800 to-fuchsia-600 shadow-lg shadow-purple-900/10 sm:h-44">
                  {/* Gradient glow */}
                  <div className="absolute -right-10 -top-20 h-56 w-56 rounded-full bg-fuchsia-400/30 blur-3xl" />

                  <div className="absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-purple-400/30 blur-3xl" />

                  {/* Dot pattern */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        'radial-gradient(rgba(255,255,255,0.9) 0.8px, transparent 0.8px)',
                      backgroundSize: '18px 18px',
                    }}
                  />

{/* Decorative circles */}
<div className="absolute -right-5 top-5 h-32 w-32 rounded-full border border-white/20 sm:right-12 sm:h-40 sm:w-40" />

<div className="absolute -right-1 top-9 h-24 w-24 rounded-full border border-white/15 sm:right-16 sm:top-9 sm:h-32 sm:w-32" />

{/* Cover text */}
<div className="absolute inset-0 flex items-center justify-end px-5 sm:px-8">
  <div className="relative z-10 max-w-[70%] text-right">
    <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-purple-100 backdrop-blur-md sm:text-[10px]">
      <Sparkles className="h-3 w-3" />
      Software Developer
    </div>

    <p className="text-lg font-black tracking-tight text-white sm:text-2xl">
      Build. Design.
    </p>

    <p className="text-lg font-black tracking-tight text-purple-200 sm:text-2xl">
      Automate. Innovate.
    </p>

    <p className="mt-1 text-[10px] text-white/70 sm:text-xs">
      Web Development · AI & Data · UI/UX
    </p>
  </div>
</div>
</div>


{/* Overlapping profile picture and education badge */}
<div className="relative z-10 -mt-12 flex items-end justify-between gap-3 px-4 sm:-mt-16 sm:px-7">
  {/* Profile picture */}
  <div className="group relative shrink-0">
    {/* Gradient photo ring */}
    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-400 opacity-90 blur-[1px] transition-transform duration-300 group-hover:scale-105" />

    {/* Photo frame */}
    <div className="relative h-24 w-24 rounded-full border-4 border-white bg-white p-0.5 shadow-xl sm:h-32 sm:w-32 md:h-36 md:w-36">
      <div className="h-full w-full overflow-hidden rounded-full bg-slate-100">
        <img
          src="/profile.JPG"
          alt="Phoemela Kyle Sebastian"
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          fetchPriority="high"
        />
      </div>
    </div>

    {/* Availability indicator */}
    <div
      className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full border-[3px] border-white bg-emerald-500 text-white shadow-md sm:bottom-2 sm:right-2 sm:h-8 sm:w-8"
      title="Open to opportunities"
    >
      <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4" />
    </div>
  </div>

 
    <div className="min-w-0 m-0 p-0">
  <span className="inline-flex items-center gap-2 rounded-full border border-purple-200/80 bg-white/90 px-3.5 py-1.5 text-[10px] font-bold tracking-wider text-purple-700 shadow-sm backdrop-blur sm:text-xs">
    <Sparkles className="h-3.5 w-3.5" />
    DEVELOPER · DATA · DESIGN
  </span>
</div>
</div>
</div>
</div>

{/* Introduction */}

{/* Name */}
<h1 className="text-center text-3xl font-black uppercase leading-[1.12] tracking-[-0.045em] text-slate-950 sm:text-4xl md:text-5xl lg:text-left lg:text-[43px] xl:text-[53px]">
  Phoemela Kyle
  <span className="mt-1 block bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 bg-clip-text text-transparent">
    Sebastian
  </span>
</h1>

{/* Professional title */}
<div className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[10px] font-bold uppercase leading-6 tracking-[0.1em] text-slate-500 sm:text-xs md:text-sm lg:justify-start lg:tracking-[0.13em]">
  <span>Computer Science Graduate</span>
  <span className="text-purple-400">/</span>
  <span>Software Development</span>
  <span className="text-purple-400">/</span>
  <span>Data &amp; AI</span>
</div>

{/* Description */}
<div className="mx-auto mt-5 max-w-[650px] text-center lg:mx-0 lg:text-left">
  <h2 className="text-lg font-bold leading-snug tracking-tight text-slate-800 sm:text-2xl md:text-[27px]">
    Building smarter digital experiences through{' '}
    <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
      code, automation, and design.
    </span>
  </h2>

  <p className="mt-3 text-sm leading-7 text-slate-600 sm:mt-4 sm:text-base">
    I explore the intersection of software development,
    artificial intelligence, data, and UI/UX to create
    practical, intuitive, and user-focused digital solutions.
    Welcome to my portfolio.
  </p>
</div>

{/* Career focus chips */}
<div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
  {careerFocus.map(({ label, icon: Icon }) => (
    <span
      key={label}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-200 hover:text-purple-700"
    >
      <Icon className="h-3.5 w-3.5 text-purple-500" />
      {label}
    </span>
  ))}
</div>

{/* Action buttons */}
<div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
  <a
    href="#work"
    className={`${primaryButtonClass} ${focusClass}`}
  >
    Explore my work
    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
  </a>

  <a
    href="#contact"
    className={`${secondaryButtonClass} ${focusClass}`}
  >
    Let's connect
    <ChevronRight className="h-4 w-4" />
  </a>
</div>
            {/* Technology highlights */}
            <div className="mx-auto mt-9 flex max-w-xl flex-wrap items-center justify-center gap-x-5 gap-y-3 border-t border-slate-200/80 pt-5 lg:mx-0 lg:justify-start">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <ShieldCheck className="h-4 w-4 text-purple-500" />
                User-focused solutions
              </div>

              <span className="hidden h-4 w-px bg-slate-200 sm:block" />

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <Zap className="h-4 w-4 text-fuchsia-500" />
                Automation mindset
              </div>
            </div>
          </div>

          {/* Right: Developer dashboard */}
          <div className="mx-auto w-full max-w-[430px] lg:mx-0 lg:max-w-none">

            {/* Dashboard shell */}
            <div className={`${cardClass} overflow-hidden`}>

              {/* Dashboard header */}
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white shadow-md shadow-purple-500/20">
                    <Workflow className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900">
                      Developer Dashboard
                    </h3>

                    <p className="mt-0.5 text-[11px] text-slate-500">
                      Skills &amp; professional profile
                    </p>
                  </div>
                </div>

                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                  <Sparkles className="h-4 w-4" />
                </span>
              </div>

              <div className="space-y-5 p-5 sm:p-6">

                {/* Profile overview */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#211442] via-purple-900 to-[#6d28d9] p-5 text-white">
                  <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full border border-white/10 bg-white/5" />

                  <div className="absolute -bottom-14 right-16 h-36 w-36 rounded-full border border-white/10" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-purple-200">
                        Professional profile
                      </span>

                      <span className="flex items-center gap-1.5 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Available
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-extrabold tracking-tight sm:text-2xl">
                      Create. Automate.
                      <span className="block text-purple-200">
                        Innovate.
                      </span>
                    </h3>

                    <p className="mt-2 max-w-[270px] text-xs leading-6 text-purple-100/80">
                      Combining technical thinking with creative problem
                      solving to build better digital experiences.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <span className="rounded-lg border border-white/10 bg-white/10 px-2.5 py-1.5 text-[10px] font-semibold text-white/90">
                        Software
                      </span>

                      <span className="rounded-lg border border-white/10 bg-white/10 px-2.5 py-1.5 text-[10px] font-semibold text-white/90">
                        AI &amp; Data
                      </span>

                      <span className="rounded-lg border border-white/10 bg-white/10 px-2.5 py-1.5 text-[10px] font-semibold text-white/90">
                        UI/UX
                      </span>
                    </div>
                  </div>
                </div>

                {/* Focus areas */}
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-xs font-extrabold uppercase tracking-[0.12em] text-slate-700">
                      Areas of focus
                    </h3>

                    <span className="text-[10px] font-medium text-slate-400">
                      Core interests
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {automationFeatures.map(
                      ({ title, description, icon: Icon, color, bg }) => (
                        <div
                          key={title}
                          className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3 transition-all duration-200 hover:border-purple-200 hover:bg-purple-50/40"
                        >
                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${bg} ${color}`}
                          >
                            <Icon className="h-5 w-5" />
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-bold text-slate-800">
                              {title}
                            </p>

                            <p className="mt-1 text-[11px] text-slate-500">
                              {description}
                            </p>
                          </div>

                          <ArrowUpRight className="h-4 w-4 text-slate-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-600" />
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Education card */}
                <div className="rounded-2xl border border-purple-100/80 bg-gradient-to-br from-purple-50/80 to-white p-4">
                  <div className="flex items-start gap-3">
                    <div className={iconBoxClass}>
                      <GraduationCap
                        className="h-6 w-6"
                        strokeWidth={1.8}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-purple-600">
                          Education
                        </p>

                        <span className="rounded-full bg-purple-100 px-2 py-0.5 text-[9px] font-bold text-purple-700">
                          Computer Science
                        </span>
                      </div>

                      <h3 className="mt-2 text-sm font-extrabold leading-5 text-slate-900">
                        Batangas State University
                      </h3>

                      <p className="mt-1.5 text-xs leading-5 text-slate-600">
                        Bachelor of Science in Computer Science
                      </p>

                      <div className="mt-3 flex items-center gap-2 text-[11px] font-medium text-slate-500">
                        <Code2 className="h-3.5 w-3.5 text-purple-500" />
                        Computing &amp; technology
                      </div>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50/70 p-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-slate-800">
                      Open to opportunities
                    </p>

                    <p className="mt-1 text-[11px] leading-5 text-slate-500">
                      On-site · Hybrid · Remote
                    </p>
                  </div>

                  <Clock3 className="h-4 w-4 shrink-0 text-emerald-600" />
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-5 flex items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-xl">
              <div>
                <p className="text-xs font-extrabold text-slate-800">
                  Let's connect
                </p>

                <p className="mt-1 text-[11px] text-slate-500">
                  Find me across the web
                </p>
              </div>

              <div className="flex gap-2.5">
                {/* GitHub */}
                <a
                  href="https://github.com/phoemelakyle"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit GitHub profile"
                  title="GitHub"
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all hover:-translate-y-1 hover:border-slate-900 hover:bg-slate-900 hover:text-white ${focusClass}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.167 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.156-1.11-1.464-1.11-1.464-.908-.621.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.636-1.338-2.221-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.6 9.6 0 012.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.841-2.338 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.337-.012 2.415-.012 2.744 0 .269.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/phoemela-kyle-sebastian-358a00349/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn profile"
                  title="LinkedIn"
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all hover:-translate-y-1 hover:border-purple-200 hover:bg-purple-50 hover:text-purple-700 ${focusClass}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287zM5.337 7.433a2.062 2.062 0 11.001-4.125 2.062 2.062 0 01-.001 4.125zM7.114 20.452H3.56V8.999h3.554v11.453zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:phoemelakylesebastian@gmail.com"
                  aria-label="Send me an email"
                  title="Email"
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all hover:-translate-y-1 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600 ${focusClass}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.236l-8 5.333-8-5.333V6l8 5.333L20 6v2.236z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom portfolio navigation */}
        <div className="mt-14 grid gap-3 border-t border-slate-200/80 pt-6 sm:grid-cols-3">

          <a
            href="#work"
            className={`group flex items-center gap-3 rounded-xl p-3 transition hover:bg-white/80 ${focusClass}`}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <Code2 className="h-5 w-5" />
            </span>

            <span className="flex-1">
              <span className="block text-xs font-bold text-slate-800">
                Projects
              </span>

              <span className="mt-1 block text-[11px] text-slate-500">
                Explore my work
              </span>
            </span>

            <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:text-purple-600" />
          </a>

          <a
            href="#skills"
            className={`group flex items-center gap-3 rounded-xl p-3 transition hover:bg-white/80 ${focusClass}`}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-50 text-fuchsia-600">
              <Zap className="h-5 w-5" />
            </span>

            <span className="flex-1">
              <span className="block text-xs font-bold text-slate-800">
                Technical Skills
              </span>

              <span className="mt-1 block text-[11px] text-slate-500">
                Technologies &amp; tools
              </span>
            </span>

            <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:text-purple-600" />
          </a>

          <a
            href="#contact"
            className={`group flex items-center gap-3 rounded-xl p-3 transition hover:bg-white/80 ${focusClass}`}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <BriefcaseBusiness className="h-5 w-5" />
            </span>

            <span className="flex-1">
              <span className="block text-xs font-bold text-slate-800">
                Opportunities
              </span>

              <span className="mt-1 block text-[11px] text-slate-500">
                Get in touch
              </span>
            </span>

            <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:text-purple-600" />
          </a>
        </div>
      </div>
    </section>
  )
}
