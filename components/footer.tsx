"use client"

import {
  ArrowUp,
  Code2,
  User,
  BriefcaseBusiness,
  Wrench,
  Mail,
  FileText,
  ExternalLink,
  Heart,
} from "lucide-react"

/* =========================
   GITHUB ICON
========================= */
function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.16-.01-2.11-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.52-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.73 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.69.41.36.78 1.08.78 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

/* =========================
   LINKEDIN ICON
========================= */
function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29zM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM3.54 8.99H7.1v11.46H3.54V8.99zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  )
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const currentYear = new Date().getFullYear()

  const navigationLinks = [
    {
      label: "Work",
      href: "#work",
      icon: BriefcaseBusiness,
    },
    {
      label: "About",
      href: "#about",
      icon: User,
    },
    {
      label: "Skills",
      href: "#skills",
      icon: Wrench,
    },
    {
      label: "Contact",
      href: "#contact",
      icon: Mail,
    },
  ]

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/phoemelakyle",
      icon: GitHubIcon,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/phoemela-kyle-sebastian-358a00349/",
      icon: LinkedInIcon,
    },
    {
      label: "Email",
      href: "mailto:phoemelakylesebastian@gmail.com",
      icon: Mail,
    },
  ]

  return (
    <footer className="bg-foreground text-background px-6 pt-16 pb-8">
      <div className="max-w-6xl mx-auto">

        {/* =========================
            MAIN FOOTER
        ========================== */}
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr] gap-12 pb-12">

          {/* BRAND */}
          <div className="space-y-6">

            <a
              href="#"
              className="inline-flex items-center gap-3 group"
            >
              <div
                className="
                  w-11 h-11
                  rounded-xl
                  border border-background/20
                  bg-background/10
                  flex items-center justify-center
                  group-hover:bg-background
                  group-hover:text-foreground
                  transition-all duration-300
                "
              >
                <Code2 className="w-5 h-5" />
              </div>

              <div>
                <p className="text-lg font-bold">
                  Phoemela Kyle
                </p>

                <p className="text-xs opacity-60">
                  Computer Science
                </p>
              </div>
            </a>

            <p className="max-w-sm text-sm leading-relaxed opacity-60">
              Computer Science graduate focused on software development,
              machine learning, UI/UX design, and building meaningful
              digital experiences.
            </p>

            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-3">

              {socialLinks.map((social) => {
                const Icon = social.icon

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.label === "Email"
                        ? undefined
                        : "_blank"
                    }
                    rel={
                      social.label === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={social.label}
                    title={social.label}
                    className="
                      group
                      w-10 h-10
                      rounded-xl
                      border border-background/20
                      bg-background/5
                      flex items-center justify-center
                      opacity-70
                      hover:opacity-100
                      hover:bg-background
                      hover:text-foreground
                      hover:-translate-y-1
                      transition-all duration-300
                    "
                  >
                    <Icon
                      className="
                        w-4 h-4
                        transition-transform duration-300
                        group-hover:scale-110
                      "
                    />
                  </a>
                )
              })}

            </div>
          </div>


          {/* NAVIGATION */}
          <div>

            <div className="flex items-center gap-2 mb-5">

              <div
                className="
                  w-8 h-8 rounded-lg
                  bg-background/10
                  flex items-center justify-center
                "
              >
                <BriefcaseBusiness className="w-4 h-4" />
              </div>

              <h4 className="text-sm font-semibold uppercase tracking-widest">
                Navigation
              </h4>

            </div>

            <ul className="space-y-2">

              {navigationLinks.map((link) => {
                const Icon = link.icon

                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="
                        group
                        flex items-center gap-3
                        w-fit
                        py-1.5
                        text-sm
                        opacity-60
                        hover:opacity-100
                        transition-all duration-300
                      "
                    >
                      <Icon
                        className="
                          w-4 h-4
                          transition-transform duration-300
                          group-hover:translate-x-1
                        "
                      />

                      <span>{link.label}</span>
                    </a>
                  </li>
                )
              })}

            </ul>
          </div>


          {/* RESOURCES */}
          <div>

            <div className="flex items-center gap-2 mb-5">

              <div
                className="
                  w-8 h-8 rounded-lg
                  bg-background/10
                  flex items-center justify-center
                "
              >
                <FileText className="w-4 h-4" />
              </div>

              <h4 className="text-sm font-semibold uppercase tracking-widest">
                Resources
              </h4>

            </div>

            <ul className="space-y-2">

              <li>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex items-center gap-3
                    w-fit
                    py-1.5
                    text-sm
                    opacity-60
                    hover:opacity-100
                    transition-all duration-300
                  "
                >
                  <FileText
                    className="
                      w-4 h-4
                      transition-transform duration-300
                      group-hover:translate-x-1
                    "
                  />

                  <span>Download Resume</span>

                  <ExternalLink
                    className="
                      w-3.5 h-3.5
                      opacity-0
                      -translate-x-1
                      group-hover:opacity-100
                      group-hover:translate-x-0
                      transition-all duration-300
                    "
                  />
                </a>
              </li>

              <li>
                <a
                  href="#work"
                  className="
                    group
                    flex items-center gap-3
                    w-fit
                    py-1.5
                    text-sm
                    opacity-60
                    hover:opacity-100
                    transition-all duration-300
                  "
                >
                  <BriefcaseBusiness
                    className="
                      w-4 h-4
                      transition-transform duration-300
                      group-hover:translate-x-1
                    "
                  />

                  <span>Projects</span>
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="
                    group
                    flex items-center gap-3
                    w-fit
                    py-1.5
                    text-sm
                    opacity-60
                    hover:opacity-100
                    transition-all duration-300
                  "
                >
                  <Mail
                    className="
                      w-4 h-4
                      transition-transform duration-300
                      group-hover:translate-x-1
                    "
                  />

                  <span>Get In Touch</span>
                </a>
              </li>

            </ul>
          </div>

        </div>


        {/* =========================
            THANK YOU / BACK TO TOP
        ========================== */}
        <div
          className="
            flex flex-col sm:flex-row
            items-center justify-between
            gap-6
            py-6 px-6
            mb-8
            rounded-2xl
            border border-background/10
            bg-background/5
          "
        >

          <div className="flex items-center gap-3 text-center sm:text-left">

            <div
              className="
                w-10 h-10
                rounded-xl
                bg-background/10
                flex items-center justify-center
                flex-shrink-0
              "
            >
              <Heart className="w-4 h-4" />
            </div>

            <div>
              <p className="text-sm font-medium">
                Thanks for visiting
              </p>

              <p className="text-xs opacity-50 mt-1">
                Let&apos;s build something meaningful together.
              </p>
            </div>

          </div>


          <button
            onClick={scrollToTop}
            className="
              group
              flex items-center gap-2
              px-5 py-2.5
              rounded-xl
              bg-background
              text-foreground
              text-sm font-semibold
              hover:bg-background/90
              hover:-translate-y-1
              shadow-lg
              transition-all duration-300
            "
            aria-label="Back to top"
          >
            <span>Back to top</span>

            <ArrowUp
              className="
                w-4 h-4
                transition-transform duration-300
                group-hover:-translate-y-1
              "
            />
          </button>

        </div>


        {/* =========================
            BOTTOM
        ========================== */}
        <div className="border-t border-background/10 pt-7">

          <div
            className="
              flex flex-col md:flex-row
              justify-between
              items-center
              gap-4
              text-xs
              opacity-50
            "
          >

            <p>
              © {currentYear} Phoemela Kyle Sebastian.
              All rights reserved.
            </p>

            <div className="flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5" />

              <span>
                Designed & Built with care
              </span>
            </div>

            <p>
              React · Next.js · Tailwind CSS
            </p>

          </div>

        </div>

      </div>
    </footer>
  )
}