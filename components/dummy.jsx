"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Terminal as TerminalIcon,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

const COMMANDS = [
  "help",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "contact",
  "github",
  "linkedin",
  "resume",
  "neofetch",
  "ls",
  "pwd",
  "cd",
  "cat",
  "clear",
  "whoami",
  "date",
];

const FILE_SYSTEM = {
  "~": ["about", "projects", "skills", "experience", "education", "contact"],
  "~/projects": [
    "cheon",
    "digitalpaaji",
    "expert-platform",
    "ride-booking",
  ],
  "~/skills": [
    "frontend",
    "backend",
    "database",
    "devops",
  ],
};

const PROJECTS = [
  {
    name: "cheon",
    title: "Cheon — Traditional Fashion",
    description:
      "A premium modern Indian fashion e-commerce platform focused on traditional clothing with a contemporary visual identity.",
    stack: ["Next.js", "Node.js", "MongoDB", "Cloudinary"],
    status: "production",
  },
  {
    name: "digitalpaaji",
    title: "Digital Paaji",
    description:
      "A full-stack digital platform with modern dashboards, content management and scalable backend APIs.",
    stack: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
    status: "active",
  },
  {
    name: "expert-platform",
    title: "Expert Learning Platform",
    description:
      "A platform for experts to publish articles, jobs, weekly questions and educational content.",
    stack: ["Next.js", "Express", "MongoDB", "Mongoose"],
    status: "active",
  },
  {
    name: "ride-booking",
    title: "Ride Booking Platform",
    description:
      "A ride-booking backend with users, drivers, bookings, APIs and real-time communication.",
    stack: ["Node.js", "Express", "MongoDB", "Socket.io"],
    status: "completed",
  },
];

const SKILLS = {
  frontend: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "GSAP",
    "Framer Motion",
    "Three.js",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "Socket.io",
    "Authentication",
  ],
  database: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma", "MySQL"],
  devops: ["Linux", "Nginx", "PM2", "Docker", "Git", "GitHub", "VPS"],
};

function Prompt({ children = "$" }) {
  return (
    <span className="shrink-0">
      <span className="text-emerald-400">jo</span>
      <span className="text-zinc-500">@</span>
      <span className="text-cyan-400">portfolio</span>
      <span className="text-zinc-500">:</span>
      <span className="text-blue-400">~</span>
      <span className="text-zinc-500">{children}</span>{" "}
    </span>
  );
}

function SectionTitle({ children }) {
  return (
    <div className="mb-3 flex items-center gap-2 text-cyan-400">
      <ChevronRight size={15} />
      <span>{children}</span>
    </div>
  );
}

function HelpOutput() {
  return (
    <div className="space-y-3">
      <div className="text-zinc-300">
        Available commands:
      </div>

      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
        {[
          ["about", "About me"],
          ["skills", "Technical skills"],
          ["projects", "View projects"],
          ["experience", "Work experience"],
          ["education", "Education"],
          ["contact", "Contact information"],
          ["neofetch", "System information"],
          ["ls", "List directory"],
          ["pwd", "Current directory"],
          ["cd", "Change directory"],
          ["cat", "Read file"],
          ["github", "Open GitHub"],
          ["linkedin", "Open LinkedIn"],
          ["resume", "Open resume"],
          ["clear", "Clear terminal"],
        ].map(([command, description]) => (
          <div key={command} className="flex gap-4">
            <span className="w-24 text-emerald-400">
              {command}
            </span>
            <span className="text-zinc-500">{description}</span>
          </div>
        ))}
      </div>

      <div className="border-l border-zinc-800 pl-3 text-xs text-zinc-500">
        Tip: Use ↑ / ↓ for command history and Tab for autocomplete.
      </div>
    </div>
  );
}

function AboutOutput() {
  return (
    <div className="space-y-3">
      <SectionTitle>about.txt</SectionTitle>

      <div className="max-w-3xl leading-7 text-zinc-300">
        Hi, I'm <span className="text-white">Jo</span> — a full-stack
        developer who enjoys building modern web applications,
        developer tools and interactive experiences.
      </div>

      <div className="text-zinc-400">
        I mainly work with{" "}
        <span className="text-cyan-400">Next.js</span>,{" "}
        <span className="text-cyan-400">React</span>,{" "}
        <span className="text-cyan-400">Node.js</span> and{" "}
        <span className="text-cyan-400">MongoDB</span>.
      </div>

      <div className="text-zinc-500">
        Currently exploring advanced backend architecture,
        Docker, Redis, Kubernetes and 3D web experiences.
      </div>
    </div>
  );
}

function SkillsOutput() {
  return (
    <div className="space-y-4">
      <SectionTitle>skills/</SectionTitle>

      {Object.entries(SKILLS).map(([category, skills]) => (
        <div key={category}>
          <div className="mb-1 text-emerald-400">
            {category}/
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded border border-zinc-800 bg-zinc-900 px-2 py-1 text-xs text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectsOutput({ onCommand }) {
  return (
    <div className="space-y-4">
      <SectionTitle>projects/</SectionTitle>

      <div className="grid gap-4 lg:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <div
            key={project.name}
            className="rounded-lg border border-zinc-800 bg-zinc-950/70 p-4 transition hover:border-zinc-600"
          >
            <div className="mb-2 flex items-center justify-between gap-4">
              <div className="text-white">
                {index + 1}. {project.title}
              </div>

              <span className="text-[10px] uppercase tracking-wider text-emerald-400">
                {project.status}
              </span>
            </div>

            <div className="mb-3 text-sm leading-6 text-zinc-500">
              {project.description}
            </div>

            <div className="mb-3 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="text-xs text-cyan-500"
                >
                  #{item}
                </span>
              ))}
            </div>

            <button
              onClick={() => onCommand(`cat projects/${project.name}`)}
              className="text-xs text-zinc-400 hover:text-white"
            >
              $ cat projects/{project.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectDetail({ project }) {
  return (
    <div className="space-y-3">
      <SectionTitle>{project.name}</SectionTitle>

      <div className="text-lg text-white">{project.title}</div>

      <p className="max-w-3xl leading-7 text-zinc-400">
        {project.description}
      </p>

      <div>
        <span className="text-zinc-600">stack: </span>
        <span className="text-cyan-400">
          {project.stack.join(" · ")}
        </span>
      </div>

      <div>
        <span className="text-zinc-600">status: </span>
        <span className="text-emerald-400">{project.status}</span>
      </div>
    </div>
  );
}

function ExperienceOutput() {
  return (
    <div className="space-y-5">
      <SectionTitle>experience/</SectionTitle>

      <div>
        <div className="text-white">
          Full Stack Developer
        </div>
        <div className="text-sm text-cyan-500">
          Freelance / Product Development
        </div>
        <div className="mt-2 max-w-3xl text-sm leading-6 text-zinc-500">
          Building full-stack applications, admin dashboards,
          REST APIs, e-commerce platforms and content management
          systems.
        </div>
      </div>

      <div>
        <div className="text-white">
          Backend & API Development
        </div>
        <div className="text-sm text-cyan-500">
          Node.js · Express · MongoDB
        </div>
        <div className="mt-2 max-w-3xl text-sm leading-6 text-zinc-500">
          Designing APIs, database schemas, authentication,
          file uploads, payments and deployment infrastructure.
        </div>
      </div>
    </div>
  );
}

function EducationOutput() {
  return (
    <div className="space-y-3">
      <SectionTitle>education/</SectionTitle>

      <div className="text-white">
        Computer Science / Software Development
      </div>

      <p className="max-w-2xl text-sm leading-6 text-zinc-500">
        Continuously learning through hands-on development,
        production projects and deep exploration of modern
        JavaScript ecosystems.
      </p>
    </div>
  );
}

function ContactOutput() {
  return (
    <div className="space-y-4">
      <SectionTitle>contact/</SectionTitle>

      <div className="grid gap-2">
        <a
          href="mailto:hello@example.com"
          className="flex items-center gap-3 text-zinc-400 hover:text-white"
        >
          <Mail size={15} />
          hello@example.com
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          className="flex items-center gap-3 text-zinc-400 hover:text-white"
        >
          <Github size={15} />
          github.com
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          className="flex items-center gap-3 text-zinc-400 hover:text-white"
        >
          <Linkedin size={15} />
          linkedin.com
        </a>
      </div>
    </div>
  );
}

function Neofetch() {
  return (
    <div className="flex flex-col gap-5 md:flex-row">
      <pre className="hidden text-emerald-400 md:block">
{`       _ ___
      (_)___)
      | |  _ \\
      | | |_) |
      |_|____/`}
      </pre>

      <div className="space-y-1">
        <div>
          <span className="text-emerald-400">jo</span>
          <span className="text-zinc-600">@</span>
          <span className="text-cyan-400">portfolio</span>
        </div>

        <div className="text-zinc-800">----------------</div>

        <div>
          <span className="text-cyan-400">OS</span>: DeveloperOS
        </div>
        <div>
          <span className="text-cyan-400">Shell</span>: bash
        </div>
        <div>
          <span className="text-cyan-400">Role</span>: Full Stack Developer
        </div>
        <div>
          <span className="text-cyan-400">Frontend</span>: Next.js / React
        </div>
        <div>
          <span className="text-cyan-400">Backend</span>: Node.js
        </div>
        <div>
          <span className="text-cyan-400">Database</span>: MongoDB
        </div>
        <div>
          <span className="text-cyan-400">Editor</span>: VS Code
        </div>
        <div>
          <span className="text-cyan-400">Status</span>: Building 🚀
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [cwd, setCwd] = useState("~");

  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  const autocomplete = useMemo(() => {
    if (!input) return [];

    return COMMANDS.filter((command) =>
      command.startsWith(input.toLowerCase())
    );
  }, [input]);

  const runCommand = (rawCommand) => {
    const command = rawCommand.trim();

    if (!command) return;

    const parts = command.split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    if (cmd === "github") {
      window.open("https://github.com/", "_blank");
      addHistory(command, "Opening GitHub...");
      return;
    }

    if (cmd === "linkedin") {
      window.open("https://linkedin.com/", "_blank");
      addHistory(command, "Opening LinkedIn...");
      return;
    }

    if (cmd === "resume") {
      addHistory(
        command,
        "Resume is not configured yet. Add /resume.pdf to your public folder."
      );
      return;
    }

    if (cmd === "cd") {
      const target = args[0] || "~";

      if (target === "..") {
        setCwd("~");
        addHistory(command, "");
        return;
      }

      if (target === "~") {
        setCwd("~");
        addHistory(command, "");
        return;
      }

      const normalized =
        target.startsWith("~/")
          ? target
          : cwd === "~"
          ? `~/${target}`
          : `${cwd}/${target}`;

      if (FILE_SYSTEM[normalized]) {
        setCwd(normalized);
        addHistory(command, "");
      } else {
        addHistory(
          command,
          `bash: cd: ${target}: No such file or directory`
        );
      }

      return;
    }

    if (cmd === "ls") {
      const files = FILE_SYSTEM[cwd] || [];

      addHistory(command, {
        type: "ls",
        files,
      });

      return;
    }

    if (cmd === "pwd") {
      addHistory(command, cwd === "~" ? "/home/jo" : `/home/jo/${cwd.slice(2)}`);
      return;
    }

    if (cmd === "cat") {
      const target = args.join(" ");

      const project = PROJECTS.find(
        (item) =>
          target === `projects/${item.name}` ||
          target === item.name
      );

      if (project) {
        addHistory(command, {
          type: "project",
          project,
        });
        return;
      }

      addHistory(
        command,
        `cat: ${target}: No such file or directory`
      );
      return;
    }

    if (cmd === "whoami") {
      addHistory(command, "jo");
      return;
    }

    if (cmd === "date") {
      addHistory(command, new Date().toString());
      return;
    }

    const output = {
      help: <HelpOutput />,
      about: <AboutOutput />,
      skills: <SkillsOutput />,
      projects: (
        <ProjectsOutput
          onCommand={runCommand}
        />
      ),
      experience: <ExperienceOutput />,
      education: <EducationOutput />,
      contact: <ContactOutput />,
      neofetch: <Neofetch />,
    }[cmd];

    if (output) {
      addHistory(command, output);
    } else {
      addHistory(
        command,
        `bash: ${cmd}: command not found. Type "help" for available commands.`
      );
    }
  };

  const addHistory = (command, output) => {
    setHistory((prev) => [
      ...prev,
      {
        command,
        output,
      },
    ]);

    setInput("");
    setHistoryIndex(-1);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      runCommand(input);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (!history.length) return;

      const commands = history.map((item) => item.command);

      const nextIndex =
        historyIndex === -1
          ? commands.length - 1
          : Math.max(0, historyIndex - 1);

      setHistoryIndex(nextIndex);
      setInput(commands[nextIndex]);
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (historyIndex === -1) return;

      const commands = history.map((item) => item.command);
      const nextIndex = historyIndex + 1;

      if (nextIndex >= commands.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(commands[nextIndex]);
      }
    }

    if (event.key === "Tab") {
      event.preventDefault();

      if (autocomplete.length === 1) {
        setInput(autocomplete[0]);
      }
    }

    if (event.ctrlKey && event.key.toLowerCase() === "l") {
      event.preventDefault();
      setHistory([]);
    }
  };

  return (
    <main
      className="min-h-screen bg-[#050505] px-3 py-3 text-sm text-zinc-300 selection:bg-emerald-400 selection:text-black sm:px-6 sm:py-6"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-7xl flex-col overflow-hidden rounded-xl border border-zinc-800 bg-[#080808] shadow-2xl sm:min-h-[calc(100vh-3rem)]">
        {/* Header */}
        <header className="flex h-12 shrink-0 items-center border-b border-zinc-800 bg-[#101010] px-4">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>

          <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 text-xs text-zinc-500">
            <TerminalIcon size={13} />
            jo@portfolio
          </div>
        </header>

        {/* Terminal */}
        <div
          ref={terminalRef}
          className="flex-1 overflow-y-auto px-4 py-5 font-mono text-[13px] leading-6 sm:px-7 sm:py-7"
        >
          {/* Welcome */}
          <div className="mb-8">
            <pre className="hidden overflow-x-auto text-[10px] leading-3 text-emerald-400 sm:block sm:text-xs sm:leading-4">
{`
     _       ____        _    __      _ _
    | | ___ / ___|  ___ | | _/ /_ __ | | |_
 _  | |/ _ \\\\___ \\\\ / _ \\\\ |/ / / '_ \\\\| | __|
| |_| |  __/ ___) |  __/   < /| |_) | | |_
 \\\\___/ \\\\___|____/ \\\\___|_|\\\\_\\\\/ | .__/|_|\\\\__|
                                 |_|
`}
            </pre>

            <div className="mt-5 space-y-1 text-zinc-500">
              <div>
                Last login: {new Date().toLocaleDateString()} from
                localhost
              </div>

              <div className="text-zinc-300">
                Welcome to{" "}
                <span className="text-emerald-400">
                  jo@portfolio
                </span>
                .
              </div>

              <div>
                Type{" "}
                <button
                  onClick={() => runCommand("help")}
                  className="text-cyan-400 hover:underline"
                >
                  help
                </button>{" "}
                to see available commands.
              </div>
            </div>
          </div>

          {/* History */}
          <div className="space-y-6">
            {history.map((item, index) => (
              <div key={index}>
                <div className="flex items-start">
                  <Prompt />
                  <span className="break-all text-zinc-100">
                    {item.command}
                  </span>
                </div>

                {item.output !== "" && (
                  <div className="mt-2 text-zinc-400">
                    {typeof item.output === "object" &&
                    item.output?.type === "ls" ? (
                      <div className="flex flex-wrap gap-x-6 gap-y-2">
                        {item.output.files.map((file) => (
                          <span
                            key={file}
                            className="text-cyan-400"
                          >
                            {file}/
                          </span>
                        ))}
                      </div>
                    ) : typeof item.output === "object" &&
                      item.output?.type === "project" ? (
                      <ProjectDetail
                        project={item.output.project}
                      />
                    ) : (
                      item.output
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="mt-6 flex items-start">
            <Prompt />

            <div className="relative min-w-0 flex-1">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                autoCapitalize="off"
                spellCheck="false"
                className="w-full border-none bg-transparent p-0 text-zinc-100 outline-none caret-emerald-400"
                aria-label="Terminal command"
              />

              {input === "" && (
                <span className="pointer-events-none absolute left-0 top-0 h-5 w-[7px] animate-pulse bg-emerald-400" />
              )}
            </div>
          </div>

          {/* Suggestions */}
          {autocomplete.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {autocomplete.slice(0, 6).map((command) => (
                <button
                  key={command}
                  onClick={() => setInput(command)}
                  className="rounded border border-zinc-800 px-2 py-1 text-zinc-600 hover:border-zinc-600 hover:text-zinc-300"
                >
                  {command}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="flex shrink-0 items-center justify-between border-t border-zinc-800 bg-[#0b0b0b] px-4 py-2 text-[10px] text-zinc-600">
          <div>bash · portfolio</div>

          <div className="hidden gap-4 sm:flex">
            <span>↑↓ history</span>
            <span>Tab autocomplete</span>
            <span>Ctrl+L clear</span>
          </div>

          <div className="flex gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              aria-label="GitHub"
              className="hover:text-zinc-300"
            >
              <Github size={13} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:text-zinc-300"
            >
              <Linkedin size={13} />
            </a>

            <a
              href="mailto:hello@example.com"
              aria-label="Email"
              className="hover:text-zinc-300"
            >
              <Mail size={13} />
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}