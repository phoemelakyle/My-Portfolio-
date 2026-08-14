"use client"

import {
  Brain,
  Eye,
  Activity,
  CheckCircle,
  ArrowLeft,
  Cpu,
  ScanFace,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

export default function MachineLearningPage() {
  const THESIS_LINK = "https://github.com/phoemelakyle"

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

          <p
            className="
              text-sm
              uppercase
              tracking-widest
              text-muted-foreground
            "
          >
            Machine Learning & Computer Vision
          </p>

          <h1
            className="
              text-5xl
              md:text-6xl
              font-bold
              leading-tight
            "
          >
            Enhanced YOLOv12 for
            <span className="block text-accent">
              Multi-Class Face Accessories Detection
            </span>
          </h1>

          <p
            className="
              text-lg
              text-foreground/70
              max-w-3xl
              leading-relaxed
            "
          >
            A machine learning research project focused on enhancing YOLOv12
            for multi-class detection of face accessories and visual
            occlusions. The study integrates Squeeze-and-Excitation blocks,
            class-weighted loss, and Bayesian reasoning to improve detection
            performance under partially occluded facial conditions.
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-3 pt-4">

            {[
              "YOLOv12",
              "Python",
              "OpenCV",
              "Scikit-learn",
              "Deep SORT",
              "Squeeze-and-Excitation",
              "Deep Learning",
              "Computer Vision",
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
            THESIS IMAGE
        ========================== */}
        <section>

          <div
            className="
              group
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

            {/* Thesis Image */}
            <img
              src="/thesis.png"
              alt="Enhanced YOLOv12 for Multi-Class Face Accessories Detection thesis"
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
                HOVER OVERLAY + LINK
            ========================== */}
            <a
              href= "https://github.com/coochill/SCB-YOLO"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View thesis project"
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

                {/* External Link Icon */}
                <div
                  className="
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
                  "
                >
                  <ExternalLink className="w-6 h-6" />
                </div>

                {/* View Thesis Button */}
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
                  View Thesis
                </div>

              </div>

            </a>

            {/* =========================
                PROJECT LABEL
            ========================== */}
            <div
              className="
                absolute
                left-5
                top-5
                px-4
                py-2
                rounded-full
                bg-black/50
                backdrop-blur-md
                border
                border-white/10
                text-white
                text-xs
              "
            >
              Computer Vision Research
            </div>

          </div>

        </section>


        {/* =========================
            RESEARCH AREAS
        ========================== */}
        <section className="grid md:grid-cols-3 gap-6">

          {/* YOLOv12 */}
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

            <div
              className="
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
              "
            >
              <ScanFace
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
              YOLOv12 Detection
            </h3>

            <p className="text-sm text-foreground/60 leading-relaxed">
              Enhanced YOLOv12 for detecting multiple classes of facial
              accessories and visual occlusions including masks, helmets,
              caps, and other occluded conditions.
            </p>

          </div>


          {/* Squeeze-and-Excitation */}
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

            <div
              className="
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
              "
            >
              <Cpu
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
              Squeeze-and-Excitation
            </h3>

            <p className="text-sm text-foreground/60 leading-relaxed">
              Integrating Squeeze-and-Excitation blocks to improve channel-wise
              feature representation and help the model focus on important
              visual features.
            </p>

          </div>


          {/* Bayesian Reasoning */}
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

            <div
              className="
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
              "
            >
              <Activity
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
              Bayesian Reasoning
            </h3>

            <p className="text-sm text-foreground/60 leading-relaxed">
              Applying contextual Bayesian reasoning to improve predictions
              when facial features are partially hidden by accessories or
              visual occlusions.
            </p>

          </div>

        </section>


        {/* =========================
            THESIS HIGHLIGHTS
        ========================== */}
        <section className="space-y-6">

          <h2 className="text-3xl font-bold">
            Thesis Highlights
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            {[
              {
                icon: Brain,
                text: "Enhanced YOLOv12 architecture for multi-class detection",
              },
              {
                icon: Cpu,
                text: "Squeeze-and-Excitation block integration",
              },
              {
                icon: Eye,
                text: "OpenCV-based image and video processing",
              },
              {
                icon: Activity,
                text: "Deep SORT for multi-object tracking",
              },
              {
                icon: ScanFace,
                text: "Multi-class face accessory and occlusion detection",
              },
              {
                icon: CheckCircle,
                text: "Model evaluation and performance benchmarking",
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

                  <div
                    className="
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
                    "
                  >
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
            RESEARCH OUTCOME
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

            <div
              className="
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
              "
            >
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
              Research Outcome
            </h2>

          </div>

          <p
            className="
              text-foreground/70
              leading-relaxed
              max-w-4xl
            "
          >
            This thesis demonstrates the application of deep learning and
            computer vision techniques to improve multi-class face accessory
            detection under occluded conditions. By enhancing YOLOv12 with
            Squeeze-and-Excitation blocks and incorporating contextual
            reasoning, the research explores a more robust approach to
            detecting facial accessories in real-world visual data.
          </p>

        </section>

      </div>

    </main>
  )
}