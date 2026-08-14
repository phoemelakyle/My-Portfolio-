"use client"

import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiLaravel,
  SiC,
  SiCplusplus,
  SiSharp,
  SiPython,
  SiOpenjdk,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiRender,
  SiVercel,
  SiScikitlearn,
  SiPandas,
  SiFigma,
  SiWordpress,
  SiAnthropic,
  SiYolo,
  SiApache,
} from "react-icons/si"

import {
  FaCss3Alt,
  FaDatabase,
  FaExchangeAlt,
  FaCogs,
  FaBrain,
  FaRobot,
  FaComments,
  FaClock,
  FaUsers,
  FaLightbulb,
  FaSearch,
  FaCode,
} from "react-icons/fa"

export default function Skills() {
  const technicalSkills = [
    {
      name: "Web Development",
      skills: [
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "JavaScript", icon: SiJavascript },
        { name: "React", icon: SiReact },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Laravel", icon: SiLaravel },
      ],
    },

    {
      name: "Programming Languages",
      skills: [
        { name: "C", icon: SiC },
        { name: "C++", icon: SiCplusplus },
        { name: "C#", icon: SiSharp },
        { name: "Python", icon: SiPython },
        { name: "Java", icon: SiOpenjdk },
      ],
    },

    {
      name: "Databases",
      skills: [
        { name: "MySQL", icon: SiMysql },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Firebase", icon: SiFirebase },
      ],
    },

    {
      name: "Data Engineering",
      skills: [
        { name: "SQL", icon: FaDatabase },
        { name: "Data Extraction", icon: FaSearch },
        { name: "Transformation", icon: FaExchangeAlt },
        { name: "Data Manipulation", icon: FaCogs },
        { name: "ETL Processes", icon: SiApache },
        { name: "Data Pipelines", icon: FaCode },
      ],
    },

    {
      name: "Software Development",
      skills: [
        { name: "SDLC", icon: FaCogs },
        { name: "Waterfall", icon: FaExchangeAlt },
        { name: "Agile", icon: FaCode },
      ],
    },

    {
      name: "UI/UX & CMS",
      skills: [
        { name: "Figma", icon: SiFigma },
        { name: "WordPress", icon: SiWordpress },
      ],
    },

    {
      name: "Version Control",
      skills: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
      ],
    },

    {
      name: "Cloud Deployment",
      skills: [
        { name: "Render", icon: SiRender },
        { name: "Vercel", icon: SiVercel },
      ],
    },

    {
      name: "Machine Learning",
      skills: [
        { name: "YOLO", icon: SiYolo },
        { name: "Scikit-learn", icon: SiScikitlearn },
        { name: "Pandas", icon: SiPandas },
      ],
    },

    {
      name: "AI-Assisted Development",
      skills: [
        { name: "ChatGPT", icon: FaRobot },
        { name: "Claude", icon: SiAnthropic },
        { name: "AI Coding", icon: FaBrain },
      ],
    },
  ]

  const workSkills = [
    {
      name: "Problem-solving",
      icon: FaLightbulb,
    },
    {
      name: "Communication",
      icon: FaComments,
    },
    {
      name: "Time Management",
      icon: FaClock,
    },
    {
      name: "Team Collaboration",
      icon: FaUsers,
    },
    {
      name: "Adaptability",
      icon: FaExchangeAlt,
    },
    {
      name: "Attention to Detail",
      icon: FaSearch,
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-background"
    >
      <div className="max-w-6xl mx-auto">

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>

          <div className="w-12 h-1 bg-accent rounded-full" />
        </div>

        {/* ========================= */}
        {/* TECHNICAL SKILLS */}
        {/* ========================= */}

        <div className="mb-20">

          <h3 className="text-2xl font-bold mb-8">
            Technical Skills
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {technicalSkills.map((category, index) => (
              <div
                key={index}
                className="
                  group
                  rounded-2xl
                  border
                  border-border
                  bg-background
                  p-6
                  shadow-[0_6px_0px_rgba(0,0,0,0.10)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-[0_12px_0px_rgba(0,0,0,0.16)]
                "
              >

                {/* Category Title */}
                <h4 className="text-lg font-bold mb-5">
                  {category.name}
                </h4>

                {/* Skills */}
                <div className="grid grid-cols-2 gap-4">

                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon

                    return (
                      <div
                        key={skillIndex}
                        className="
                          group/skill
                          flex
                          flex-col
                          items-center
                          justify-center
                          gap-3
                          min-h-[110px]
                          rounded-xl
                          border
                          border-border
                          bg-muted/30
                          p-3
                          text-center
                          transition-all
                          duration-300
                          hover:-translate-y-2
                          hover:bg-muted
                        "
                      >

                        {/* ========================= */}
                        {/* 3D TECHNOLOGY ICON */}
                        {/* ========================= */}

                        <div
                          className="
                            relative
                            w-14
                            h-14
                            rounded-2xl
                            bg-background
                            border
                            border-border
                            flex
                            items-center
                            justify-center
                            shadow-[0_5px_0px_rgba(0,0,0,0.15)]
                            transition-all
                            duration-300
                            group-hover/skill:scale-110
                            group-hover/skill:rotate-[-5deg]
                            group-hover/skill:shadow-[0_8px_0px_rgba(0,0,0,0.20)]
                          "
                        >
                          <Icon
                            size={30}
                            className="transition-transform duration-300"
                          />

                          {/* 3D Bottom Layer */}
                          <div
                            className="
                              absolute
                              inset-x-0
                              bottom-[-5px]
                              h-2
                              rounded-b-2xl
                              bg-border
                              -z-10
                            "
                          />
                        </div>

                        {/* Skill Name */}
                        <span
                          className="
                            text-xs
                            font-medium
                            text-foreground/80
                            group-hover/skill:text-foreground
                            transition-colors
                          "
                        >
                          {skill.name}
                        </span>

                      </div>
                    )
                  })}

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* ========================= */}
        {/* WORK SKILLS */}
        {/* ========================= */}

        <div className="pt-16 border-t border-border">

          <h3 className="text-2xl font-bold mb-8">
            Work Skills
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

            {workSkills.map((skill, index) => {
              const Icon = skill.icon

              return (
                <div
                  key={index}
                  className="
                    group
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    gap-4
                    p-5
                    min-h-[155px]
                    rounded-2xl
                    border
                    border-border
                    bg-background
                    shadow-[0_6px_0px_rgba(0,0,0,0.10)]
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-[0_12px_0px_rgba(0,0,0,0.16)]
                  "
                >

                  {/* 3D Work Skill Icon */}
                  <div
                    className="
                      relative
                      w-14
                      h-14
                      rounded-2xl
                      bg-accent
                      text-accent-foreground
                      flex
                      items-center
                      justify-center
                      shadow-[0_5px_0px_rgba(0,0,0,0.20)]
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:rotate-[-6deg]
                      group-hover:shadow-[0_8px_0px_rgba(0,0,0,0.25)]
                    "
                  >
                    <Icon
                      size={27}
                      strokeWidth={1.8}
                    />

                    {/* 3D Bottom Layer */}
                    <div
                      className="
                        absolute
                        inset-0
                        rounded-2xl
                        bg-accent/60
                        translate-y-1
                        -z-10
                      "
                    />
                  </div>

                  {/* Work Skill Name */}
                  <span
                    className="
                      text-sm
                      font-medium
                      text-foreground/80
                      group-hover:text-foreground
                      transition-colors
                    "
                  >
                    {skill.name}
                  </span>

                </div>
              )
            })}

          </div>
        </div>

      </div>
    </section>
  )
}