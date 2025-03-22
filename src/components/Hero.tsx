import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-dark to-dark-light">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Hi, I'm <span className="text-primary">Alok Kumar</span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-400 mb-8">
            Front-End Developer
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-12">
            I build modern, responsive, and dynamic web applications using React.js and Next.js. 
            Passionate about creating exceptional user experiences through clean and efficient code.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/smbgAlokk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors duration-200"
            >
              View My Work
            </a>
            <a
              href="mailto:contact.alokkumarr@gmail.com"
              className="px-6 py-3 border border-primary text-primary hover:bg-primary/10 rounded-lg transition-colors duration-200"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
      
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