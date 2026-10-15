import { NextResponse } from 'next/server'

export const revalidate = 3600

const GITHUB_USERNAME = 'phoemelakyle'

export async function GET() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
        },
        next: { revalidate: 3600 },
      }
    )

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch GitHub repositories.' },
        { status: response.status }
      )
    }

    const repositories = await response.json()

    const projects = repositories
      .filter((repo: { fork: boolean; name: string }) => !repo.fork)
      .map(
        (repo: {
          id: number
          name: string
          description: string | null
          html_url: string
          homepage: string | null
          language: string | null
          stargazers_count: number
          forks_count: number
          updated_at: string
          topics: string[]
          fork: boolean
        }) => ({
          id: repo.id,
          title: repo.name.replace(/[-_]/g, ' '),
          description:
            repo.description || 'No description provided yet.',
          url: repo.html_url,
          homepage: repo.homepage,
          language: repo.language,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          updatedAt: repo.updated_at,
          topics: repo.topics || [],
        })
      )

    return NextResponse.json(projects)
  } catch {
    return NextResponse.json(
      { error: 'Unable to connect to GitHub.' },
      { status: 500 }
    )
  }
}
