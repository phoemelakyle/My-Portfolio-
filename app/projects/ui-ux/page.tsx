"use client"

import { useEffect, useState } from "react"
import {
  Search,
  PenTool,
  Layers,
  CheckCircle,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

export default function UIUXPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // =========================
  // AUTO SLIDE EVERY 4 SECONDS
  // =========================
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((current) => {
        if (current === 6) {
          return 0
        }

        return current + 1
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // =========================
  // PREVIOUS SLIDE
  // =========================
  const previousSlide = () => {
    setCurrentSlide((current) => {
      if (current === 0) {
        return 6
      }

      return current - 1
    })
  }

  // =========================
  // NEXT SLIDE
  // =========================
  const nextSlide = () => {
    setCurrentSlide((current) => {
      if (current === 6) {
        return 0
      }

      return current + 1
    })
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
          cursor-pointer
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

          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            UI/UX Design
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Creating Intuitive
            <span className="block text-accent">
              Digital Experiences
            </span>
          </h1>

          <p className="text-lg text-foreground/70 max-w-3xl leading-relaxed">
            A user-centered design project focused on creating clean,
            accessible, and visually consistent interfaces through research,
            wireframing, prototyping, and usability improvements.
          </p>

          {/* Tools */}
          <div className="flex flex-wrap gap-3 pt-4">

            <span
              className="
                px-4 py-2
                border border-border
                rounded-full
                text-sm
                text-muted-foreground
                hover:border-accent
                hover:text-accent
                transition-all
                duration-300
                cursor-pointer
              "
            >
              Figma
            </span>

            <span
              className="
                px-4 py-2
                border border-border
                rounded-full
                text-sm
                text-muted-foreground
                hover:border-accent
                hover:text-accent
                transition-all
                duration-300
                cursor-pointer
              "
            >
              Wireframing
            </span>

            <span
              className="
                px-4 py-2
                border border-border
                rounded-full
                text-sm
                text-muted-foreground
                hover:border-accent
                hover:text-accent
                transition-all
                duration-300
                cursor-pointer
              "
            >
              Prototyping
            </span>

            <span
              className="
                px-4 py-2
                border border-border
                rounded-full
                text-sm
                text-muted-foreground
                hover:border-accent
                hover:text-accent
                transition-all
                duration-300
                cursor-pointer
              "
            >
              Design System
            </span>

            <span
              className="
                px-4 py-2
                border border-border
                rounded-full
                text-sm
                text-muted-foreground
                hover:border-accent
                hover:text-accent
                transition-all
                duration-300
                cursor-pointer
              "
            >
              User Research
            </span>

          </div>

        </section>


        {/* =========================
            HORIZONTAL IMAGE SLIDESHOW
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

              {/* =========================
                  IMAGE 1
              ========================== */}
              <div className="min-w-full w-full h-full flex-shrink-0">

                <a
                  href="https://www.figma.com/"
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

                  <img
                    src="/uiux1.png"
                    alt="UI/UX Project Preview 1"
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

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-black/0
                      group-hover:bg-black/50
                      transition-all
                      duration-500
                    "
                  >

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
                      <ExternalLink className="w-4 h-4" />
                      View on Figma
                    </div>

                  </div>

                </a>

              </div>


              {/* =========================
                  IMAGE 2
              ========================== */}
              <div className="min-w-full w-full h-full flex-shrink-0">

                <a
                  href="https://www.figma.com/"
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

                  <img
                    src="/uiux2.png"
                    alt="UI/UX Project Preview 2"
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

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-black/0
                      group-hover:bg-black/50
                      transition-all
                      duration-500
                    "
                  >

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
                      <ExternalLink className="w-4 h-4" />
                      View on Figma
                    </div>

                  </div>

                </a>

              </div>


              {/* =========================
                  IMAGE 3
              ========================== */}
              <div className="min-w-full w-full h-full flex-shrink-0">

                <a
                  href="https://www.figma.com/proto/rQvfIAHfzpgk2QR5HB9I1x/Sebastian_PhoemelaKyle--Copy-?node-id=1-296&t=yMKRznsq93yZLZmQ-1"
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

                  <img
                    src="/uiux3.png"
                    alt="UI/UX Project Preview 3"
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

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-black/0
                      group-hover:bg-black/50
                      transition-all
                      duration-500
                    "
                  >

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
                      <ExternalLink className="w-4 h-4" />
                      View on Figma
                    </div>

                  </div>

                </a>

              </div>


              {/* =========================
                  IMAGE 4
              ========================== */}
              <div className="min-w-full w-full h-full flex-shrink-0">

                <a
                  href="https://www.figma.com/proto/yLGxOiPJfBlhpKR4aZjccT/WATTWISE?node-id=1-296&t=9E3roVDpdS4BARrD-1"
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

                  <img
                    src="/uiux4.png"
                    alt="UI/UX Project Preview 4"
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

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-black/0
                      group-hover:bg-black/50
                      transition-all
                      duration-500
                    "
                  >

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
                      <ExternalLink className="w-4 h-4" />
                      View on Figma
                    </div>

                  </div>

                </a>

              </div>


              {/* =========================
                  IMAGE 5
              ========================== */}
              <div className="min-w-full w-full h-full flex-shrink-0">

                <a
                  href="https://www.figma.com/proto/dQ0Og0ZQv0V5l6EHVmfVDW/CodeCrypt?node-id=0-1&t=SMazwzgJrvRGGqiZ-1"
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

                  <img
                    src="/uiux5.png"
                    alt="UI/UX Project Preview 5"
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

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-black/0
                      group-hover:bg-black/50
                      transition-all
                      duration-500
                    "
                  >

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
                      <ExternalLink className="w-4 h-4" />
                      View on Figma
                    </div>

                  </div>

                </a>

              </div>


              {/* =========================
                  IMAGE 6
              ========================== */}
              <div className="min-w-full w-full h-full flex-shrink-0">

                <a
                  href="https://www.figma.com/proto/FDGdaXXrvO9gSOAdD5pzcE/Extension-User-Manual--Copy-?node-id=0-1&t=YaZqstxQ56msqsGp-1"
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

                  <img
                    src="/uiux6.png"
                    alt="UI/UX Project Preview 6"
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

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-black/0
                      group-hover:bg-black/50
                      transition-all
                      duration-500
                    "
                  >

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
                      <ExternalLink className="w-4 h-4" />
                      View on Figma
                    </div>

                  </div>

                </a>

              </div>


              {/* =========================
                  IMAGE 7
              ========================== */}
              <div className="min-w-full w-full h-full flex-shrink-0">

                <a
                  href="https://www.figma.com/proto/0IKxWxE6UaSxmXpUnMfJ9d/AGRIMART?node-id=460-39913&t=AcsaX9xYh00SlTJF-1"
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

                  <img
                    src="/uiux7.png"
                    alt="UI/UX Project Preview 7"
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

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-black/0
                      group-hover:bg-black/50
                      transition-all
                      duration-500
                    "
                  >

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
                      <ExternalLink className="w-4 h-4" />
                      View on Figma
                    </div>

                  </div>

                </a>

              </div>

            </div>


            {/* =========================
                LEFT ARROW
            ========================== */}
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous image"
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
                cursor-pointer
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
              aria-label="Next image"
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
                cursor-pointer
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

              {/* Indicator 1 */}
              <button
                type="button"
                onClick={() => setCurrentSlide(0)}
                aria-label="Go to image 1"
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-300
                  cursor-pointer
                  ${
                    currentSlide === 0
                      ? "w-8 bg-white"
                      : "w-2 bg-white/40 hover:bg-white/70"
                  }
                `}
              />

              {/* Indicator 2 */}
              <button
                type="button"
                onClick={() => setCurrentSlide(1)}
                aria-label="Go to image 2"
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-300
                  cursor-pointer
                  ${
                    currentSlide === 1
                      ? "w-8 bg-white"
                      : "w-2 bg-white/40 hover:bg-white/70"
                  }
                `}
              />

              {/* Indicator 3 */}
              <button
                type="button"
                onClick={() => setCurrentSlide(2)}
                aria-label="Go to image 3"
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-300
                  cursor-pointer
                  ${
                    currentSlide === 2
                      ? "w-8 bg-white"
                      : "w-2 bg-white/40 hover:bg-white/70"
                  }
                `}
              />

              {/* Indicator 4 */}
              <button
                type="button"
                onClick={() => setCurrentSlide(3)}
                aria-label="Go to image 4"
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-300
                  cursor-pointer
                  ${
                    currentSlide === 3
                      ? "w-8 bg-white"
                      : "w-2 bg-white/40 hover:bg-white/70"
                  }
                `}
              />

              {/* Indicator 5 */}
              <button
                type="button"
                onClick={() => setCurrentSlide(4)}
                aria-label="Go to image 5"
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-300
                  cursor-pointer
                  ${
                    currentSlide === 4
                      ? "w-8 bg-white"
                      : "w-2 bg-white/40 hover:bg-white/70"
                  }
                `}
              />

              {/* Indicator 6 */}
              <button
                type="button"
                onClick={() => setCurrentSlide(5)}
                aria-label="Go to image 6"
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-300
                  cursor-pointer
                  ${
                    currentSlide === 5
                      ? "w-8 bg-white"
                      : "w-2 bg-white/40 hover:bg-white/70"
                  }
                `}
              />

              {/* Indicator 7 */}
              <button
                type="button"
                onClick={() => setCurrentSlide(6)}
                aria-label="Go to image 7"
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-300
                  cursor-pointer
                  ${
                    currentSlide === 6
                      ? "w-8 bg-white"
                      : "w-2 bg-white/40 hover:bg-white/70"
                  }
                `}
              />

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
              {currentSlide + 1} / 7
            </div>

          </div>

        </section>


        {/* =========================
            PROJECT OVERVIEW
        ========================== */}
        <section className="grid md:grid-cols-3 gap-6">

          <div
            className="
              p-6
              rounded-xl
              border
              border-border
              bg-card
              hover:-translate-y-1
              hover:border-accent/50
              hover:shadow-lg
              transition-all
              duration-300
            "
          >

            <Search
              className="
                w-8
                h-8
                text-accent
                mb-4
              "
            />

            <h3 className="font-semibold text-lg mb-2">
              Research
            </h3>

            <p className="text-sm text-foreground/60">
              Understanding user needs, identifying problems, and defining
              design requirements.
            </p>

          </div>


          <div
            className="
              p-6
              rounded-xl
              border
              border-border
              bg-card
              hover:-translate-y-1
              hover:border-accent/50
              hover:shadow-lg
              transition-all
              duration-300
            "
          >

            <PenTool
              className="
                w-8
                h-8
                text-accent
                mb-4
              "
            />

            <h3 className="font-semibold text-lg mb-2">
              Design Process
            </h3>

            <p className="text-sm text-foreground/60">
              Creating wireframes, prototypes, and interface layouts focused
              on usability and user experience.
            </p>

          </div>


          <div
            className="
              p-6
              rounded-xl
              border
              border-border
              bg-card
              hover:-translate-y-1
              hover:border-accent/50
              hover:shadow-lg
              transition-all
              duration-300
            "
          >

            <Layers
              className="
                w-8
                h-8
                text-accent
                mb-4
              "
            />

            <h3 className="font-semibold text-lg mb-2">
              Design System
            </h3>

            <p className="text-sm text-foreground/60">
              Building reusable components and consistent visual guidelines.
            </p>

          </div>

        </section>


        {/* =========================
            DESIGN HIGHLIGHTS
        ========================== */}
        <section className="space-y-6">

          <h2 className="text-3xl font-bold">
            Design Highlights
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div
              className="
                flex
                items-center
                gap-3
                p-4
                rounded-lg
                border
                border-border
                bg-card
                hover:border-accent/50
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <CheckCircle className="w-5 h-5 text-accent" />

              <span className="text-sm">
                Clean and minimal interface design
              </span>
            </div>


            <div
              className="
                flex
                items-center
                gap-3
                p-4
                rounded-lg
                border
                border-border
                bg-card
                hover:border-accent/50
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <CheckCircle className="w-5 h-5 text-accent" />

              <span className="text-sm">
                User-focused navigation flow
              </span>
            </div>


            <div
              className="
                flex
                items-center
                gap-3
                p-4
                rounded-lg
                border
                border-border
                bg-card
                hover:border-accent/50
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <CheckCircle className="w-5 h-5 text-accent" />

              <span className="text-sm">
                Consistent typography and spacing
              </span>
            </div>


            <div
              className="
                flex
                items-center
                gap-3
                p-4
                rounded-lg
                border
                border-border
                bg-card
                hover:border-accent/50
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <CheckCircle className="w-5 h-5 text-accent" />

              <span className="text-sm">
                Responsive and accessible layouts
              </span>
            </div>

          </div>

        </section>


        {/* =========================
            PROJECT OUTCOME
        ========================== */}
        <section
          className="
            p-8
            rounded-2xl
            bg-muted/30
            border
            border-border
            hover:border-accent/30
            transition-all
            duration-300
          "
        >

          <h2 className="text-3xl font-bold mb-4">
            Project Outcome
          </h2>

          <p className="text-foreground/70 leading-relaxed">
            The final design delivers a visually consistent and user-friendly
            experience by combining research-based decisions, thoughtful
            layouts, and modern design principles.
          </p>

        </section>

      </div>

    </main>
  )
}