'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  ArrowUpRight,
  Palette,
  Code,
  Brain,
} from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'UI/UX Design System',
    category: 'UI/UX Design',
    description:
      'A user-centered design system focused on usability, consistency, and creating seamless digital experiences.',
    tags: ['Figma', 'Wireframes', 'Prototyping', 'Design System'],
    color: 'from-pink-500/20 to-pink-500/5',
    icon: Palette,
    link: '/projects/ui-ux',
  },
  {
    id: 2,
    title: 'Web Application',
    category: 'Web Development',
    description:
      'A modern web application with interactive interfaces, database integration, and scalable development practices.',
    tags: ['React', 'Next.js', 'Node.js', 'Database'],
    color: 'from-blue-500/20 to-blue-500/5',
    icon: Code,
    link: '/projects/development',
  },
  {
    id: 3,
    title: 'Machine Learning Detection System',
    category: 'Machine Learning',
    description:
      'An AI-powered computer vision system using deep learning models to detect and classify visual data.',
    tags: ['Python', 'YOLO', 'PyTorch', 'OpenCV'],
    color: 'from-purple-500/20 to-purple-500/5',
    icon: Brain,
    link: '/projects/machine-learning',
  },
]

export default function Work() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const router = useRouter()

  return (
    <section id="work" className="py-20 px-6 bg-muted/5">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Work
          </h2>

          <div className="w-12 h-1 bg-accent rounded-full"></div>

          <p className="text-lg text-foreground/70 mt-5 max-w-2xl">
            A collection of projects showcasing my skills in UI/UX design,
            web application development, and machine learning solutions.
          </p>
        </div>


        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project) => {
            const Icon = project.icon

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => router.push(project.link)}
                className="group h-full cursor-pointer"
              >

                <div className="
                  relative h-full 
                  bg-card 
                  rounded-xl 
                  border border-border 
                  overflow-hidden 
                  hover:border-accent 
                  transition-all duration-300 
                  hover:shadow-lg
                ">


                  {/* Icon Section */}
                  <div
                    className={`
                      aspect-video 
                      bg-gradient-to-br 
                      ${project.color} 
                      flex 
                      items-center 
                      justify-center
                    `}
                  >

                    <div className="text-center transition-transform duration-500 group-hover:scale-110">

                      <Icon
                        className="w-14 h-14 mx-auto text-accent/40 mb-3"
                        strokeWidth={1.5}
                      />

                      <p className="text-xs text-muted-foreground uppercase tracking-widest">
                        {project.category}
                      </p>

                    </div>

                  </div>


                  {/* Content */}
                  <div className="p-6 space-y-4">

                    <div className="flex items-start justify-between gap-3">

                      <h3 className="
                        text-xl 
                        font-bold 
                        text-foreground 
                        group-hover:text-accent 
                        transition-colors
                      ">
                        {project.title}
                      </h3>


                      <ArrowUpRight
                        className={`
                          w-5 h-5 
                          flex-shrink-0 
                          transition-all 
                          duration-300
                          ${
                            hoveredId === project.id
                              ? 'text-accent translate-x-1 -translate-y-1'
                              : 'text-muted-foreground'
                          }
                        `}
                      />

                    </div>


                    <p className="text-sm text-foreground/60 line-clamp-2">
                      {project.description}
                    </p>


                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">

                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                            px-3 py-1 
                            bg-muted 
                            rounded-full 
                            text-xs 
                            font-medium 
                            text-muted-foreground
                          "
                        >
                          {tag}
                        </span>
                      ))}

                    </div>

                  </div>

                </div>

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}