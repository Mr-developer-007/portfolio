
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  
  FaCheck,
  FaCode,
  FaServer,
  FaDatabase,
  FaRocket,
  FaLightbulb,
  FaTerminal,
} from "react-icons/fa6";

import SkillData from "./Skill.json";
import ProjectData from "./Projects.json";
import ProfileInfo from "./Profile.json";
import ContactInfo from "./Contact.json";
import { FaExternalLinkAlt } from "react-icons/fa";


const PRIMARY = "#153497";

const getProfile = () => ProfileInfo?.profile || {};
const getContact = () => ContactInfo?.contact || {};

/* =========================================================
   TERMINAL HELPERS
========================================================= */

const formatPath = (path) => {
  if (!path || path === "/home/vivek") return "~";

  if (path.startsWith("/home/vivek/")) {
    return `~/${path.replace("/home/vivek/", "")}`;
  }

  return path;
};

const normalizeProjectName = (value = "") => {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
};

/* =========================================================
   TERMINAL OUTPUT COMPONENTS
========================================================= */

const OutputLine = ({ children, className = "" }) => {
  return (
    <div className={`leading-6 ${className}`}>
      {children}
    </div>
  );
};

const SectionTitle = ({ children }) => {
  return (
    <div className="mt-3 mb-2">
      <div className="text-[#62a0ff] font-bold text-sm sm:text-base">
        {children}
      </div>

      <div className="text-white/20 text-xs">
        ------------------------------------------------------------
      </div>
    </div>
  );
};

/* =========================================================
   ASCII BANNER
========================================================= */

const LinuxBanner = () => {
  return (
    <div className="mb-5 overflow-x-auto">
      <pre
        className="
          text-[#62a0ff]
          text-[7px]
          xs:text-[8px]
          sm:text-[10px]
          md:text-xs
          leading-tight
          font-mono
          whitespace-pre
        "
      >
{`
██╗   ██╗██╗██╗   ██╗███████╗██╗  ██╗
██║   ██║██║██║   ██║██╔════╝██║ ██╔╝
╚██╗ ██╔╝██║██║   ██║█████╗  █████╔╝
 ╚████╔╝ ██║╚██╗ ██╔╝██╔══╝  ██╔═██╗
  ╚██╔╝  ██║ ╚████╔╝ ███████╗██║  ██╗
   ╚═╝   ╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝
`}
      </pre>

      <div className="mt-3 text-white/80 text-xs sm:text-sm">
        Full Stack Native Developer
      </div>

      <div className="text-white/40 text-[10px] sm:text-xs mt-1">
        Welcome to my interactive Linux portfolio.
      </div>

      <div className="text-white/40 text-[10px] sm:text-xs">
        Type <span className="text-[#62a0ff]">help</span> to get started.
      </div>
    </div>
  );
};

/* =========================================================
   PROFILE OUTPUT
========================================================= */

const ProfileOutput = () => {
  const profile = getProfile();

  return (
    <div className="text-xs sm:text-sm">
      <SectionTitle>PROFILE</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4">
        <div>
          <div className="border border-white/20 p-1 w-[100px] h-[100px]">
            <img
              src={profile?.image || "/profile.jpeg"}
              alt={profile?.name || "Profile"}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-1">
          <OutputLine>
            <span className="text-white/40">name:</span>{" "}
            <span className="text-white">
              {profile?.name || "Vivek Pundir"}
            </span>
          </OutputLine>

          <OutputLine>
            <span className="text-white/40">role:</span>{" "}
            <span className="text-[#62a0ff]">
              {profile?.professionalTitle ||
                "Full Stack Native Developer"}
            </span>
          </OutputLine>

          <OutputLine>
            <span className="text-white/40">email:</span>{" "}
            <span className="text-white">
              {profile?.email || ""}
            </span>
          </OutputLine>

          <OutputLine>
            <span className="text-white/40">phone:</span>{" "}
            <span className="text-white">
              {profile?.phone || ""}
            </span>
          </OutputLine>

          <OutputLine>
            <span className="text-white/40">status:</span>{" "}
            <span className="text-green-400">
              AVAILABLE
            </span>
          </OutputLine>
        </div>
      </div>

      <div className="mt-4 text-white/65 leading-6">
        {profile?.about ||
          profile?.shortAbout ||
          "Full stack developer focused on building scalable and production-ready applications."}
      </div>
    </div>
  );
};

/* =========================================================
   ABOUT OUTPUT
========================================================= */

const AboutOutput = () => {
  const profile = getProfile();

  const stats = [
    {
      value: "3+",
      label: "Years Experience",
    },
    {
      value: "20+",
      label: "Projects",
    },
    {
      value: `${SkillData?.length || 0}+`,
      label: "Skills",
    },
    {
      value: "24/7",
      label: "Learning",
    },
  ];

  return (
    <div className="text-xs sm:text-sm">
      <SectionTitle>ABOUT ME</SectionTitle>

      <div className="text-white/70 leading-6">
        {profile?.about ||
          `
I am a full stack developer focused on building modern,
scalable and production-ready digital applications.

I work across frontend interfaces, backend APIs, databases,
authentication, integrations and production deployment.
          `.trim()}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="
              border
              border-white/15
              bg-white/[0.03]
              p-3
            "
          >
            <div className="text-[#62a0ff] text-lg font-bold">
              {item.value}
            </div>

            <div className="text-[9px] text-white/40 uppercase">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      <SectionTitle>WHAT I DO</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {[
          {
            icon: <FaCode />,
            title: "Frontend",
            text: "Modern responsive interfaces using React, Next.js and Tailwind CSS.",
          },
          {
            icon: <FaServer />,
            title: "Backend",
            text: "REST APIs and server-side applications using Node.js and Express.",
          },
          {
            icon: <FaDatabase />,
            title: "Database",
            text: "MongoDB and SQL database architecture.",
          },
          {
            icon: <FaRocket />,
            title: "Deployment",
            text: "Production deployment, VPS configuration and application maintenance.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="
              border
              border-white/15
              p-3
              bg-white/[0.02]
            "
          >
            <div className="flex gap-2 items-center">
              <span className="text-[#62a0ff]">
                {item.icon}
              </span>

              <span className="text-white font-bold">
                {item.title}
              </span>
            </div>

            <p className="text-white/45 text-[10px] leading-5 mt-2">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* =========================================================
   SKILLS OUTPUT
========================================================= */

const SkillsOutput = () => {
  return (
    <div className="text-xs sm:text-sm">
      <SectionTitle>TECHNICAL SKILLS</SectionTitle>

      <div className="text-white/50 text-xs mb-4">
        Total skills:{" "}
        <span className="text-[#62a0ff]">
          {SkillData?.length || 0}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {SkillData?.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="
              border
              border-white/15
              bg-white/[0.02]
              p-3
              hover:border-[#62a0ff]
              transition
            "
          >
            <div className="flex items-center gap-2">
              <div
                className="
                  w-9
                  h-9
                  border
                  border-white/10
                  bg-white/[0.03]
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                {item?.logo ? (
                  <img
                    src={`/models/${item.logo}`}
                    alt={item.name}
                    className="w-6 h-6 object-contain"
                  />
                ) : (
                  <FaCode className="text-[#62a0ff]" />
                )}
              </div>

              <div className="min-w-0">
                <div className="text-white text-[10px] sm:text-xs truncate">
                  {item.name}
                </div>

                <div className="text-white/20 text-[8px]">
                  #{String(index + 1).padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <SectionTitle>STACK</SectionTitle>

      <div className="flex flex-wrap gap-2">
        {[
          "Next.js",
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "MySQL",
          "PostgreSQL",
          "Laravel",
          "Tailwind CSS",
          "JavaScript",
          "JWT",
          "REST API",
          "Razorpay",
          "Cloudinary",
          "GSAP",
          "Axios",
        ].map((tech) => (
          <span
            key={tech}
            className="
              px-2
              py-1
              border
              border-white/15
              text-white/60
              text-[9px]
              hover:text-white
              hover:border-[#62a0ff]
              transition
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectOutput = ({ project, index }) => {
  if (!project) return null;

  return (
    <div className="mb-5">
      <div className="border border-white/15">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white/[0.04] px-3 py-2 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-[#62a0ff] font-bold">
              [{String(index + 1).padStart(2, "0")}]
            </span>

            <span className="text-white font-bold">
              {project.title}
            </span>
          </div>

          <span className="text-white/30 text-[9px]">
            {project.category || project.type || "PROJECT"}
          </span>
        </div>

        <div className="p-3 space-y-3">
          <div>
            <span className="text-white/35">
              description:
            </span>

            <p className="text-white/65 mt-1 leading-5">
              {project.description}
            </p>
          </div>

          <div>
            <span className="text-white/35">
              role:
            </span>

            <span className="text-white/70 ml-2">
              {project.role || "Full Stack Developer"}
            </span>
          </div>

          {project.techStack?.length > 0 && (
            <div>
              <div className="text-white/35 mb-1">
                technologies:
              </div>

              <div className="flex flex-wrap gap-1">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="
                      border
                      border-white/10
                      px-2
                      py-1
                      text-[8px]
                      text-[#9bbcff]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.features?.length > 0 && (
            <div>
              <div className="text-white/35 mb-1">
                features:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                {project.features.slice(0, 8).map((feature) => (
                  <div
                    key={feature}
                    className="text-white/55 text-[9px] flex gap-2"
                  >
                    <span className="text-green-400">
                      <FaCheck />
                    </span>

                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(project.frontendArchitecture ||
            project.backendArchitecture ||
            project.databaseArchitecture) && (
            <div>
              <div className="text-white/35 mb-2">
                architecture:
              </div>

              <div className="space-y-1">
                {project.frontendArchitecture && (
                  <OutputLine>
                    <span className="text-[#62a0ff]">
                      frontend:
                    </span>{" "}
                    <span className="text-white/55">
                      {project.frontendArchitecture}
                    </span>
                  </OutputLine>
                )}

                {project.backendArchitecture && (
                  <OutputLine>
                    <span className="text-[#62a0ff]">
                      backend:
                    </span>{" "}
                    <span className="text-white/55">
                      {project.backendArchitecture}
                    </span>
                  </OutputLine>
                )}

                {project.databaseArchitecture && (
                  <OutputLine>
                    <span className="text-[#62a0ff]">
                      database:
                    </span>{" "}
                    <span className="text-white/55">
                      {project.databaseArchitecture}
                    </span>
                  </OutputLine>
                )}
              </div>
            </div>
          )}

          {(project.authentication || project.paymentGateway) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.authentication && (
                <div className="border border-white/10 p-2">
                  <div className="text-white/30 text-[9px]">
                    authentication
                  </div>

                  <div className="text-white/70 text-[9px] mt-1">
                    {project.authentication}
                  </div>
                </div>
              )}

              {project.paymentGateway && (
                <div className="border border-white/10 p-2">
                  <div className="text-white/30 text-[9px]">
                    payment
                  </div>

                  <div className="text-white/70 text-[9px] mt-1">
                    {project.paymentGateway}
                  </div>
                </div>
              )}
            </div>
          )}

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                border
                border-[#62a0ff]
                text-[#9bbcff]
                px-3
                py-2
                text-[9px]
                hover:bg-[#153497]
                hover:text-white
                transition
              "
            >
              <FaExternalLinkAlt />
              OPEN PROJECT
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   PROJECTS OUTPUT
========================================================= */

const ProjectsOutput = ({ onProject }) => {
  return (
    <div className="text-xs sm:text-sm">
      <SectionTitle>PROJECTS</SectionTitle>

      <div className="text-white/50 mb-4">
        Total projects:{" "}
        <span className="text-[#62a0ff]">
          {ProjectData?.length || 0}
        </span>
      </div>

      <div className="space-y-2">
        {ProjectData?.map((project, index) => {
          const slug = normalizeProjectName(project?.title);

          return (
            <button
              type="button"
              key={project?.id || slug || index}
              onClick={() => onProject(project)}
              className="
                w-full
                text-left
                border
                border-white/10
                hover:border-[#62a0ff]
                hover:bg-white/[0.03]
                p-3
                transition
              "
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <span className="text-[#62a0ff]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-white ml-3 font-bold">
                    {project.title}
                  </span>
                </div>

                <span className="text-white/25 text-[9px]">
                  {project.category || project.type || "PROJECT"}
                </span>
              </div>

              <div className="text-white/45 text-[10px] mt-1 line-clamp-2">
                {project.description}
              </div>

              <div className="text-white/20 text-[8px] mt-2">
                command: open {slug}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

/* =========================================================
   CONTACT OUTPUT
========================================================= */

const ContactOutput = () => {
  const contact = getContact();
  const profile = getProfile();

  const email =
    contact?.primary?.email ||
    profile?.email ||
    "";

  const phone =
    contact?.primary?.phone ||
    profile?.phone ||
    "";

  return (
    <div className="text-xs sm:text-sm">
      <SectionTitle>CONTACT</SectionTitle>

      <div className="space-y-3">
        <div className="border border-white/15 p-3">
          <div className="text-white/35 text-[9px] uppercase">
            email
          </div>

          <a
            href={`mailto:${email}`}
            className="text-[#9bbcff] hover:text-white transition break-all"
          >
            {email || "Not available"}
          </a>
        </div>

        <div className="border border-white/15 p-3">
          <div className="text-white/35 text-[9px] uppercase">
            phone
          </div>

          <a
            href={`tel:${phone}`}
            className="text-[#9bbcff] hover:text-white transition"
          >
            {phone || "Not available"}
          </a>
        </div>

        <div className="border border-white/15 p-3">
          <div className="text-white/35 text-[9px] uppercase">
            whatsapp
          </div>

          <a
            href="https://wa.me/9816897620"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9bbcff] hover:text-white transition"
          >
            +91 9816897620
          </a>
        </div>
      </div>

      <SectionTitle>SOCIAL</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <a
          href="https://github.com/jonty1231"
          target="_blank"
          rel="noopener noreferrer"
          className="
            border
            border-white/10
            p-3
            hover:border-[#62a0ff]
            transition
          "
        >
          <div className="flex items-center gap-2">
            <FaGithub className="text-white" />

            <span className="text-white">
              github.com/jonty1231
            </span>
          </div>
        </a>

        <a
          href="https://github.com/mr-developer-007"
          target="_blank"
          rel="noopener noreferrer"
          className="
            border
            border-white/10
            p-3
            hover:border-[#62a0ff]
            transition
          "
        >
          <div className="flex items-center gap-2">
            <FaGithub className="text-white" />

            <span className="text-white">
              github.com/mr-developer-007
            </span>
          </div>
        </a>
      </div>

      <div className="mt-4 text-white/50">
        {contact?.availability?.message ||
          "Available for freelance work, development projects and collaborations."}
      </div>
    </div>
  );
};

/* =========================================================
   FILE OUTPUT
========================================================= */

const FileOutput = ({ file }) => {
  const profile = getProfile();
  const contact = getContact();

  if (file === "about.txt") {
    return (
      <div className="whitespace-pre-wrap text-white/65 text-xs sm:text-sm leading-6">
        {profile?.about ||
          `
I am a full stack developer focused on creating
modern, scalable and production-ready applications.

I work with frontend interfaces, backend APIs,
databases, authentication, integrations and deployment.

My goal is to build software that is clean,
maintainable, scalable and useful in the real world.
          `.trim()}
      </div>
    );
  }

  if (file === "contact.txt") {
    return (
      <div className="text-xs sm:text-sm leading-6">
        <div>
          email:{" "}
          <span className="text-[#9bbcff]">
            {contact?.primary?.email || profile?.email || ""}
          </span>
        </div>

        <div>
          phone:{" "}
          <span className="text-[#9bbcff]">
            {contact?.primary?.phone || profile?.phone || ""}
          </span>
        </div>

        <div>
          whatsapp:{" "}
          <span className="text-[#9bbcff]">
            +91 9816897620
          </span>
        </div>
      </div>
    );
  }

  if (file === "resume.txt") {
    return (
      <div className="text-white/65 text-xs sm:text-sm leading-6">
        <div>NAME: {profile?.name || "Vivek Pundir"}</div>

        <div>
          ROLE:{" "}
          {profile?.professionalTitle ||
            "Full Stack Native Developer"}
        </div>

        <div className="mt-3">
          SKILLS: {SkillData?.length || 0}+
        </div>

        <div>
          PROJECTS: {ProjectData?.length || 0}+
        </div>

        <div className="mt-3">
          TYPE:
          <br />
          Full Stack Development
          <br />
          Frontend Development
          <br />
          Backend Development
          <br />
          API Development
          <br />
          Database Architecture
          <br />
          Deployment
        </div>
      </div>
    );
  }

  return (
    <div className="text-red-400 text-xs">
      cat: {file}: No such file or directory
    </div>
  );
};

/* =========================================================
   HELP OUTPUT
========================================================= */

const HelpOutput = () => {
  const commands = [
    ["help", "show available commands"],
    ["clear", "clear terminal"],
    ["ls", "list directories and files"],
    ["pwd", "show current directory"],
    ["whoami", "show current user"],
    ["about", "show about information"],
    ["profile", "show profile"],
    ["skills", "show technical skills"],
    ["projects", "show all projects"],
    ["contact", "show contact information"],
    ["neofetch", "show system information"],
    ["history", "show command history"],
    ["cd <dir>", "change directory"],
    ["cat <file>", "read a file"],
    ["open <project>", "open project details"],
    ["sudo hire-me", "show hiring message"],
  ];

  return (
    <div className="text-xs sm:text-sm">
      <SectionTitle>AVAILABLE COMMANDS</SectionTitle>

      <div className="space-y-1">
        {commands.map(([command, description]) => (
          <div
            key={command}
            className="grid grid-cols-[140px_1fr] sm:grid-cols-[180px_1fr] gap-3"
          >
            <span className="text-[#62a0ff]">
              {command}
            </span>

            <span className="text-white/45">
              {description}
            </span>
          </div>
        ))}
      </div>

      <SectionTitle>EXAMPLES</SectionTitle>

      <div className="space-y-1 text-white/50">
        <div>
          <span className="text-[#62a0ff]">
            cd projects
          </span>
        </div>

        <div>
          <span className="text-[#62a0ff]">
            open nextgen-trip
          </span>
        </div>

        <div>
          <span className="text-[#62a0ff]">
            cat about.txt
          </span>
        </div>

        <div>
          <span className="text-[#62a0ff]">
            sudo hire-me
          </span>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   LS OUTPUT
========================================================= */

const LsOutput = ({ path }) => {
  if (path === "/home/vivek/projects") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
        {ProjectData?.map((project, index) => (
          <div key={index} className="text-white/70">
            <span className="text-[#62a0ff]">d</span>{" "}
            {normalizeProjectName(project.title)}/
          </div>
        ))}
      </div>
    );
  }

  if (path === "/home/vivek/skills") {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs">
        {SkillData?.map((skill, index) => (
          <div
            key={index}
            className="text-white/65"
          >
            <span className="text-[#62a0ff]">-</span>{" "}
            {skill.name}
          </div>
        ))}
      </div>
    );
  }

  if (path === "/home/vivek/contact") {
    return (
      <div className="space-y-1 text-xs">
        <div>
          <span className="text-[#62a0ff]">email.txt</span>
        </div>

        <div>
          <span className="text-[#62a0ff]">phone.txt</span>
        </div>

        <div>
          <span className="text-[#62a0ff]">social.txt</span>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
      <div className="text-[#62a0ff]">
        about/
      </div>

      <div className="text-[#62a0ff]">
        projects/
      </div>

      <div className="text-[#62a0ff]">
        skills/
      </div>

      <div className="text-[#62a0ff]">
        contact/
      </div>

      <div className="text-white/60">
        about.txt
      </div>

      <div className="text-white/60">
        contact.txt
      </div>

      <div className="text-white/60">
        resume.txt
      </div>

      <div className="text-white/60">
        README.md
      </div>
    </div>
  );
};

/* =========================================================
   NEOFETCH
========================================================= */

const NeofetchOutput = () => {
  const profile = getProfile();

  return (
    <div className="text-xs sm:text-sm">
      <pre className="text-[#62a0ff] text-[7px] sm:text-[9px] md:text-xs leading-tight">
{`
      /\\_/\\\\
     ( o.o )
      > ^ <
`}
      </pre>

      <div className="mt-3 space-y-1">
        <OutputLine>
          <span className="text-[#62a0ff]">user</span>
          <span className="text-white/40"> ................ </span>
          <span className="text-white">
            vivek
          </span>
        </OutputLine>

        <OutputLine>
          <span className="text-[#62a0ff]">host</span>
          <span className="text-white/40"> ................ </span>
          <span className="text-white">
            portfolio
          </span>
        </OutputLine>

        <OutputLine>
          <span className="text-[#62a0ff]">role</span>
          <span className="text-white/40"> ................ </span>
          <span className="text-white">
            {profile?.professionalTitle ||
              "Full Stack Developer"}
          </span>
        </OutputLine>

        <OutputLine>
          <span className="text-[#62a0ff]">projects</span>
          <span className="text-white/40"> ............. </span>
          <span className="text-white">
            {ProjectData?.length || 0}
          </span>
        </OutputLine>

        <OutputLine>
          <span className="text-[#62a0ff]">skills</span>
          <span className="text-white/40"> ................ </span>
          <span className="text-white">
            {SkillData?.length || 0}
          </span>
        </OutputLine>

        <OutputLine>
          <span className="text-[#62a0ff]">shell</span>
          <span className="text-white/40"> ................ </span>
          <span className="text-white">
            portfolio-shell
          </span>
        </OutputLine>

        <OutputLine>
          <span className="text-[#62a0ff]">theme</span>
          <span className="text-white/40"> ............... </span>
          <span className="text-white">
            linux-dark
          </span>
        </OutputLine>
      </div>
    </div>
  );
};

/* =========================================================
   HIRE OUTPUT
========================================================= */

const HireOutput = () => {
  return (
    <div className="text-xs sm:text-sm">
      <SectionTitle>ACCESS GRANTED</SectionTitle>

      <div className="text-green-400 leading-6">
        ✓ You found the secret command.
      </div>

      <div className="text-white/70 mt-2 leading-6">
        I am available for freelance projects,
        full-stack development and collaborations.
      </div>

      <div className="mt-4 text-white">
        Let's build something great together.
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href="mailto:vivek.pundir.dev@gmail.com?subject=Project Inquiry"
          className="
            border
            border-[#62a0ff]
            text-[#9bbcff]
            px-3
            py-2
            text-[9px]
            hover:bg-[#153497]
            hover:text-white
            transition
          "
        >
          EMAIL ME
        </a>

        <a
          href="https://wa.me/9816897620"
          target="_blank"
          rel="noopener noreferrer"
          className="
            border
            border-green-500
            text-green-400
            px-3
            py-2
            text-[9px]
            hover:bg-green-600
            hover:text-white
            transition
          "
        >
          WHATSAPP
        </a>
      </div>
    </div>
  );
};

/* =========================================================
   MAIN TERMINAL
========================================================= */

const LinuxTerminal = () => {
  const profile = getProfile();

  const [currentPath, setCurrentPath] =
    useState("/home/vivek");

  const [input, setInput] = useState("");

  const [history, setHistory] = useState([]);

  const [commandHistory, setCommandHistory] =
    useState([]);

  const [historyIndex, setHistoryIndex] =
    useState(-1);

  const inputRef = useRef(null);

  const terminalRef = useRef(null);

  const hostname = useMemo(
    () => "portfolio",
    []
  );

  /* =======================================================
     INITIAL TERMINAL
  ======================================================= */

  useEffect(() => {
    setHistory([
      {
        type: "output",
        content: <LinuxBanner />,
      },
      {
        type: "output",
        content: (
          <div className="text-white/50 text-xs sm:text-sm">
            System ready.
            <span className="text-[#62a0ff] ml-2">
              help
            </span>{" "}
            for available commands.
          </div>
        ),
      },
    ]);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }, []);

  /* =======================================================
     AUTO SCROLL
  ======================================================= */

  useEffect(() => {
    if (!terminalRef.current) return;

    terminalRef.current.scrollTop =
      terminalRef.current.scrollHeight;
  }, [history]);

  /* =======================================================
     FOCUS
  ======================================================= */

  const focusInput = () => {
    inputRef.current?.focus();
  };

  /* =======================================================
     ADD HISTORY
  ======================================================= */

  const addHistory = (command, output) => {
    setHistory((prev) => [
      ...prev,
      {
        type: "command",
        command,
        path: currentPath,
      },
      {
        type: "output",
        content: output,
      },
    ]);
  };

  /* =======================================================
     CLEAR
  ======================================================= */

  const clearTerminal = () => {
    setHistory([]);
  };

  /* =======================================================
     HELP
  ======================================================= */

  const handleHelp = () => {
    return <HelpOutput />;
  };

  /* =======================================================
     PWD
  ======================================================= */

  const handlePwd = () => {
    return (
      <div className="text-white text-xs sm:text-sm">
        {currentPath}
      </div>
    );
  };

  /* =======================================================
     WHOAMI
  ======================================================= */

  const handleWhoami = () => {
    return (
      <div className="text-white text-xs sm:text-sm">
        vivek
      </div>
    );
  };

  /* =======================================================
     LS
  ======================================================= */

  const handleLs = () => {
    return <LsOutput path={currentPath} />;
  };

  /* =======================================================
     CD
  ======================================================= */

  const handleCd = (target) => {
    if (!target || target === "~") {
      setCurrentPath("/home/vivek");

      return (
        <div className="text-white/60 text-xs sm:text-sm">
          changed directory to ~
        </div>
      );
    }

    if (target === "..") {
      if (currentPath === "/home/vivek") {
        return (
          <div className="text-red-400 text-xs sm:text-sm">
            bash: cd: ..: already at root directory
          </div>
        );
      }

      setCurrentPath("/home/vivek");

      return (
        <div className="text-white/60 text-xs sm:text-sm">
          changed directory to ~
        </div>
      );
    }

    const cleanTarget = target
      .replace(/^~\/?/, "")
      .replace(/\/$/, "")
      .toLowerCase();

    const directories = [
      "about",
      "projects",
      "skills",
      "contact",
    ];

    if (directories.includes(cleanTarget)) {
      setCurrentPath(
        `/home/vivek/${cleanTarget}`
      );

      return (
        <div className="text-white/60 text-xs sm:text-sm">
          changed directory to{" "}
          <span className="text-[#62a0ff]">
            ~/{cleanTarget}
          </span>
        </div>
      );
    }

    const isProject = ProjectData?.find(
      (project) =>
        normalizeProjectName(project.title) ===
        cleanTarget
    );

    if (
      currentPath === "/home/vivek/projects" &&
      isProject
    ) {
      return (
        <div className="text-white/60 text-xs sm:text-sm">
          Project directories are not entered directly.
          Use{" "}
          <span className="text-[#62a0ff]">
            open {cleanTarget}
          </span>
          .
        </div>
      );
    }

    return (
      <div className="text-red-400 text-xs sm:text-sm">
        bash: cd: {target}: No such file or directory
      </div>
    );
  };

  /* =======================================================
     OPEN PROJECT
  ======================================================= */

  const handleOpen = (target) => {
    if (!target) {
      return (
        <div className="text-red-400 text-xs sm:text-sm">
          usage: open &lt;project-name&gt;
        </div>
      );
    }

    const cleanTarget = normalizeProjectName(target);

    const project = ProjectData?.find(
      (item) =>
        normalizeProjectName(item.title) ===
          cleanTarget ||
        normalizeProjectName(item.id || "") ===
          cleanTarget
    );

    if (!project) {
      return (
        <div className="text-red-400 text-xs sm:text-sm">
          open: {target}: project not found
        </div>
      );
    }

    const projectIndex = ProjectData.findIndex(
      (item) => item === project
    );

    return (
      <ProjectOutput
        project={project}
        index={projectIndex}
      />
    );
  };

  /* =======================================================
     HISTORY OUTPUT
  ======================================================= */

  const handleHistory = () => {
    if (!commandHistory.length) {
      return (
        <div className="text-white/40 text-xs">
          No commands in history.
        </div>
      );
    }

    return (
      <div className="space-y-1 text-xs sm:text-sm">
        {commandHistory.map((command, index) => (
          <div key={`${command}-${index}`}>
            <span className="text-white/25 mr-3">
              {index + 1}
            </span>

            <span className="text-white/70">
              {command}
            </span>
          </div>
        ))}
      </div>
    );
  };

  /* =======================================================
     COMMAND PROCESSOR
  ======================================================= */

  const processCommand = (rawCommand) => {
    const command = rawCommand.trim();

    if (!command) {
      return;
    }

    setCommandHistory((prev) => [
      ...prev,
      command,
    ]);

    setHistoryIndex(-1);

    const parts = command.split(/\s+/);

    const baseCommand =
      parts[0]?.toLowerCase();

    const args = parts.slice(1);

    /* ============================================
       CLEAR
    ============================================ */

    if (baseCommand === "clear") {
      clearTerminal();
      return;
    }

    /* ============================================
       HELP
    ============================================ */

    if (baseCommand === "help") {
      addHistory(
        command,
        <HelpOutput />
      );

      return;
    }

    /* ============================================
       PWD
    ============================================ */

    if (baseCommand === "pwd") {
      addHistory(
        command,
        handlePwd()
      );

      return;
    }

    /* ============================================
       WHOAMI
    ============================================ */

    if (baseCommand === "whoami") {
      addHistory(
        command,
        handleWhoami()
      );

      return;
    }

    /* ============================================
       LS
    ============================================ */

    if (
      baseCommand === "ls" ||
      baseCommand === "dir"
    ) {
      addHistory(
        command,
        handleLs()
      );

      return;
    }

    /* ============================================
       CD
    ============================================ */

    if (baseCommand === "cd") {
      addHistory(
        command,
        handleCd(args[0])
      );

      return;
    }

    /* ============================================
       ABOUT
    ============================================ */

    if (
      baseCommand === "about" ||
      baseCommand === "aboutme"
    ) {
      addHistory(
        command,
        <AboutOutput />
      );

      return;
    }

    /* ============================================
       PROFILE
    ============================================ */

    if (baseCommand === "profile") {
      addHistory(
        command,
        <ProfileOutput />
      );

      return;
    }

    /* ============================================
       SKILLS
    ============================================ */

    if (
      baseCommand === "skills" ||
      baseCommand === "skill"
    ) {
      addHistory(
        command,
        <SkillsOutput />
      );

      return;
    }

    /* ============================================
       PROJECTS
    ============================================ */

    if (
      baseCommand === "projects" ||
      baseCommand === "project"
    ) {
      addHistory(
        command,
        <ProjectsOutput
          onProject={(project) => {
            const index =
              ProjectData.findIndex(
                (item) => item === project
              );

            addHistory(
              `open ${normalizeProjectName(
                project.title
              )}`,
              <ProjectOutput
                project={project}
                index={index}
              />
            );
          }}
        />
      );

      return;
    }

    /* ============================================
       CONTACT
    ============================================ */

    if (
      baseCommand === "contact" ||
      baseCommand === "contacts"
    ) {
      addHistory(
        command,
        <ContactOutput />
      );

      return;
    }

    /* ============================================
       NEOFETCH
    ============================================ */

    if (
      baseCommand === "neofetch" ||
      baseCommand === "fetch"
    ) {
      addHistory(
        command,
        <NeofetchOutput />
      );

      return;
    }

    /* ============================================
       HISTORY
    ============================================ */

    if (baseCommand === "history") {
      addHistory(
        command,
        handleHistory()
      );

      return;
    }

    /* ============================================
       CAT
    ============================================ */

    if (baseCommand === "cat") {
      if (!args[0]) {
        addHistory(
          command,
          <div className="text-red-400 text-xs">
            cat: missing file operand
          </div>
        );

        return;
      }

      addHistory(
        command,
        <FileOutput file={args[0]} />
      );

      return;
    }

    /* ============================================
       OPEN
    ============================================ */

    if (baseCommand === "open") {
      addHistory(
        command,
        handleOpen(args[0])
      );

      return;
    }

    /* ============================================
       SUDO
    ============================================ */

    if (
      baseCommand === "sudo" &&
      args[0] === "hire-me"
    ) {
      addHistory(
        command,
        <HireOutput />
      );

      return;
    }

    /* ============================================
       EXIT
    ============================================ */

    if (
      baseCommand === "exit" ||
      baseCommand === "logout"
    ) {
      addHistory(
        command,
        <div className="text-white/50 text-xs sm:text-sm">
          This portfolio session cannot be closed 😄
        </div>
      );

      return;
    }

    /* ============================================
       GIT COMMANDS
    ============================================ */

    if (baseCommand === "git") {
      if (args[0] === "status") {
        addHistory(
          command,
          <div className="text-xs sm:text-sm">
            <div className="text-green-400">
              On branch main
            </div>

            <div className="text-white/50 mt-1">
              Everything is up to date.
            </div>
          </div>
        );

        return;
      }

      if (args[0] === "log") {
        addHistory(
          command,
          <div className="space-y-2 text-xs sm:text-sm">
            <div>
              <span className="text-yellow-400">
                commit
              </span>{" "}
              portfolio-main
            </div>

            <div className="text-white/50">
              Build portfolio. Ship ideas. Repeat.
            </div>
          </div>
        );

        return;
      }
    }

    /* ============================================
       UNKNOWN COMMAND
    ============================================ */

    addHistory(
      command,
      <div className="text-xs sm:text-sm">
        <span className="text-red-400">
          bash:
        </span>{" "}
        {baseCommand}: command not found
        <div className="text-white/30 mt-1">
          Type{" "}
          <span className="text-[#62a0ff]">
            help
          </span>{" "}
          for available commands.
        </div>
      </div>
    );
  };

  /* =======================================================
     SUBMIT
  ======================================================= */

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!input.trim()) {
      return;
    }

    const command = input;

    setInput("");

    processCommand(command);
  };

  /* =======================================================
     KEYBOARD NAVIGATION
  ======================================================= */

  const handleKeyDown = (event) => {
    /* TAB */

    if (event.key === "Tab") {
      event.preventDefault();

      const commands = [
        "help",
        "clear",
        "ls",
        "pwd",
        "whoami",
        "about",
        "profile",
        "skills",
        "projects",
        "contact",
        "neofetch",
        "history",
        "cd ",
        "cat ",
        "open ",
        "sudo hire-me",
      ];

      const current =
        input.toLowerCase();

      const match = commands.find((command) =>
        command.startsWith(current)
      );

      if (match) {
        setInput(match);
      }

      return;
    }

    /* ARROW UP */

    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (!commandHistory.length) {
        return;
      }

      const nextIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);

      setHistoryIndex(nextIndex);

      setInput(
        commandHistory[nextIndex]
      );

      return;
    }

    /* ARROW DOWN */

    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (!commandHistory.length) {
        return;
      }

      if (historyIndex === -1) {
        return;
      }

      const nextIndex =
        historyIndex + 1;

      if (
        nextIndex >=
        commandHistory.length
      ) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);

        setInput(
          commandHistory[nextIndex]
        );
      }

      return;
    }

    /* CTRL + L */

    if (
      event.ctrlKey &&
      event.key.toLowerCase() === "l"
    ) {
      event.preventDefault();

      clearTerminal();

      return;
    }

    /* CTRL + C */

    if (
      event.ctrlKey &&
      event.key.toLowerCase() === "c"
    ) {
      event.preventDefault();

      setInput("");

      addHistory(
        "^C",
        <div className="text-white/40 text-xs">
          Process interrupted.
        </div>
      );
    }
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div
      className="
        h-screen
        w-full
        bg-[#02050c]
        text-white
        flex
        flex-col
        overflow-hidden
        font-mono
      "
      onClick={focusInput}
    >
      {/* ===================================================
          TERMINAL TOP BAR
      =================================================== */}

      <div
        className="
          h-10
          shrink-0
          bg-[#0b1220]
          border-b
          border-white/10
          flex
          items-center
          justify-between
          px-3
          sm:px-4
        "
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
          </div>

          <div className="ml-2 flex items-center gap-2 text-[10px] sm:text-xs text-white/50">
            <FaTerminal className="text-[#62a0ff]" />

            <span>
              vivek@{hostname}:~
            </span>
          </div>
        </div>

        <div className="text-[8px] sm:text-[10px] text-white/20">
          Linux Portfolio
        </div>
      </div>

      {/* ===================================================
          TERMINAL BODY
      =================================================== */}

      <div
        ref={terminalRef}
        className="
          flex-1
          overflow-y-auto
          overflow-x-hidden
          px-3
          py-4
          sm:px-5
          md:px-8
          lg:px-12
          scroll-smooth
        "
      >
        <div className="max-w-6xl mx-auto">
          {history.map((item, index) => {
            if (item.type === "command") {
              return (
                <div
                  key={index}
                  className="
                    flex
                    items-start
                    gap-1
                    text-xs
                    sm:text-sm
                    mb-1
                    break-all
                  "
                >
                  <span className="text-green-400 shrink-0">
                    vivek@{hostname}
                  </span>

                  <span className="text-white/40 shrink-0">
                    :
                  </span>

                  <span className="text-[#62a0ff] shrink-0">
                    {formatPath(item.path)}
                  </span>

                  <span className="text-white/40 shrink-0">
                    $
                  </span>

                  <span className="text-white ml-1">
                    {item.command}
                  </span>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="mb-4"
              >
                {item.content}
              </div>
            );
          })}

          {/* =================================================
              ACTIVE PROMPT
          ================================================= */}

          <form
            onSubmit={handleSubmit}
            className="
              flex
              items-start
              gap-1
              text-xs
              sm:text-sm
              pb-8
            "
          >
            <span className="text-green-400 shrink-0">
              vivek@{hostname}
            </span>

            <span className="text-white/40 shrink-0">
              :
            </span>

            <span className="text-[#62a0ff] shrink-0">
              {formatPath(currentPath)}
            </span>

            <span className="text-white/40 shrink-0">
              $
            </span>

            <div className="flex-1 flex min-w-0 ml-1">
              <input
                ref={inputRef}
                value={input}
                onChange={(event) =>
                  setInput(event.target.value)
                }
                onKeyDown={handleKeyDown}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                className="
                  w-full
                  bg-transparent
                  border-none
                  outline-none
                  text-white
                  font-mono
                  caret-[#62a0ff]
                  min-w-0
                "
                aria-label="Terminal command"
              />
            </div>
          </form>
        </div>
      </div>

      {/* ===================================================
          TERMINAL FOOTER
      =================================================== */}

      <div
        className="
          h-7
          shrink-0
          bg-[#0b1220]
          border-t
          border-white/10
          flex
          items-center
          justify-between
          px-3
          sm:px-4
          text-[8px]
          sm:text-[9px]
          text-white/25
        "
      >
        <span>
          bash • portfolio-shell
        </span>

        <span>
          type "help"
        </span>
      </div>
    </div>
  );
};

export default LinuxTerminal;
