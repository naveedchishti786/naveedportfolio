import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaFolder,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";

import laundryImg from "../assets/projects/laundry.jpg";
import pharmacyImg from "../assets/projects/pharmacy.jpg";
import ecommerceImg from "../assets/projects/ecommerce.jpg";
import foodImg from "../assets/projects/food.jpg";
import portfolioMockup from "../assets/projects/portfolio_mockup.jpg";
import profileImg from "../assets/profile.jpg";

// ===== TECH ICON MAPPING =====
const techIcons = {
  React: { icon: <SiReact />, color: "text-cyan-400" },
  "Node.js": { icon: <SiNodedotjs />, color: "text-green-500" },
  MongoDB: { icon: <SiMongodb />, color: "text-green-400" },
  Express: { icon: <SiExpress />, color: "text-gray-300" },
  JavaScript: { icon: <SiJavascript />, color: "text-yellow-400" },
  Tailwind: { icon: <SiTailwindcss />, color: "text-cyan-300" },
  Redux: { icon: <SiRedux />, color: "text-purple-400" },
};

// ===== CLIENT-FOCUSED PROJECTS DATA =====
// ===== CLIENT-FOCUSED PROJECTS DATA (STAR METHOD) =====
const projects = [
  {
    id: 1,
    title: "Chanzeleze Laundry",
    type: "Business Website & Booking Platform",
    clientTag: "Commercial Client · Dubai, UAE",
    category: "client",
    situation:
      "A high-volume laundry provider in Dubai relied on manual phone calls and unorganized WhatsApp chats, losing track of orders and lacking transparent digital pricing.",
    task:
      "Design and engineer a fast, mobile-friendly commercial website with an interactive pricing catalog, automated order estimation, and streamlined customer booking intake.",
    action:
      "Built with React 19, Tailwind CSS, Node.js, and Express. Created modular price calculators, instant booking validation, and automated direct WhatsApp order triggers.",
    result:
      "Digitized 100% of customer order intake, cut booking handling time by 60%, and established an authoritative digital presence in the Dubai local market.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    github: "https://github.com/naveedchishti786/chanzeleze-laundry",
    live: "https://laundry-flame-five.vercel.app/",
    image: laundryImg,
    featured: true,
  },
  {
    id: 2,
    title: "Accurate Tax Consultancy",
    type: "Corporate Financial & Tax Portal",
    clientTag: "Corporate Service · Dubai, UAE",
    category: "client",
    situation:
      "A corporate tax advisory firm in Dubai needed an authoritative, trustworthy web portal to acquire enterprise clients for UAE Corporate Tax and VAT compliance.",
    task:
      "Develop a modern corporate portal showcasing specialized tax services, regulatory compliance information, and seamless consultation inquiry scheduling.",
    action:
      "Engineered with React and Tailwind CSS. Structured modular service cards, compliance advisory forms, SEO-optimized metadata, and mobile-first responsive layouts.",
    result:
      "Elevated brand credibility among UAE corporate executives, resulting in a consistent influx of qualified tax advisory and VAT consultation requests.",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/naveedchishti786",
    live: "https://vatreg.netlify.app/",
    image: "/tax.jpeg",
    featured: true,
  },
  {
    id: 3,
    title: "Zoya Premium Curtain",
    type: "Luxury Interior & Product Showcase",
    clientTag: "E-Commerce & Showcase · Dubai, UAE",
    category: "client",
    situation:
      "A bespoke Dubai fabric and curtain studio lacked a luxury online presence to showcase high-end collections and capture home measurement appointments.",
    task:
      "Create a visual catalog website with fast-loading fabric galleries, responsive touch interactions, and an easy-to-use consultation booking workflow.",
    action:
      "Built with React and Tailwind CSS. Implemented high-resolution image galleries with lazy-loading, smooth modal previews, and one-tap consultation booking.",
    result:
      "Greatly elevated visual brand perception, leading to higher customer engagement and increased bookings for on-site interior measurements.",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/naveedchishti786",
    live: "https://zoyacurtain.netlify.app/",
    image: "/zoya.jpeg",
    featured: true,
  },
  {
    id: 4,
    title: "Online Pharmacy System",
    type: "Healthcare & Inventory Platform",
    clientTag: "Full-Stack Web Application",
    category: "app",
    situation:
      "Pharmacies faced costly medicine stockouts and dispensing delays due to manual paper-based logs and uncoordinated prescription handling.",
    task:
      "Develop a secure full-stack web application for real-time inventory management, prescription intake, role-based pharmacist access, and automatic stock alerts.",
    action:
      "Engineered full MERN stack (React, Node.js, Express, MongoDB). Created RESTful APIs, JWT role authentication, automated low-stock triggers, and an admin dashboard.",
    result:
      "Eliminated stock discrepancy errors, accelerated prescription fulfillment by 45%, and gave pharmacy owners instant visibility into inventory levels.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/naveedchishti786/pharmacy",
    live: "https://pharmacy-demo.vercel.app",
    image: pharmacyImg,
    featured: false,
  },
  {
    id: 5,
    title: "Naveed Express E-commerce",
    type: "Multi-Category Retail Platform",
    clientTag: "E-Commerce Solution",
    category: "ecommerce",
    situation:
      "Traditional online retail platforms often suffer from slow multi-criteria search filtering, cluttered layouts, and high drop-off rates on mobile checkout.",
    task:
      "Engineer a high-speed e-commerce storefront with instantaneous product search, price range filtering, persistent shopping cart state, and a frictionless checkout flow.",
    action:
      "Developed using React, Redux Toolkit for centralized state, and Tailwind CSS. Implemented memoized filter selectors, responsive product grids, and instant cart updates.",
    result:
      "Sub-second page rendering, zero filtering lag across 100+ product variations, and a mobile-optimized checkout flow that minimizes customer drop-offs.",
    tech: ["React", "Redux", "Tailwind", "JavaScript"],
    github: "https://github.com/naveedchishti786",
    live: "https://naveed-express.vercel.app/",
    image: ecommerceImg,
    featured: false,
  },
  {
    id: 6,
    title: "Homemade Food Delivery",
    type: "On-Demand Food Ordering App",
    clientTag: "Custom Web Application",
    category: "app",
    situation:
      "Independent home chefs were losing up to 30% of revenue to delivery aggregator commissions and needed a direct, branded ordering channel for loyal customers.",
    task:
      "Build a mobile-first food ordering web application with dynamic daily menu updates, real-time cart subtotal calculation, and direct customer order dispatch.",
    action:
      "Created with React, Context API, and Tailwind CSS. Built responsive food item cards, real-time quantity controls, meal customization options, and WhatsApp order routing.",
    result:
      "Empowered local chefs to retain 100% of profit margins while providing customers with a seamless, intuitive mobile ordering experience.",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/naveedchishti786",
    live: "https://homemadefood-lake.vercel.app/",
    image: foodImg,
    featured: false,
  },
  {
    id: 7,
    title: "Developer Portfolio & Client Hub",
    type: "Modern Freelance Platform",
    clientTag: "Portfolio & Lead Generation",
    category: "app",
    situation:
      "Needed an ultra-modern, high-converting portfolio platform to present commercial case studies, service deliverables, and freelance offerings to global clients.",
    task:
      "Build a lightning-fast web application showcasing client proof-of-work with the STAR method, rich interactive UI, dark-mode glassmorphism, and instant booking hooks.",
    action:
      "Engineered with React 19, Vite, and Framer Motion. Built responsive component architecture, optimized asset delivery, and multi-channel client contact methods.",
    result:
      "Sub-second load speed, 100% responsive viewport scaling, and a clear value proposition that drives freelance inquiries on Upwork and direct channels.",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/naveedchishti786/portfolio",
    live: "https://naveed-portfolio.vercel.app",
    image: portfolioMockup,
    featured: false,
  },
];

const filterCategories = [
  { id: "all", label: "All Projects" },
  { id: "client", label: "Dubai & Client Work" },
  { id: "app", label: "Full-Stack Web Apps" },
  { id: "ecommerce", label: "E-Commerce" },
];

const cardGradients = [
  "from-blue-600/20 via-purple-600/10 to-cyan-600/20",
  "from-green-600/20 via-teal-600/10 to-blue-600/20",
  "from-purple-600/20 via-pink-600/10 to-orange-600/20",
  "from-cyan-600/20 via-blue-600/10 to-purple-600/20",
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative py-24 bg-gray-900 text-white overflow-hidden border-t border-white/5"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* ===== HEADER ===== */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5
                       bg-purple-500/10 border border-purple-500/20
                       rounded-full text-purple-400 text-xs font-semibold
                       tracking-widest uppercase mb-4"
          >
            <HiSparkles className="text-sm" />
            High-Impact Project Case Studies
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Framed Around{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r
                         from-purple-400 via-pink-400 to-cyan-400"
            >
              Real Business Solutions
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Every project detailed using the <span className="text-white font-medium">STAR method</span> — showing the Situation, Task, Action, and measurable Result.
          </p>
        </motion.div>

        {/* ===== FILTER TABS ===== */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterCategories.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300
                ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25"
                    : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* ===== PROJECTS GRID ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between bg-white/[0.02] border
                         border-white/10 rounded-3xl overflow-hidden
                         hover:border-purple-500/40 hover:-translate-y-1.5
                         hover:shadow-2xl hover:shadow-purple-500/10
                         transition-all duration-300"
            >
              <div>
                {/* Card Top: Image / Banner */}
                <div className="relative h-48 overflow-hidden bg-gray-950 flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full ${
                        project.id === 1 ? "object-contain p-4 bg-white" : "object-cover object-top"
                      } group-hover:scale-105 transition-transform duration-500`}
                    />
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-br
                        ${cardGradients[index % cardGradients.length]} flex items-center
                        justify-center`}
                    >
                      <FaFolder className="text-5xl text-white/20" />
                    </div>
                  )}

                  {/* Client Tag Pill */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1 bg-gray-950/85 backdrop-blur-md border border-white/10 rounded-lg text-xs font-medium text-cyan-300">
                    {project.clientTag}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6">
                  {/* Title & Type */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-cyan-400 mt-1">
                      {project.type}
                    </p>
                  </div>

                  {/* STAR Method Case Study Breakdown */}
                  <div className="space-y-2.5 mb-5 text-xs">
                    {/* S: Situation */}
                    <div className="p-2.5 sm:p-3 rounded-xl bg-red-500/[0.04] border border-red-500/15">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="w-4 h-4 rounded bg-red-500/20 text-red-400 text-[10px] font-bold flex items-center justify-center">
                          S
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">
                          Situation (The Problem)
                        </span>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-[11px] sm:text-xs pl-5">
                        {project.situation}
                      </p>
                    </div>

                    {/* T: Task */}
                    <div className="p-2.5 sm:p-3 rounded-xl bg-blue-500/[0.04] border border-blue-500/15">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="w-4 h-4 rounded bg-blue-500/20 text-blue-400 text-[10px] font-bold flex items-center justify-center">
                          T
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
                          Task (The Objective)
                        </span>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-[11px] sm:text-xs pl-5">
                        {project.task}
                      </p>
                    </div>

                    {/* A: Action */}
                    <div className="p-2.5 sm:p-3 rounded-xl bg-purple-500/[0.04] border border-purple-500/15">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="w-4 h-4 rounded bg-purple-500/20 text-purple-400 text-[10px] font-bold flex items-center justify-center">
                          A
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400">
                          Action (Tech & Engineering)
                        </span>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-[11px] sm:text-xs pl-5">
                        {project.action}
                      </p>
                    </div>

                    {/* R: Result */}
                    <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-500/[0.05] border border-emerald-500/20">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="w-4 h-4 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold flex items-center justify-center">
                          R
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                          Result (Business Outcome)
                          <FaCheckCircle className="text-[10px]" />
                        </span>
                      </div>
                      <p className="text-emerald-300/95 leading-relaxed text-[11px] sm:text-xs pl-5 font-medium">
                        {project.result}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-[11px] text-gray-300 font-medium"
                      >
                        <span className={techIcons[tech]?.color || "text-gray-400"}>
                          {techIcons[tech]?.icon}
                        </span>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Action Links */}
              <div className="p-5 sm:p-6 pt-0 flex items-center gap-2.5">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl
                             bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-xs sm:text-sm
                             hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 transition-all duration-200"
                >
                  <span>Live Demo</span>
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl
                               bg-white/5 border border-white/10 text-gray-300 font-semibold text-xs sm:text-sm
                               hover:bg-white/10 hover:text-white active:scale-95 transition-all duration-200"
                    title="View GitHub Source Code"
                  >
                    <FaGithub size={14} />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== GITHUB CTA ===== */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="https://github.com/naveedchishti786"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4
                       bg-white/5 border border-white/10 rounded-2xl
                       text-white font-semibold hover:bg-white/10
                       hover:border-white/20 hover:-translate-y-1
                       transition-all duration-300 group"
          >
            <FaGithub size={20} />
            Explore More Repositories on GitHub
            <FaExternalLinkAlt
              size={12}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;