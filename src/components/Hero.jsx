import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-scroll";
import CounterUp from "./CounterUp";

const Hero = () => {
  return (
    <section className=" min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-dark to-dark-light">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Hi, I'm <span className="text-primary">Alok Kumar</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8">
            Full Stack Developer
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-12 text-sm sm:text-base md:text-lg leading-relaxed">
            I build modern, responsive, and dynamic web applications using
            React.js and Next.js. Passionate about creating exceptional user
            experiences through clean and efficient code.
          </p>

          {/* Buttons & Counter */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/smbgAlokk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-3 bg-primary-dark hover:bg-primary font-semibold text-white rounded-lg transition-colors duration-300 cursor-pointer text-sm sm:text-sm md:text-xl"
            >
              View My Work
            </a>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-64}
              className="px-6 py-3 border border-primary text-primary font-semibold hover:bg-gray-400 rounded-lg transition-colors duration-300 cursor-pointer text-sm sm:text-sm md:text-xl"
            >
              Contact Me
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
        <ChevronDown className="text-primary" size={32} />
      </Link>
    </section>
  );
};

export default Hero;
