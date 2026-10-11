import { motion } from "framer-motion";
import {
  FaGlobe,
  FaReact,
  FaLayerGroup,
  FaRedoAlt,
  FaTools,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const services = [
  {
    id: "custom-web-app",
    title: "Custom Web App Development",
    subtitle: "React & Next.js Scalable Applications",
    icon: <FaReact className="text-3xl text-cyan-400" />,
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderColor: "hover:border-cyan-500/40",
    glowColor: "group-hover:shadow-cyan-500/10",
    badge: "High Performance",
    description:
      "Production-ready Single Page Applications (SPA) and server-side rendered platforms built with clean, modular React and Next.js architecture.",
    deliverables: [
      "Pixel-perfect Figma / design conversion to React",
      "Scalable state management (Redux Toolkit / Context)",
      "Server-side rendering (SSR) & Next.js dynamic routing",
      "Smooth micro-interactions & responsive UX layouts",
    ],
  },
  {
    id: "api-backend",
    title: "API Integration & Backend Development",
    subtitle: "Node.js, Express, MongoDB & RESTful APIs",
    icon: <FaLayerGroup className="text-3xl text-purple-400" />,
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    borderColor: "hover:border-purple-500/40",
    glowColor: "group-hover:shadow-purple-500/10",
    badge: "Robust Architecture",
    description:
      "Scalable backend architecture connecting intuitive frontend interfaces with secure RESTful APIs, third-party services, and robust databases.",
    deliverables: [
      "Custom RESTful API design & webhook integrations",
      "Secure user authentication (JWT, OAuth & role permissions)",
      "MongoDB database modeling & query performance tuning",
      "Third-party payment & external service integrations",
    ],
  },
  {
    id: "ecommerce-fullstack",
    title: "Full-Stack & E-Commerce Solutions",
    subtitle: "End-to-End MERN Stack Platforms",
    icon: <FaGlobe className="text-3xl text-blue-400" />,
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    borderColor: "hover:border-blue-500/40",
    glowColor: "group-hover:shadow-blue-500/10",
    badge: "Full Cycle",
    description:
      "Complete e-commerce stores and web platforms with dynamic product catalogs, persistent shopping carts, and administrative dashboards.",
    deliverables: [
      "E-commerce stores with multi-criteria search & filtering",
      "Shopping cart, checkout workflows & order processing",
      "Admin control dashboards for inventory & order tracking",
      "Database schema design & deployment on cloud servers",
    ],
  },
  {
    id: "business-websites",
    title: "Modern Business Websites & Landing Pages",
    subtitle: "High-Converting Portals & Lead Generation",
    icon: <FaGlobe className="text-3xl text-emerald-400" />,
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderColor: "hover:border-emerald-500/40",
    glowColor: "group-hover:shadow-emerald-500/10",
    badge: "Most Popular",
    description:
      "Fast, elegant, and mobile-first business websites engineered to establish strong brand credibility, present corporate services, and generate leads.",
    deliverables: [
      "Custom responsive design (Mobile, Tablet & Desktop)",
      "SEO-friendly semantic structure & fast load times",
      "Direct WhatsApp and email consultation triggers",
      "Cross-browser compatibility & clean typography",
    ],
  },
  {
    id: "bug-fixing",
    title: "Bug Fixing & Maintenance",
    subtitle: "Rapid Troubleshooting & Ongoing Support",
    icon: <FaTools className="text-3xl text-amber-400" />,
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    borderColor: "hover:border-amber-500/40",
    glowColor: "group-hover:shadow-amber-500/10",
    badge: "Quick Turnaround",
    description:
      "Prompt troubleshooting for broken layouts, responsive CSS glitches, JavaScript errors, API integration issues, and regular security updates.",
    deliverables: [
      "Responsive layout & cross-device CSS fixes",
      "JavaScript errors, state bugs & performance debugging",
      "Core Web Vitals & speed optimization (LCP, FID, CLS)",
      "Routine dependency updates & ongoing code maintenance",
    ],
  },
  {
    id: "redesign",
    title: "Website Redesign & Modernization",
    subtitle: "Transform Outdated Digital Experiences",
    icon: <FaRedoAlt className="text-3xl text-pink-400" />,
    gradient: "from-pink-500/20 via-purple-500/10 to-transparent",
    borderColor: "hover:border-pink-500/40",
    glowColor: "group-hover:shadow-pink-500/10",
    badge: "High ROI",
    description:
      "Upgrade slow or outdated websites into sleek, modern digital experiences that engage visitors, look stunning on mobile, and drive conversions.",
    deliverables: [
      "Modern UI/UX redesign with contemporary aesthetics",
      "Conversion rate & mobile navigation optimization",
      "Significant page load speed enhancements",
      "Smooth migration from legacy code to modern React",
    ],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-24 bg-gray-950 text-white overflow-hidden border-t border-white/5"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-blue-600/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-purple-600/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5
                       bg-blue-500/10 border border-blue-500/20
                       rounded-full text-blue-400 text-xs font-semibold
                       tracking-widest uppercase mb-4"
          >
            <HiSparkles className="text-sm" />
            Client Services
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
            How I Can{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r
                         from-blue-400 via-cyan-400 to-purple-400"
            >
              Help Your Business
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Client-focused development services tailored for businesses, startups, and agencies seeking fast, reliable web solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl
                         bg-white/[0.02] border border-white/10 ${service.borderColor}
                         hover:-translate-y-2 hover:shadow-2xl ${service.glowColor}
                         transition-all duration-300`}
            >
              {/* Top Accent Gradient */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${service.gradient}
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
              />

              <div className="relative z-10">
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-white/20 transition-all duration-300">
                    {service.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/5 border border-white/10 text-gray-300">
                    {service.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-400 font-medium mb-4">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2.5 mb-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    What's Included:
                  </p>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <FaCheck className="text-emerald-400 mt-1 flex-shrink-0 text-[10px]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="relative z-10 pt-4 border-t border-white/5">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold
                             text-blue-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 duration-200"
                >
                  Start this project
                  <FaArrowRight className="text-[11px]" />
                </a>
              </div>
            </motion.div>
          ))}

          {/* Custom Project Callout Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col justify-between p-6 sm:p-8 rounded-3xl
                       bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/10
                       border border-blue-500/30 hover:border-blue-400/50
                       hover:-translate-y-2 transition-all duration-300"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center mb-6">
                <HiSparkles className="text-3xl text-blue-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Have a Custom Idea?
              </h3>
              <p className="text-cyan-300 text-xs sm:text-sm font-medium mb-4">
                Tailored Solutions for Your Specific Needs
              </p>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                Whether you need a custom SaaS MVP, internal dashboard, automated workflows, or an end-to-end web platform, let's discuss your requirements and build the right solution.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href="#contact"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5
                           bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm
                           font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30
                           hover:-translate-y-0.5 transition-all duration-300"
              >
                Discuss Your Project
                <FaArrowRight className="text-xs" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Need a quick turn-around for an urgent deadline?
            </h4>
            <p className="text-sm text-gray-400">
              Direct communication, fast updates, and transparent milestone tracking.
            </p>
          </div>
          <a
            href="https://wa.me/971528865066"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-semibold text-sm hover:bg-emerald-500/25 transition-all"
          >
            💬 Chat on WhatsApp (+971 52 886 5066)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
