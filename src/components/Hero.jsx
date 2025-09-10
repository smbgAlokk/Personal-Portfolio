import { motion } from "framer-motion";
import {
  ChevronDown,
  FileText,
  Briefcase,
  BarChart,
  LineChart,
  PieChart,
} from "lucide-react";
import { Link } from "react-scroll";
import CounterUp from "./CounterUp";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Hero = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-3 sm:px-4 md:px-6 py-8 sm:py-12 text-center bg-gradient-to-b from-primary to-primary-light dark:bg-gradient-to-b dark:from-primary dark:to-primary-light light:bg-gradient-to-b light:from-light-primary light:to-light-primary-dark relative overflow-hidden">
      <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
            Hi, I'm <span className="text-accent">Alok Kumar</span> 👋
          </h1>
          <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-300 mb-2 sm:mb-3 md:mb-4">
            <span className="text-accent">Data Analyst</span> |{" "}
            <span className="text-highlight">Aspiring Data Engineer</span>
          </h2>
          <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-highlight">
              Transforming Data into Insights & Action
            </span>
          </p>
          <p className="max-w-full sm:max-w-xl md:max-w-2xl mx-auto text-gray-300 mb-4 sm:mb-5 md:mb-6 text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed">
            Skilled in Excel, SQL (PostgreSQL), Power BI, Python, Pandas, Numpy,
            Seaborn, Matplotlib
          </p>

          {/* Animated Chart Graphics Background */}
          <div className="absolute inset-0 z-0 opacity-20">
            {/* Bar Charts */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`bar-${i}`}
                className="absolute flex items-end"
                style={{
                  width: Math.random() * 80 + 40,
                  height: Math.random() * 80 + 40,
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                }}
              >
                {[...Array(5)].map((_, j) => (
                  <motion.div
                    key={`bar-${i}-${j}`}
                    className="mx-1 rounded-t-md"
                    style={{
                      width: 8,
                      backgroundColor: j % 2 === 0 ? "#00B5D8" : "#FFD700",
                      height: 10,
                    }}
                    animate={{
                      height: [10, Math.random() * 40 + 20, 10],
                    }}
                    transition={{
                      duration: Math.random() * 4 + 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>
            ))}

            {/* Line Charts */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`line-${i}`}
                className="absolute"
                style={{
                  width: Math.random() * 100 + 50,
                  height: 40,
                  left: `${Math.random() * 70 + 15}%`,
                  top: `${Math.random() * 70 + 15}%`,
                }}
              >
                <svg width="100%" height="100%" viewBox="0 0 100 40">
                  <motion.path
                    d={`M 0,${20 + Math.random() * 10} Q 25,${
                      Math.random() * 30
                    } 50,${Math.random() * 20 + 10} T 100,${
                      Math.random() * 20 + 10
                    }`}
                    fill="none"
                    stroke={i % 2 === 0 ? "#00B5D8" : "#FFD700"}
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{
                      duration: Math.random() * 5 + 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </svg>
              </motion.div>
            ))}

            {/* Scatter Points */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`point-${i}`}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 6 + 3,
                  height: Math.random() * 6 + 3,
                  backgroundColor:
                    i % 3 === 0
                      ? "#00B5D8"
                      : i % 3 === 1
                      ? "#FFD700"
                      : "#FF6B6B",
                  left: `${Math.random() * 90 + 5}%`,
                  top: `${Math.random() * 90 + 5}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 0.9, 0.7],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>

          {/* Buttons & Counter */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 z-10">
            <motion.a
              href="https://drive.google.com/file/d/1WnFdcZ8-8obNniTifDTjLmYwFiyDOv4w/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-50 px-3 py-1 sm:px-4 sm:py-1.5 
               bg-highlight hover:bg-highlight-light 
               text-primary font-medium rounded-md 
               shadow border border-highlight/30 
               transition-all duration-300 cursor-pointer 
               inline-flex items-center gap-1 text-sm"
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 6px 14px -2px rgba(0,0,0,0.15), 0 2px 4px -2px rgba(0,0,0,0.05)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <FileText size={18} />
              View Resume
            </motion.a>

            <motion.button
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative z-50 px-3 py-1 sm:px-4 sm:py-1.5 
               bg-accent hover:bg-accent-light 
               text-white font-medium rounded-md 
               shadow border border-accent/30 
               transition-all duration-300 cursor-pointer 
               inline-flex items-center gap-1 text-sm"
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 6px 14px -2px rgba(0,0,0,0.15), 0 2px 4px -2px rgba(0,0,0,0.05)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Briefcase size={18} />
              Hire Me
            </motion.button>

            <div className="w-full sm:w-auto mt-3 sm:mt-4">
              <CounterUp end={230} />
            </div>

            {/* Data Visualization Icons */}
            {/* <div className="flex gap-2 xs:gap-3 sm:gap-4 mt-4 sm:mt-5 md:mt-6 justify-center">
              <motion.div
                className="p-2 xs:p-2.5 sm:p-3 bg-primary-dark rounded-full border border-accent/30"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <BarChart size={18} className="text-accent xs:hidden" />
                <BarChart size={20} className="text-accent hidden xs:block sm:hidden" />
                <BarChart size={24} className="text-accent hidden sm:block" />
              </motion.div>
              <motion.div
                className="p-2 xs:p-2.5 sm:p-3 bg-primary-dark rounded-full border border-highlight/30"
                whileHover={{ scale: 1.1, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
              >
                <LineChart size={18} className="text-highlight xs:hidden" />
                <LineChart size={20} className="text-highlight hidden xs:block sm:hidden" />
                <LineChart size={24} className="text-highlight hidden sm:block" />
              </motion.div>
              <motion.div
                className="p-2 xs:p-2.5 sm:p-3 bg-primary-dark rounded-full border border-accent/30"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <PieChart size={18} className="text-accent xs:hidden" />
                <PieChart size={20} className="text-accent hidden xs:block sm:hidden" />
                <PieChart size={24} className="text-accent hidden sm:block" />
              </motion.div>
            </div> */}
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
