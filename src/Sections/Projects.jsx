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
const projects = [
  {
    id: 1,
    title: "Chanzeleze Laundry",
    type: "Business Website & Booking Platform",
    clientTag: "Commercial Client · Dubai, UAE",
    category: "client",
    problem:
      "Business relied on manual phone bookings without a unified online catalog, pricing breakdown, or digital booking system.",
    solution:
      "Engineered a responsive web platform with interactive service menus, automated price estimations, customer booking forms, and WhatsApp inquiry triggers.",
    result:
      "Digitized customer order intake, simplified booking workflows, and strengthened their local UAE market presence.",
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
    problem:
      "Required an authoritative digital presence to present Corporate Tax, VAT Filing, and PRO services to UAE businesses.",
    solution:
      "Developed a corporate website featuring structured service breakdowns, compliance advisory forms, and fast mobile-optimized pages.",
    result:
      "Established brand credibility with corporate clients and increased consultation appointment requests.",
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
    problem:
      "Needed an elegant visual catalog for bespoke fabric collections and an easy way for customers to schedule home measurement visits.",
    solution:
      "Built a high-performance visual catalog featuring curated fabric galleries, mobile-friendly navigation, and direct consultation scheduling.",
    result:
      "Enhanced product presentation quality and made customer consultation inquiries seamless.",
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
    problem:
      "Manual medicine record keeping caused stock discrepancies and delays in tracking prescription orders.",
    solution:
      "Built a full-stack MERN application with automated low-stock inventory alerts, prescription management, and an administrative control panel.",
    result:
      "Prevented stockout incidents through real-time notifications and streamlined fulfillment speed.",
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
    problem:
      "Standard template e-commerce stores often suffered from sluggish filtering and poor mobile checkout responsiveness.",
    solution:
      "Engineered a high-performance React store with real-time multi-criteria filtering, shopping cart state management, and streamlined checkout UI.",
    result:
      "Fast page load times with instant product discovery across mobile and desktop devices.",
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
    problem:
      "Home kitchens needed an independent ordering channel to bypass heavy third-party delivery portal commissions.",
    solution:
      "Developed a mobile-first food ordering platform with dynamic daily menus, cart calculations, and direct order confirmation.",
    result:
      "Direct client ordering channel without intermediate aggregator fees.",
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
    problem:
      "Needed a modern platform to showcase commercial projects, freelance service offerings, and capture business leads.",
    solution:
      "Created an animated, responsive Vite + React web application with dark-mode glassmorphism, structured case studies, and WhatsApp direct contact.",
    result:
      "Sub-second load times, high visual polish, and focused client positioning.",
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
      <div className="relative max-w-7xl mx-auto px-6">
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
            Case Studies & Proof of Work
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
            Featured{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r
                         from-purple-400 via-pink-400 to-blue-400"
            >
              Projects & Client Work
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Real-world digital products built for businesses and startups — showing the problem, solution, and results.
          </p>
        </motion.div>

        {/* ===== FILTER TABS ===== */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {filterCategories.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between bg-white/[0.02] border
                         border-white/10 rounded-3xl overflow-hidden
                         hover:border-purple-500/40 hover:-translate-y-2
                         hover:shadow-2xl hover:shadow-purple-500/10
                         transition-all duration-400"
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
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gray-950/80 backdrop-blur-md border border-white/10 rounded-lg text-xs font-medium text-cyan-300">
                    {project.clientTag}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Title & Type */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-blue-400 mt-1">
                      {project.type}
                    </p>
                  </div>

                  {/* Problem & Solution Breakdown */}
                  <div className="space-y-3 mb-5 text-xs sm:text-sm">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block mb-1">
                        The Challenge
                      </span>
                      <p className="text-gray-400 leading-relaxed text-xs">
                        {project.problem}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-blue-500/[0.04] border border-blue-500/10">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                        What I Built
                      </span>
                      <p className="text-gray-300 leading-relaxed text-xs">
                        {project.solution}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/10">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                        The Result
                      </span>
                      <p className="text-emerald-300/90 leading-relaxed text-xs font-medium">
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
              <div className="p-6 pt-0 flex items-center gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl
                             bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-xs
                             hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
                >
                  <span>Live Website</span>
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl
                               bg-white/5 border border-white/10 text-gray-300 font-semibold text-xs
                               hover:bg-white/10 hover:text-white transition-all duration-200"
                    title="View GitHub Code"
                  >
                    <FaGithub size={14} />
                    <span>Code</span>
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