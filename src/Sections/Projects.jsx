import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaFolder,
  FaStar,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

import laundryImg from "../assets/projects/laundry.jpg";
import profileImg from "../assets/profile.jpg";

// ===== TECH ICON MAPPING =====
const techIcons = {
  React: { icon: <SiReact />, color: "text-cyan-400" },
  "Node.js": { icon: <SiNodedotjs />, color: "text-green-500" },
  MongoDB: { icon: <SiMongodb />, color: "text-green-400" },
  Express: { icon: <SiExpress />, color: "text-gray-400" },
  JavaScript: { icon: <SiJavascript />, color: "text-yellow-400" },
  Tailwind: { icon: <SiTailwindcss />, color: "text-cyan-300" },
};

// ===== YOUR PROJECTS =====
const projects = [
  {
    id: 1,
    title: "Chanzeleze Laundry",
    description:
      "Professional company website for Chanzeleze Laundry featuring service listings, online booking, pricing plans, and customer testimonials.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    github: "https://github.com/naveedchishti786/chanzeleze-laundry",
    live: "https://laundry-flame-five.vercel.app/",
    image: laundryImg,
  },
  {
    id: 2,
    title: "Online Pharmacy System",
    description:
      "Web-based pharmacy management system with prescription handling, inventory tracking, order management, and automated low-stock alerts.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/naveedchishti786/pharmacy",
    live: "https://pharmacy-demo.vercel.app",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio website built with React and Tailwind CSS featuring smooth animations, dark theme, and interactive UI.",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/naveedchishti786/portfolio",
    live: "https://naveed-portfolio.vercel.app",
    image: profileImg,
  },
  {
    id: 4,
    title: "Accurate Tax Consultancy",
    description:
      "Professional business solutions website offering VAT Filing, Corporate Tax, Accounting, and PRO Services in Dubai, UAE.",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/naveedchishti786",
    live: "https://vatreg.netlify.app/",
    image: "/tax.jpeg",
  },
  {
    id: 5,
    title: "Zoya Premium Curtain",
    description:
      "Professional business website for Zoya Premium Curtain featuring elegant curtain collections, services, and online booking.",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/naveedchishti786",
    live: "https://zoyacurtain.netlify.app/",
    image: "/zoya.jpeg",
  },
  {
    id: 6,
    title: "Homemade Food Delivery",
    description:
      "A complete food delivery web application allowing users to browse homemade food items, add to cart, and place orders with a seamless checkout experience.",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/naveedchishti786",
    live: "https://homemadefood-lake.vercel.app/",
  },
  {
    id: 7,
    title: "Naveed Express E-commerce",
    description:
      "A full-featured e-commerce platform offering a wide range of products, featuring a modern UI, product filtering, shopping cart functionality, and responsive design.",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/naveedchishti786",
    live: "https://naveed-express.vercel.app/",
  },
];

// ===== GRADIENT COLORS FOR EACH CARD =====
const cardGradients = [
  "from-blue-600/20 via-purple-600/10 to-cyan-600/20",
  "from-green-600/20 via-teal-600/10 to-blue-600/20",
  "from-purple-600/20 via-pink-600/10 to-orange-600/20",
  "from-cyan-600/20 via-blue-600/10 to-purple-600/20",
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative py-24 bg-gray-900 text-white overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6">
        {/* ===== HEADER ===== */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5
                       bg-purple-500/10 border border-purple-500/20
                       rounded-full text-purple-400 text-xs font-semibold
                       tracking-widest uppercase mb-4"
          >
            <HiSparkles className="text-sm" />
            My Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            My{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r
                         from-purple-400 via-pink-400 to-blue-400"
            >
              Projects
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real-world projects I've built from concept to deployment.
          </p>
        </motion.div>

        {/* ===== PROJECTS GRID ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative bg-white/[0.03] border
                         border-white/10 rounded-3xl overflow-hidden
                         hover:border-purple-500/30 hover:-translate-y-2
                         transition-all duration-500"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Card Top — Image or Gradient with Icon */}
              <div className="relative h-48 overflow-hidden bg-white">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br
                      ${cardGradients[index % cardGradients.length]} flex items-center
                      justify-center`}
                  >
                    <FaFolder className="text-5xl text-white/15" />
                  </div>
                )}

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-gray-950/80
                    backdrop-blur-sm flex items-center justify-center
                    gap-4 transition-all duration-300
                    ${
                      hoveredProject === project.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl bg-white/10 border
                               border-white/20 flex items-center
                               justify-center text-white hover:bg-white
                               hover:text-gray-900 transition-all
                               duration-300"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl bg-gradient-to-r
                               from-purple-500 to-blue-500 flex
                               items-center justify-center text-white
                               transition-all duration-300"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                </div>

                {/* Badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1.5
                             bg-yellow-500/90 rounded-lg flex
                             items-center gap-1.5 text-gray-900
                             text-xs font-bold"
                >
                  <FaStar size={10} />
                  Featured
                </div>
              </div>

              {/* Card Info */}
              <div className="p-6">
                <h4
                  className="text-xl font-bold mb-2
                             group-hover:text-purple-400
                             transition-colors duration-300"
                >
                  {project.title}
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-1.5 px-3
                                 py-1.5 bg-white/5 border
                                 border-white/10 rounded-lg text-xs
                                 font-medium"
                    >
                      <span
                        className={
                          techIcons[tech]?.color || "text-gray-400"
                        }
                      >
                        {techIcons[tech]?.icon}
                      </span>
                      {tech}
                    </span>
                  ))}
                </div>
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
          transition={{ duration: 0.5, delay: 0.3 }}
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
            View More on GitHub
            <FaExternalLinkAlt
              size={12}
              className="group-hover:translate-x-1
                         transition-transform duration-300"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;