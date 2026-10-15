
'use client'

import { useMemo, useState } from 'react'
import type { IconType } from 'react-icons'
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiPython,
  SiC,
  SiCplusplus,
  SiSharp,
  SiOpenjdk,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVercel,
  SiRender,
  SiScikitlearn,
  SiPandas,
  SiFigma,
  SiWordpress,
  SiAnthropic,
  SiApachespark,
  SiDocker,
} from 'react-icons/si'
import {
  FaDatabase,
  FaBrain,
  FaRobot,
  FaComments,
  FaClock,
  FaUsers,
  FaLightbulb,
  FaSearch,
  FaExchangeAlt,
  FaChartLine,
  FaSpinner,
  FaExternalLinkAlt,
  FaCode,
} from 'react-icons/fa'

type Skill = {
  name: string
  category: string
  icon: IconType
  proficiency: number
}

type Repository = {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  updated_at: string
  fork: boolean
}

type Analysis = {
  summary?: string
  strengths?: string[]
  missingSkills?: string[]
  learningPlan?: string[]
}

/* =========================================
   PURPLE / FUCHSIA THEME
========================================= */

const cardClass =
  'rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-500/5'

const inputClass =
  'min-h-11 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10'

const primaryButtonClass =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-purple-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-purple-700 hover:to-fuchsia-700 hover:shadow-lg hover:shadow-purple-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60'

const secondaryButtonClass =
  'inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-purple-200 bg-white px-4 py-2 text-sm font-medium text-purple-700 transition-all duration-200 hover:border-purple-300 hover:bg-purple-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60'

const iconBoxClass =
  'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-100 bg-gradient-to-br from-purple-50 to-fuchsia-50 text-purple-600 transition-colors group-hover:from-purple-100 group-hover:to-fuchsia-100 sm:h-12 sm:w-12'

const focusClass =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2'

const sectionLabelClass =
  'mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-700'

/* =========================================
   TECHNICAL SKILLS
========================================= */

const skills: Skill[] = [
  { name: 'HTML', category: 'Frontend', icon: SiHtml5, proficiency: 90 },
  { name: 'CSS', category: 'Frontend', icon: SiCss, proficiency: 85 },
  { name: 'JavaScript', category: 'Frontend', icon: SiJavascript, proficiency: 80 },
  { name: 'TypeScript', category: 'Frontend', icon: SiTypescript, proficiency: 65 },
  { name: 'React', category: 'Frontend', icon: SiReact, proficiency: 75 },
  { name: 'Next.js', category: 'Frontend', icon: SiNextdotjs, proficiency: 65 },
  { name: 'Tailwind CSS', category: 'Frontend', icon: SiTailwindcss, proficiency: 80 },
  { name: 'Figma', category: 'Frontend', icon: SiFigma, proficiency: 70 },
  { name: 'Node.js', category: 'Backend', icon: SiNodedotjs, proficiency: 55 },
  { name: 'Express.js', category: 'Backend', icon: SiExpress, proficiency: 45 },
  { name: 'Laravel', category: 'Backend', icon: SiLaravel, proficiency: 65 },
  { name: 'Python', category: 'Backend', icon: SiPython, proficiency: 70 },
  { name: 'C', category: 'Programming', icon: SiC, proficiency: 60 },
  { name: 'C++', category: 'Programming', icon: SiCplusplus, proficiency: 55 },
  { name: 'C#', category: 'Programming', icon: SiSharp, proficiency: 50 },
  { name: 'Java', category: 'Programming', icon: SiOpenjdk, proficiency: 50 },
  { name: 'MySQL', category: 'Database', icon: SiMysql, proficiency: 70 },
  { name: 'PostgreSQL', category: 'Database', icon: SiPostgresql, proficiency: 55 },
  { name: 'Firebase', category: 'Database', icon: SiFirebase, proficiency: 60 },
  { name: 'SQL', category: 'Database', icon: FaDatabase, proficiency: 70 },
  { name: 'Data Extraction', category: 'Data', icon: FaSearch, proficiency: 65 },
  { name: 'Data Transformation', category: 'Data', icon: FaExchangeAlt, proficiency: 60 },
  { name: 'Pandas', category: 'Data', icon: SiPandas, proficiency: 55 },
  { name: 'Apache Spark', category: 'Data', icon: SiApachespark, proficiency: 35 },
  { name: 'Scikit-learn', category: 'AI & ML', icon: SiScikitlearn, proficiency: 50 },
  { name: 'AI-Assisted Development', category: 'AI & ML', icon: FaBrain, proficiency: 75 },
  { name: 'ChatGPT', category: 'AI & ML', icon: FaRobot, proficiency: 80 },
  { name: 'Claude', category: 'AI & ML', icon: SiAnthropic, proficiency: 65 },
  { name: 'Git', category: 'Tools', icon: SiGit, proficiency: 75 },
  { name: 'GitHub', category: 'Tools', icon: SiGithub, proficiency: 80 },
  { name: 'Docker', category: 'Tools', icon: SiDocker, proficiency: 35 },
  { name: 'Vercel', category: 'Tools', icon: SiVercel, proficiency: 75 },
  { name: 'Render', category: 'Tools', icon: SiRender, proficiency: 65 },
  { name: 'WordPress', category: 'Tools', icon: SiWordpress, proficiency: 60 },
]

const workSkills = [
  { name: 'Problem-solving', icon: FaLightbulb },
  { name: 'Communication', icon: FaComments },
  { name: 'Time Management', icon: FaClock },
  { name: 'Team Collaboration', icon: FaUsers },
  { name: 'Adaptability', icon: FaExchangeAlt },
  { name: 'Attention to Detail', icon: FaSearch },
]

const categories = [
  'All',
  'Frontend',
  'Backend',
  'Database',
  'Programming',
  'Data',
  'AI & ML',
  'Tools',
]

const roleRequirements: Record<string, string[]> = {
  'Frontend Developer': [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Git',
  ],
  'Backend Developer': [
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Express.js',
    'Python',
    'SQL',
    'PostgreSQL',
    'Git',
    'Docker',
  ],
  'Full Stack Developer': [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Express.js',
    'SQL',
    'Git',
  ],
  'Data Analyst': [
    'Python',
    'SQL',
    'Pandas',
    'Data Extraction',
    'Data Transformation',
    'PostgreSQL',
  ],
  'AI / Machine Learning Developer': [
    'Python',
    'Pandas',
    'Scikit-learn',
    'Data Transformation',
    'SQL',
  ],
}

const GITHUB_USERNAME = 'phoemelakyle'

/* =========================================
   API HELPERS
========================================= */

async function readError(response: Response, fallback: string) {
  try {
    const data = await response.json()

    if (typeof data?.error === 'string') return data.error
    if (typeof data?.message === 'string') return data.message
  } catch {
    // The server may return a non-JSON response.
  }

  return fallback
}

function isStringArray(value: unknown): value is string[] {
  return (
    Array.isArray(value) &&
    value.every((item) => typeof item === 'string')
  )
}

/* =========================================
   SKILLS DASHBOARD
========================================= */

export default function Skills() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [showProficiency, setShowProficiency] = useState(true)
  const [selectedRole, setSelectedRole] = useState('Frontend Developer')

  const [analysis, setAnalysis] = useState<Analysis | null>(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [analysisError, setAnalysisError] = useState('')

  const [repositories, setRepositories] = useState<Repository[]>([])
  const [githubLoading, setGithubLoading] = useState(false)
  const [githubError, setGithubError] = useState('')
  const [githubLoaded, setGithubLoaded] = useState(false)

  const filteredSkills = useMemo(() => {
    const query = search.trim().toLowerCase()

    return skills.filter((skill) => {
      const matchesSearch =
        !query ||
        skill.name.toLowerCase().includes(query) ||
        skill.category.toLowerCase().includes(query)

      const matchesCategory =
        activeCategory === 'All' ||
        skill.category === activeCategory

      return matchesSearch && matchesCategory
    })
  }, [search, activeCategory])

  const averageProficiency = Math.round(
    skills.reduce((sum, skill) => sum + skill.proficiency, 0) /
      skills.length,
  )

  async function analyzeSkillGap() {
    if (analyzing) return

    setAnalyzing(true)
    setAnalysis(null)
    setAnalysisError('')

    try {
      const response = await fetch('/api/skill-gap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          role: selectedRole,
          skills: skills.map(({ name, category, proficiency }) => ({
            name,
            category,
            proficiency,
          })),
          requiredSkills: roleRequirements[selectedRole],
        }),
      })

      if (!response.ok) {
        throw new Error(
          await readError(
            response,
            `Analysis failed (${response.status}). Check your API route and configuration.`,
          ),
        )
      }

      const result: unknown = await response.json()

      if (!result || typeof result !== 'object') {
        throw new Error('The analysis API returned an invalid response.')
      }

      const data = result as Record<string, unknown>

      setAnalysis({
        summary:
          typeof data.summary === 'string' ? data.summary : '',
        strengths: isStringArray(data.strengths)
          ? data.strengths
          : [],
        missingSkills: isStringArray(data.missingSkills)
          ? data.missingSkills
          : [],
        learningPlan: isStringArray(data.learningPlan)
          ? data.learningPlan
          : [],
      })
    } catch (error) {
      setAnalysisError(
        error instanceof Error
          ? error.message
          : 'Unable to analyze skills. Please try again.',
      )
    } finally {
      setAnalyzing(false)
    }
  }

  async function loadGitHub() {
    if (githubLoading) return

    setGithubLoading(true)
    setGithubError('')

    try {
      const response = await fetch(
        `https://api.github.com/users/${encodeURIComponent(GITHUB_USERNAME)}/repos?sort=updated&per_page=100&type=owner`,
        {
          headers: {
            Accept: 'application/vnd.github+json',
          },
          cache: 'no-store',
        },
      )

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('GitHub username was not found.')
        }

        if (response.status === 403 || response.status === 429) {
          throw new Error(
            'GitHub rate limit reached. Please wait a moment and try again.',
          )
        }

        throw new Error(
          `Unable to load GitHub projects (${response.status}). Please try again.`,
        )
      }

      const data: unknown = await response.json()

      if (!Array.isArray(data)) {
        throw new Error('GitHub returned an unexpected response.')
      }

      const validRepositories = (data as Repository[])
        .filter(
          (repo) =>
            !repo.fork &&
            typeof repo.id === 'number' &&
            typeof repo.name === 'string' &&
            typeof repo.html_url === 'string',
        )
        .sort(
          (a, b) =>
            new Date(b.updated_at).getTime() -
            new Date(a.updated_at).getTime(),
        )
        .slice(0, 6)

      setRepositories(validRepositories)
      setGithubLoaded(true)
    } catch (error) {
      setGithubError(
        error instanceof Error
          ? error.message
          : 'GitHub request failed. Check your connection and try again.',
      )
    } finally {
      setGithubLoading(false)
    }
  }

  function clearFilters() {
    setSearch('')
    setActiveCategory('All')
  }

  return (
    <section
      id="skills"
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
            <FaBrain size={13} />
            AI-powered capabilities
          </p>

          <h2 className="mb-5 max-w-4xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-6xl">
            Skills,{' '}
            <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              intelligently
            </span>{' '}
            organized.
          </h2>

          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Explore my technical skills, discover areas for improvement,
            and see projects pulled directly from GitHub.
          </p>
        </header>

        {/* DASHBOARD OVERVIEW */}
        <div className="mb-14 grid grid-cols-1 gap-4 sm:mb-16 sm:grid-cols-2 lg:grid-cols-3">

          <div className={`${cardClass} min-w-0 p-5 sm:p-6`}>
            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="text-sm text-slate-500">
                Listed skills
              </span>
              <div className={iconBoxClass}>
                <FaCode size={20} />
              </div>
            </div>

            <p className="text-4xl font-bold text-slate-900">
              {String(skills.length).padStart(2, '0')}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Across {categories.length - 1} skill categories
            </p>

            <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-full rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500" />
            </div>
          </div>

          <div className={`${cardClass} min-w-0 p-5 sm:p-6`}>
            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="text-sm text-slate-500">
                Average self-assessment
              </span>
              <div className={iconBoxClass}>
                <FaChartLine size={20} />
              </div>
            </div>

            <p className="text-4xl font-bold text-slate-900">
              {averageProficiency}%
            </p>

            <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 transition-all duration-700"
                style={{ width: `${averageProficiency}%` }}
              />
            </div>

            <p className="mt-2 text-xs text-slate-500">
              Calculated from listed proficiency levels
            </p>
          </div>

          <div className={`${cardClass} min-w-0 p-5 sm:col-span-2 sm:p-6 lg:col-span-1`}>
            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="text-sm text-slate-500">
                Public GitHub projects
              </span>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-800 sm:h-12 sm:w-12">
                <SiGithub size={20} />
              </div>
            </div>

            <p className="text-4xl font-bold text-slate-900">
              {githubLoaded ? repositories.length : '—'}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              {githubLoaded
                ? 'Latest public repositories loaded'
                : 'Fetch your latest repositories'}
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
              <span
                className={`h-2 w-2 rounded-full ${
                  githubLoaded ? 'bg-emerald-500' : 'bg-slate-300'
                }`}
              />
              {githubLoaded ? 'Connected this session' : 'Not yet connected'}
            </div>
          </div>
        </div>

        {/* SKILL EXPLORER */}
        <section className="mb-16 sm:mb-20">
          <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className={sectionLabelClass}>
                01 / Skill intelligence
              </p>
              <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Explore My Skills
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Search, filter, and inspect my technical toolkit.
              </p>
            </div>

            <label className="inline-flex w-fit cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition hover:border-purple-200">
              <input
                type="checkbox"
                checked={showProficiency}
                onChange={(event) =>
                  setShowProficiency(event.currentTarget.checked)
                }
                className="h-4 w-4 cursor-pointer accent-purple-600"
              />
              Show proficiency
            </label>
          </div>

          {/* SEARCH */}
          <div className="mb-5">
            <label htmlFor="skill-search" className="sr-only">
              Search skills by name or category
            </label>

            <div className="relative">
              <FaSearch
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={15}
              />

              <input
                id="skill-search"
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(event.currentTarget.value)
                }
                placeholder="Search JavaScript, databases, AI..."
                autoComplete="off"
                className={`${inputClass} ${focusClass} min-w-0 pl-11 shadow-sm placeholder:text-sm`}
              />
            </div>
          </div>

          {/* CATEGORY FILTERS */}
          <div
            className="mb-7 flex flex-wrap gap-2"
            role="group"
            aria-label="Filter skills by category"
          >
            {categories.map((category) => {
              const active = activeCategory === category

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={active}
                  className={`${focusClass} touch-manipulation rounded-full border px-3 py-2 text-xs transition duration-200 sm:px-4 sm:text-sm ${
                    active
                      ? 'border-purple-600 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-md shadow-purple-600/20'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>

          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-slate-500" aria-live="polite">
              Showing{' '}
              <span className="font-semibold text-slate-900">
                {filteredSkills.length}
              </span>{' '}
              of {skills.length} skills
            </p>

            <button
              type="button"
              onClick={clearFilters}
              disabled={!search && activeCategory === 'All'}
              className={`${focusClass} rounded-lg px-2 py-1 text-xs font-medium text-purple-700 transition hover:text-purple-900 disabled:cursor-default disabled:opacity-40`}
            >
              Reset filters
            </button>
          </div>

          {/* SKILL CARDS */}
          {filteredSkills.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredSkills.map((skill) => {
                const Icon = skill.icon

                return (
                  <article
                    key={skill.name}
                    className={`group min-w-0 ${cardClass} p-4 hover:-translate-y-0.5 sm:p-5`}
                  >
                    <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                      <div className={iconBoxClass}>
                        <Icon size={23} aria-hidden="true" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h4 className="break-words font-semibold text-slate-900">
                          {skill.name}
                        </h4>
                        <p className="mt-1 text-xs text-slate-500">
                          {skill.category}
                        </p>
                      </div>

                      <span
                        className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500"
                        aria-hidden="true"
                      />
                    </div>

                    {showProficiency && (
                      <div className="mt-5">
                        <div className="mb-2 flex flex-wrap justify-between gap-2 text-xs">
                          <span className="text-slate-500">
                            Self-assessed level
                          </span>
                          <span className="font-semibold text-purple-700">
                            {skill.proficiency}%
                          </span>
                        </div>

                        <div
                          className="h-1.5 overflow-hidden rounded-full bg-slate-100"
                          role="progressbar"
                          aria-label={`${skill.name} self-assessed proficiency`}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-valuenow={skill.proficiency}
                        >
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 transition-all duration-700"
                            style={{ width: `${skill.proficiency}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </article>
                )
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-7 text-center sm:p-10">
              <FaSearch className="mx-auto mb-4 text-2xl text-slate-400" />

              <p className="font-semibold text-slate-900">
                No matching skills found
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Try another keyword or select a different category.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className={`${secondaryButtonClass} ${focusClass} mt-4`}
              >
                Clear filters
              </button>
            </div>
          )}
        </section>

        {/* AI SKILL GAP ANALYZER */}
        <section className="relative mb-16 overflow-hidden rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50 via-white to-fuchsia-50 p-4 shadow-sm sm:mb-20 sm:p-6 md:p-9">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-fuchsia-200/40 blur-[80px]"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <p className={sectionLabelClass}>
              02 / Career intelligence
            </p>

            <div className="mb-7 flex min-w-0 items-start gap-3 sm:gap-4">
              <div className={`${iconBoxClass} h-11 w-11 sm:h-12 sm:w-12`}>
                <FaBrain size={22} />
              </div>

              <div className="min-w-0">
                <h3 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                  AI Skill Gap Analyzer
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                  Select a target career and get insights into your strengths,
                  missing skills, and what to learn next.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="target-role" className="sr-only">
                Select a target career
              </label>

              <select
                id="target-role"
                value={selectedRole}
                onChange={(event) => {
                  setSelectedRole(event.currentTarget.value)
                  setAnalysis(null)
                  setAnalysisError('')
                }}
                className={`${inputClass} ${focusClass} min-w-0 cursor-pointer shadow-sm sm:flex-1`}
              >
                {Object.keys(roleRequirements).map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={analyzeSkillGap}
                disabled={analyzing}
                className={`${primaryButtonClass} ${focusClass} min-h-12 w-full touch-manipulation sm:w-auto sm:shrink-0 sm:px-6`}
              >
                {analyzing ? (
                  <>
                    <FaSpinner className="animate-spin" aria-hidden="true" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <FaChartLine aria-hidden="true" />
                    Analyze Skill Gap
                  </>
                )}
              </button>
            </div>

            {analysisError && (
              <p
                role="alert"
                className="mt-5 break-words rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700"
              >
                {analysisError}
              </p>
            )}

            {analysis && (
              <div className="mt-7 space-y-5" aria-live="polite">
                <div className={`${cardClass} p-4 sm:p-5`}>
                  <h4 className="font-bold text-slate-900">
                    Analysis summary
                  </h4>
                  <p className="mt-2 break-words text-sm leading-7 text-slate-600">
                    {analysis.summary || 'No summary was returned.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className={`${cardClass} min-w-0 p-4 sm:p-5`}>
                    <h4 className="font-bold text-slate-900">
                      Your strengths
                    </h4>

                    {analysis.strengths?.length ? (
                      <ul className="mt-3 space-y-2 text-sm text-slate-600">
                        {analysis.strengths.map((item, index) => (
                          <li
                            key={`${item}-${index}`}
                            className="flex min-w-0 gap-2"
                          >
                            <span className="shrink-0 text-emerald-600">
                              ✓
                            </span>
                            <span className="break-words">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-3 text-sm text-slate-500">
                        No strengths were returned.
                      </p>
                    )}
                  </div>

                  <div className={`${cardClass} min-w-0 p-4 sm:p-5`}>
                    <h4 className="font-bold text-slate-900">
                      Skills to develop
                    </h4>

                    {analysis.missingSkills?.length ? (
                      <ul className="mt-3 space-y-2 text-sm text-slate-600">
                        {analysis.missingSkills.map((item, index) => (
                          <li
                            key={`${item}-${index}`}
                            className="flex min-w-0 gap-2"
                          >
                            <span className="shrink-0 text-purple-600">
                              →
                            </span>
                            <span className="break-words">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-3 text-sm text-slate-500">
                        No missing skills were returned.
                      </p>
                    )}
                  </div>
                </div>

                <div className={`${cardClass} p-4 sm:p-5`}>
                  <h4 className="font-bold text-slate-900">
                    Suggested learning plan
                  </h4>

                  {analysis.learningPlan?.length ? (
                    <ol className="mt-3 list-inside list-decimal space-y-2 text-sm leading-6 text-slate-600 marker:font-semibold marker:text-purple-600">
                      {analysis.learningPlan.map((item, index) => (
                        <li key={`${item}-${index}`} className="break-words">
                          {item}
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <p className="mt-3 text-sm text-slate-500">
                      No learning steps were returned.
                    </p>
                  )}
                </div>
              </div>
            )}

            <p className="mt-5 text-xs leading-5 text-slate-500">
              Recommendations are guidance, not a hiring assessment.
              Results depend on your listed skills and configured AI model.
            </p>
          </div>
        </section>

        {/* GITHUB PROJECTS */}
        <section className="mb-16 sm:mb-20">
          <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
              <p className={sectionLabelClass}>
                03 / Developer activity
              </p>

              <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Automatic Tech Stack
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Discover public projects and repository updates from GitHub.
              </p>
            </div>

            <button
              type="button"
              onClick={() => void loadGitHub()}
              disabled={githubLoading}
              className={`${secondaryButtonClass} ${focusClass} min-h-12 w-full touch-manipulation sm:w-auto sm:shrink-0`}
            >
              {githubLoading ? (
                <FaSpinner className="animate-spin" aria-hidden="true" />
              ) : (
                <SiGithub size={18} aria-hidden="true" />
              )}

              {githubLoading
                ? 'Loading...'
                : githubLoaded
                  ? 'Refresh GitHub Projects'
                  : 'Fetch GitHub Projects'}
            </button>
          </div>

          {githubError && (
            <div
              role="alert"
              className="mb-5 flex flex-col gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="break-words text-sm text-rose-700">
                {githubError}
              </p>

              <button
                type="button"
                onClick={() => void loadGitHub()}
                disabled={githubLoading}
                className={`${focusClass} shrink-0 self-start rounded-lg border border-rose-200 px-3 py-2 text-sm text-rose-700 hover:bg-rose-100 disabled:opacity-50 sm:self-auto`}
              >
                Try again
              </button>
            </div>
          )}

          {githubLoaded && repositories.length === 0 && (
            <div className={`${cardClass} p-5 text-sm text-slate-600`}>
              No public, non-fork repositories were found.
            </div>
          )}

          {repositories.length > 0 && (
            <>
              <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {repositories.map((repo) => (
                  <article
                    key={repo.id}
                    className={`group flex min-w-0 flex-col ${cardClass} p-4 hover:-translate-y-0.5 sm:p-5`}
                  >
                    <div className="mb-4 flex items-center justify-between gap-3 text-slate-700">
                      <div className={iconBoxClass}>
                        <SiGithub size={20} aria-hidden="true" />
                      </div>

                      <span className="text-xs text-slate-500">
                        ★ {repo.stargazers_count}
                      </span>
                    </div>

                    <h4 className="break-words font-bold text-slate-900 transition-colors group-hover:text-purple-700">
                      {repo.name}
                    </h4>

                    <p className="mt-2 flex-1 break-words text-sm leading-6 text-slate-600">
                      {repo.description || 'No description provided.'}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                      <span className="break-words text-xs font-medium text-slate-600">
                        {repo.language || 'Language not specified'}
                      </span>

                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${focusClass} inline-flex items-center gap-2 text-xs font-semibold text-purple-700 hover:text-fuchsia-700 hover:underline`}
                      >
                        View project
                        <FaExternalLinkAlt size={10} aria-hidden="true" />
                      </a>
                    </div>

                    <p className="mt-3 text-xs text-slate-500">
                      Updated{' '}
                      {Number.isNaN(new Date(repo.updated_at).getTime())
                        ? 'date unavailable'
                        : new Date(repo.updated_at).toLocaleDateString(
                            'en-US',
                            {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            },
                          )}
                    </p>
                  </article>
                ))}
              </div>

              <div className={`${cardClass} p-4 text-sm leading-6 text-slate-600`}>
                Repository languages indicate the code detected in each
                project. They do not measure your overall proficiency,
                code quality, or experience.
              </div>
            </>
          )}

          {!githubLoaded && !githubError && (
            <div className="rounded-2xl border border-dashed border-purple-200 bg-white p-6 text-center transition hover:border-purple-300 sm:p-8">
              <div className={`${iconBoxClass} mx-auto mb-3`}>
                <SiGithub size={25} aria-hidden="true" />
              </div>

              <p className="font-semibold text-slate-900">
                Connect your GitHub profile
              </p>

              <p className="mt-2 break-words text-sm text-slate-600">
                Fetch your latest public projects from @{GITHUB_USERNAME}.
              </p>
            </div>
          )}
        </section>

        {/* PROFESSIONAL SKILLS */}
        <section className="border-t border-slate-200 pt-10 sm:pt-12">
          <p className={sectionLabelClass}>
            04 / Beyond code
          </p>

          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Professional Skills
          </h3>

          <p className="mb-7 mt-2 text-sm leading-6 text-slate-600">
            The collaboration and problem-solving skills I bring to a team.
          </p>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
            {workSkills.map((skill) => {
              const Icon = skill.icon

              return (
                <div
                  key={skill.name}
                  className={`${cardClass} group flex min-h-32 min-w-0 flex-col items-center justify-center gap-4 p-3 text-center hover:-translate-y-0.5 sm:p-4`}
                >
                  <div className={iconBoxClass}>
                    <Icon size={22} aria-hidden="true" />
                  </div>

                  <span className="break-words text-xs font-medium text-slate-700 sm:text-sm">
                    {skill.name}
                  </span>
                </div>
              )
            })}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:mt-14 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <span>Skills & career development</span>
          <span>Built with React, TypeScript & Next.js</span>
        </footer>
      </div>
    </section>
  )
}
