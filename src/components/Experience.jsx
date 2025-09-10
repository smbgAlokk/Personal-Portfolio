import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-dark to-dark-lighter text-white data-pattern-bg"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experience</h2>
          <div className="space-y-12">
            <div className="relative pl-8 border-l-2 border-primary">
              <div className="absolute -left-[9px] top-0">
                <div className="w-4 h-4 rounded-full bg-primary" />
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white">
                  Programmer Analyst – Intern
                </h3>
                <p className="text-accent">CepiaLabs Pvt. Ltd.</p>
                <p className="text-gray-400">Aug 2025 – Present</p>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <Briefcase className="w-5 h-5 mr-2 mt-1 text-slate-950" />
                  <span>
                    Assisted in data-driven application development and API
                    integrations
                  </span>
                </li>
                <li className="flex items-start">
                  <Briefcase className="w-5 h-5 mr-2 mt-1 text-primary" />
                  <span>
                    Supported Agile sprints, ensuring efficient data handling
                    and reporting
                  </span>
                </li>
                <li className="flex items-start">
                  <Briefcase className="w-5 h-5 mr-2 mt-1 text-primary" />
                  <span>
                    Collaborated with senior developers on debugging,
                    optimization, and documentation
                  </span>
                </li>
              </ul>
            </div>

            <div className="relative pl-8 border-l-2 border-primary">
              <div className="absolute -left-[9px] top-0">
                <div className="w-4 h-4 rounded-full bg-primary" />
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white">
                  Front-End Developer Intern{" "}
                  <a
                    href="https://drive.google.com/file/d/1HgV77t0y0W4k9oJ1X-Pg_g2VPpqRoPnH/view?usp=sharing"
                    target="_blank"
                    // download="IntershipCertificate.pdf"
                    rel="noopener noreferrer"
                    className="flex items-center  text-[.8rem] font-thin text-gray-400 hover:text-white"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    <span className="text-white  hover:text-amber-300">
                      Intership Certificate
                    </span>
                  </a>
                </h3>
                <p className="text-accent">Pug Esports pvt., Delhi</p>
                <p className="text-gray-400">April 2024 - July 2024</p>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <Briefcase className="w-5 h-5 mr-2 mt-1 text-primary" />
                  <span>Developed responsive UIs using React.js & Next.js</span>
                </li>
                <li className="flex items-start">
                  <Briefcase className="w-5 h-5 mr-2 mt-1 text-primary" />
                  <span>
                    Integrated REST APIs, improving data-fetching speed by 25%
                  </span>
                </li>
                <li className="flex items-start">
                  <Briefcase className="w-5 h-5 mr-2 mt-1 text-primary" />
                  <span>
                    Optimized rendering performance using React.memo and
                    useCallback
                  </span>
                </li>
                <li className="flex items-start">
                  <Briefcase className="w-5 h-5 mr-2 mt-1 text-primary" />
                  <span>
                    Used Git for version control and collaborated with backend
                    teams
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
