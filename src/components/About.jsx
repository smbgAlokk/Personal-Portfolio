import { motion } from "framer-motion";
import {
  ExternalLink,
  Database,
  Code,
  Music,
  LineChart,
  BarChart,
  PieChart,
} from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-primary-light dark:bg-primary-light light:bg-light-primary py-10 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 data-pattern-bg"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 md:mb-10 text-center">
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src="/Images/Alok.png"
                alt="Developer workspace"
                className="w-56 xs:w-64 sm:w-80 md:w-96 lg:w-[500px] h-auto rounded-xl shadow-xl 
                bg-gradient-to-t from-white/10 via-white/5 to-transparent backdrop-blur-md"
              />
            </div>

            {/* Text Section */}
            <div>
              <p className="text-gray-300 text-base xs:text-lg leading-relaxed mb-4 sm:mb-6">
                I'm an enthusiastic{" "}
                <span className="text-accent font-semibold">Data Analyst</span>{" "}
                with a passion for finding insights in raw data. Skilled in
                Excel, SQL, Power BI, and Python (Pandas, Numpy, Seaborn,
                Matplotlib), I specialize in cleaning, visualizing, and
                transforming data into clear business stories.
              </p>

              {/* Skills with Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 xs:gap-4 mb-4 sm:mb-6">
                <motion.div
                  className="flex items-center p-2 xs:p-3 bg-primary-dark rounded-lg border border-accent/20"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-1.5 xs:p-2 bg-primary rounded-full mr-2 xs:mr-3">
                    <Database className="text-accent" size={16} />
                  </div>
                  <div>
                    <h3 className="font-medium text-accent text-sm xs:text-base">
                      📊 Data Analytics
                    </h3>
                    <p className="text-xs xs:text-sm text-gray-400">
                      SQL, Python, Excel, Power BI
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center p-3 bg-primary-dark rounded-lg border border-accent/20"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-2 bg-primary rounded-full mr-3">
                    <Code className="text-highlight" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-highlight">🖥️ Web Dev</h3>
                    <p className="text-sm text-gray-400">
                      React, Next.js, Tailwind
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center p-3 bg-primary-dark rounded-lg border border-accent/20"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-2 bg-primary rounded-full mr-3">
                    <Music className="text-orange-300" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-orange-300">🎶 Music</h3>
                    <p className="text-sm text-gray-400">
                      Guitar, Piano, Production
                    </p>
                  </div>
                </motion.div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                My expertise includes{" "}
                <span className="text-accent font-semibold">
                  Data Analysis, Data Visualization, and Business Intelligence
                </span>
                . I'm passionate about transforming complex datasets into
                actionable insights that drive business decisions and create
                value.
              </p>

              {/* Data Visualization Icons */}
              <div className="flex justify-center gap-6 mb-6">
                <motion.div
                  className="flex flex-col items-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="p-3 bg-primary-dark rounded-full border border-accent/30 mb-2">
                    <BarChart size={24} className="text-accent" />
                  </div>
                  <span className="text-xs text-gray-400">Bar Charts</span>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="p-3 bg-primary-dark rounded-full border border-highlight/30 mb-2">
                    <LineChart size={24} className="text-highlight" />
                  </div>
                  <span className="text-xs text-gray-400">Line Charts</span>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="p-3 bg-primary-dark rounded-full border border-orange-300/30 mb-2">
                    <PieChart size={24} className="text-orange-300" />
                  </div>
                  <span className="text-xs text-gray-400">Pie Charts</span>
                </motion.div>
              </div>
              <a
                href="https://drive.google.com/file/d/1683w3U5c-8UCTBgINcwLEK4322Pb3jP0/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-flex items-center px-4 py-2 mt-4 bg-primary-dark rounded-lg border border-accent/20 text-accent hover:text-highlight cursor-pointer transition-colors duration-300"
              >
                <ExternalLink size={18} className="mr-2" />
                <span className="font-medium">Download Resume</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
