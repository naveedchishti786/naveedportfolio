import { useState, useEffect, useCallback } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { id: 1, name: "Home", href: "#hero", icon: "🏠" },
  { id: 2, name: "About", href: "#about", icon: "👤" },
  { id: 3, name: "Skills", href: "#skills", icon: "⚡" },
  { id: 4, name: "Projects", href: "#projects", icon: "🚀" },
  { id: 5, name: "Contact", href: "#contact", icon: "📬" },
];

const socialLinks = [
  {
    icon: <FaGithub />,
    href: "https://github.com/naveedchishti786",
    label: "GitHub",
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://linkedin.com/in/naveedchishti",
    label: "LinkedIn",
  },
  {
    icon: <FaWhatsapp />,
    href: "https://wa.me/+971528865066",
    label: "WhatsApp",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll detection + Progress bar
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);

    navLinks.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(href.slice(1));
        }
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Smooth scroll
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ===== MAIN NAVBAR ===== */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out
          ${
            scrolled
              ? "bg-gray-950 shadow-2xl shadow-black/30 py-3 border-b border-white/5"
              : "bg-gray-950/90 py-5"
          }`}
      >
        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gray-800/50">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 
                       transition-all duration-200 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* ===== LOGO ===== */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="group flex items-center gap-3 relative"
          >
            <div className="relative">
              <div
                className="w-11 h-11 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 
                              rounded-xl flex items-center justify-center text-white 
                              font-bold text-base transition-all duration-700
                              group-hover:rounded-2xl group-hover:scale-105
                              group-hover:shadow-lg group-hover:shadow-blue-500/30"
              >
                MN
              </div>
              {/* Status indicator */}
              <div className="absolute -top-1 -right-1 w-3 h-3">
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-gray-950" />
              </div>
            </div>

            <div className="hidden sm:block">
              <p className="text-white font-bold text-base leading-tight">
                Hafiz Muhammad Naveed 
              </p>
              <p className="text-[11px] text-gray-400 font-medium tracking-wider uppercase">
                MERN Stack Developer
              </p>
            </div>
          </a>

          {/* ===== DESKTOP LINKS ===== */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium 
                    transition-all duration-500 group
                    ${
                      isActive
                        ? "text-white bg-white/10"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {link.name}

                  {/* Bottom dot indicator */}
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 
                      w-1 h-1 rounded-full transition-all duration-500
                      ${
                        isActive
                          ? "bg-blue-400 scale-100"
                          : "bg-transparent scale-0 group-hover:bg-gray-500 group-hover:scale-100"
                      }`}
                  />
                </a>
              );
            })}

            {/* Divider */}
            <div className="w-px h-6 bg-gray-700 mx-3" />

            {/* Social Icons */}
            <div className="flex items-center gap-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center 
                             text-gray-400 hover:text-white hover:bg-white/10 
                             transition-all duration-500 text-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ===== MOBILE MENU BUTTON ===== */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-11 h-11 flex items-center justify-center 
                       text-white rounded-xl bg-white/5 hover:bg-white/10 
                       active:scale-90 transition-all duration-500"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className={`absolute transition-all duration-700 
              ${
                isOpen
                  ? "rotate-180 opacity-0 scale-50"
                  : "rotate-0 opacity-100 scale-100"
              }`}
            >
              <HiMenuAlt3 size={22} />
            </span>
            <span
              className={`absolute transition-all duration-700 
              ${
                isOpen
                  ? "rotate-0 opacity-100 scale-100"
                  : "-rotate-180 opacity-0 scale-50"
              }`}
            >
              <HiX size={22} />
            </span>
          </button>
        </div>
      </nav>

      {/* ===== MOBILE OVERLAY ===== */}
      <div
        className={`fixed inset-0 bg-black/80 z-40 md:hidden 
          transition-all duration-700
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* ===== MOBILE MENU PANEL ===== */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 md:hidden
          bg-gray-950 border-l border-white/5
          transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="px-6 pt-6 pb-4 border-b border-white/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 
                                rounded-2xl flex items-center justify-center text-white 
                                font-bold text-lg"
                >
                  MN
                </div>
                <div>
                  <p className="text-white font-bold text-lg">
                    Muhammad Naveed
                  </p>
                  <p className="text-xs text-gray-400 tracking-wider uppercase">
                    MERN Stack Developer
                  </p>
                </div>
              </div>
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center
                           text-gray-400 hover:text-white hover:bg-white/10 
                           transition-all duration-500"
              >
                <HiX size={18} />
              </button>
            </div>
          </div>

          {/* Mobile Links */}
          <div className="flex-1 overflow-y-auto py-6 px-4">
            <p
              className="text-[10px] text-gray-500 uppercase tracking-[3px] 
                          font-semibold px-3 mb-3"
            >
              Navigation
            </p>
            <ul className="flex flex-col gap-1">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <li
                    key={link.id}
                    className={`transform transition-all duration-700
                      ${
                        isOpen
                          ? "translate-x-0 opacity-100"
                          : "translate-x-12 opacity-0"
                      }`}
                    style={{ transitionDelay: `${index * 120 + 200}ms` }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl 
                        transition-all duration-500 group
                        ${
                          isActive
                            ? "bg-gradient-to-r from-blue-500/10 to-cyan-500/5 text-white border border-blue-500/20"
                            : "text-gray-400 hover:bg-white/5 hover:text-white"
                        }`}
                    >
                      <span
                        className={`text-lg transition-transform duration-500
                        ${isActive ? "scale-110" : "group-hover:scale-110"}`}
                      >
                        {link.icon}
                      </span>
                      <span className="font-medium text-[15px]">
                        {link.name}
                      </span>
                      {isActive && (
                        <span className="ml-auto w-2 h-2 rounded-full bg-blue-400" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Mobile Footer */}
          <div className="px-6 py-6 border-t border-white/5">
            <p
              className="text-[10px] text-gray-500 uppercase tracking-[3px] 
                          font-semibold mb-4"
            >
              Connect
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex-1 h-12 rounded-xl bg-white/5 border border-white/5
                    flex items-center justify-center text-gray-400 
                    hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/20
                    transition-all duration-500 text-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-center text-[11px] text-gray-600 mt-4">
              © 2024 Muhammad Naveed Chishti
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;