
'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import {
  Award,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Check,
  CheckCircle,
  ChevronDown,
  CircleAlert,
  CircleCheck,
  Copy,
  Download,
  GraduationCap,
  LoaderCircle,
  Search,
  School,
  Sparkles,
  Target,
  TrendingUp,
  WandSparkles,
} from 'lucide-react'

type Tab = 'about' | 'education' | 'experience' | 'certification'
type AIMode = 'career' | 'experience'
type CertificationSort = 'newest' | 'oldest' | 'name'

type CareerAnalysis = {
  role: string
  matched: string[]
  recommended: string[]
  percentage: number
}

const education = [
  {
    title: 'Bachelor of Science in Computer Science',
    school:
      'Batangas State University, The National Engineering University - Alangilan',
    start: 'Aug 2022',
    end: 'Jul 2026',
    sortDate: 2026,
    icon: GraduationCap,
    details: 'Undergraduate degree in Computer Science.',
  },
  {
    title: 'Secondary Education – STEM',
    school: 'Leuteboro National High School',
    start: 'Jun 2016',
    end: 'Jun 2022',
    sortDate: 2022,
    icon: School,
    details:
      'Science, Technology, Engineering, and Mathematics strand.',
  },
  {
    title: 'Elementary Education',
    school: 'Felomino C. Mendoza Subaan Elementary School',
    start: 'Jun 2009',
    end: 'Mar 2016',
    sortDate: 2016,
    icon: BookOpen,
    details: 'Elementary education.',
  },
]

const certifications = [
  {
    id: 'ccna',
    title: 'CCNA: Introduction to Networks Course',
    issuer: 'Cisco',
    date: 'January 22, 2024',
    sortDate: '2024-01-22',
    description:
      'Networking fundamentals, network infrastructure, protocols, IP connectivity, and the foundational concepts needed to understand computer networks.',
    credentialId: '',
    verificationUrl: '',
  },
  {
    id: 'html-essentials',
    title: 'HTML Essentials',
    issuer: 'Cisco',
    date: 'August 21, 2026',
    sortDate: '2026-08-21',
    description:
      'Fundamentals of HTML, semantic markup, webpage structure, and the essential building blocks of modern web development.',
    credentialId: '',
    verificationUrl: '',
  },
  {
    id: 'ai-fundamentals-foundations',
    title: 'AI Fundamentals: Foundations for Understanding AI',
    issuer: 'Cisco',
    date: 'August 22, 2026',
    sortDate: '2026-08-22',
    description:
      'Foundational artificial intelligence concepts, AI applications, and an introduction to understanding how AI technologies are used to solve problems.',
    credentialId: '',
    verificationUrl: '',
  },
  {
    id: 'ai-fundamentals-language-vision',
    title: 'AI Fundamentals: Language and Vision in AI',
    issuer: 'Cisco',
    date: 'August 24, 2026',
    sortDate: '2026-08-24',
    description:
      'An introduction to language and vision applications in artificial intelligence, including how AI systems process language and interpret visual information.',
    credentialId: '',
    verificationUrl: '',
  },
  {
    id: 'it-customer-support',
    title: 'IT Customer Support Basics',
    issuer: 'Cisco',
    date: 'August 24, 2026',
    sortDate: '2026-08-24',
    description:
      'Fundamental IT support concepts, troubleshooting approaches, customer communication, and basic technical support practices.',
    credentialId: '',
    verificationUrl: '',
  },
  {
    id: 'aws-ml',
    title:
      'AWS Academy Graduate - Machine Learning Foundations - Training Badge',
    issuer: 'Amazon Web Services (AWS)',
    date: 'December 10, 2025',
    sortDate: '2025-12-10',
    description:
      'Training in foundational machine learning concepts, machine learning workflows, and introductory machine learning applications in the AWS ecosystem.',
    credentialId: '',
    verificationUrl: '',
  },
  {
    id: 'opswat-cip',
    title: 'Introduction to Critical Infrastructure Protection',
    issuer: 'OPSWAT Academy',
    date: 'August 23, 2026',
    sortDate: '2026-08-23',
    description:
      'An introduction to protecting critical infrastructure, understanding relevant cybersecurity risks, and learning foundational infrastructure protection concepts.',
    credentialId: '',
    verificationUrl: '',
  },
]

const experience = {
  title: 'Full-Stack Developer & QA Tester',
  organization:
    'Institutional Planning and Development Office (IPDO)',
  location:
    'Batangas State University - TNEU, Pablo Borbon Campus',
  period: 'Jun 2025 – Jul 2025',
  responsibilities: [
    'Developed and maintained web application features using frontend and backend technologies.',
    'Performed quality assurance testing to identify bugs and improve system reliability.',
    'Designed and refined user interfaces to improve usability and application flow.',
    'Collaborated with team members using Git and GitHub for version control.',
  ],
  technologies: [
    'Laravel',
    'PHP',
    'PostgreSQL',
    'Figma',
    'Git',
    'GitHub',
  ],
}


const currentSkills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'Express.js',
  'PHP',
  'Laravel',
  'SQL',
  'PostgreSQL',
  'Python',
  'Pandas',
  'Scikit-learn',
  'Data Extraction',
  'Data Transformation',
  'Docker',
  'Figma',
  'Git',
  'GitHub',
  'MySQL',
  'MongoDB',
  'REST API',
  'C',
  'C++',
  'C#',
  'Java',
  'NumPy',
  'Matplotlib',
  'Seaborn',
  'Jupyter Notebook',
  'Vercel',
]


const roleSkills: Record<string, string[]> = {
  'Full-Stack Developer': [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'Git',
  ],
  'Frontend Developer': [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Tailwind CSS',
  ],
  'Backend Developer': [
    'Node.js',
    'PHP',
    'Laravel',
    'PostgreSQL',
    'REST APIs',
    'SQL',
    'Git',
  ],
  'QA Tester': [
    'Manual Testing',
    'Test Cases',
    'Bug Reporting',
    'API Testing',
    'SQL',
    'Git',
  ],
  'Software Engineer': [
    'JavaScript',
    'TypeScript',
    'Python',
    'SQL',
    'Git',
    'Data Structures',
    'Testing',
  ],
  'Data Analyst': [
    'Python',
    'SQL',
    'Excel',
    'Data Visualization',
    'Statistics',
    'Power BI',
  ],
  'Machine Learning Engineer': [
    'Python',
    'Machine Learning',
    'Data Processing',
    'SQL',
    'Model Evaluation',
    'Statistics',
  ],
  'UI/UX Designer': [
    'Figma',
    'Wireframing',
    'Prototyping',
    'User Research',
    'Usability Testing',
    'Accessibility',
  ],
}

const cardClass =
  'rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-500/5 sm:p-7'

const inputClass =
  'min-h-11 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10'

const primaryButtonClass =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-purple-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-purple-700 hover:to-fuchsia-700 hover:shadow-lg hover:shadow-purple-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60'

const secondaryButtonClass =
  'inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-purple-200 bg-white px-4 py-2 text-sm font-medium text-purple-700 transition-all duration-200 hover:border-purple-300 hover:bg-purple-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500'

const iconBoxClass =
  'shrink-0 rounded-xl border border-purple-100 bg-gradient-to-br from-purple-50 to-fuchsia-50 p-3 text-purple-600'

const CERTS_PER_PAGE = 2

export default function About() {
  const [activeTab, setActiveTab] = useState<Tab>('about')
  const [jobRole, setJobRole] = useState('Full-Stack Developer')
  const [careerAnalysis, setCareerAnalysis] =
    useState<CareerAnalysis | null>(null)

  const [generatedText, setGeneratedText] = useState('')
  const [aiMode, setAiMode] = useState<AIMode>('experience')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const [certSearch, setCertSearch] = useState('')
  const [certSort, setCertSort] =
    useState<CertificationSort>('newest')
  const [certPage, setCertPage] = useState(0)

  const tabs: { id: Tab; label: string }[] = [
    { id: 'about', label: 'About Me' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'certification', label: 'Certifications' },
  ]

  const sortedEducation = useMemo(
    () => [...education].sort((a, b) => b.sortDate - a.sortDate),
    [],
  )

  const filteredCertifications = useMemo(() => {
    const query = certSearch.trim().toLowerCase()

    return certifications
      .filter((cert) =>
        [cert.title, cert.issuer, cert.description]
          .join(' ')
          .toLowerCase()
          .includes(query),
      )
      .sort((a, b) => {
        if (certSort === 'name') {
          return a.title.localeCompare(b.title)
        }

        if (!a.sortDate && !b.sortDate) return 0
        if (!a.sortDate) return 1
        if (!b.sortDate) return -1

        return certSort === 'newest'
          ? b.sortDate.localeCompare(a.sortDate)
          : a.sortDate.localeCompare(b.sortDate)
      })
  }, [certSearch, certSort])

  const totalCertPages = Math.ceil(
    filteredCertifications.length / CERTS_PER_PAGE,
  )

  const paginatedCertifications = useMemo(() => {
    const start = certPage * CERTS_PER_PAGE

    return filteredCertifications.slice(
      start,
      start + CERTS_PER_PAGE,
    )
  }, [filteredCertifications, certPage])

  function handleCertSearch(value: string) {
    setCertSearch(value)
    setCertPage(0)
  }

  function handleCertSort(value: CertificationSort) {
    setCertSort(value)
    setCertPage(0)
  }

  function analyzeCareerReadiness() {
    const requiredSkills = roleSkills[jobRole] ?? []

    const normalizedSkills = new Set(
      currentSkills.map((skill) => skill.trim().toLowerCase()),
    )

    const matched = requiredSkills.filter((skill) =>
      normalizedSkills.has(skill.toLowerCase()),
    )

    const recommended = requiredSkills.filter(
      (skill) => !normalizedSkills.has(skill.toLowerCase()),
    )

    const percentage = requiredSkills.length
      ? Math.round((matched.length / requiredSkills.length) * 100)
      : 0

    setCareerAnalysis({
      role: jobRole,
      matched,
      recommended,
      percentage,
    })

    setAiMode('career')
    setGeneratedText('')
    setError('')
    setCopied(false)
  }

  async function generateAI() {
    setLoading(true)
    setError('')
    setGeneratedText('')
    setCopied(false)
    setCareerAnalysis(null)
    setAiMode('experience')

    try {
      const response = await fetch('/api/profile-ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mode: 'experience',
          payload: {
            role: jobRole,
            experience,
            education,
            skills: currentSkills,
          },
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Unable to generate content.')
      }

      if (typeof data.text !== 'string' || !data.text.trim()) {
        throw new Error(
          'The AI returned an empty response. Please try again.',
        )
      }

      setGeneratedText(data.text)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.',
      )
    } finally {
      setLoading(false)
    }
  }

  async function copyText() {
    const textToCopy =
      aiMode === 'career' && careerAnalysis
        ? [
            `Career Readiness: ${careerAnalysis.role}`,
            `Skill Match: ${careerAnalysis.percentage}%`,
            `Matched Skills: ${careerAnalysis.matched.join(', ') || 'None'}`,
            `Skills to Explore: ${careerAnalysis.recommended.join(', ') || 'None'}`,
          ].join('\n')
        : generatedText

    if (!textToCopy) return

    try {
      await navigator.clipboard.writeText(textToCopy)
      setCopied(true)
      setError('')
    } catch {
      setError(
        'Copy failed. Please select the text and copy it manually.',
      )
    }
  }

  function changeTab(tab: Tab) {
    setActiveTab(tab)
    setCertPage(0)
    setError('')
    setCopied(false)
  }

  return (
    <section
      id="about"
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
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* HEADER */}
        <header className="mb-12 sm:mb-14">
          <p className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-purple-100 bg-gradient-to-r from-purple-50 to-fuchsia-50 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-purple-700 sm:px-4 sm:text-[11px] sm:tracking-[0.2em]">
            <Sparkles className="h-3.5 w-3.5" />
            Personal Profile
          </p>

          <h1 className="mb-5 max-w-4xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-6xl">
            About{' '}
            <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              Me.
            </span>

            <span className="mt-3 block bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-500 bg-clip-text text-base font-semibold tracking-normal text-transparent sm:text-lg md:text-xl">
              My journey, skills &amp; growth
            </span>
          </h1>

          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Explore my background, education, internship experience,
            and certifications, along with tools for career development.
          </p>
        </header>

        {/* MAIN PROFILE LAYOUT */}
        <div className="grid items-start gap-8 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-10">
          {/* SIDEBAR */}
          <aside className="space-y-5">
            <div className="group relative aspect-square overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-lg shadow-purple-900/5">
              <Image
                src="/profile.JPG"
                alt="Phoemela Kyle Sebastian"
                fill
                sizes="(max-width: 1024px) 100vw, 300px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                priority
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-purple-950/25 to-transparent" />
            </div>

            <div className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5">
              <div className="flex items-center gap-3">
                <div className={iconBoxClass}>
                  <Sparkles className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <h2 className="font-semibold text-slate-900">
                    Career development tools
                  </h2>
                  <p className="text-xs text-slate-500">
                    Skills and professional growth
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Explore your skill alignment with target roles,
                prepare tailored experience summaries, and review
                your professional background.
              </p>

              <a
                href="/cv.pdf"
                download
                className={`${primaryButtonClass} mt-5 w-full`}
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>

            {/* QUICK STATS */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-purple-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-purple-500/10">
                <div className="flex items-center gap-2 text-purple-600">
                  <GraduationCap className="h-4 w-4" />
                  <span className="text-xs font-medium">Education</span>
                </div>
                <p className="mt-2 text-2xl font-bold text-slate-900">
                  {education.length}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Academic records
                </p>
              </div>

              <div className="rounded-xl border border-purple-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-purple-500/10">
                <div className="flex items-center gap-2 text-purple-600">
                  <Award className="h-4 w-4" />
                  <span className="text-xs font-medium">Certificates</span>
                </div>
                <p className="mt-2 text-2xl font-bold text-slate-900">
                  {certifications.length}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Listed credentials
                </p>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="min-w-0 space-y-6">
            {/* NAVIGATION TABS */}
            <nav
              aria-label="Profile sections"
              className="grid grid-cols-2 gap-2 rounded-2xl border border-purple-100 bg-white/80 p-2 shadow-sm backdrop-blur sm:grid-cols-4"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => changeTab(tab.id)}
                  aria-pressed={activeTab === tab.id}
                  className={`min-h-11 rounded-xl px-3 py-2 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-md shadow-purple-600/20'
                      : 'bg-transparent text-slate-600 hover:bg-purple-50 hover:text-purple-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* ABOUT ME + CAREER READINESS ANALYZER */}
            {activeTab === 'about' && (
              <div className="space-y-6">
                <article className={cardClass}>
                  <div className="flex items-center gap-3">
                    <div className={iconBoxClass}>
                      <BookOpen className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-purple-600">
                        Introduction
                      </p>
                      <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                        About my background
                      </h2>
                    </div>
                  </div>

                  <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500" />

                  <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                    I am a Computer Science graduate with a
                    technical background in software development,
                    web development, data engineering, machine
                    learning, UI/UX design, and AI-assisted
                    development. I enjoy building modern web
                    applications, designing intuitive interfaces,
                    working with data, and transforming ideas into
                    practical digital solutions. I am committed to
                    learning new technologies and applying my skills
                    to meaningful projects.
                  </p>
                </article>

                {/* CAREER ANALYZER */}
                <article className={cardClass}>
                  <div className="flex items-start gap-3">
                    <div className={iconBoxClass}>
                      <Target className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                        Smart Career Readiness Analyzer
                      </h2>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Compare your listed technical skills with
                        a target role and identify areas to explore
                        next.
                      </p>
                    </div>
                  </div>

                  <label
                    htmlFor="career-role"
                    className="mb-2 mt-6 block text-sm font-semibold text-slate-700"
                  >
                    Choose your target career
                  </label>

                  <div className="relative">
                    <select
                      id="career-role"
                      value={jobRole}
                      onChange={(event) => {
                        setJobRole(event.target.value)
                        setCareerAnalysis(null)
                        setCopied(false)
                      }}
                      className={`${inputClass} appearance-none pr-10`}
                    >
                      {Object.keys(roleSkills).map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>

                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  </div>

                  <div className="mt-5 rounded-xl border border-purple-100 bg-gradient-to-br from-purple-50/70 to-white p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-slate-800">
                        Your listed skills
                      </p>

                      <span className="rounded-full border border-purple-100 bg-purple-100/70 px-2.5 py-1 text-xs font-medium text-purple-700">
                        {currentSkills.length} skills
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {currentSkills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-purple-100 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={analyzeCareerReadiness}
                    className={`${primaryButtonClass} mt-5 w-full sm:w-auto`}
                  >
                    <TrendingUp className="h-4 w-4" />
                    Analyze career readiness
                  </button>

                  {/* ANALYSIS RESULTS */}
                  {careerAnalysis && (
                    <div
                      aria-live="polite"
                      className="mt-6 border-t border-purple-100 pt-6"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wider text-purple-600">
                        Career analysis
                      </p>

                      <h3 className="mt-2 text-xl font-bold text-slate-900">
                        {careerAnalysis.role}
                      </h3>

                      <div className="mt-5 flex items-end justify-between gap-4">
                        <div>
                          <p className="text-sm text-slate-500">
                            Skill alignment
                          </p>

                          <p className="mt-1 text-4xl font-bold tracking-tight text-slate-900">
                            {careerAnalysis.percentage}%
                          </p>
                        </div>

                        <p className="max-w-40 text-right text-xs leading-5 text-slate-500">
                          {careerAnalysis.matched.length} of{' '}
                          {roleSkills[careerAnalysis.role].length}{' '}
                          sample skills matched
                        </p>
                      </div>

                      <div
                        className="mt-4 h-2.5 overflow-hidden rounded-full bg-purple-100"
                        role="progressbar"
                        aria-label="Skill alignment"
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={careerAnalysis.percentage}
                      >
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-purple-600 via-violet-500 to-fuchsia-400 transition-all duration-700"
                          style={{
                            width: `${careerAnalysis.percentage}%`,
                          }}
                        />
                      </div>

                      <p className="mt-3 text-xs leading-6 text-slate-500">
                        This percentage measures the overlap between
                        your listed skills and a sample role-specific
                        skill list. It does not measure proficiency
                        or predict hiring success.
                      </p>

                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4">
                          <div className="flex items-center gap-2">
                            <CircleCheck className="h-5 w-5 text-emerald-600" />
                            <h4 className="font-semibold text-slate-900">
                              Matching skills
                            </h4>
                          </div>

                          {careerAnalysis.matched.length > 0 ? (
                            <ul className="mt-3 space-y-2">
                              {careerAnalysis.matched.map((skill) => (
                                <li
                                  key={skill}
                                  className="flex items-center gap-2 text-sm text-slate-700"
                                >
                                  <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                                  {skill}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="mt-3 text-sm leading-6 text-slate-600">
                              No matching skills found in your
                              current list.
                            </p>
                          )}
                        </div>

                        <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-4">
                          <div className="flex items-center gap-2">
                            <CircleAlert className="h-5 w-5 text-amber-600" />
                            <h4 className="font-semibold text-slate-900">
                              Skills to explore
                            </h4>
                          </div>

                          {careerAnalysis.recommended.length > 0 ? (
                            <ul className="mt-3 space-y-2">
                              {careerAnalysis.recommended.map((skill) => (
                                <li
                                  key={skill}
                                  className="flex items-center gap-2 text-sm text-slate-700"
                                >
                                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                                  {skill}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="mt-3 text-sm leading-6 text-slate-600">
                              Your listed skills match every skill
                              in this sample list. Continue practicing
                              and building projects.
                            </p>
                          )}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={copyText}
                        className={`${secondaryButtonClass} mt-5`}
                      >
                        {copied ? (
                          <Check className="h-4 w-4 text-emerald-600" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                        {copied ? 'Copied analysis' : 'Copy analysis'}
                      </button>
                    </div>
                  )}
                </article>
              </div>
            )}

            {/* EDUCATION TIMELINE */}
            {activeTab === 'education' && (
              <article className={cardClass}>
                <div className="flex items-start gap-3">
                  <div className={iconBoxClass}>
                    <GraduationCap className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                      Smart Education Timeline
                    </h2>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Education entries are structured and automatically
                      sorted by most recent end date.
                    </p>
                  </div>
                </div>

                <div className="relative mt-8 space-y-8">
                  <div className="absolute bottom-4 left-5 top-4 w-px bg-gradient-to-b from-purple-300 via-purple-200 to-transparent" />

                  {sortedEducation.map((item) => {
                    const Icon = item.icon

                    return (
                      <article
                        key={item.title}
                        className="relative flex gap-4"
                      >
                        <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-purple-200 bg-white text-purple-600 shadow-sm shadow-purple-500/10">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-purple-200 hover:shadow-md hover:shadow-purple-500/5 sm:p-5">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                            <h3 className="font-bold leading-6 text-slate-900">
                              {item.title}
                            </h3>

                            <span className="inline-flex w-fit shrink-0 rounded-full border border-purple-100 bg-purple-50 px-2.5 py-1 text-xs font-medium text-purple-700">
                              {item.start} – {item.end}
                            </span>
                          </div>

                          <p className="mt-3 text-sm font-semibold leading-6 text-purple-700">
                            {item.school}
                          </p>

                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {item.details}
                          </p>
                        </div>
                      </article>
                    )
                  })}
                </div>

                <div className="mt-6 flex items-start gap-3 rounded-xl border border-purple-100 bg-gradient-to-r from-purple-50 to-fuchsia-50/50 p-4">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-purple-600" />
                  <p className="text-xs leading-6 text-slate-600">
                    Timeline entries are currently stored in this
                    component. A database and admin editor can be added
                    to manage education records without changing code.
                  </p>
                </div>
              </article>
            )}

            {/* AI EXPERIENCE SUMMARIZER */}
            {activeTab === 'experience' && (
              <div className="space-y-6">
                <article className={cardClass}>
                  <div className="flex items-start gap-3">
                    <div className={iconBoxClass}>
                      <BriefcaseBusiness className="h-5 w-5" />
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                        AI Experience Summarizer
                      </h2>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Turn your real internship responsibilities
                        into concise descriptions tailored to a target role.
                      </p>
                    </div>
                  </div>

                  <label
                    htmlFor="job-role"
                    className="mb-2 mt-6 block text-sm font-semibold text-slate-700"
                  >
                    Target job role
                  </label>

                  <div className="relative">
                    <select
                      id="job-role"
                      value={jobRole}
                      onChange={(event) => {
                        setJobRole(event.target.value)
                        setGeneratedText('')
                        setError('')
                        setCopied(false)
                      }}
                      className={`${inputClass} appearance-none pr-10`}
                    >
                      {Object.keys(roleSkills).map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>

                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  </div>

                  <div className="mt-5 rounded-xl border border-purple-100 bg-gradient-to-br from-purple-50/70 to-white p-4 sm:p-5">
                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-white p-2.5 text-purple-600 shadow-sm ring-1 ring-purple-100">
                        <BriefcaseBusiness className="h-5 w-5" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-900">
                          Current experience
                        </p>

                        <p className="mt-2 text-base font-bold text-purple-700">
                          {experience.title}
                        </p>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {experience.organization}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {experience.period}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {experience.location}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 border-t border-purple-100 pt-5">
                      <h3 className="text-sm font-semibold text-slate-800">
                        Key responsibilities
                      </h3>

                      <ul className="mt-3 space-y-3">
                        {experience.responsibilities.map(
                          (responsibility) => (
                            <li
                              key={responsibility}
                              className="flex items-start gap-2.5 text-sm leading-6 text-slate-600"
                            >
                              <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-purple-600" />
                              <span>{responsibility}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>

                    <div className="mt-5 border-t border-purple-100 pt-5">
                      <h3 className="text-sm font-semibold text-slate-800">
                        Technologies used
                      </h3>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {experience.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-purple-100 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={generateAI}
                    disabled={loading}
                    className={`${primaryButtonClass} mt-5 w-full sm:w-auto`}
                  >
                    {loading ? (
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                    ) : (
                      <WandSparkles className="h-4 w-4" />
                    )}

                    {loading
                      ? 'Summarizing...'
                      : 'Summarize for this role'}
                  </button>

                  <p className="mt-3 text-xs leading-5 text-slate-500">
                    AI-generated descriptions are based on your supplied
                    experience and skills. Review the results before
                    adding them to your resume.
                  </p>
                </article>
              </div>
            )}

            {/* CERTIFICATION MANAGER */}
            {activeTab === 'certification' && (
              <article className={cardClass}>
                <div className="flex items-start gap-3">
                  <div className={iconBoxClass}>
                    <Award className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                      Automated Certification Manager
                    </h2>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Search certifications, organize issuer information,
                      and sort entries by date or name.
                    </p>
                  </div>
                </div>

                {/* SEARCH AND SORT */}
                <div className="mt-6 grid gap-3 sm:grid-cols-[minmax(0,1fr)_170px]">
                  <div className="relative">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                    <input
                      type="search"
                      value={certSearch}
                      onChange={(event) =>
                        handleCertSearch(event.target.value)
                      }
                      placeholder="Search certificates or issuers..."
                      aria-label="Search certifications"
                      className={`${inputClass} pl-10`}
                    />
                  </div>

                  <select
                    aria-label="Sort certifications"
                    value={certSort}
                    onChange={(event) =>
                      handleCertSort(
                        event.target.value as CertificationSort,
                      )
                    }
                    className={inputClass}
                  >
                    <option value="newest">Newest first</option>
                    <option value="oldest">Oldest first</option>
                    <option value="name">Name A–Z</option>
                  </select>
                </div>

                {/* RESULTS COUNT */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">
                    Your credentials
                  </p>

                  <span className="rounded-full border border-purple-100 bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700">
                    {filteredCertifications.length} certification
                    {filteredCertifications.length === 1 ? '' : 's'} found
                  </span>
                </div>

                {/* PAGINATED CERTIFICATION CARDS */}
                <div className="mt-4 space-y-4">
                  {paginatedCertifications.map((cert) => (
                    <article
                      key={cert.id}
                      className="rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-purple-200 hover:shadow-md hover:shadow-purple-500/5 sm:p-5"
                    >
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 rounded-xl border border-purple-100 bg-gradient-to-br from-purple-50 to-fuchsia-50 p-3 text-purple-600">
                          {cert.id === 'ccna' ? (
                            <Award className="h-5 w-5" />
                          ) : (
                            <BadgeCheck className="h-5 w-5" />
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="font-bold leading-6 text-slate-900">
                            {cert.title}
                          </h3>

                          <p className="mt-2 text-sm font-semibold text-purple-700">
                            {cert.issuer}
                          </p>

                          <p className="mt-2 inline-flex rounded-full bg-purple-50 px-2.5 py-1 text-xs text-purple-700">
                            {cert.date}
                          </p>

                          <p className="mt-3 text-sm leading-7 text-slate-600">
                            {cert.description}
                          </p>

                          {cert.credentialId && (
                            <p className="mt-3 break-all text-xs text-slate-500">
                              Credential ID: {cert.credentialId}
                            </p>
                          )}

                          {cert.verificationUrl ? (
                            <a
                              href={cert.verificationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-purple-700 transition hover:text-purple-800 hover:underline"
                            >
                              <BadgeCheck className="h-4 w-4" />
                              Verify credential
                            </a>
                          ) : (
                            <p className="mt-4 flex items-start gap-2 text-xs leading-5 text-slate-500">
                              <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                              Add the official issuer verification URL
                              to enable credential verification.
                            </p>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}

                  {/* EMPTY SEARCH STATE */}
                  {filteredCertifications.length === 0 && (
                    <div className="rounded-xl border border-dashed border-purple-200 bg-purple-50/40 p-8 text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-purple-400 shadow-sm ring-1 ring-purple-100">
                        <Search className="h-5 w-5" />
                      </div>

                      <p className="mt-4 text-sm font-semibold text-slate-800">
                        No matching certifications
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        Try another certificate title or issuer.
                      </p>

                      <button
                        type="button"
                        onClick={() => handleCertSearch('')}
                        className="mt-4 text-sm font-semibold text-purple-700 hover:underline"
                      >
                        Clear search
                      </button>
                    </div>
                  )}
                </div>

                {/* PAGINATION CONTROLS */}
                {filteredCertifications.length > 0 && (
                  <div className="mt-6 flex flex-col items-center gap-3">
                    <div className="flex items-center justify-center gap-3">
                      {/* PREVIOUS PAGE */}
                      <button
                        type="button"
                        onClick={() =>
                          setCertPage((page) => Math.max(0, page - 1))
                        }
                        disabled={certPage === 0}
                        aria-label="Previous certifications"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-purple-200 bg-white text-purple-700 shadow-sm transition-all duration-200 hover:border-purple-400 hover:bg-purple-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white disabled:hover:shadow-none"
                      >
                        <ChevronDown className="h-5 w-5 rotate-90" />
                      </button>

                      {/* PAGE INDICATOR */}
                      <div
                        aria-live="polite"
                        className="flex min-w-24 flex-col items-center"
                      >
                        <span className="text-sm font-semibold text-slate-800">
                          Page {certPage + 1} of {totalCertPages}
                        </span>

                        <span className="mt-0.5 text-xs text-slate-500">
                          {certPage * CERTS_PER_PAGE + 1}
                          {'–'}
                          {Math.min(
                            (certPage + 1) * CERTS_PER_PAGE,
                            filteredCertifications.length,
                          )}{' '}
                          of {filteredCertifications.length}
                        </span>
                      </div>

                      {/* NEXT PAGE */}
                      <button
                        type="button"
                        onClick={() =>
                          setCertPage((page) =>
                            Math.min(totalCertPages - 1, page + 1),
                          )
                        }
                        disabled={certPage >= totalCertPages - 1}
                        aria-label="Next certifications"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-purple-200 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-md shadow-purple-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:translate-y-0 disabled:hover:shadow-md"
                      >
                        <ChevronDown className="h-5 w-5 -rotate-90" />
                      </button>
                    </div>

                    {/* PAGE DOTS */}
                    {totalCertPages > 1 && (
                      <div className="flex items-center justify-center gap-1.5">
                        {Array.from({ length: totalCertPages }).map(
                          (_, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => setCertPage(index)}
                              aria-label={`Go to certification page ${index + 1}`}
                              aria-current={
                                certPage === index ? 'page' : undefined
                              }
                              className={`h-2 rounded-full transition-all duration-300 ${
                                certPage === index
                                  ? 'w-6 bg-gradient-to-r from-purple-600 to-fuchsia-600'
                                  : 'w-2 bg-purple-200 hover:bg-purple-400'
                              }`}
                            />
                          ),
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* CERTIFICATION NOTE */}
                <div className="mt-6 flex items-start gap-3 rounded-xl border border-purple-100 bg-gradient-to-r from-purple-50 to-fuchsia-50/50 p-4">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-purple-600" />
                  <p className="text-xs leading-6 text-slate-600">
                    Certificate details are maintained in this component.
                    Add accurate credential IDs and official issuer links
                    when available. Verification links should point to the
                    issuing provider.
                  </p>
                </div>
              </article>
            )}

            {/* AI EXPERIENCE RESULTS */}
            {aiMode === 'experience' &&
              activeTab === 'experience' &&
              (generatedText || error || loading) && (
                <section aria-live="polite" className={cardClass}>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-600">
                        <Sparkles className="h-4 w-4" />
                        AI-generated draft
                      </p>

                      <h2 className="mt-1 text-lg font-bold text-slate-900">
                        Your tailored experience summary
                      </h2>
                    </div>

                    {generatedText && (
                      <button
                        type="button"
                        onClick={copyText}
                        className={secondaryButtonClass}
                      >
                        {copied ? (
                          <Check className="h-4 w-4 text-emerald-600" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}

                        {copied ? 'Copied' : 'Copy text'}
                      </button>
                    )}
                  </div>

                  {loading && (
                    <div className="mt-5 flex items-center gap-3 rounded-xl border border-purple-100 bg-gradient-to-r from-purple-50 to-fuchsia-50/50 p-4 text-sm text-slate-600">
                      <LoaderCircle className="h-5 w-5 animate-spin text-purple-600" />
                      Creating your draft...
                    </div>
                  )}

                  {error && (
                    <div
                      role="alert"
                      className="mt-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4"
                    >
                      <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                      <p className="text-sm leading-6 text-red-700">
                        {error}
                      </p>
                    </div>
                  )}

                  {generatedText && (
                    <>
                      <div className="mt-5 whitespace-pre-wrap break-words rounded-xl border border-purple-100 bg-gradient-to-br from-purple-50/50 to-white p-4 text-sm leading-7 text-slate-700 sm:p-5">
                        {generatedText}
                      </div>

                      <p className="mt-5 border-t border-purple-100 pt-4 text-xs leading-6 text-slate-500">
                        Review all names, dates, skills, responsibilities,
                        and achievements before using this draft. AI
                        content should be checked for accuracy.
                      </p>
                    </>
                  )}
                </section>
              )}
          </div>
        </div>
      </div>
    </section>
  )
}
