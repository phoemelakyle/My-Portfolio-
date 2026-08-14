'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Download ,  GraduationCap,
  School, BookOpen, BriefcaseBusiness,
  CheckCircle,  Award, BadgeCheck,} from 'lucide-react'

type Tab = 'about' | 'education' | 'experience' | 'certification'

export default function About() {
  const [activeTab, setActiveTab] = useState<Tab>('about')

  const tabs = [
    { id: 'about' as Tab, label: 'About Me' },
    { id: 'education' as Tab, label: 'Education' },
    { id: 'experience' as Tab, label: 'Experience' },
    { id: 'certification' as Tab, label: 'Certification' },
  ]

  return (
    <section
      id="about"
      className="py-20 px-6 bg-background"
    >
      <div className="max-w-6xl mx-auto">

        {/* =========================
            MAIN CONTENT
        ========================== */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* =========================
              PROFILE IMAGE
          ========================== */}
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-border">
            <Image
              src="/profile.JPG"
              alt="My Profile"
              fill
              className="object-contain object-center"
              priority
            />
          </div>

          {/* =========================
              RIGHT SIDE
          ========================== */}
          <div className="space-y-6">

            {/* =========================
                TOGGLE BUTTONS
            ========================== */}
            <div className="inline-flex w-full rounded-xl border border-border bg-muted/40 p-1">

              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex-1
                    whitespace-nowrap
                    rounded-lg
                    px-3
                    py-2.5
                    text-xs
                    sm:text-sm
                    font-medium
                    cursor-pointer
                    transition-all
                    duration-200
                    ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-foreground/60 hover:text-blue-600'
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}

            </div>

            {/* =========================
                ABOUT ME
            ========================== */}
            {activeTab === 'about' && (
              <div className="space-y-6">

                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    About Me
                  </h2>

                  <div className="w-12 h-1 bg-accent rounded-full" />
                </div>

               <p className="text-lg text-foreground/70 leading-relaxed text-justify">
  I'm a Computer Science graduate with a broad technical background in software development, web development, data engineering, machine learning, UI/UX design, and AI-assisted development. I enjoy building modern web applications, designing intuitive interfaces, working with data, and transforming ideas into functional and practical solutions. I am passionate about continuously learning new technologies and applying my skills to create meaningful digital experiences.
</p>
              </div>
            )}

            {/* =========================
                EDUCATION
            ========================== */}
            {activeTab === 'education' && (
              <div className="space-y-6">

<div>
  <h2 className="text-4xl md:text-5xl font-bold mb-4">
    Education
  </h2>

  <div className="w-12 h-1 bg-accent rounded-full" />
</div>

<div className="relative mt-10">

  {/* Timeline line */}
  <div className="absolute left-5 top-2 bottom-2 w-px bg-border" />

  <div className="space-y-10">

    {/* College */}
    <div className="relative flex gap-6">
      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background border border-border">
        <GraduationCap className="h-5 w-5 text-accent" />
      </div>

      <div className="flex-1 pb-2">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
          <div>
            <h3 className="text-xl font-bold">
              Bachelor of Science in Computer Science
            </h3>

            <p className="mt-1 text-blue-600 font-medium">
              Batangas State University, The National Engineering University - Alangilan
            </p>
          </div>

          <span className="shrink-0 text-sm text-foreground/60 font-medium">
            Aug 2022 – Jul 2026
          </span>
        </div>
      </div>
    </div>

    {/* High School */}
    <div className="relative flex gap-6">
      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background border border-border">
        <School className="h-5 w-5 text-accent" />
      </div>

      <div className="flex-1 pb-2">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
          <div>
            <h3 className="text-xl font-bold">
              Secondary Education – STEM
            </h3>

            <p className="mt-1 text-blue-600 font-medium">
              Leuteboro National High School
            </p>
          </div>

          <span className="shrink-0 text-sm text-foreground/60 font-medium">
            Jun 2016 – Jun 2022
          </span>
        </div>
      </div>
    </div>

    {/* Elementary */}
    <div className="relative flex gap-6">
      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background border border-border">
        <BookOpen className="h-5 w-5 text-accent" />
      </div>

      <div className="flex-1">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
          <div>
            <h3 className="text-xl font-bold">
              Elementary Education
            </h3>

            <p className="mt-1 text-blue-600 font-medium">
              Felomino C. Mendoza Subaan Elementary School
            </p>
          </div>

          <span className="shrink-0 text-sm text-foreground/60 font-medium">
            Jun 2009 – Mar 2016
          </span>
        </div>
      </div>
    </div>

  </div>
</div>

              </div>
            )}

{/* =========================
    EXPERIENCE
========================== */}
{activeTab === 'experience' && (
  <div className="space-y-6">

    <div>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Experience
      </h2>

      <div className="w-12 h-1 bg-accent rounded-full" />
    </div>

    <div className="relative mt-10">

      {/* Timeline line */}
      <div className="absolute left-5 top-2 bottom-2 w-px bg-border" />

      <div className="space-y-10">

        {/* Internship */}
        <div className="relative flex gap-6">

          {/* Icon */}
          <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background border border-border">
            <BriefcaseBusiness className="h-5 w-5 text-accent" />
          </div>

          {/* Experience Content */}
          <div className="flex-1 pb-2">

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">

              <div>
                <h3 className="text-xl font-bold">
                  Full-Stack Developer & QA Tester
                </h3>

                <p className="mt-1 text-blue-600 font-medium">
                  Internship
                </p>

                <p className="mt-1 text-foreground/70">
                  Institutional Planning and Development Office (IPDO)
                </p>

                <p className="text-sm text-foreground/60">
                  Batangas State University - TNEU, Pablo Borbon Campus
                </p>
              </div>

              <span className="shrink-0 text-sm text-foreground/60 font-medium">
                Jun 2025 – Jul 2025
              </span>

            </div>

            {/* Responsibilities */}
            <div className="mt-5 space-y-0">

              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 mt-0.5 text-accent" />

                <p className="text-foreground/70 leading-relaxed">
                  Developed and maintained web application features using
                  frontend and backend technologies.
                </p>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 mt-0.5 text-accent" />

                <p className="text-foreground/70 leading-relaxed">
                  Performed QA testing to identify bugs and improve system
                  performance and reliability.
                </p>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 mt-0.5 text-accent" />

                <p className="text-foreground/70 leading-relaxed">
                  Designed and refined UI/UX to improve usability and
                  overall application flow.
                </p>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 mt-0.5 text-accent" />

                <p className="text-foreground/70 leading-relaxed">
                  Collaborated with team members using Git for version
                  control and project development.
                </p>
              </div>

            </div>

            {/* Technologies */}
            <div className="mt-6">

              <p className="text-sm font-semibold mb-3">
                Tools & Technologies
              </p>

              <div className="flex flex-wrap gap-2">

                {[
                  "Laravel",
                  "PHP",
                  "PostgreSQL",
                  "Figma",
                  "Git",
                  "GitHub",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1.5 text-sm rounded-full border border-border bg-foreground/5 text-foreground/70"
                  >
                    {technology}
                  </span>
                ))}

              </div>

            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
)}

 {/* =========================
    CERTIFICATION
========================== */}
{activeTab === 'certification' && (
  <div className="space-y-6">

    <div>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Certifications & Trainings
      </h2>

      <div className="w-12 h-1 bg-accent rounded-full" />
    </div>

    <div className="relative mt-10">

      {/* Timeline line */}
      <div className="absolute left-5 top-2 bottom-2 w-px bg-border" />

      <div className="space-y-10">

        {/* CCNA */}
        <div className="relative flex gap-6">

          <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background border border-border">
            <Award className="h-5 w-5 text-accent" />
          </div>

          <div className="flex-1">

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">

              <div>
                <h3 className="text-xl font-bold">
                  CCNA: Introduction to Networks Course
                </h3>

                <p className="mt-1 text-blue-600 font-medium">
                  Cisco
                </p>
              </div>

              <span className="shrink-0 text-sm text-foreground/60 font-medium">
                January 22, 2024
              </span>

            </div>

            <p className="mt-3 text-foreground/70 leading-relaxed">
              Training focused on fundamental networking concepts,
              network infrastructure, protocols, and connectivity.
            </p>

          </div>
        </div>

        {/* AWS */}
        <div className="relative flex gap-6">

          <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background border border-border">
            <BadgeCheck className="h-5 w-5 text-accent" />
          </div>

          <div className="flex-1">

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">

              <div>
                <h3 className="text-xl font-bold">
                  AWS Academy Graduate – Machine Learning Foundations
                </h3>

                <p className="mt-1 text-blue-600 font-medium">
                  Amazon Web Services (AWS)
                </p>
              </div>

              <span className="shrink-0 text-sm text-foreground/60 font-medium">
                Training Badge
              </span>

            </div>

            <p className="mt-3 text-foreground/70 leading-relaxed">
              Training covering foundational machine learning concepts,
              applications, and core AWS machine learning technologies.
            </p>

          </div>
        </div>

      </div>
    </div>

  </div>
)}

            {/* =========================
                DOWNLOAD CV
            ========================== */}
            <div className="flex justify-center pt-4">

              <a
                href="/cv.pdf"
                download
                className="
                  inline-flex
                  items-center
                  gap-2
                  cursor-pointer
                  rounded-full
                  bg-blue-600
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_8px_25px_rgba(30,91,190,0.20)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-blue-700
                "
              >
                <Download className="h-4 w-4" />
                DOWNLOAD CV
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}