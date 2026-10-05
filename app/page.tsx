
"use client";

import { useState } from "react";
import MobileMenu from "./components/MobileMenu";

const services = [
  {
    number: "01",
    title: "Software Development & AI",
    image: "/service-software.jpg",
    description:
      "Custom web and mobile applications, AI-powered software, automation, and intelligent digital products built around real business needs.",
    items: [
      "Web Applications",
      "Mobile Applications",
      "AI Assistants",
      "Business Automation",
    ],
  },
  {
    number: "02",
    title: "Data Science & IT Consulting",
    image: "/service-data.jpg",
    description:
      "Turn business data into useful insights through analytics, dashboards, visualization, AI/ML solutions, and technology consulting.",
    items: [
      "Data Analysis",
      "Power BI Dashboards",
      "AI & Machine Learning",
      "Digital Transformation",
    ],
  },
  {
    number: "03",
    title: "Solar & Electrical Services",
    image: "/service-solar.jpg",
    description:
      "Solar energy and electrical solutions for homes, businesses, and technical environments.",
    items: [
      "Solar System Design",
      "Solar Installation",
      "Inverter & Battery Systems",
      "Electrical Services",
    ],
  },
  {
    number: "04",
    title: "Procurement & Supply",
    image: "/service-procurement.jpg",
    description:
      "Technical procurement, machinery, equipment supply, business supplies, general contracts, and distribution services.",
    items: [
      "Technical Equipment",
      "Industrial Machinery",
      "Electrical Equipment",
      "Solar Power Equipment",
      "General Contracts",
    ],
  },
];

const projects = [
  {
    category: "E-commerce & Retail Technology",
    filterCategory: "Software & AI",
    title: "Levetor Hub",
    description:
      "A web and mobile commerce platform with customer accounts, products, orders, payment integration, and customer notifications.",
    status: "Completed / Deployed",
    technologies: ["Flutter", "Flask", "Firebase", "Paystack"],
    href: "https://levetor-hub.onrender.com",
    linkLabel: "View Live Project",
  },
  {
    category: "Digital Financial Services",
    filterCategory: "Software & AI",
    title: "XSPay-Go",
    description:
      "A digital services and wallet platform in development, covering airtime, data, gift cards, utilities, transfers, and payments.",
    status: "Ongoing Development",
    technologies: ["Flutter", "Flask", "Python", "Paystack"],
  },
  {
    category: "Healthcare Technology",
    filterCategory: "Software & AI",
    title: "ClerkMate",
    description:
      "An offline-first mobile app designed to help medical students manage clinical clerking, logbooks, templates, and records.",
    status: "Ongoing Development",
    technologies: ["Flutter", "Dart", "SQLite", "Offline-First"],
  },
  {
    category: "Artificial Intelligence",
    filterCategory: "Software & AI",
    title: "NexBot AI",
    description:
      "An AI voice companion prototype exploring conversational interaction and accessible AI assistance.",
    status: "Prototype",
    technologies: ["Python", "Gradio", "Hugging Face", "AI"],
  },
  {
    category: "Physics & Education",
    filterCategory: "Software & AI",
    title: "Physics Solutions AI Calculator",
    description:
      "An AI-assisted physics tool designed to support physics problem-solving, calculations, and learning.",
    status: "Project",
    technologies: ["Python", "AI", "Physics", "Web App"],
  },
  {
    category: "Solar Energy Technology",
    filterCategory: "Solar & Electrical",
    title: "AI Solar Power System Estimator",
    description:
      "A solar estimation application designed to help users assess system requirements and generate structured technical estimates.",
    status: "Project",
    technologies: ["Python", "Flask", "Solar Design", "ReportLab"],
  },
  {
    category: "Business Intelligence",
    filterCategory: "Data Analytics",
    title: "Supermarket Sales Dashboard",
    description:
      "A data analytics project presenting supermarket sales information to support business reporting and decision-making.",
    status: "Analytics Project",
    technologies: ["Excel", "Power BI", "Data Analysis", "Visualization"],
  },
  {
    category: "Customer Analytics",
    filterCategory: "Data Analytics",
    title: "Customer Churn Analysis",
    description:
      "A data analysis project exploring customer churn patterns and retention trends to support business insights.",
    status: "Analytics Project",
    technologies: ["Python", "SQL", "Data Analysis", "Visualization"],
  },
  {
    category: "Environmental AI",
    filterCategory: "Software & AI",
    title: "Wildlife Conservation in Côte d’Ivoire",
    description:
      "A computer vision learning project exploring image-based classification in a wildlife conservation context.",
    status: "Learning Project",
    technologies: ["Python", "Computer Vision", "AI/ML", "Image Classification"],
  },
];

const projectFilters = [
  "All Projects",
  "Software & AI",
  "Data Analytics",
  "Solar & Electrical",
];

const projectVisuals = [
  {
    label: "01",
    mark: "LH",
    accent: "bg-[#007AFF]",
  },
  {
    label: "02",
    mark: "XP",
    accent: "bg-emerald-500",
  },
  {
    label: "03",
    mark: "CM",
    accent: "bg-violet-500",
  },
  {
    label: "04",
    mark: "NB",
    accent: "bg-cyan-500",
  },
  {
    label: "05",
    mark: "PS",
    accent: "bg-amber-500",
  },
  {
    label: "06",
    mark: "AS",
    accent: "bg-orange-500",
  },
  {
    label: "07",
    mark: "SD",
    accent: "bg-indigo-500",
  },
  {
    label: "08",
    mark: "CA",
    accent: "bg-rose-500",
  },
  {
    label: "09",
    mark: "WC",
    accent: "bg-teal-500",
  },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter(
          (project) => project.filterCategory === activeFilter
        );

  return (
    <main>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <div className="container relative flex h-20 items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <img
                src="/technovate-logo.jpg"
                alt="Technovate Global Solutions Ltd"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <div className="text-lg font-extrabold tracking-tight text-[#071A33]">
                TECHNOVATE
              </div>

              <div className="text-[9px] font-semibold tracking-[0.16em] text-slate-500">
                GLOBAL SOLUTIONS LIMITED
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            <a
              href="#home"
              className="text-sm font-semibold text-[#007AFF]"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-slate-600 transition hover:text-[#007AFF]"
            >
              About Us
            </a>

            <a
              href="#services"
              className="text-sm font-medium text-slate-600 transition hover:text-[#007AFF]"
            >
              Services
            </a>

            <a
              href="#projects"
              className="text-sm font-medium text-slate-600 transition hover:text-[#007AFF]"
            >
              Projects
            </a>

            <a
              href="#blog"
              className="text-sm font-medium text-slate-600 transition hover:text-[#007AFF]"
            >
              Blog
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-slate-600 transition hover:text-[#007AFF]"
            >
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-[#007AFF] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-[#0066D6] sm:inline-flex"
          >
            Get a Quote
          </a>

          <MobileMenu />
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden bg-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-100 blur-3xl" />
        <div className="absolute -left-40 top-72 h-80 w-80 rounded-full bg-sky-50 blur-3xl" />

        <div className="container relative grid min-h-[680px] items-center gap-14 py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#007AFF]">
              <span className="h-2 w-2 rounded-full bg-[#007AFF]" />
              Technology · Energy · Engineering
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.03] tracking-[-0.04em] text-[#071A33] sm:text-6xl lg:text-7xl">
              Building smarter{" "}
              <span className="text-[#007AFF]">
                solutions for tomorrow.
              </span>
            </h1>

            <div className="hero-marquee mt-7">
              <div className="hero-marquee-track text-xl font-bold sm:text-2xl">
                <span className="hero-marquee-item text-[#071A33]">
                  Technology that solves.
                </span>

                <span className="hero-marquee-item text-[#007AFF]">
                  Solutions that move business forward.
                </span>

                <span className="hero-marquee-item text-[#071A33]">
                  Technology that solves.
                </span>

                <span className="hero-marquee-item text-[#007AFF]">
                  Solutions that move business forward.
                </span>
              </div>
            </div>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Technovate Global Solutions delivers technology, AI, solar,
              electrical, procurement, and engineering solutions that help
              businesses and individuals solve real-world problems.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#007AFF] px-7 py-4 font-bold text-white shadow-xl shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-[#0066D6]"
              >
                Start a Project
                <span className="ml-2">→</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 font-bold text-[#071A33] transition hover:border-blue-200 hover:bg-blue-50"
              >
                Explore Our Projects
              </a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-slate-200 pt-7">
              <div>
                <div className="text-2xl font-black text-[#071A33]">
                  {services.length}+
                </div>
                <div className="mt-1 text-xs font-medium text-slate-500">
                  Core Service Areas
                </div>
              </div>

              <div>
                <div className="text-2xl font-black text-[#071A33]">
                  {projects.length}
                </div>
                <div className="mt-1 text-xs font-medium text-slate-500">
                  Portfolio Projects
                </div>
              </div>

              <div>
                <div className="text-2xl font-black text-[#071A33]">
                  360°
                </div>
                <div className="mt-1 text-xs font-medium text-slate-500">
                  Solution Approach
                </div>
              </div>
            </div>
          </div>

          {/* Company capabilities */}
          <div className="relative">
            <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-[#071A33] via-[#0A2850] to-[#007AFF] p-3 shadow-2xl shadow-blue-900/20">
              <div className="rounded-[1.6rem] bg-white/10 p-7 backdrop-blur-sm">
                <div className="mb-16 flex items-center justify-between">
                  <div className="text-sm font-bold text-white">
                    TECHNOVATE
                  </div>

                  <div className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white">
                    Innovation
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: "⌘",
                      title: "Technology",
                      detail: "Software & AI",
                    },
                    {
                      icon: "☀",
                      title: "Energy",
                      detail: "Solar Solutions",
                    },
                    {
                      icon: "⚡",
                      title: "Engineering",
                      detail: "Electrical Services",
                    },
                    {
                      icon: "▣",
                      title: "Supply",
                      detail: "Procurement & Contracts",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl bg-white/10 p-5"
                    >
                      <div className="mb-8 text-3xl">{item.icon}</div>

                      <div className="font-bold text-white">
                        {item.title}
                      </div>

                      <div className="mt-1 text-xs leading-5 text-blue-100">
                        {item.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-7 -left-7 hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-xl sm:block">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Our approach
              </div>

              <div className="mt-1 font-bold text-[#071A33]">
                Ideas · Engineering · Impact
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-[#F5F9FF] py-24">
        <div className="container">
          <div className="max-w-2xl">
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#007AFF]">
              What we do
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#071A33] sm:text-5xl">
              Solutions built around your needs.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              From digital products and artificial intelligence to renewable
              energy, engineering, and procurement, we bring multiple
              capabilities together to solve complex problems.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.number}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A33]/80 via-[#071A33]/10 to-transparent" />

                  <div className="absolute left-6 top-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#007AFF] text-sm font-black text-white shadow-lg">
                      {service.number}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-6 right-6">
                    <div className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                      Technovate Service
                    </div>

                    <h3 className="mt-1 text-2xl font-black text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-7">
                  <p className="leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {service.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm font-medium text-slate-700"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-[#007AFF]">
                          ✓
                        </span>

                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-white py-24">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#007AFF]">
                Selected work
              </div>

              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#071A33] sm:text-5xl">
                Projects that turn ideas into products.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Explore our software, AI, data analytics, education, and
                energy-related projects, including work in development and
                early-stage prototypes.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-1 font-bold text-[#007AFF] hover:underline"
            >
              Discuss a Project
              <span>→</span>
            </a>
          </div>

          {/* Project Filters */}
          <div className="mt-10 flex flex-wrap gap-3">
            {projectFilters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                    isActive
                      ? "bg-[#007AFF] text-white shadow-lg shadow-blue-500/20"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-[#007AFF]"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Project Count */}
          <div className="mt-5 text-sm font-medium text-slate-500">
            Showing {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </div>

          {/* Project Cards */}
          <div className="mt-7 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => {
              const projectIndex = projects.findIndex(
                (item) => item.title === project.title
              );

              const visual = projectVisuals[projectIndex];
              const isDarkVisual = projectIndex % 2 === 0;

              return (
                <article
                  key={project.title}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10"
                >
                  {/* Project Visual */}
                  <div
                    className={`relative min-h-56 overflow-hidden ${
                      isDarkVisual
                        ? "bg-gradient-to-br from-[#071A33] via-[#0A2850] to-[#007AFF]"
                        : "bg-gradient-to-br from-blue-50 via-white to-sky-100"
                    }`}
                  >
                    <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl transition duration-500 group-hover:scale-150" />

                    <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-blue-400/10 blur-3xl transition duration-500 group-hover:scale-125" />

                    <div className="absolute left-6 top-6 flex items-center gap-3">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-xl text-xs font-black text-white shadow-lg ${visual.accent}`}
                      >
                        {visual.mark}
                      </span>

                      <span
                        className={`text-xs font-black uppercase tracking-[0.16em] ${
                          isDarkVisual
                            ? "text-blue-100"
                            : "text-[#007AFF]"
                        }`}
                      >
                        Project {visual.label}
                      </span>
                    </div>

                    <div className="absolute right-6 top-6">
                      <span
                        className={`rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-wider ${
                          isDarkVisual
                            ? "border border-white/20 bg-white/10 text-white"
                            : "border border-blue-100 bg-white text-[#007AFF]"
                        }`}
                      >
                        {project.filterCategory}
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <div
                        className={`text-xs font-bold uppercase tracking-wider ${
                          isDarkVisual
                            ? "text-blue-100"
                            : "text-slate-500"
                        }`}
                      >
                        {project.category}
                      </div>

                      <h3
                        className={`mt-2 text-2xl font-black tracking-tight ${
                          isDarkVisual
                            ? "text-white"
                            : "text-[#071A33]"
                        }`}
                      >
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-xs font-black text-[#0066D6]">
                        {project.status}
                      </span>
                    </div>

                    <p className="mt-5 leading-7 text-slate-600">
                      {project.description}
                    </p>

                    {/* Technology Tags */}
                    <div className="mt-6">
                      <div className="mb-3 text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                        Built with
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-600 transition group-hover:border-blue-100 group-hover:bg-blue-50/50"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Action */}
                    <div className="mt-auto border-t border-slate-100 pt-6">
                      {"href" in project && project.href ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-black text-[#007AFF] transition-all duration-300 group-hover:gap-2"
                        >
                          {"linkLabel" in project && project.linkLabel
                            ? project.linkLabel
                            : "View Project"}
                          <span>→</span>
                        </a>
                      ) : (
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-1 text-sm font-black text-[#007AFF] transition-all duration-300 group-hover:gap-2"
                        >
                          Enquire about this project
                          <span>→</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-[#071A33] py-24 text-white">
        <div className="container grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
              About Technovate
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              One company.
              <span className="block text-[#007AFF]">
                Multiple capabilities.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-300">
              Technovate Global Solutions Limited is a Nigerian technology
              and technical solutions company focused on practical and
              innovative solutions across software, artificial intelligence,
              data, renewable energy, electrical services, procurement, and
              technical supply.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              We combine technology, engineering, and business understanding
              to help clients move from ideas and challenges to useful
              solutions.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {["Understand", "Build", "Deliver"].map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="text-2xl font-black">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="mt-2 text-sm font-semibold text-slate-300">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="bg-[#F5F9FF] py-24">
        <div className="container">
          <div className="max-w-2xl">
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#007AFF]">
              Insights
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#071A33] sm:text-5xl">
              Ideas, technology and practical solutions.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our planned blog will cover technology, AI, renewable energy,
              engineering, business technology, and lessons from our projects.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-blue-100 bg-white p-8">
            <div className="text-sm font-bold text-[#007AFF]">
              COMING SOON
            </div>

            <h3 className="mt-3 text-2xl font-black text-[#071A33]">
              Technovate Insights
            </h3>

            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Practical articles and project insights for businesses,
              developers, students, engineers, and technology enthusiasts.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-white py-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#007AFF] px-7 py-14 text-white shadow-2xl shadow-blue-500/20 sm:px-12 sm:py-16">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#071A33]/20 blur-3xl" />

            <div className="relative">
              <div className="max-w-3xl">
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100">
                  Let's work together
                </div>

                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                  Have a challenge?
                  <span className="block">
                    Let's build the solution.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50">
                  Whether you need software, AI, solar, electrical services,
                  technical procurement, or a complete technology solution,
                  let's discuss what you're building.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://wa.me/2349057971912"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 font-bold text-[#007AFF] transition hover:bg-blue-50"
                  >
                    WhatsApp Us
                    <span className="ml-2">↗</span>
                  </a>

                  <a
                    href="mailto:technovateglobalsolutions@gmail.com"
                    className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white/10"
                  >
                    Send Email
                  </a>
                </div>
              </div>

              <div className="mt-12 grid gap-4 border-t border-white/20 pt-8 sm:grid-cols-2 lg:grid-cols-4">
                <a
                  href="tel:+2349057971912"
                  className="rounded-2xl border border-white/15 bg-white/10 p-5 transition hover:bg-white/15"
                >
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-blue-100">
                    Phone
                  </div>

                  <div className="mt-2 font-bold">
                    +234 905 797 1912
                  </div>
                </a>

                <a
                  href="mailto:technovateglobalsolutions@gmail.com"
                  className="rounded-2xl border border-white/15 bg-white/10 p-5 transition hover:bg-white/15"
                >
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-blue-100">
                    Email
                  </div>

                  <div className="mt-2 break-all font-bold">
                    technovateglobalsolutions@gmail.com
                  </div>
                </a>

                <a
                  href="https://wa.me/2349057971912"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/15 bg-white/10 p-5 transition hover:bg-white/15"
                >
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-blue-100">
                    WhatsApp
                  </div>

                  <div className="mt-2 font-bold">
                    +234 905 797 1912
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/technovateglobalsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/15 bg-white/10 p-5 transition hover:bg-white/15"
                >
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-blue-100">
                    Facebook
                  </div>

                  <div className="mt-2 font-bold">
                    Technovate Global Solutions
                  </div>
                </a>
              </div>

              <div className="mt-5 flex items-center gap-2 text-sm text-blue-100">
                <span>📍</span>
                <span>Lokoja, Kogi State, Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="container flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="font-black tracking-tight text-[#071A33]">
              TECHNOVATE GLOBAL SOLUTIONS LIMITED
            </div>

            <p className="mt-1 text-sm text-slate-500">
              Technology. Energy. Engineering. Solutions.
            </p>
          </div>

          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} Technovate Global Solutions Ltd.
            All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

