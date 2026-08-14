import {
  GraduationCap,
  BriefcaseBusiness,
} from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        text-white
      "
    >
      {/* =========================
          MAIN HERO
      ========================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1110px]
          px-6
          pb-16
          pt-28
        "
      >
        {/* =========================
            PROFILE PHOTO
        ========================== */}
        <div className="flex justify-center">
          <div
            className="
              h-[190px]
              w-[190px]
              overflow-hidden
              rounded-full
              bg-[#151c2d]
              shadow-[0_0_70px_rgba(72,100,160,0.16)]
            "
          >
            <img
  src="/profile.jpg"
  alt="Phoemela Kyle Sebastian"
  className="
    h-full
    w-full
    object-cover
  "
/>
          </div>
        </div>

        {/* =========================
            HERO CONTENT
        ========================== */}
        <div
          className="
            mt-8
            grid
            items-start
            gap-10
            lg:grid-cols-[1fr_350px]
            lg:gap-16
          "
        >
          {/* =========================
              LEFT SIDE
          ========================== */}
          <div>
            {/* Name */}
            <h1
              className="
                text-3xl
                font-bold
                uppercase
                tracking-[-0.035em]
                text-white
                sm:text-4xl
                lg:text-[38px]
                xl:text-[42px]
              "
            >
              PHOEMELA KYLE SEBASTIAN
            </h1>

            {/* Professional Title */}
            <p
              className="
                mt-2
                text-sm
                font-medium
                uppercase
                tracking-tight
                text-white/65
                sm:text-base
                lg:text-lg
              "
            >
              BS COMPUTER SCIENCE GRADUATE

              <span className="mx-2 text-white/35">
                |
              </span>

              SOFTWARE DEVELOPMENT

              <span className="mx-2 text-white/35">
                |
              </span>

              DATA & AI
              <span className="mx-2 text-white/35">
                |
              </span>

              UI/UX
            </p>

            {/* Introduction */}
            <p
              className="
                mt-4
                max-w-[690px]
                text-sm
                leading-7
                text-white/90
                sm:text-base
              "
            >
             Turning Ideas Into Digital Solutions Through Code, Data, and Design.
           
             </p>
             Explore my projects, skills, and experience across software development, data, AI, and design.
          </div>

          {/* =========================
              EDUCATION + SOCIALS
          ========================== */}
          <div>
            {/* Education Card */}
            <div
              className="
                rounded-xl
                border
                border-white/[0.10]
                bg-white/[0.035]
                px-5
                py-5
                backdrop-blur-sm
                shadow-[0_15px_40px_rgba(0,0,0,0.12)]
              "
            >
              <div className="flex items-start gap-4">

                {/* Graduation Icon */}
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                  "
                >
                  <GraduationCap
                    className="
                      h-8
                      w-8
                      text-white/70
                    "
                    strokeWidth={1.7}
                  />
                </div>

                {/* Education Details */}
                <div>
                  <p
                    className="
                      text-sm
                      font-bold
                      text-white
                    "
                  >
                    BATANGAS STATE UNIVERSITY
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      leading-5
                      text-white/75
                    "
                  >
                    Bachelor of Science in Computer Science
                  </p>
                </div>
              </div>
            </div>

            {/* =========================
                SOCIAL ICONS
            ========================== */}
            <div className="mt-4 flex justify-start gap-4">

              {/* GitHub */}
              <a
                href="https://github.com/phoemelakyle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-10
                  w-10
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.035]
                  text-white/60
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-blue-500/50
                  hover:bg-blue-500/10
                  hover:text-blue-500
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.167 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.156-1.11-1.464-1.11-1.464-.908-.621.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.636-1.338-2.221-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.6 9.6 0 012.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.841-2.338 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.337-.012 2.415-.012 2.744 0 .269.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/phoemela-kyle-sebastian-358a00349/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-10
                  w-10
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.035]
                  text-white/60
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-blue-500/50
                  hover:bg-blue-500/10
                  hover:text-blue-500
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287zM5.337 7.433a2.062 2.062 0 11.001-4.125 2.062 2.062 0 01-.001 4.125zM7.114 20.452H3.56V8.999h3.554v11.453zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Gmail */}
              <a
                 href="mailto:phoemelakylesebastian@gmail.com"
                aria-label="Email"
                className="
                  flex
                  h-10
                  w-10
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.035]
                  text-white/60
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-blue-500/50
                  hover:bg-blue-500/10
                  hover:text-blue-500
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.236l-8 5.333-8-5.333V6l8 5.333L20 6v2.236z" />
                </svg>
              </a>

            </div>
          </div>
        </div>

        {/* =========================
            CENTERED BUTTONS
        ========================== */}
        <div className="mt-9 flex w-full justify-center gap-4">

          {/* View My Work */}
          <a
            href="#work"
            className="
              cursor-pointer
              rounded-full
              bg-gradient-to-r
              from-blue-700
              to-blue-600
              px-8
              py-3.5
              text-sm
              font-bold
              text-white
              shadow-[0_8px_25px_rgba(30,91,190,0.25)]
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:from-blue-600
              hover:to-blue-500
            "
          >
            VIEW MY WORK
          </a>

          {/* Contact Me */}
          <a
            href="#contact"
            className="
              cursor-pointer
              rounded-full
              border-2
              border-white/90
              px-8
              py-3
              text-sm
              font-bold
              text-white
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-white
              hover:text-[#071022]
            "
          >
            CONTACT ME
          </a>
        </div>

{/* =========================
    OPEN TO WORK
========================== */}
<div className="mt-7">

  {/* Availability */}
  <div
    className="
      flex
      flex-wrap
      items-center
      gap-x-2
      gap-y-1
    "
  >
    <BriefcaseBusiness
      className="
        h-7
        w-7
        text-white/50
      "
      strokeWidth={1.8}
    />

    <span
      className="
        text-lg
        font-bold
        uppercase
        text-white
      "
    >
      OPEN TO WORK
    </span>
  </div>

  {/* Roles / Work Modes */}
  <p
    className="
      mt-2
      pl-9
      text-base
      text-white/50
    "
  >
    <span className="mx-2">
      •
    </span>

    Work Modes:{' '}

    <span className="text-white/75">
      On-site · Hybrid · Remote
    </span>

    <span className="mx-2">
      •
    </span>

    Start Date:{' '}

    <span className="text-white/75">
      Immediately
    </span>
  </p>

</div>
      </div>
    </section>
  )
}