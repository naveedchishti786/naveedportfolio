import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiJavascript,
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
  FaCertificate,
  FaCss3Alt,
  FaCode,
  FaBullhorn,
  FaSearch,
  FaGoogle,
  FaFacebook,
  FaChartLine,
  FaRobot,
  FaBrain,
} from "react-icons/fa";
import { HiSparkles, HiCode, HiDesktopComputer } from "react-icons/hi";

// ===== SKILLS DATA =====
const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: <HiDesktopComputer />,
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    description: "Building responsive and interactive user interfaces",
    skills: [
      { name: "HTML5", icon: <SiHtml5 />, level: 95, color: "text-orange-500" },
      { name: "CSS3", icon: <FaCss3Alt />, level: 90, color: "text-blue-500" },
      { name: "JavaScript", icon: <SiJavascript />, level: 88, color: "text-yellow-400" },
      { name: "React.js", icon: <SiReact />, level: 85, color: "text-cyan-400" },
      { name: "Next.js", icon: <SiNextdotjs />, level: 70, color: "text-white" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90, color: "text-cyan-300" },
      { name: "Bootstrap", icon: <SiBootstrap />, level: 85, color: "text-purple-500" },
      { name: "Redux", icon: <SiRedux />, level: 75, color: "text-purple-400" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: <FaServer />,
    color: "from-green-500 to-emerald-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    description: "Creating robust server-side applications and APIs",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, level: 85, color: "text-green-500" },
      { name: "Express.js", icon: <SiExpress />, level: 85, color: "text-gray-400" },
      { name: "REST APIs", icon: <HiCode />, level: 88, color: "text-blue-400" },
      { name: "Authentication", icon: <FaServer />, level: 80, color: "text-yellow-500" },
    ],
  },
  {
    id: "database",
    title: "Database Management",
    icon: <FaDatabase />,
    color: "from-purple-500 to-pink-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    description: "Designing and managing efficient database systems",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, level: 85, color: "text-green-400" },
      { name: "MySQL", icon: <SiMysql />, level: 70, color: "text-blue-400" },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 65, color: "text-blue-300" },
      { name: "Firebase", icon: <SiFirebase />, level: 75, color: "text-yellow-500" },
    ],
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    icon: <FaBullhorn />,
    color: "from-orange-500 to-amber-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    description: "Strategies to increase online visibility and drive traffic",
    skills: [
      { name: "SEO", icon: <FaSearch />, level: 85, color: "text-blue-400" },
      { name: "Google Ads", icon: <FaGoogle />, level: 90, color: "text-red-500" },
      { name: "Meta Ads", icon: <FaFacebook />, level: 88, color: "text-blue-600" },
      { name: "Analytics", icon: <FaChartLine />, level: 80, color: "text-green-500" },
    ],
  },
  {
    id: "ai_tools",
    title: "AI Tools & Prompting",
    icon: <FaRobot />,
    color: "from-indigo-500 to-violet-400",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/20",
    description: "Leveraging AI to enhance productivity and build smart solutions",
    skills: [
      { name: "ChatGPT", icon: <FaBrain />, level: 90, color: "text-green-500" },
      { name: "GitHub Copilot", icon: <SiGithub />, level: 85, color: "text-white" },
      { name: "Gemini", icon: <HiSparkles />, level: 85, color: "text-blue-400" },
      { name: "Cursor AI", icon: <FaCode />, level: 80, color: "text-indigo-400" },
    ],
  },
];

const tools = [
  { name: "VS Code", icon: <FaCode />, color: "text-blue-500" },
  { name: "Git", icon: <SiGit />, color: "text-orange-500" },
  { name: "GitHub", icon: <SiGithub />, color: "text-white" },
  { name: "Postman", icon: <SiPostman />, color: "text-orange-400" },
  { name: "Figma", icon: <SiFigma />, color: "text-pink-400" },
  { name: "npm", icon: <SiNpm />, color: "text-red-500" },
  { name: "Vercel", icon: <SiVercel />, color: "text-white" },
  { name: "Netlify", icon: <SiNetlify />, color: "text-cyan-400" },
];

const certifications = [
  {
    title: "Digital Marketing Course",
    issuer: "Professional Certification",
    date: "2026",
    color: "from-purple-500 to-pink-400",
  },
  {
    title: "Cyber Security",
    issuer: "Certified Course",
    date: "2026",
    color: "from-yellow-500 to-orange-400",
  },
  {
    title: "MERN Stack Development",
    issuer: "Certified Course",
    date: "2025",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2023",
    color: "from-green-500 to-emerald-400",
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const activeCategoryData = skillCategories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <section
      id="skills"
      className="relative py-24 bg-gray-950 text-white"
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
            My Expertise
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Skills &{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r
                         from-cyan-400 via-blue-400 to-purple-400"
            >
              Technologies
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit of modern technologies I use to bring
            ideas to life.
          </p>
        </motion.div>

        {/* ===== CATEGORY TABS ===== */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-3 px-6 py-3.5
                rounded-2xl text-sm font-semibold transition-all duration-300
                ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
                }`}
            >
              <span className="text-lg">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* ===== SKILLS DISPLAY ===== */}
        <motion.div
          key={activeCategory}
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-center mb-10">
            <div
              className={`inline-flex items-center justify-center w-16
                h-16 rounded-2xl bg-gradient-to-r ${activeCategoryData.color}
                text-white text-2xl mb-4`}
            >
              {activeCategoryData.icon}
            </div>
            <h3 className="text-2xl font-bold mb-2">
              {activeCategoryData.title}
            </h3>
            <p className="text-gray-400">
              {activeCategoryData.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeCategoryData.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative p-5 rounded-2xl border
                  ${activeCategoryData.bgColor}
                  ${activeCategoryData.borderColor}
                  hover:border-white/20 transition-all duration-300`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`text-3xl ${skill.color}`}>
                    {skill.icon}
                  </div>

                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">
                      {skill.name}
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400">
                        Proficiency
                      </span>
                      <span
                        className={`text-xs font-bold
                        ${
                          skill.level >= 85
                            ? "text-green-400"
                            : skill.level >= 70
                            ? "text-yellow-400"
                            : "text-orange-400"
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r
                      ${activeCategoryData.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.05,
                    }}
                  />
                </div>

                {/* Level Badge */}
                <div
                  className={`absolute top-3 right-3 px-2 py-1
                  rounded-lg text-[10px] font-bold uppercase
                  tracking-wider
                  ${
                    skill.level >= 85
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : skill.level >= 70
                      ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      : "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                  }`}
                >
                  {skill.level >= 85
                    ? "Expert"
                    : skill.level >= 70
                    ? "Advanced"
                    : "Intermediate"}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ===== TOOLS ===== */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <div
              className="inline-flex items-center justify-center w-14
                         h-14 rounded-2xl bg-gradient-to-r
                         from-orange-500 to-red-500 text-white
                         text-xl mb-4"
            >
              <FaTools />
            </div>
            <h3 className="text-2xl font-bold mb-2">Tools & Software</h3>
            <p className="text-gray-400">
              Development tools I use daily
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center gap-3 p-5
                           bg-white/[0.02] border border-white/5
                           rounded-2xl hover:bg-white/[0.06]
                           hover:border-white/15 transition-all
                           duration-300"
              >
                <span className={`text-3xl ${tool.color}`}>
                  {tool.icon}
                </span>
                <span className="text-gray-400 text-xs font-medium text-center">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ===== CERTIFICATIONS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <div
              className="inline-flex items-center justify-center w-14
                         h-14 rounded-2xl bg-gradient-to-r
                         from-yellow-500 to-amber-500 text-white
                         text-xl mb-4"
            >
              <FaCertificate />
            </div>
            <h3 className="text-2xl font-bold mb-2">Certifications</h3>
            <p className="text-gray-400">
              Professional certifications and achievements
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="relative p-6 bg-white/[0.02] border
                           border-white/5 rounded-2xl
                           hover:bg-white/[0.05] hover:border-white/15
                           transition-all duration-300"
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1
                    rounded-t-2xl bg-gradient-to-r ${cert.color}`}
                />

                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl
                      bg-gradient-to-r ${cert.color} flex items-center
                      justify-center text-white text-lg`}
                  >
                    <FaCertificate />
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-2">
                      {cert.issuer}
                    </p>
                    <span
                      className="inline-block px-2.5 py-1 bg-white/5
                                 border border-white/10 rounded-lg
                                 text-xs text-gray-400 font-medium"
                    >
                      {cert.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;