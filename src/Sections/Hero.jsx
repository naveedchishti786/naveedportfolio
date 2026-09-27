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
    "Website Developer",
    "Digital Marketing Expert",
    "MERN Stack Developer",
    "Full Stack Developer",
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

            {/* Typing */}
            <div className="text-2xl md:text-3xl font-semibold mb-6 h-12">
              <span className="text-gray-300">I'm a </span>
              <span
                className="text-transparent bg-clip-text
                           bg-gradient-to-r from-cyan-400 to-blue-500"
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

            {/* Description */}
            <p
              className="text-gray-400 text-lg leading-relaxed mb-8
                         max-w-xl mx-auto lg:mx-0"
            >
              Passionate{" "}
              <span className="text-white font-medium">
                Website Developer & Digital Marketer
              </span>{" "}
              with a BS in Computer Science. I create modern, responsive
              web applications and execute data-driven digital marketing 
              campaigns to maximize online presence.
            </p>

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
                           bg-white/5 border border-white/10 text-white
                           font-semibold rounded-xl hover:bg-white/10
                           hover:border-white/20 hover:-translate-y-0.5
                           transition-all duration-300"
              >
                <FaEnvelope size={16} />
                Hire Me
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