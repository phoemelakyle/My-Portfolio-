
'use client'

import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  Star,
  GitFork,
  ExternalLink,
  RefreshCw,
  Code2,
  FolderGit2,
  Palette,
  Brain,
  Globe,
} from 'lucide-react'
import { FaGithub, FaFigma } from 'react-icons/fa'

type Category =
  | 'Web Development'
  | 'Machine Learning'
  | 'UI/UX Design'

type Project = {
  id: string
  title: string
  description: string
  url: string
  image?: string
  category: Category
  language?: string | null
  stars?: number
  forks?: number
  updatedAt?: string
  tags: string[]
}

type GitHubRepository = {
  url: string
  description: string | null
  language: string | null
  stars: number
  forks: number
  updatedAt: string
  topics: string[]
}

/* =========================================
   SHARED PURPLE / FUCHSIA THEME
========================================= */

const cardClass =
  'rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-500/5'

const primaryButtonClass =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-purple-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-purple-700 hover:to-fuchsia-700 hover:shadow-lg hover:shadow-purple-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60'

const secondaryButtonClass =
  'inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-purple-200 bg-white px-4 py-2 text-sm font-medium text-purple-700 transition-all duration-200 hover:border-purple-300 hover:bg-purple-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2'

const iconBoxClass =
  'shrink-0 rounded-xl border border-purple-100 bg-gradient-to-br from-purple-50 to-fuchsia-50 p-3 text-purple-600'

/* =========================================
   FEATURED PROJECTS
========================================= */

const featuredProjects: Project[] = [
    {
    id: 'agrimart-web',
    title: 'AGRIMART/AngkatAni',
    description:
      'A full-stack web application focused on functionality and usability.',
    url: 'https://github.com/phoemelakyle/AGRIMART',
    image: '/webdev1.jpeg',
    category: 'Web Development',
    tags: ['Web Application', 'Full Stack'],
  },
  {
    id: 'wattwise-web',
    title: 'WattWise',
    description:
      'A dynamic web application with interactive features and database integration.',
    url: 'https://github.com/phoemelakyle/WattWise',
    image: '/webdev3.png',
    category: 'Web Development',
    tags: ['Web Development', 'Database'],
  },
    {
    id: 'recursive-simulator',
    title: 'Recurs-IVE-It',
    description:
      'A web-based recursive algorithm simulator designed to help users understand and visualize recursion.',
    url: 'https://github.com/phoemelakyle/Recurs-IVE-It',
    image: '/webdev5.png',
    category: 'Web Development',
    tags: ['Algorithms', 'Simulation'],
  },
   {
    id: 'alutron',
    title: 'ALUtron',
    description:
      'An interactive web-based simulation tool that demonstrates the core functionalities of an Arithmetic Logic Unit (ALU).',
    url: 'https://github.com/phoemelakyle/ALUtron',
    image: '/webdev4.png',
    category: 'Web Development',
    tags: ['Simulation', 'Computer Architecture'],
  },
  {
    id: 'geominder',
    title: 'GeoMinder',
    description:
      'A dynamic application featuring interactive functionality, Google API integration, and database integration.',
    url: 'https://github.com/coochill/GeoMinder',
    image: '/webdev2.png',
    category: 'Web Development',
    tags: ['Google API', 'Database'],
  },
  {
    id: 'scb-yolo',
    title: 'Enhanced YOLOv12',
    description:
      'A computer vision research project focused on multi-class face accessory detection using YOLOv12, Squeeze-and-Excitation blocks, and contextual reasoning.',
    url: 'https://github.com/coochill/SCB-YOLO',
    image: '/thesis.png',
    category: 'Machine Learning',
    tags: ['Python', 'YOLOv12', 'Computer Vision'],
  },
  {
    id: 'figma-design-1',
    title: 'FlavourEase',
    description:
      'A UI/UX design project showcasing interface layouts and visual design.',
    url: 'https://www.figma.com/design/rQvfIAHfzpgk2QR5HB9I1x/FlavorEase?node-id=1-296&t=5J3GRmUvwr8GOKru-1',
    image: '/uiux1.png',
    category: 'UI/UX Design',
    tags: ['Figma', 'Interface Design', 'Prototyping'],
  },
  
  {
    id: 'wattwise-design',
    title: 'WATTWISE',
    description:
      'A user interface prototype for WattWise, presenting its digital experience and interaction flow.',
    url: 'https://www.figma.com/design/yLGxOiPJfBlhpKR4aZjccT/WATTWISE?node-id=1-296&t=x0mJiP0Wjelm2jc1-1',
    image: '/uiux4.png',
    category: 'UI/UX Design',
    tags: ['Figma'],
  },
  {
    id: 'codecrypt',
    title: 'CodeCrypt',
    description:
      'An interactive Figma prototype presenting a digital product interface.',
    url: 'https://www.figma.com/design/2bq7H1jv4froOCTZ01Mqjh/CodeCrypt--Copy-?node-id=0-1&t=M6fluwgvefTum9tV-1',
    image: '/uiux5.png',
    category: 'UI/UX Design',
    tags: ['Figma', 'UI/UX'],
  },
  {
    id: 'extension-manual',
    title: 'Extension User Manual',
    description:
      'A Figma-based user manual prototype for presenting information and guiding users through an interface.',
    url: 'https://www.figma.com/design/FDGdaXXrvO9gSOAdD5pzcE/Extension-User-Manual?node-id=0-1&t=abvOHomi02RfKRvL-11',
    image: '/uiux6.png',
    category: 'UI/UX Design',
    tags: ['Figma', 'User Guide'],
  },
  {
    id: 'agrimart-design',
    title: 'AGRIMART',
    description:
      'A Figma design for AGRIMART, showcasing interface layouts and user interactions.',
    url: 'https://www.figma.com/design/0IKxWxE6UaSxmXpUnMfJ9d/AGRIMART?node-id=460-39913&t=9HIrlIZ8Tjo2lXQt-1',
    image: '/uiux7.png',
    category: 'UI/UX Design',
    tags: ['Figma'],
  },
  {
    id: 'WorkConnect-design',
    title: 'WorkConnect',
    description:
      'A Figma UI/UX design for WorkConnect, a platform connecting job seekers with employers through intuitive layouts and user-friendly interactions.',
    url: 'https://www.figma.com/design/LzNuAltfGNCtTHoqDVYWP6/WorkConnect?node-id=1-1074&t=p9xWZwGXNJoVb3jg-1',
    image: '/uiux8.png',
    category: 'UI/UX Design',
    tags: ['Figma'],
  },
  {
    id: 'Geominder',
    title: 'GeoMinder',
    description:
      'Featuring an intuitive location-based interface for easy navigation and location management.',
    url: 'https://www.figma.com/design/n3UYNuma9Sd3ynNp3iNDsf/GeoMinder?node-id=0-1&t=f2ZXwDYchAlk3rQa-1',
    image: '/uiux9.png',
    category: 'UI/UX Design',
    tags: ['Figma', 'Mobile Design'],
  },
]

const categories = [
  'All Projects',
  'Web Development',
  'Machine Learning',
  'UI/UX Design',
] as const

type FilterCategory = (typeof categories)[number]

const categoryStyles: Record<Category, string> = {
  'Web Development':
    'border-purple-100 bg-purple-50 text-purple-700',
  'Machine Learning':
    'border-fuchsia-100 bg-fuchsia-50 text-fuchsia-700',
  'UI/UX Design':
    'border-violet-100 bg-violet-50 text-violet-700',
}

export default function Work() {
  const [projects, setProjects] =
    useState<Project[]>(featuredProjects)

  const [activeCategory, setActiveCategory] =
    useState<FilterCategory>('All Projects')

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)


async function fetchGitHubData() {
  setLoading(true)
  setError(false)

  try {
    const response = await fetch('/api/projects', {
      cache: 'no-store',
    })

    if (!response.ok) {
      throw new Error('GitHub API request failed')
    }

    const repositories: GitHubRepository[] =
      await response.json()

    const repositoryMap = new Map(
      repositories.map((repo) => [
        repo.url.toLowerCase().replace(/\/$/, ''),
        repo,
      ])
    )

    setProjects(
      featuredProjects.map((project) => {
        const repository = repositoryMap.get(
          project.url.toLowerCase().replace(/\/$/, '')
        )

        // Keep the manually written description unchanged.
        if (!repository) return project

        return {
          ...project,
          description: project.description,
          language: repository.language ?? project.language,
          stars: repository.stars,
          forks: repository.forks,
          updatedAt: repository.updatedAt,
          tags: [
            ...new Set([
              ...project.tags,
              ...(repository.topics ?? []),
            ]),
          ].slice(0, 4),
        }
      })
    )
  } catch (err) {
    console.error('Failed to fetch GitHub project data:', err)
    setProjects(featuredProjects)
    setError(true)
  } finally {
    setLoading(false)
  }
}


  useEffect(() => {
    void fetchGitHubData()
  }, [])

  const filteredProjects =
    activeCategory === 'All Projects'
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        )

  function getCategoryIcon(category: Category) {
    if (category === 'UI/UX Design') return FaFigma
    if (category === 'Machine Learning') return Brain
    return Code2
  }

  return (
    <section
      id="work"
    className="relative isolate min-h-screen overflow-hidden bg-slate-50 px-4 pb-16 pt-0 text-slate-900 sm:px-6 sm:pb-20 sm:pt-0 md:px-8 md:pb-24 md:pt-0"
>
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 top-24 h-80 w-80 rounded-full bg-purple-200/20 blur-3xl" />
        <div className="absolute -right-40 top-72 h-96 w-96 rounded-full bg-fuchsia-200/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* PAGE HEADER */}
        <div className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-gradient-to-r from-purple-50 to-fuchsia-50 px-4 py-2">
            <FolderGit2 className="h-4 w-4 text-purple-600" />
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-purple-700">
              Portfolio & Projects
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            My Projects
            <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              .
            </span>
          </h2>

          <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Explore my work in web development, machine learning,
            and UI/UX design. GitHub repository information is
            automatically retrieved when available, while design
            projects link directly to their Figma prototypes.
          </p>

          {/* ACTIONS */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/phoemelakyle"
              target="_blank"
              rel="noopener noreferrer"
              className={primaryButtonClass}
            >
              <FaGithub className="h-4 w-4" />
              GitHub Profile
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={() => void fetchGitHubData()}
              disabled={loading}
              className={secondaryButtonClass}
            >
              <RefreshCw
                className={`h-4 w-4 ${
                  loading ? 'animate-spin' : ''
                }`}
              />
              {loading ? 'Refreshing...' : 'Refresh Data'}
            </button>
          </div>

          {error && (
            <div
              role="status"
              className="mt-5 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800"
            >
              <RefreshCw className="mt-0.5 h-4 w-4 shrink-0" />
              <p>
                GitHub data could not be refreshed. Your featured
                projects are still available below. Please try
                again later.
              </p>
            </div>
          )}
        </div>

        {/* CATEGORY FILTERS */}
        <div className={`${cardClass} mb-8 p-4 sm:p-5`}>
          <div className="mb-3">
            <p className="text-sm font-bold text-slate-900">
              Explore Projects
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Filter projects by category.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter projects by category"
          >
            {categories.map((category) => {
              const active = activeCategory === category

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-10 rounded-xl border px-4 py-2 text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 sm:text-sm ${
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
        </div>

        {/* PROJECT COUNT AND STATUS */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <p
            aria-live="polite"
            className="text-sm font-medium text-slate-600"
          >
            Showing{' '}
            <span className="font-bold text-slate-900">
              {filteredProjects.length}
            </span>{' '}
            project{filteredProjects.length !== 1 ? 's' : ''}
          </p>

          {loading && (
            <span
              role="status"
              className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-700"
            >
              <RefreshCw className="h-3.5 w-3.5 animate-spin" />
              Syncing GitHub data...
            </span>
          )}
        </div>

        {/* PROJECT GRID */}
        <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
          {filteredProjects.map((project) => {
            const Icon = getCategoryIcon(project.category)

            return (
              <article
                key={project.id}
                className={`group flex min-w-0 flex-col overflow-hidden ${cardClass} hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10`}
              >
                {/* PROJECT IMAGE */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title}`}
                  className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-slate-100 bg-gradient-to-br from-purple-50 via-white to-fuchsia-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-purple-500"
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03] sm:p-3"
                      loading="lazy"
                    />
                  ) : (
                    <div className={iconBoxClass}>
                      <Icon className="h-10 w-10" />
                    </div>
                  )}

                  {/* HOVER OVERLAY */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950/0 transition-colors duration-300 group-hover:bg-slate-950/45">
                    <span className="flex translate-y-3 items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {project.category === 'UI/UX Design' ? (
                        <FaFigma className="h-4 w-4 text-purple-600" />
                      ) : (
                        <ExternalLink className="h-4 w-4 text-purple-600" />
                      )}
                      View Project
                    </span>
                  </div>

                  {/* CATEGORY BADGE */}
                  <span
                    className={`pointer-events-none absolute left-3 top-3 max-w-[80%] truncate rounded-full border px-3 py-1.5 text-[10px] font-bold shadow-sm backdrop-blur-md sm:text-xs ${categoryStyles[project.category]}`}
                  >
                    {project.category}
                  </span>

                  {project.category === 'UI/UX Design' && (
                    <span className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-purple-100 bg-white/95 text-purple-600 shadow-sm">
                      <FaFigma className="h-4 w-4" />
                    </span>
                  )}
                </a>

                {/* PROJECT DETAILS */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="break-words text-lg font-bold text-slate-900 transition-colors group-hover:text-purple-700 sm:text-xl">
                      {project.title}
                    </h3>

                    <ArrowUpRight className="mt-0.5 h-5 w-5 shrink-0 text-slate-400 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-600" />
                  </div>

                  <p className="mb-5 line-clamp-3 flex-1 text-sm leading-6 text-slate-600">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES AND TAGS */}
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.language && (
                      <span className="max-w-full break-words rounded-lg border border-purple-100 bg-purple-50 px-2.5 py-1.5 text-xs font-semibold text-purple-700">
                        {project.language}
                      </span>
                    )}

                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="max-w-full break-words rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* GITHUB STATISTICS */}
                  {project.category !== 'UI/UX Design' && (
                    <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-100 pt-4 text-xs text-slate-500">
                      {project.stars !== undefined && (
                        <span className="inline-flex items-center gap-1.5">
                          <Star className="h-4 w-4 text-amber-500" />
                          {project.stars} stars
                        </span>
                      )}

                      {project.forks !== undefined && (
                        <span className="inline-flex items-center gap-1.5">
                          <GitFork className="h-4 w-4 text-purple-500" />
                          {project.forks} forks
                        </span>
                      )}

                      {project.updatedAt && (
                        <span className="w-full text-[11px] text-slate-400">
                          Updated{' '}
                          {new Date(
                            project.updatedAt
                          ).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      )}
                    </div>
                  )}

                  {/* PROJECT LINK */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${primaryButtonClass} mt-auto w-full`}
                  >
                    {project.category === 'UI/UX Design' ? (
                      <>
                        <FaFigma className="h-4 w-4" />
                        View on Figma
                      </>
                    ) : (
                      <>
                        <FaGithub className="h-4 w-4" />
                        View Repository
                      </>
                    )}

                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        {/* FOOTER */}
        <div className="mt-14 border-t border-slate-200 pt-7">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2">
              <Code2 className="h-4 w-4 text-purple-600" />
              Development
            </span>

            <span className="inline-flex items-center gap-2">
              <Brain className="h-4 w-4 text-fuchsia-600" />
              Machine Learning
            </span>

            <span className="inline-flex items-center gap-2">
              <Palette className="h-4 w-4 text-violet-600" />
              UI/UX Design
            </span>

            <span className="inline-flex items-center gap-2">
              <Globe className="h-4 w-4 text-purple-500" />
              Digital Solutions
            </span>
          </div>

          <p className="text-center text-xs leading-6 text-slate-400">
            GitHub REST API · Next.js Route Handlers · Figma · Vercel
          </p>
        </div>
      </div>
    </section>
  )
}
