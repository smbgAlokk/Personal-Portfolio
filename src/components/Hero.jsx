import { motion } from "framer-motion";
import { ChevronDown, FileText, Briefcase } from "lucide-react";
import { Link } from "react-scroll";
import CounterUp from "./CounterUp";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-primary to-primary-light relative overflow-hidden">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Hi, I'm <span className="text-accent">Alok Kumar</span> 👋
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4">
            <span className="text-accent">Data Analyst</span> | <span className="text-highlight">Aspiring Data Engineer</span> | Turning Data into Insights
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
            Skilled in Excel, SQL (PostgreSQL), Power BI, Python, Pandas, Numpy, Seaborn, Matplotlib
          </p>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-accent rounded-full"
                style={{
                  width: Math.random() * 10 + 5,
                  height: Math.random() * 10 + 5,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, Math.random() * 100 - 50],
                  opacity: [0.7, 0.2],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
          
          {/* Buttons & Counter */}
          <div className="flex flex-wrap justify-center gap-4 z-10">
            <a
              href="/Resume/AlokkumarCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-highlight hover:bg-highlight-light font-semibold text-primary rounded-lg transition-colors duration-300 cursor-pointer flex items-center gap-2 text-sm sm:text-base"
            >
              <FileText size={20} />
              View My Resume
            </a>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-64}
              className="px-4 py-3 bg-accent hover:bg-accent-light font-semibold text-white rounded-lg transition-colors duration-300 cursor-pointer flex items-center gap-2 text-sm sm:text-base"
            >
              <Briefcase size={20} />
              Hire Me
            </Link>
            <div className="w-full sm:w-auto">
              <CounterUp end={230} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <Link
        to="about"
        spy={true}
        smooth={true}
        offset={-64}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
      >
        <ChevronDown className="text-accent" size={32} />
      </Link>
    </section>
  );
};

export default Hero;
