import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

// ===== DATA =====
const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "naveedchishti1997@gmail.com",
    href: "https://mail.google.com/mail/u/0/#inbox",
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+971528865066",
    href: "tel:+971528865066",
    color: "from-green-500 to-emerald-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Dubai, UAE",
    href: "#",
    color: "from-purple-500 to-pink-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    value: "+971528865066",
    href: "https://wa.me/971528865066",
    color: "from-green-400 to-green-600",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
];

const socialLinks = [
  {
    icon: <FaGithub />,
    href: "https://github.com/naveedchishti786",
    label: "GitHub",
    color: "hover:bg-gray-700 hover:border-gray-600",
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/naveedchishti",
    label: "LinkedIn",
    color: "hover:bg-blue-600 hover:border-blue-500",
  },
  {
    icon: <FaWhatsapp />,
    href: "https://wa.me/971528865066",
    label: "WhatsApp",
    color: "hover:bg-green-600 hover:border-green-500",
  },
];

// ===== ANIMATION VARIANTS =====
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    errorMessage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false, errorMessage: "" });

    try {
      // Send email using EmailJS or your backend
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_XXXXXXXXX", // Replace with your EmailJS service ID
          template_id: "template_XXXXXXXXX", // Replace with your EmailJS template ID
          user_id: "YOUR_EMAILJS_USER_ID", // Replace with your EmailJS user ID
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: "naveedchishti1997@gmail.com",
          },
        }),
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: false, errorMessage: "" });
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => {
          setStatus({ submitting: false, submitted: false, error: false, errorMessage: "" });
        }, 5000);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        errorMessage: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gray-950 text-white overflow-hidden"
    >
      {/* ===== BACKGROUND EFFECTS ===== */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-10 w-72 h-72 
                        bg-blue-500/5 rounded-full blur-3xl"
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 
                        bg-purple-500/5 rounded-full blur-3xl"
        />
        <div
          className="absolute top-1/2 left-1/3 w-80 h-80 
                        bg-cyan-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ===== SECTION HEADER ===== */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 
                           bg-blue-500/10 border border-blue-500/20 
                           rounded-full text-blue-400 text-xs font-semibold 
                           tracking-widest uppercase mb-4"
          >
            <HiSparkles className="text-sm" />
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Let's{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r 
                             from-blue-400 via-purple-400 to-cyan-400"
            >
              Work Together
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I'm open to job opportunities, freelance projects, and interesting
            collaborations. Let's connect and create something amazing!
          </p>
        </motion.div>

        {/* ===== MAIN CONTENT: 2 COLUMNS ===== */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* LEFT: Contact Info (2 cols) */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className={`group flex items-center gap-4 p-5 
                    ${info.bgColor} ${info.borderColor} border rounded-2xl 
                    hover:-translate-y-1 hover:shadow-lg 
                    transition-all duration-300`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r 
                    ${info.color} flex items-center justify-center 
                    text-white text-lg group-hover:scale-110 
                    group-hover:shadow-lg transition-all duration-300`}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p
                      className="text-gray-400 text-xs uppercase 
                                  tracking-wider font-medium"
                    >
                      {info.label}
                    </p>
                    <p
                      className="text-white font-semibold group-hover:text-blue-400 
                                  transition-colors duration-300"
                    >
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span
                  className="w-8 h-[2px] bg-gradient-to-r from-blue-500 
                                 to-cyan-400 rounded-full"
                />
                Follow Me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-12 h-12 rounded-xl bg-white/5 
                      border border-white/10 flex items-center justify-center 
                      text-gray-400 hover:text-white ${social.color}
                      transition-all duration-300 hover:-translate-y-1 
                      hover:shadow-lg text-lg`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              variants={itemVariants}
              className="p-5 bg-gradient-to-r from-green-500/10 to-emerald-500/5 
                         border border-green-500/20 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-3 w-3">
                  <span
                    className="relative inline-flex rounded-full h-3 w-3 
                                   bg-green-500"
                  />
                </span>
                <span className="text-green-400 font-semibold">
                  Available for Work
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                I'm currently available for freelance projects and full-time
                opportunities. Response time: within 24 hours.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT: Contact Form (3 cols) */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="bg-white/[0.03] border border-white/10 
                            rounded-3xl p-8 md:p-10"
            >
              <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
              <p className="text-gray-400 text-sm mb-8">
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300 font-medium">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Muhammad Naveed"
                      className="w-full px-5 py-3.5 bg-white/5 border border-white/10 
                                 rounded-xl text-white placeholder:text-gray-500 
                                 focus:outline-none focus:border-blue-500/50 
                                 focus:bg-white/[0.07] transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300 font-medium">
                      Your Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="naveed@example.com"
                      className="w-full px-5 py-3.5 bg-white/5 border border-white/10 
                                 rounded-xl text-white placeholder:text-gray-500 
                                 focus:outline-none focus:border-blue-500/50 
                                 focus:bg-white/[0.07] transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-300 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-5 py-3.5 bg-white/5 border border-white/10 
                               rounded-xl text-white placeholder:text-gray-500 
                               focus:outline-none focus:border-blue-500/50 
                               focus:bg-white/[0.07] transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-300 font-medium">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 
                               rounded-xl text-white placeholder:text-gray-500 
                               focus:outline-none focus:border-blue-500/50 
                               focus:bg-white/[0.07] transition-all duration-300 
                               resize-none"
                  />
                </div>

                {/* Error Message */}
                {status.error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3">
                    <FaExclamationCircle className="text-red-400" />
                    <span className="text-red-400 text-sm">{status.errorMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className={`w-full flex items-center justify-center gap-3 
                    px-8 py-4 rounded-xl font-semibold text-white 
                    transition-all duration-300 
                    ${
                      status.submitting
                        ? "bg-gray-600 cursor-not-allowed"
                        : status.submitted
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-gradient-to-r from-blue-500 to-cyan-400 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 active:scale-[0.98]"
                    }`}
                >
                  {status.submitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : status.submitted ? (
                    <>
                      <FaCheckCircle />
                      Message Sent Successfully!
                    </>
                  ) : status.error ? (
                    <>
                      <FaExclamationCircle />
                      Error! Try Again
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;