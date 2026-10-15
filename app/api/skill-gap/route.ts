
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

type SkillInput = {
  name: string
  category: string
  proficiency: number
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        { error: 'OPENAI_API_KEY is not configured.' },
        { status: 503 },
      )
    }

    const body = await request.json()
    const role = body.role
    const skills: SkillInput[] = body.skills
    const requiredSkills: string[] = body.requiredSkills

    if (
      typeof role !== 'string' ||
      !Array.isArray(skills) ||
      !Array.isArray(requiredSkills) ||
      skills.length > 100 ||
      requiredSkills.length > 50
    ) {
      return NextResponse.json(
        { error: 'Invalid skill analysis input.' },
        { status: 400 },
      )
    }

    const safeSkills = skills
      .filter(
        (skill) =>
          typeof skill.name === 'string' &&
          typeof skill.category === 'string' &&
          Number.isFinite(skill.proficiency),
      )
      .map((skill) => ({
        name: skill.name.slice(0, 100),
        category: skill.category.slice(0, 80),
        proficiency: Math.max(
          0,
          Math.min(100, skill.proficiency),
        ),
      }))

    const prompt = `
Analyze this candidate's self-reported skills for the target role.

Target role: ${role.slice(0, 100)}
Suggested role requirements: ${JSON.stringify(requiredSkills)}
Candidate skills and self-assessed proficiency:
${JSON.stringify(safeSkills)}

Rules:
- Treat proficiency numbers as self-reported, not verified.
- Identify relevant strengths without exaggerating ability.
- Identify missing or underdeveloped required skills.
- Give a practical, beginner-friendly learning plan.
- Do not claim the candidate is qualified or unqualified for a job.
- Return only valid JSON with exactly these fields:
{
  "summary": "string",
  "strengths": ["string"],
  "missingSkills": ["string"],
  "learningPlan": ["string"]
}
`

    const aiResponse = await fetch(
      'https://api.openai.com/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content:
                'You are a practical software career mentor. Return valid JSON only.',
            },
            { role: 'user', content: prompt },
          ],
          response_format: { type: 'json_object' },
          max_tokens: 900,
        }),
        cache: 'no-store',
      },
    )

    if (!aiResponse.ok) {
      console.error('AI provider returned status:', aiResponse.status)

      return NextResponse.json(
        { error: 'The AI provider could not complete the analysis.' },
        { status: 502 },
      )
    }

    const result = await aiResponse.json()
    const content = result.choices?.[0]?.message?.content

    if (typeof content !== 'string') {
      throw new Error('The AI response did not contain JSON content.')
    }

    const analysis = JSON.parse(content)

    if (
      typeof analysis.summary !== 'string' ||
      !Array.isArray(analysis.strengths) ||
      !Array.isArray(analysis.missingSkills) ||
      !Array.isArray(analysis.learningPlan)
    ) {
      throw new Error('The AI response has an invalid structure.')
    }

    return NextResponse.json({
      summary: analysis.summary,
      strengths: analysis.strengths.filter(
        (item: unknown) => typeof item === 'string',
      ),
      missingSkills: analysis.missingSkills.filter(
        (item: unknown) => typeof item === 'string',
      ),
      learningPlan: analysis.learningPlan.filter(
        (item: unknown) => typeof item === 'string',
      ),
    })
  } catch (error) {
    console.error('Skill gap analysis failed:', error)

    return NextResponse.json(
      { error: 'Unable to analyze skills right now.' },
      { status: 500 },
    )
  }
}
