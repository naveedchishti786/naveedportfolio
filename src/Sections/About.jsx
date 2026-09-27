import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGraduationCap,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaCode,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiGit,
} from "react-icons/si";

// ===== DATA =====
const infoCards = [
  {
    icon: <FaGraduationCap />,
    title: "Education",
    subtitle: "BS Computer Science",
    description:
      "Solid foundation in CS fundamentals and software engineering from Foundation University",
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    icon: <FaLaptopCode />,
    title: "Frontend",
    subtitle: "React & Next.js",
    description: "Building responsive, interactive user interfaces",
    color: "from-purple-500 to-pink-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    icon: <FaServer />,
    title: "Backend",
    subtitle: "Node.js & Express",
    description: "Creating robust APIs and server-side logic",
    color: "from-green-500 to-emerald-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
  {
    icon: <FaDatabase />,
    title: "Database",
    subtitle: "MongoDB & SQL",
    description: "Designing efficient database architectures",
    color: "from-orange-500 to-yellow-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
  },
];

const techStack = [
  { icon: <SiReact />, name: "React", color: "text-cyan-400" },
  { icon: <SiNodedotjs />, name: "Node.js", color: "text-green-500" },
  { icon: <SiMongodb />, name: "MongoDB", color: "text-green-400" },
  { icon: <SiExpress />, name: "Express", color: "text-gray-400" },
  { icon: <SiJavascript />, name: "JavaScript", color: "text-yellow-400" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "text-cyan-300" },
  { icon: <SiGit />, name: "Git", color: "text-orange-500" },
];

const timeline = [
  {
    year: "2023 - Present",
    title: "Software Developer",
    place: "Chanzeleze Laundry — Dubai",
    description:
      "Currently working as a software developer, designed and developed the complete company website, managing digital presence, and building internal tools to streamline business operations",
    current: true,
  },
  {
    year: "2025 - 2026",
    title: "Cyber Security Course (Completed)",
    place: "Xaltius Academy — Singapore",
    description:
      "6-month intensive program covering network security, ethical hacking, vulnerability assessment, penetration testing, and security best practices",
    current: false,
  },
  {
    year: "2026",
    title: "Digital Marketing Course (Completed)",
    place: "Professional Certification",
    description:
      "Comprehensive training in digital marketing strategies, SEO, social media marketing, and online campaigns to enhance brand presence.",
    current: false,
  },
  {
    year: "2024 - 2025",
    title: "MERN Stack Course (Completed)",
    place: "PNY Trainings — Arfa Karim Tower Branch, Lahore — pakistan",
    description:
      "6-month intensive hands-on training in MongoDB, Express, React, and Node.js with real-world project development",
    current: false,
  },
  {
    year: "2018 - 2022",
    title: "BS Computer Science (Completed)",
    place: "Foundation University Islamabad — pakistan",
    description:
      "Core CS concepts, algorithms, data structures, software engineering, and final year project development",
    current: false,
  },
];

// ===== ANIMATION VARIANTS =====
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ===== MARQUEE COMPONENT =====
const MarqueeRow = ({ items, direction = "left", speed = 25 }) => {
  const duplicated = [...items, ...items];

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="absolute left-0 top-0 bottom-0 w-16 z-10
                    bg-gradient-to-r from-gray-950 to-transparent
                    pointer-events-none"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-16 z-10
                    bg-gradient-to-l from-gray-950 to-transparent
                    pointer-events-none"
      />

      <motion.div
        className="flex gap-4 w-max"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        style={{ willChange: "transform" }}
      >
        {duplicated.map((tech, index) => (
          <div
            key={index}
            className="group/item flex items-center gap-3 px-5 py-3.5
                       bg-white/[0.03] border border-white/5 rounded-xl
                       hover:bg-white/[0.08] hover:border-white/15
                       transition-all duration-300 cursor-default
                       min-w-[140px] select-none"
          >
            <span
              className={`text-xl ${tech.color}
                group-hover/item:scale-110
                transition-transform duration-300`}
            >
              {tech.icon}
            </span>
            <span
              className="text-gray-300 text-sm font-medium
                         group-hover/item:text-white
                         transition-colors duration-300 whitespace-nowrap"
            >
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const About = () => {
  const firstRow = techStack.slice(0, 4);
  const secondRow = techStack.slice(4, 7);

  return (
    <section
      id="about"
      className="relative py-24 bg-gray-950 text-white overflow-hidden"
    >
      {/* ===== SINGLE SUBTLE BACKGROUND ===== */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2
                    -translate-y-1/2 w-[500px] h-[500px]
                    bg-blue-500/[0.03] rounded-full blur-3xl
                    pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* ===== SECTION HEADER ===== */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block px-4 py-1.5 bg-blue-500/10
                       border border-blue-500/20 rounded-full
                       text-blue-400 text-xs font-semibold
                       tracking-widest uppercase mb-4"
          >
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
            Passionate{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r
                         from-blue-400 via-purple-400 to-cyan-400"
            >
              Developer
            </span>{" "}
            &{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r
                         from-cyan-400 to-blue-400"
            >
              Problem Solver
            </span>
          </h2>
          <div
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400
                        mx-auto rounded-full"
          />
        </motion.div>

        {/* ===== ABOUT TEXT ===== */}
        <motion.div
          className="max-w-4xl mx-auto mb-20 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">
            I'm{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r
                         from-blue-400 to-cyan-400"
            >
              Hafiz Muhammad Naveed
            </span>
            , a Website Developer & Digital Marketer
          </h3>

          <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed mb-8 text-center">
            <p>
              I'm a dedicated{" "}
              <span className="text-white font-medium">
                Website Developer & Digital Marketing Expert
              </span>{" "}
              with a{" "}
              <span className="text-white font-medium">
                BS in Computer Science
              </span>{" "}
              from{" "}
              <span className="text-blue-400 font-medium">
                Foundation University Islamabad
              </span>{" "}
              and{" "}
              <span className="text-blue-400 font-medium">
                3+ years of professional experience
              </span>
              . I'm currently working as a Software Developer at{" "}
              <span className="text-white font-medium">
                Chanzeleze Laundry
              </span>
              , where I designed and developed their complete website and
              continue building internal tools to streamline business
              operations.
            </p>
            <p>
              I've completed an intensive{" "}
              <span className="text-blue-400 font-medium">
                6-month MERN Stack course
              </span>{" "}
              from{" "}
              <span className="text-white font-medium">
                PNY Trainings (Arfa Karim Tower, Lahore)
              </span>{" "}
              and a{" "}
              <span className="text-blue-400 font-medium">
                6-month Cyber Security course
              </span>{" "}
              from{" "}
              <span className="text-white font-medium">
                Xaltius Academy, Singapore
              </span>
              , giving me a strong foundation in both full-stack development and
              security best practices.
            </p>
            <p>
              My passion lies in turning complex problems into simple, elegant,
              and{" "}
              <span className="text-white font-medium">
                secure solutions
              </span>{" "}
              through clean code. I'm also open to{" "}
              <span className="text-white font-medium">
                freelance opportunities
              </span>{" "}
              and{" "}
              <span className="text-white font-medium">
                impactful projects
              </span>{" "}
              where I can contribute my skills while continuously growing as a
              developer.
            </p>
          </div>

          {/* ===== Quick Info Grid ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
            {[
              { label: "Name", value: "Hafiz Muhammad Naveed" },
              { label: "Email", value: "naveedchishti1997@gmail.com" },
              { label: "Current Role", value: "Software Dev @ Chanzeleze laundry" },
              { label: "Experience", value: "3+ Years Professional" },
            ].map((info) => (
              <div
                key={info.label}
                className="group text-center bg-white/[0.03] border
                           border-white/5 rounded-2xl px-4 py-3.5
                           hover:bg-white/[0.06] hover:border-white/10
                           transition-all duration-300
                           overflow-hidden"
              >
                <p
                  className="text-gray-500 text-[10px] sm:text-xs uppercase
                             tracking-wider mb-1 font-medium"
                >
                  {info.label}
                </p>
                <p
                  className="text-gray-200 text-xs sm:text-sm font-medium
                             group-hover:text-blue-400
                             transition-colors duration-300
                             truncate"
                  title={info.value}
                >
                  {info.value}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3
                         bg-gradient-to-r from-blue-500 to-cyan-400
                         text-white text-sm font-semibold rounded-xl
                         hover:shadow-lg hover:shadow-blue-500/25
                         hover:-translate-y-0.5 active:scale-95
                         transition-all duration-300"
            >
              <FaEnvelope size={13} />
              Hire Me
            </a>
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3
                         border border-white/10 text-white
                         text-sm font-semibold rounded-xl
                         hover:bg-white/[0.05] hover:border-white/20
                         hover:-translate-y-0.5 active:scale-95
                         transition-all duration-300"
            >
              <FaCode size={13} />
              View Projects
            </a>
          </div>
        </motion.div>

        {/* ===== WHAT I DO - INFO CARDS ===== */}
        <motion.div
          className="mb-20 md:mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">What I Do</h3>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
              I specialize in building full-stack web applications with modern
              technologies
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {infoCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group ${card.bgColor} ${card.borderColor}
                  border rounded-2xl p-5 sm:p-6
                  hover:-translate-y-1 transition-all duration-300`}
              >
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r
                    ${card.color} flex items-center justify-center
                    text-white text-base sm:text-lg mb-3 sm:mb-4`}
                >
                  {card.icon}
                </div>
                <h4 className="text-white font-bold text-base sm:text-lg mb-1">
                  {card.title}
                </h4>
                <p
                  className={`text-xs sm:text-sm font-medium mb-2
                    text-transparent bg-clip-text bg-gradient-to-r
                    ${card.color}`}
                >
                  {card.subtitle}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ===== TECH STACK MARQUEE ===== */}
        <motion.div
          className="mb-20 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">Tech Stack</h3>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
              Technologies I use to bring ideas to life
            </p>
          </div>

          <div className="space-y-4">
            <MarqueeRow items={firstRow} direction="left" speed={20} />
            <MarqueeRow items={secondRow} direction="right" speed={22} />
          </div>
        </motion.div>

        {/* ===== EXPERIENCE TIMELINE ===== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">My Journey</h3>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
              Education & experience that shaped my career
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex gap-4 sm:gap-6 pb-10 sm:pb-12 last:pb-0"
              >
                {/* Timeline Dot & Line */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2
                      flex-shrink-0
                      ${
                        item.current
                          ? "border-blue-400 bg-blue-400 shadow-lg shadow-blue-500/50"
                          : "border-gray-600 bg-gray-800"
                      }`}
                  />
                  {index < timeline.length - 1 && (
                    <div
                      className="w-px h-full bg-gradient-to-b
                                  from-gray-600 to-transparent mt-2"
                    />
                  )}
                </div>

                {/* Timeline Card */}
                <div
                  className={`group flex-1 px-4 sm:px-6 py-4 sm:py-5
                    rounded-2xl border transition-all duration-300
                    ${
                      item.current
                        ? "bg-blue-500/5 border-blue-500/20 hover:bg-blue-500/10"
                        : "bg-white/[0.02] border-white/5 hover:bg-white/[0.05]"
                    }`}
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 flex-wrap">
                    <span
                      className={`inline-block px-2.5 sm:px-3 py-1 rounded-lg
                        text-[10px] sm:text-xs font-semibold
                        ${
                          item.current
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-white/5 text-gray-400"
                        }`}
                    >
                      {item.year}
                    </span>
                    {item.current && (
                      <span
                        className="inline-flex items-center gap-1.5 px-2 sm:px-2.5
                                   py-1 rounded-lg bg-green-500/15
                                   text-green-400 text-[10px] sm:text-xs font-semibold"
                      >
                        <span
                          className="w-1.5 h-1.5 bg-green-400
                                     rounded-full animate-pulse"
                        />
                        Currently Working
                      </span>
                    )}
                  </div>
                  <h4 className="text-white font-bold text-base sm:text-lg mb-1">
                    {item.title}
                  </h4>
                  <p className="text-blue-400 text-xs sm:text-sm font-medium mb-2">
                    {item.place}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;