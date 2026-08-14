"use client"

import {
  Mail,
  Code2,
  User,
  Send,
  MessageSquare,
  Clock3,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react"
import { useState } from "react"

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
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29zM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM3.54 8.99H7.1v11.46H3.54V8.99zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
    </svg>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  /* =========================
     FORM CHANGE
  ========================== */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  /* =========================
     FORM SUBMIT
  ========================== */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log("Form submitted:", formData)

    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)

      setFormData({
        name: "",
        email: "",
        message: "",
      })
    }, 3000)
  }

  /* =========================
     SOCIAL LINKS
  ========================== */
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      description: "Send me an email",
      href: "mailto:phoemelakylesebastian@gmail.com",
      color: "group-hover:text-red-500",
      iconBg: "group-hover:bg-red-500/10",
    },
    {
      icon: LinkedInIcon,
      label: "LinkedIn",
      description: "Connect with me",
      href: "https://www.linkedin.com/in/phoemela-kyle-sebastian-358a00349/",
      color: "group-hover:text-blue-500",
      iconBg: "group-hover:bg-blue-500/10",
    },
    {
      icon: Code2,
      label: "GitHub",
      description: "View my projects",
      href: "https://github.com/phoemelakyle",
      color: "group-hover:text-foreground",
      iconBg: "group-hover:bg-foreground/10",
    },
  ]

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-muted/5"
    >
      <div className="max-w-5xl mx-auto">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="mb-16 text-center">

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              mb-5
              rounded-full
              border
              border-border
              bg-card
              text-sm
              text-muted-foreground
            "
          >
            <MessageSquare className="w-4 h-4 text-accent" />
            Get In Touch
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Let&apos;s Work Together
          </h2>

          <div className="w-12 h-1 bg-accent rounded-full mx-auto mb-6" />

          <p
            className="
              text-lg
              text-foreground/60
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            Have a project, opportunity, or idea in mind? I&apos;d love to
            hear from you and explore how we can work together.
          </p>

        </div>


        {/* =========================
            MAIN CONTACT GRID
        ========================== */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8">

          {/* =========================
              CONTACT FORM
          ========================== */}
          <div
            className="
              p-8
              md:p-10
              rounded-2xl
              border
              border-border
              bg-card
              shadow-sm
              hover:shadow-lg
              transition-all
              duration-300
            "
          >

            {/* Form Header */}
            <div className="flex items-center gap-4 mb-8">

              <div
                className="
                  w-12
                  h-12
                  rounded-xl
                  bg-accent/10
                  flex
                  items-center
                  justify-center
                "
              >
                <Send className="w-5 h-5 text-accent" />
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Send Me a Message
                </h3>

                <p className="text-sm text-muted-foreground mt-1">
                  I&apos;ll get back to you as soon as possible.
                </p>
              </div>

            </div>


            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* =========================
                  NAME
              ========================== */}
              <div>

                <label
                  htmlFor="name"
                  className="
                    block
                    text-sm
                    font-medium
                    text-foreground
                    mb-2
                  "
                >
                  Your Name
                </label>

                <div className="relative">

                  <User
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      w-5
                      h-5
                      text-muted-foreground
                      pointer-events-none
                    "
                  />

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="
                      w-full
                      pl-12
                      pr-4
                      py-3.5
                      bg-background
                      border
                      border-border
                      rounded-xl
                      text-foreground
                      placeholder:text-foreground/30
                      focus:outline-none
                      focus:border-accent
                      focus:ring-4
                      focus:ring-accent/10
                      transition-all
                    "
                    placeholder="Your name"
                  />

                </div>

              </div>


              {/* =========================
                  EMAIL
              ========================== */}
              <div>

                <label
                  htmlFor="email"
                  className="
                    block
                    text-sm
                    font-medium
                    text-foreground
                    mb-2
                  "
                >
                  Email Address
                </label>

                <div className="relative">

                  <Mail
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      w-5
                      h-5
                      text-muted-foreground
                      pointer-events-none
                    "
                  />

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className="
                      w-full
                      pl-12
                      pr-4
                      py-3.5
                      bg-background
                      border
                      border-border
                      rounded-xl
                      text-foreground
                      placeholder:text-foreground/30
                      focus:outline-none
                      focus:border-accent
                      focus:ring-4
                      focus:ring-accent/10
                      transition-all
                    "
                    placeholder="you@example.com"
                  />

                </div>

              </div>


              {/* =========================
                  MESSAGE
              ========================== */}
              <div>

                <label
                  htmlFor="message"
                  className="
                    block
                    text-sm
                    font-medium
                    text-foreground
                    mb-2
                  "
                >
                  Message
                </label>

                <div className="relative">

                  <MessageSquare
                    className="
                      absolute
                      left-4
                      top-4
                      w-5
                      h-5
                      text-muted-foreground
                      pointer-events-none
                    "
                  />

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="
                      w-full
                      pl-12
                      pr-4
                      py-3.5
                      bg-background
                      border
                      border-border
                      rounded-xl
                      text-foreground
                      placeholder:text-foreground/30
                      focus:outline-none
                      focus:border-accent
                      focus:ring-4
                      focus:ring-accent/10
                      transition-all
                      resize-none
                    "
                    placeholder="Tell me about your project or opportunity..."
                  />

                </div>

              </div>


              {/* =========================
                  SUBMIT BUTTON
              ========================== */}
              <button
                type="submit"
                className="
                  group
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-2
                  px-6
                  py-3.5
                  bg-foreground
                  text-background
                  font-semibold
                  rounded-xl
                  hover:bg-accent
                  hover:text-white
                  hover:-translate-y-0.5
                  shadow-sm
                  hover:shadow-lg
                  transition-all
                  duration-300
                "
              >

                {submitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send
                      className="
                        w-5
                        h-5
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />

                    Send Message
                  </>
                )}

              </button>

            </form>

          </div>


          {/* =========================
              RIGHT COLUMN
          ========================== */}
          <div className="space-y-5">

            {/* =========================
                CONTACT INFORMATION
            ========================== */}
            <div
              className="
                p-7
                rounded-2xl
                border
                border-border
                bg-card
                hover:shadow-lg
                transition-all
                duration-300
              "
            >

              <div className="flex items-center gap-4 mb-6">

                <div
                  className="
                    w-11
                    h-11
                    rounded-xl
                    bg-accent/10
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Mail className="w-5 h-5 text-accent" />
                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    Contact Information
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Let&apos;s start a conversation.
                  </p>

                </div>

              </div>


              <a
                href="mailto:phoemelakylesebastian@gmail.com"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  gap-4
                  p-4
                  rounded-xl
                  border
                  border-border
                  bg-background
                  hover:border-accent/50
                  hover:bg-accent/5
                  transition-all
                  duration-300
                "
              >

                <div className="flex items-center gap-3 min-w-0">

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
                    "
                  >
                    <Mail className="w-4 h-4 text-accent" />
                  </div>

                  <div className="min-w-0">

                    <p className="text-xs text-muted-foreground mb-1">
                      Email
                    </p>

                    <p className="text-sm font-medium truncate">
                      phoemelakylesebastian@gmail.com
                    </p>

                  </div>

                </div>

                <ArrowUpRight
                  className="
                    w-4
                    h-4
                    text-muted-foreground
                    flex-shrink-0
                    transition-all
                    duration-300
                    group-hover:text-accent
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />

              </a>

            </div>


            {/* =========================
                SOCIAL LINKS
            ========================== */}
            <div
              className="
                p-7
                rounded-2xl
                border
                border-border
                bg-card
                hover:shadow-lg
                transition-all
                duration-300
              "
            >

              <div className="flex items-center gap-3 mb-5">

                <div
                  className="
                    w-10
                    h-10
                    rounded-xl
                    bg-accent/10
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Code2 className="w-5 h-5 text-accent" />
                </div>

                <div>

                  <h3 className="font-bold">
                    Connect With Me
                  </h3>

                  <p className="text-xs text-muted-foreground mt-1">
                    Find me online
                  </p>

                </div>

              </div>


              <div className="space-y-3">

                {socialLinks.map((link) => {
                  const Icon = link.icon

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        group
                        flex
                        items-center
                        justify-between
                        p-3.5
                        rounded-xl
                        border
                        border-border
                        bg-background
                        hover:border-accent/30
                        hover:-translate-y-0.5
                        transition-all
                        duration-300
                        ${link.color}
                      `}
                    >

                      <div className="flex items-center gap-3">

                        <div
                          className={`
                            w-10
                            h-10
                            rounded-lg
                            bg-muted/50
                            flex
                            items-center
                            justify-center
                            transition-all
                            duration-300
                            ${link.iconBg}
                          `}
                        >
                          <Icon className="w-5 h-5" />
                        </div>

                        <div>

                          <p className="text-sm font-semibold text-foreground">
                            {link.label}
                          </p>

                          <p className="text-xs text-muted-foreground">
                            {link.description}
                          </p>

                        </div>

                      </div>

                      <ArrowUpRight
                        className="
                          w-4
                          h-4
                          text-muted-foreground
                          transition-all
                          duration-300
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                        "
                      />

                    </a>
                  )
                })}

              </div>

            </div>


            {/* =========================
                RESPONSE TIME
            ========================== */}
            <div
              className="
                group
                relative
                overflow-hidden
                p-7
                rounded-2xl
                bg-accent/5
                border
                border-accent/20
                hover:border-accent/40
                hover:shadow-lg
                transition-all
                duration-300
              "
            >

              {/* Decorative Circle */}
              <div
                className="
                  absolute
                  -right-8
                  -top-8
                  w-28
                  h-28
                  rounded-full
                  bg-accent/10
                  group-hover:scale-125
                  transition-transform
                  duration-500
                "
              />

              <div className="relative flex items-start gap-4">

                <div
                  className="
                    w-11
                    h-11
                    rounded-xl
                    bg-accent
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                  "
                >
                  <Clock3 className="w-5 h-5 text-white" />
                </div>

                <div>

                  <p
                    className="
                      text-xs
                      font-semibold
                      text-accent
                      uppercase
                      tracking-widest
                      mb-2
                    "
                  >
                    Response Time
                  </p>

                  <p className="text-sm text-foreground/70 leading-relaxed">
                    I typically respond to inquiries within 24 hours.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}