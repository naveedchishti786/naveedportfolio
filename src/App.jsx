import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

// ===== COMPONENTS =====
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// ===== SECTIONS (Lazy Loading) =====
const Hero = lazy(() => import("./Sections/Hero"));
const About = lazy(() => import("./Sections/About"));
const Skills = lazy(() => import("./Sections/Skills"));
const Projects = lazy(() => import("./Sections/Projects"));
const Contact = lazy(() => import("./Sections/Contact"));

// ===== SECTION LOADER =====
const SectionLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div
        className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 
                      rounded-full animate-spin"
      />
      <p className="text-gray-400 text-sm">Loading...</p>
    </div>
  </div>
);

// ===== PRELOADER =====
const Preloader = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 600);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [setLoading]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center
                 justify-center bg-[#0a0f1e]"
      exit={{
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" },
      }}
    >
      {/* ===== BACKGROUND GLOW ===== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2
                     w-[500px] h-[500px] rounded-full
                     bg-blue-600/10 blur-[120px]"
        />
        <div
          className="absolute bottom-1/3 left-1/2 -translate-x-1/2
                     w-[300px] h-[300px] rounded-full
                     bg-purple-600/10 blur-[100px]"
        />
      </div>

      {/* ===== LOGO ===== */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8"
      >
        <div
          className="w-28 h-28 bg-gradient-to-br from-blue-500
                        via-purple-500 to-purple-400
                        rounded-[2rem] flex items-center justify-center
                        shadow-2xl shadow-purple-500/30"
        >
          <span className="text-white text-4xl font-bold tracking-tight">
            MN
          </span>
        </div>
      </motion.div>

      {/* ===== NAME ===== */}
      <motion.h1
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="text-3xl font-bold text-white mb-2 tracking-tight"
      >
        Muhammad Naveed
      </motion.h1>

      {/* ===== ROLE ===== */}
      <motion.p
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="text-gray-400 text-sm mb-10 tracking-wide"
      >
        MERN Stack Developer
      </motion.p>

      {/* ===== PROGRESS BAR ===== */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="flex flex-col items-center gap-3"
      >
        {/* Track */}
        <div
          className="w-[220px] h-[3px] bg-gray-800/80
                     rounded-full overflow-hidden"
        >
          {/* Fill */}
          <motion.div
            className="h-full rounded-full
                       bg-gradient-to-r from-blue-500 to-cyan-400"
            initial={{ width: "0%" }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          />
        </div>

        {/* Percentage */}
        <p className="text-gray-500 text-xs tabular-nums">
          {Math.min(Math.round(progress), 100)}%
        </p>
      </motion.div>
    </motion.div>
  );
};

// ===== BACK TO TOP BUTTON =====
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 
                     bg-gradient-to-r from-blue-500 to-cyan-400 
                     text-white rounded-xl flex items-center justify-center
                     shadow-lg shadow-blue-500/25 
                     hover:shadow-xl hover:shadow-blue-500/40 
                     hover:-translate-y-1 active:scale-90 
                     transition-all duration-300"
          aria-label="Back to top"
        >
          <FaArrowUp size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// ===== MAIN APP =====
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      {/* Preloader */}
      <AnimatePresence mode="wait">
        {loading && <Preloader setLoading={setLoading} />}
      </AnimatePresence>

      {/* Main App */}
      {!loading && (
        <div className="relative bg-gray-950">
          {/* Accessibility: Skip to Content */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 
                       focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 
                       focus:bg-blue-500 focus:text-white focus:rounded-lg"
          >
            Skip to main content
          </a>

          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main id="main-content" className="relative">
            <Suspense fallback={<SectionLoader />}>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </Suspense>
          </main>

          {/* Footer */}
          <Footer />

          {/* Back to Top */}
          <BackToTop />
        </div>
      )}
    </>
  );
}

export default App;