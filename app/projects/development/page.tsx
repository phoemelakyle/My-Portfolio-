"use client"

import { useEffect, useState } from "react"
import {
  Code2,
  Smartphone,
  Database,
  CheckCircle,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Globe,
  Server,
} from "lucide-react"
import Link from "next/link"

export default function DevelopmentPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const projects = [
    {
      image: "/webdev1.jpeg",
      title: "Web Development Project 1",
      description: "A full-stack web application focused on functionality and usability.",
      link: "https://github.com/phoemelakyle/AGRIMART",
      type: "Web Application",
    },
    {
      image: "/webdev2.png",
      title: "Web Application",
      description: "A dynamic application with interactive features, google API integration, and database integration.",
      link: "https://github.com/coochill/GeoMinder",
      type: "Web Application",
    },
    {
      image: "/webdev3.png",
      title: "Web Development Project 3",
      description: "A dynamic web application with interactive features and database integration.",
      link: "https://github.com/christinedln/WattWise",
      type: "Web Development",
    },
    {
      image: "/webdev4.png",
      title: "Web-based Simulation",
      description: "web-based simulation tool designed and developed to provide an interactive digital platform that simulates the core functionalities of an Arithmetic Logic Unit (ALU).",
      link: "https://github.com/christinedln/ALUtron",
      type: "Web-based Simulation",
    },
    {
      image: "/webdev5.png",
      title: "Web-based Simulation",
      description: "web-based Recursive Algorithm Simulator designed to help users understand and visualize recursion",
      link: "https://github.com/coochill/Recurs-IVE-It",
      type: "Web-based Simulation",
    },
  ]

  // =========================
  // AUTO SLIDE EVERY 4 SECONDS
  // =========================
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((current) =>
        current === projects.length - 1 ? 0 : current + 1
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [projects.length])

  // =========================
  // PREVIOUS SLIDE
  // =========================
  const previousSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? projects.length - 1 : current - 1
    )
  }

  // =========================
  // NEXT SLIDE
  // =========================
  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === projects.length - 1 ? 0 : current + 1
    )
  }

  return (
    <main className="min-h-screen bg-background px-6 py-20">

      {/* =========================
          BACK TO WORK
      ========================== */}
      <Link
        href="/#work"
        className="
          fixed
          top-6
          left-6
          z-50
          p-2
          text-muted-foreground
          hover:text-foreground
          hover:-translate-x-1
          transition-all
          duration-300
        "
        aria-label="Back to Work"
      >
        <ArrowLeft className="w-6 h-6" />
      </Link>

      <div className="max-w-5xl mx-auto space-y-16">

        {/* =========================
            HERO
        ========================== */}
        <section className="space-y-6">

          <p className="
            text-sm
            uppercase
            tracking-widest
            text-muted-foreground
          ">
            Web & App Development
          </p>

          <h1 className="
            text-5xl
            md:text-6xl
            font-bold
            leading-tight
          ">
            Building Functional
            <span className="block text-accent">
              Digital Solutions
            </span>
          </h1>

          <p className="
            text-lg
            text-foreground/70
            max-w-3xl
            leading-relaxed
          ">
            Developing modern websites and applications that combine clean
            interfaces, reliable functionality, efficient data management,
            and user-focused experiences.
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-3 pt-4">

            {[
              "React",
              "Next.js",
              "JavaScript",
              "TypeScript",
              "Laravel",
              "PHP",
              "MySQL",
              "PostgreSQL",
              "Tailwind CSS",
            ].map((technology) => (
              <span
                key={technology}
                className="
                  px-4
                  py-2
                  border
                  border-border
                  rounded-full
                  text-sm
                  text-muted-foreground
                  hover:border-accent
                  hover:text-accent
                  hover:-translate-y-0.5
                  transition-all
                  duration-300
                "
              >
                {technology}
              </span>
            ))}

          </div>

        </section>


        {/* =========================
            PROJECT SLIDESHOW
        ========================== */}
        <section>

          <div
            className="
              relative
              w-full
              aspect-video
              overflow-hidden
              rounded-2xl
              border
              border-border
              bg-black
              shadow-xl
            "
          >

            {/* =========================
                SLIDING TRACK
            ========================== */}
            <div
              className="
                flex
                w-full
                h-full
                transition-transform
                duration-700
                ease-in-out
              "
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >

              {projects.map((project, index) => (
                <div
                  key={project.image}
                  className="
                    min-w-full
                    w-full
                    h-full
                    flex-shrink-0
                  "
                >

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      relative
                      block
                      w-full
                      h-full
                      overflow-hidden
                      cursor-pointer
                    "
                  >

                    {/* Project Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        block
                        w-full
                        h-full
                        object-contain
                        select-none
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-105
                      "
                      draggable={false}
                    />

                    {/* =========================
                        HOVER OVERLAY
                    ========================== */}
                    <div
                      className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        bg-black/0
                        group-hover:bg-black/55
                        transition-all
                        duration-500
                      "
                    >

                      <div
                        className="
                          flex
                          flex-col
                          items-center
                          gap-3
                          opacity-0
                          scale-90
                          translate-y-4
                          group-hover:opacity-100
                          group-hover:scale-100
                          group-hover:translate-y-0
                          transition-all
                          duration-500
                        "
                      >

                        {/* Icon */}
                        <div className="
                          w-14
                          h-14
                          rounded-full
                          bg-white/10
                          backdrop-blur-md
                          border
                          border-white/20
                          flex
                          items-center
                          justify-center
                          text-white
                        ">
                          <ExternalLink className="w-6 h-6" />
                        </div>

                        {/* Button */}
                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            px-6
                            py-3
                            rounded-full
                            bg-white
                            text-black
                            font-medium
                            text-sm
                            shadow-2xl
                            hover:bg-accent
                            hover:text-white
                            transition-colors
                            duration-300
                          "
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Project
                        </div>

                      </div>

                    </div>


                    {/* =========================
                        PROJECT LABEL
                    ========================== */}
                    <div
                      className="
                        absolute
                        left-5
                        top-5
                        opacity-0
                        -translate-y-2
                        group-hover:opacity-100
                        group-hover:translate-y-0
                        transition-all
                        duration-500
                      "
                    >
                      <div className="
                        px-4
                        py-2
                        rounded-full
                        bg-black/50
                        backdrop-blur-md
                        border
                        border-white/10
                        text-white
                        text-xs
                      ">
                        {project.type}
                      </div>
                    </div>

                  </a>

                </div>
              ))}

            </div>


            {/* =========================
                LEFT ARROW
            ========================== */}
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous project"
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                z-30
                w-11
                h-11
                rounded-full
                bg-black/50
                backdrop-blur-md
                text-white
                flex
                items-center
                justify-center
                border
                border-white/20
                hover:bg-white
                hover:text-black
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <ChevronLeft className="w-5 h-5" />
            </button>


            {/* =========================
                RIGHT ARROW
            ========================== */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next project"
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                z-30
                w-11
                h-11
                rounded-full
                bg-black/50
                backdrop-blur-md
                text-white
                flex
                items-center
                justify-center
                border
                border-white/20
                hover:bg-white
                hover:text-black
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <ChevronRight className="w-5 h-5" />
            </button>


            {/* =========================
                SLIDE INDICATORS
            ========================== */}
            <div
              className="
                absolute
                bottom-5
                left-1/2
                -translate-x-1/2
                z-30
                flex
                items-center
                gap-2
                px-3
                py-2
                rounded-full
                bg-black/40
                backdrop-blur-md
                border
                border-white/10
              "
            >

              {projects.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to project ${index + 1}`}
                  className={`
                    h-1.5
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      currentSlide === index
                        ? "w-8 bg-white"
                        : "w-2 bg-white/40 hover:bg-white/70"
                    }
                  `}
                />
              ))}

            </div>


            {/* =========================
                COUNTER
            ========================== */}
            <div
              className="
                absolute
                top-4
                right-4
                z-30
                px-3
                py-1
                rounded-full
                bg-black/50
                backdrop-blur-md
                border
                border-white/10
                text-white
                text-xs
              "
            >
              {currentSlide + 1} / {projects.length}
            </div>

          </div>

        </section>


        {/* =========================
            DEVELOPMENT AREAS
        ========================== */}
        <section className="grid md:grid-cols-3 gap-6">

          {/* Web Development */}
          <div
            className="
              group
              p-6
              rounded-xl
              border
              border-border
              bg-card
              hover:-translate-y-2
              hover:border-accent/50
              hover:shadow-lg
              transition-all
              duration-300
            "
          >

            <div className="
              w-12
              h-12
              rounded-xl
              bg-accent/10
              flex
              items-center
              justify-center
              mb-5
              group-hover:bg-accent
              transition-all
              duration-300
            ">
              <Globe
                className="
                  w-6
                  h-6
                  text-accent
                  group-hover:text-white
                  transition-colors
                  duration-300
                "
              />
            </div>

            <h3 className="font-semibold text-lg mb-2">
              Web Development
            </h3>

            <p className="text-sm text-foreground/60 leading-relaxed">
              Building responsive and interactive websites using modern
              frontend and backend technologies.
            </p>

          </div>


          {/* App Development */}
          <div
            className="
              group
              p-6
              rounded-xl
              border
              border-border
              bg-card
              hover:-translate-y-2
              hover:border-accent/50
              hover:shadow-lg
              transition-all
              duration-300
            "
          >

            <div className="
              w-12
              h-12
              rounded-xl
              bg-accent/10
              flex
              items-center
              justify-center
              mb-5
              group-hover:bg-accent
              transition-all
              duration-300
            ">
              <Smartphone
                className="
                  w-6
                  h-6
                  text-accent
                  group-hover:text-white
                  transition-colors
                  duration-300
                "
              />
            </div>

            <h3 className="font-semibold text-lg mb-2">
              App Development
            </h3>

            <p className="text-sm text-foreground/60 leading-relaxed">
              Developing functional applications with intuitive interfaces,
              efficient workflows, and reliable functionality.
            </p>

          </div>


          {/* Backend & Database */}
          <div
            className="
              group
              p-6
              rounded-xl
              border
              border-border
              bg-card
              hover:-translate-y-2
              hover:border-accent/50
              hover:shadow-lg
              transition-all
              duration-300
            "
          >

            <div className="
              w-12
              h-12
              rounded-xl
              bg-accent/10
              flex
              items-center
              justify-center
              mb-5
              group-hover:bg-accent
              transition-all
              duration-300
            ">
              <Database
                className="
                  w-6
                  h-6
                  text-accent
                  group-hover:text-white
                  transition-colors
                  duration-300
                "
              />
            </div>

            <h3 className="font-semibold text-lg mb-2">
              Backend & Database
            </h3>

            <p className="text-sm text-foreground/60 leading-relaxed">
              Creating backend systems, APIs, database structures, and
              data-driven application functionality.
            </p>

          </div>

        </section>


        {/* =========================
            DEVELOPMENT HIGHLIGHTS
        ========================== */}
        <section className="space-y-6">

          <h2 className="text-3xl font-bold">
            Development Highlights
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            {[
              {
                icon: Code2,
                text: "Clean and maintainable code",
              },
              {
                icon: Smartphone,
                text: "Responsive web and application interfaces",
              },
              {
                icon: Database,
                text: "Database integration and data management",
              },
              {
                icon: Server,
                text: "Frontend and backend development",
              },
            ].map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.text}
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    p-4
                    rounded-lg
                    border
                    border-border
                    bg-card
                    hover:border-accent/50
                    hover:-translate-y-1
                    hover:shadow-md
                    transition-all
                    duration-300
                  "
                >

                  <div className="
                    w-9
                    h-9
                    rounded-lg
                    bg-accent/10
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                    group-hover:bg-accent
                    transition-all
                    duration-300
                  ">
                    <Icon
                      className="
                        w-5
                        h-5
                        text-accent
                        group-hover:text-white
                        transition-colors
                        duration-300
                      "
                    />
                  </div>

                  <span className="text-sm">
                    {item.text}
                  </span>

                </div>
              )
            })}

          </div>

        </section>


        {/* =========================
            PROJECT OUTCOME
        ========================== */}
        <section
          className="
            group
            p-8
            rounded-2xl
            bg-muted/30
            border
            border-border
            hover:border-accent/30
            hover:shadow-lg
            transition-all
            duration-300
          "
        >

          <div className="flex items-center gap-3 mb-4">

            <div className="
              w-10
              h-10
              rounded-lg
              bg-accent/10
              flex
              items-center
              justify-center
              group-hover:bg-accent
              transition-all
              duration-300
            ">
              <CheckCircle
                className="
                  w-5
                  h-5
                  text-accent
                  group-hover:text-white
                  transition-colors
                  duration-300
                "
              />
            </div>

            <h2 className="text-3xl font-bold">
              Project Outcome
            </h2>

          </div>

          <p className="
            text-foreground/70
            leading-relaxed
            max-w-4xl
          ">
            These projects demonstrate experience in developing functional
            web and application solutions by combining frontend development,
            backend programming, database management, and modern development
            practices to create reliable and user-focused digital products.
          </p>

        </section>

      </div>

    </main>
  )
}