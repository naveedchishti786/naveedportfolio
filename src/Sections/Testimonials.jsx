import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft, FaCheckCircle } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const testimonials = [
  {
    id: 1,
    name: "Tariq Mahmood",
    role: "Operations Director",
    company: "Chanzeleze Laundry",
    location: "Dubai, UAE",
    project: "Commercial Website & Customer Booking Platform",
    rating: 5,
    text: "Naveed engineered our complete company website and customer booking platform from scratch. He delivered a fast, mobile-friendly experience that our Dubai customers love and streamlined our day-to-day order intake. Highly recommended for any business web development.",
    avatarBg: "from-blue-500 to-cyan-400",
    initials: "CL",
  },
  {
    id: 2,
    name: "Muhammad Asif",
    role: "Senior Consultant",
    company: "Accurate Tax Consultancy",
    location: "Dubai, UAE",
    project: "Corporate VAT & Tax Portal",
    rating: 5,
    text: "Working with Muhammad was seamless. He translated our corporate requirements into an authoritative, modern web portal for our VAT and Corporate Tax services in Dubai. Outstanding turnaround speed, pixel-perfect attention, and proactive communication throughout.",
    avatarBg: "from-emerald-500 to-teal-400",
    initials: "AT",
  },
  {
    id: 3,
    name: "Zoya Al-Mansoor",
    role: "Founder & Creative Lead",
    company: "Zoya Premium Curtain",
    location: "Dubai, UAE",
    project: "Luxury Interior Showcase & Catalog",
    rating: 5,
    text: "Our fabric collections look stunning and load instantly on mobile devices. Naveed was very attentive to our visual guidelines and delivered an elegant, high-performance catalog that makes scheduling home measurement appointments effortless.",
    avatarBg: "from-purple-500 to-pink-400",
    initials: "ZC",
  },
  {
    id: 4,
    name: "Hamza Rasheed",
    role: "Senior Full-Stack Engineer",
    company: "Tech Collaborator",
    location: "Remote / UAE",
    project: "MERN Stack Web Applications & APIs",
    rating: 5,
    text: "Naveed writes exceptionally clean, modular code with solid architecture in React, Node.js, and MongoDB. He is thorough, dependable, and quick to resolve complex state management and API challenges. An absolute asset to any engineering team.",
    avatarBg: "from-amber-500 to-orange-400",
    initials: "TC",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative py-24 bg-gray-950 text-white overflow-hidden border-t border-white/5"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-600/[0.03] rounded-full blur-3xl pointer-events-none" />

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
                       bg-emerald-500/10 border border-emerald-500/20
                       rounded-full text-emerald-400 text-xs font-semibold
                       tracking-widest uppercase mb-4"
          >
            <HiSparkles className="text-sm" />
            Social Proof & Trust Signals
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
            Client{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r
                         from-emerald-400 via-cyan-400 to-blue-400"
            >
              Feedback & Recommendations
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            What founders, managers, and collaborators say about my delivery speed, code quality, and communication.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl
                         bg-white/[0.02] border border-white/10 hover:border-emerald-500/30
                         hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-emerald-500/5
                         transition-all duration-300"
            >
              <div>
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} className="text-sm" />
                    ))}
                    <span className="text-xs font-semibold text-gray-400 ml-2">
                      5.0 Verified Review
                    </span>
                  </div>
                  <FaQuoteLeft className="text-2xl text-white/10 group-hover:text-emerald-400/30 transition-colors" />
                </div>

                {/* Project Tag */}
                <div className="mb-4">
                  <span className="px-3 py-1 rounded-lg text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-blue-300">
                    {item.project}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{item.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 border-t border-white/5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.avatarBg}
                               flex items-center justify-center text-white font-bold text-sm shadow-md`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base group-hover:text-emerald-400 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-400">
                      {item.role} · <span className="text-gray-300 font-medium">{item.company}</span>
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-medium text-emerald-400/90 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                  <FaCheckCircle className="text-[10px]" />
                  <span>{item.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-500/5 via-emerald-500/5 to-purple-500/5 border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white mb-1">100%</p>
              <p className="text-xs text-gray-400 font-medium">On-Time Delivery</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-1">3+ Years</p>
              <p className="text-xs text-gray-400 font-medium">Professional Experience</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">7+ Live</p>
              <p className="text-xs text-gray-400 font-medium">Production Projects</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">&lt; 24h</p>
              <p className="text-xs text-gray-400 font-medium">Fast Communication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
