import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
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

// ===== SOCIAL LINKS =====
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
    icon: FaEnvelope,
    href: "https://mail.google.com/mail/u/0/#inbox",
    label: "Email",
  },
];

// ===== HERO COMPONENT =====
const Hero = () => {
  const roles = [
    "Frontend & Full-Stack Developer",
    "React & Next.js Specialist",
    "MERN Stack Engineer",
    "Web Application Developer",
  ];
  const typedText = useTypingEffect(roles);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center
                 justify-center bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

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
              Available for freelance projects
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              Hi, I'm{" "}
              <span
                className="text-transparent bg-clip-text
                           bg-gradient-to-r from-blue-400
                           via-purple-400 to-cyan-400"
              >
                Muhammad Naveed
              </span>
            </h1>

            {/* Subtitle / Role */}
            <p className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">
              Frontend & Full-Stack Web Developer
            </p>

            {/* Typing */}
            <div className="text-xl md:text-2xl font-medium mb-6 h-10">
              <span className="text-gray-400">Specializing in </span>
              <span
                className="text-transparent bg-clip-text
                           bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold"
              >
                {typedText}
              </span>
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="text-blue-400"
              >
                |
              </motion.span>
            </div>

            {/* Client-Focused Description */}
            <p
              className="text-gray-300 text-base md:text-lg leading-relaxed mb-6
                         max-w-xl mx-auto lg:mx-0"
            >
              I build modern, responsive websites and web applications using{" "}
              <span className="text-white font-semibold">React, Next.js, Node.js</span>, and{" "}
              <span className="text-white font-semibold">MongoDB</span>. With 3+ years of professional experience, I help businesses and startups turn ideas and designs into fast, user-friendly web experiences.
            </p>

            {/* Experience Highlight Pill */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8 text-xs text-gray-400">
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">⚡ 3+ Years Experience</span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">📍 Dubai, UAE</span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">🚀 React & Next.js</span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">🛡️ Full-Stack MERN</span>
            </div>

            {/* Buttons */}
            <div
              className="flex flex-wrap gap-4 justify-center
                         lg:justify-start mb-10"
            >
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-blue-500
                           to-cyan-400 text-white font-semibold
                           rounded-xl shadow-lg shadow-blue-500/25
                           hover:shadow-xl hover:shadow-blue-500/40
                           hover:-translate-y-0.5 transition-all
                           duration-300"
              >
                View My Work →
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-8 py-4
                           bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-white
                           font-semibold rounded-xl hover:bg-purple-500/30
                           hover:border-purple-400 hover:-translate-y-0.5
                           transition-all duration-300 shadow-lg shadow-purple-500/10"
              >
                <FaEnvelope size={16} className="text-purple-400" />
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
                  className="w-12 h-12 rounded-xl bg-white/5 border
                             border-white/10 flex items-center
                             justify-center text-gray-400
                             hover:text-white hover:bg-white/10
                             hover:-translate-y-1 transition-all
                             duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* ===== RIGHT: Profile Image ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Border Ring */}
                <div
                  className="absolute -inset-1 rounded-full
                             bg-gradient-to-r from-blue-500
                             via-purple-500 to-cyan-500 opacity-50"
                />

                {/* Image Container */}
                <div
                  className="relative w-64 h-64 md:w-72 md:h-72
                             rounded-full overflow-hidden border-4
                             border-gray-950"
                >
                  <img
                    src={Portfolio}
                    alt="Muhammad Naveed"
                    className="w-full h-full object-cover
                               object-top"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;