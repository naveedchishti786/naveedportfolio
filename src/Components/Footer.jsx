import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaHeart,
  FaArrowUp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Web Development", href: "#" },
    { name: "Frontend Design", href: "#" },
    { name: "Backend APIs", href: "#" },
    { name: "Database Design", href: "#" },
    { name: "Full Stack Apps", href: "#" },
  ],
};

const socialLinks = [
  {
    icon: <FaGithub />,
    href: "https://github.com/naveedchishti786",
    label: "GitHub",
    color: "hover:bg-gray-700",
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://linkedin.com/in/naveedchishti",
    label: "LinkedIn",
    color: "hover:bg-blue-600",
  },
  {
    icon: <FaWhatsapp />,
    href: "https://wa.me/971528865066",
    label: "WhatsApp",
    color: "hover:bg-green-600",
  },
];

const contactInfo = [
  {
    icon: <FaEnvelope />,
    text: "naveedchishti1997@gmail.com",
    href: "mailto:naveedchishti1997@gmail.com",
  },
  {
    icon: <FaPhone />,
    text: "+971 52 886 5066",
    href: "tel:+971528865066",
  },
  {
    icon: <FaMapMarkerAlt />,
    text: "Dubai, UAE",
    href: "#",
  },
];

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <>
      <footer className="relative bg-gray-950 text-gray-300 overflow-hidden">
        {/* ===== TOP GRADIENT BORDER ===== */}
        <div
          className="absolute top-0 left-0 w-full h-[2px] 
                        bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400"
        />

        {/* ===== BACKGROUND GLOW EFFECTS ===== */}
        <div
          className="absolute top-0 left-1/4 w-96 h-96 
                        bg-blue-500/5 rounded-full blur-3xl"
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 
                        bg-purple-500/5 rounded-full blur-3xl"
        />

        {/* ===== CTA SECTION ===== */}
        <div className="relative border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div
              className="flex flex-col md:flex-row items-center 
                            justify-between gap-6 bg-gradient-to-r 
                            from-blue-500/10 to-purple-500/10 
                            border border-white/5 rounded-2xl p-8"
            >
              <div>
                <h3 className="text-white text-xl md:text-2xl font-bold">
                  Let's Work Together 🚀
                </h3>
                <p className="text-gray-400 mt-1 text-sm md:text-base">
                  Have a project in mind? I'd love to hear about it.
                </p>
              </div>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-cyan-400 
                           text-white font-semibold rounded-xl 
                           hover:shadow-lg hover:shadow-blue-500/25 
                           hover:-translate-y-0.5 active:scale-95 
                           transition-all duration-300 whitespace-nowrap"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </div>

        {/* ===== MAIN FOOTER CONTENT ===== */}
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1: Brand Info */}
            <div className="lg:col-span-1">
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, "#hero")}
                className="group flex items-center gap-3 mb-5"
              >
                <div
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 
                                via-purple-500 to-cyan-400 rounded-xl 
                                flex items-center justify-center text-white 
                                font-bold text-lg transition-all duration-300
                                group-hover:rounded-2xl group-hover:scale-105 
                                group-hover:shadow-lg group-hover:shadow-blue-500/30"
                >
                  MN
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-tight">
                    Muhammad{" "}
                    <span
                      className="text-transparent bg-clip-text 
                                     bg-gradient-to-r from-blue-400 to-cyan-400"
                    >
                      Naveed
                    </span>
                  </p>
                  <p
                    className="text-[11px] text-gray-500 font-medium 
                                tracking-wider uppercase"
                  >
                    MERN Stack Developer
                  </p>
                </div>
              </a>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Passionate MERN Stack Developer building modern web applications
                with clean code and creative solutions. Always learning, always
                growing.
              </p>

              {/* Social Links */}
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-10 h-10 rounded-xl bg-white/5 border border-white/5 
                      flex items-center justify-center text-gray-400 
                      hover:text-white hover:border-transparent
                      ${social.color}
                      transition-all duration-300 hover:-translate-y-1 
                      hover:shadow-lg text-sm`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4
                className="text-white font-semibold text-base mb-5 
                             flex items-center gap-2"
              >
                <span
                  className="w-8 h-[2px] bg-gradient-to-r from-blue-500 
                                 to-cyan-400 rounded-full"
                />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-gray-400 text-sm hover:text-white 
                                 transition-all duration-300 flex items-center 
                                 gap-2 group"
                    >
                      <span
                        className="w-0 h-[1px] bg-blue-400 
                                       transition-all duration-300 
                                       group-hover:w-3"
                      />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h4
                className="text-white font-semibold text-base mb-5 
                             flex items-center gap-2"
              >
                <span
                  className="w-8 h-[2px] bg-gradient-to-r from-purple-500 
                                 to-pink-400 rounded-full"
                />
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-white 
                                 transition-all duration-300 flex items-center 
                                 gap-2 group"
                    >
                      <span
                        className="w-0 h-[1px] bg-purple-400 
                                       transition-all duration-300 
                                       group-hover:w-3"
                      />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h4
                className="text-white font-semibold text-base mb-5 
                             flex items-center gap-2"
              >
                <span
                  className="w-8 h-[2px] bg-gradient-to-r from-cyan-500 
                                 to-green-400 rounded-full"
                />
                Contact Info
              </h4>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <li key={index}>
                    <a
                      href={info.href}
                      target={info.href.startsWith("mailto") || info.href.startsWith("tel") ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-400 
                                 text-sm hover:text-white transition-all 
                                 duration-300 group"
                    >
                      <span
                        className="w-9 h-9 rounded-lg bg-white/5 
                                       flex items-center justify-center 
                                       text-blue-400 group-hover:bg-blue-500/10 
                                       transition-all duration-300 text-xs 
                                       flex-shrink-0"
                      >
                        {info.icon}
                      </span>
                      {info.text}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Status Badge — Static (no ping animation) */}
              <div
                className="mt-6 flex items-center gap-2 px-4 py-2.5 
                              bg-green-500/10 border border-green-500/20 
                              rounded-xl w-fit"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="relative inline-flex rounded-full h-2.5 
                                   w-2.5 bg-green-500"
                  />
                </span>
                <span className="text-green-400 text-xs font-medium">
                  Available for Freelance
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="relative border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div
              className="flex flex-col md:flex-row items-center 
                            justify-between gap-4"
            >
              {/* Copyright */}
              <p className="text-gray-500 text-sm text-center md:text-left">
                © {currentYear}{" "}
                <span className="text-gray-300 font-medium">
                  Hafiz Muhammad Naveed Chishti
                </span>
                . All rights reserved.
              </p>

              {/* Made with love */}
              <p className="text-gray-500 text-sm flex items-center gap-1.5">
                Built with
                <FaHeart className="text-red-500 text-xs" />
                using
                <span
                  className="text-transparent bg-clip-text 
                                 bg-gradient-to-r from-blue-400 to-cyan-400 
                                 font-semibold"
                >
                  React
                </span>
                &
                <span
                  className="text-transparent bg-clip-text 
                                 bg-gradient-to-r from-cyan-400 to-blue-400 
                                 font-semibold"
                >
                  Tailwind CSS
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* ===== SCROLL TO TOP BUTTON ===== */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 
          bg-gradient-to-r from-blue-500 to-cyan-400 
          text-white rounded-xl flex items-center justify-center
          shadow-lg shadow-blue-500/25 
          hover:shadow-xl hover:shadow-blue-500/40 
          hover:-translate-y-1 active:scale-90 
          transition-all duration-500
          ${
            showScrollTop
              ? "translate-y-0 opacity-100 visible"
              : "translate-y-16 opacity-0 invisible"
          }`}
      >
        <FaArrowUp size={16} />
      </button>
    </>
  );
};

export default Footer;