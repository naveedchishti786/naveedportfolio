import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaWhatsapp,
  FaStar,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiUpwork, SiFiverr } from "react-icons/si";
import Portfolio from "../assets/profile.jpg";

// ===== TYPING ANIMATION HOOK =====
const useTypingEffect = (
  words,
  typingSpeed = 15,
  deletingSpeed = 15,
  pauseTime = 400
) => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText !== currentWord) {
            setDisplayText(currentWord.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          if (displayText === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          } else {
            setDisplayText(currentWord.slice(0, displayText.length - 1));
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return displayText;
};

// ===== SOCIAL & FREELANCE LINKS =====
const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/naveedchishti786",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/naveedchishti",
    label: "LinkedIn",
  },
  {
    icon: SiUpwork,
    href: "https://www.upwork.com",
    label: "Upwork",
  },
  {
    icon: SiFiverr,
    href: "https://www.fiverr.com",
    label: "Fiverr",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/971528865066",
    label: "WhatsApp",
  },
  {
    icon: FaEnvelope,
    href: "mailto:naveedchishti1997@gmail.com",
    label: "Email",
  },
];

// ===== HERO COMPONENT =====
const Hero = () => {
  const roles = [
    "Responsive E-Commerce Stores",
    "High-Performance Web Applications",
    "React & Next.js Platforms",
    "Full-Stack MERN Architecture",
  ];
  const typedText = useTypingEffect(roles);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center
                 justify-center bg-gray-950 pt-24 pb-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ===== LEFT: Text ===== */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Freelance Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6
                         rounded-full bg-emerald-500/10 border border-emerald-500/20
                         text-emerald-400 text-xs font-semibold tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Freelance Projects & Remote Roles
            </motion.div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
              Hi, I'm{" "}
              <span
                className="text-transparent bg-clip-text
                           bg-gradient-to-r from-blue-400
                           via-cyan-400 to-purple-400"
              >
                Muhammad Naveed
              </span>
            </h1>

            {/* Clear Value Proposition: Exactly what Naveed does & who for */}
            <div className="mb-5 max-w-xl mx-auto lg:mx-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
                MERN Stack Developer specializing in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  responsive e-commerce
                </span>{" "}
                and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  fast web applications
                </span>
                .
              </h2>
            </div>

            {/* Typing Subtitle */}
            <div className="text-sm sm:text-base md:text-lg font-medium mb-5 h-8 text-gray-300">
              <span>Building </span>
              <span className="text-cyan-400 font-semibold underline decoration-cyan-500/40 underline-offset-4">
                {typedText}
              </span>
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="text-blue-400 ml-0.5"
              >
                |
              </motion.span>
            </div>

            {/* Client-Focused Elevator Pitch */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
              With 3+ years of professional development experience, I help founders, businesses, and agencies turn Figma designs and product concepts into high-converting, reliable digital products using React, Next.js, Node.js, and MongoDB.
            </p>

            {/* Experience & Trust Badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8 text-xs text-gray-300">
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-1.5">
                <FaStar className="text-amber-400 text-xs" /> 3+ Years Experience
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-1.5">
                <FaMapMarkerAlt className="text-cyan-400 text-xs" /> Dubai, UAE
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">🚀 React & Next.js</span>
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">🛡️ Full-Stack MERN</span>
            </div>

            {/* Immediate Call-to-Action Buttons */}
            <div
              className="flex flex-wrap gap-3.5 justify-center
                         lg:justify-start mb-10"
            >
              <a
                href="#projects"
                className="px-6 sm:px-7 py-3.5 bg-gradient-to-r from-blue-500
                           to-cyan-400 text-white font-semibold text-sm sm:text-base
                           rounded-xl shadow-lg shadow-blue-500/25
                           hover:shadow-xl hover:shadow-blue-500/40
                           hover:-translate-y-0.5 active:scale-95 transition-all
                           duration-300"
              >
                View My Projects →
              </a>

              <a
                href="https://www.upwork.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 sm:px-6 py-3.5
                           bg-emerald-500/10 border border-emerald-500/30 text-emerald-400
                           font-semibold text-xs sm:text-sm rounded-xl hover:bg-emerald-500/20
                           hover:border-emerald-400 hover:-translate-y-0.5 active:scale-95
                           transition-all duration-300 shadow-lg shadow-emerald-500/10"
              >
                <SiUpwork size={16} />
                Hire Me on Upwork ↗
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 sm:px-6 py-3.5
                           bg-white/5 border border-white/10 text-white
                           font-semibold text-xs sm:text-sm rounded-xl hover:bg-white/10
                           hover:border-white/20 hover:-translate-y-0.5 active:scale-95
                           transition-all duration-300"
              >
                <FaEnvelope size={14} className="text-cyan-400" />
                Start a Project
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 justify-center lg:justify-start">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl bg-white/5 border
                             border-white/10 flex items-center
                             justify-center text-gray-400
                             hover:text-white hover:bg-white/10
                             hover:-translate-y-1 transition-all
                             duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* ===== RIGHT: Studio Portrait Visual ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Ambient Glow */}
              <div
                className="absolute -inset-4 rounded-[3rem]
                           bg-gradient-to-r from-blue-500/30
                           via-purple-500/30 to-cyan-500/30 blur-2xl opacity-60 pointer-events-none"
              />

              {/* Studio Frame Card */}
              <div
                className="relative w-72 h-80 sm:w-80 sm:h-96
                           rounded-[2.5rem] overflow-hidden border-2
                           border-white/15 bg-gray-900 shadow-2xl"
              >
                <img
                  src={Portfolio}
                  alt="Muhammad Naveed - MERN Stack Developer"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge: Experience (Top-Right) */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -top-3 -right-3 sm:-right-5 px-3.5 py-2
                           bg-gray-950/90 backdrop-blur-md border border-amber-500/30
                           rounded-2xl shadow-xl flex items-center gap-2"
              >
                <div className="w-6 h-6 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs">
                  <FaStar />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-semibold leading-none">Experience</p>
                  <p className="text-xs font-bold text-white leading-tight">3+ Years</p>
                </div>
              </motion.div>

              {/* Floating Badge: Location (Bottom-Left) */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute bottom-4 -left-4 sm:-left-6 px-3.5 py-2
                           bg-gray-950/90 backdrop-blur-md border border-cyan-500/30
                           rounded-2xl shadow-xl flex items-center gap-2"
              >
                <div className="w-6 h-6 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-semibold leading-none">Location</p>
                  <p className="text-xs font-bold text-white leading-tight">Dubai, UAE</p>
                </div>
              </motion.div>

              {/* Floating Badge: Freelance / Upwork (Bottom-Right) */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-3 right-4 px-3.5 py-2
                           bg-gray-950/90 backdrop-blur-md border border-emerald-500/30
                           rounded-2xl shadow-xl flex items-center gap-2"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-emerald-300">
                  Available for Hire
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;