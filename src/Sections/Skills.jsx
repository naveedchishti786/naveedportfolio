import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiNpm,
  SiVercel,
  SiNetlify,
  SiRedux,
} from "react-icons/si";
import {
  FaServer,
  FaDatabase,
  FaTools,
  FaCss3Alt,
  FaBullhorn,
  FaSearch,
  FaGoogle,
  FaFacebook,
  FaChartLine,
  FaRobot,
  FaShieldAlt,
  FaLock,
  FaCheckCircle,
} from "react-icons/fa";
import { HiSparkles, HiCode, HiDesktopComputer } from "react-icons/hi";

// ===== SKILLS DATA (Grouped without arbitrary percentages) =====
const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: <HiDesktopComputer />,
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    description: "Building fast, accessible, and responsive user interfaces with modern frameworks",
    skills: [
      { name: "React.js", icon: <SiReact />, tag: "Component Architecture", color: "text-cyan-400" },
      { name: "Next.js", icon: <SiNextdotjs />, tag: "SSR & Static Generation", color: "text-white" },
      { name: "JavaScript", icon: <SiJavascript />, tag: "ES6+ Modern JS", color: "text-yellow-400" },
      { name: "TypeScript", icon: <SiTypescript />, tag: "Type-Safe Code", color: "text-blue-400" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, tag: "Utility-First Styling", color: "text-cyan-300" },
      { name: "Redux Toolkit", icon: <SiRedux />, tag: "Global State Management", color: "text-purple-400" },
      { name: "HTML5", icon: <SiHtml5 />, tag: "Semantic Markup", color: "text-orange-500" },
      { name: "CSS3", icon: <FaCss3Alt />, tag: "Animations & Flex/Grid", color: "text-blue-500" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: <FaServer />,
    color: "from-green-500 to-emerald-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    description: "Designing scalable server-side architectures, REST APIs, and business logic",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, tag: "Server Runtime", color: "text-green-500" },
      { name: "Express.js", icon: <SiExpress />, tag: "Web Application Framework", color: "text-gray-300" },
      { name: "REST APIs", icon: <HiCode />, tag: "Endpoint Architecture", color: "text-blue-400" },
      { name: "Auth & Security", icon: <FaLock />, tag: "JWT & Session Management", color: "text-yellow-400" },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: <FaDatabase />,
    color: "from-purple-500 to-pink-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    description: "Modeling data structures, queries, and reliable data storage engines",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, tag: "NoSQL Database & Mongoose", color: "text-green-400" },
      { name: "MySQL", icon: <SiMysql />, tag: "Relational Schemas", color: "text-blue-400" },
      { name: "PostgreSQL", icon: <SiPostgresql />, tag: "Structured Queries", color: "text-blue-300" },
      { name: "Firebase", icon: <SiFirebase />, tag: "Realtime Store & Storage", color: "text-yellow-500" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Deployment",
    icon: <FaTools />,
    color: "from-orange-500 to-amber-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    description: "Professional developer workflow, version control, and cloud deployment pipelines",
    skills: [
      { name: "Git", icon: <SiGit />, tag: "Version Control", color: "text-orange-500" },
      { name: "GitHub", icon: <SiGithub />, tag: "Collaboration & CI/CD", color: "text-white" },
      { name: "Postman", icon: <SiPostman />, tag: "API Testing & Docs", color: "text-orange-400" },
      { name: "Figma", icon: <SiFigma />, tag: "Design to Clean Code", color: "text-pink-400" },
      { name: "Vercel", icon: <SiVercel />, tag: "Production Edge Hosting", color: "text-white" },
      { name: "Netlify", icon: <SiNetlify />, tag: "Cloud Deployment", color: "text-cyan-400" },
      { name: "npm / Vite", icon: <SiNpm />, tag: "Build Tooling", color: "text-red-500" },
    ],
  },
  {
    id: "additional",
    title: "Marketing & Strategy",
    icon: <FaBullhorn />,
    color: "from-indigo-500 to-violet-400",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/20",
    description: "Value-adding competencies that ensure websites convert visitors and stay secure",
    skills: [
      { name: "Technical SEO", icon: <FaSearch />, tag: "Search Rankings & Speed", color: "text-blue-400" },
      { name: "Google & Meta Ads", icon: <FaGoogle />, tag: "Traffic & Campaign Setup", color: "text-red-400" },
      { name: "Web Analytics", icon: <FaChartLine />, tag: "Data-Driven Conversions", color: "text-green-400" },
      { name: "Cyber Security", icon: <FaShieldAlt />, tag: "XSS, CSRF & App Hardening", color: "text-yellow-400" },
      { name: "AI Dev Tools", icon: <FaRobot />, tag: "Prompting & Accelerated Dev", color: "text-indigo-400" },
    ],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const activeCategoryData = skillCategories.find(
    (cat) => cat.id === activeCategory
  ) || skillCategories[0];

  return (
    <section
      id="skills"
      className="relative py-24 bg-gray-950 text-white border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">

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
                       bg-cyan-500/10 border border-cyan-500/20
                       rounded-full text-cyan-400 text-xs font-semibold
                       tracking-widest uppercase mb-4"
          >
            <HiSparkles className="text-sm" />
            Technical Stack
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
            Skills &{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r
                         from-cyan-400 via-blue-400 to-purple-400"
            >
              Technologies
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Modern, industry-standard technologies and workflows I use to build robust, scalable web products.
          </p>
        </motion.div>

        {/* ===== CATEGORY TABS ===== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2.5 px-5 py-3
                rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300
                ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
                }`}
            >
              <span className="text-base sm:text-lg">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* ===== SKILLS DISPLAY (Grouped Cards with tags, NO arbitrary percentages) ===== */}
        <motion.div
          key={activeCategory}
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="text-center mb-10 max-w-xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              {activeCategoryData.title}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              {activeCategoryData.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {activeCategoryData.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className={`group relative p-5 rounded-2xl border
                  bg-white/[0.02] border-white/10
                  hover:border-white/20 hover:bg-white/[0.05]
                  hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex items-center gap-4">
                  <div className={`text-3xl ${skill.color} p-2 rounded-xl bg-white/5 group-hover:scale-110 transition-transform`}>
                    {skill.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-sm sm:text-base group-hover:text-blue-400 transition-colors truncate">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-gray-400 font-medium truncate mt-0.5">
                      {skill.tag}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ===== QUICK OVERVIEW PILL SECTION ===== */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2 text-cyan-400 font-semibold text-sm">
                <FaCheckCircle /> Modern Architecture
              </div>
              <p className="text-xs text-gray-400">
                Component reusability, clean file organization, and modular codebases.
              </p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2 text-blue-400 font-semibold text-sm">
                <FaCheckCircle /> Performance First
              </div>
              <p className="text-xs text-gray-400">
                Optimized asset bundling, minimal re-renders, and fast Core Web Vitals.
              </p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2 text-purple-400 font-semibold text-sm">
                <FaCheckCircle /> End-to-End Delivery
              </div>
              <p className="text-xs text-gray-400">
                From initial client specifications and UI wireframes to live deployment.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;