import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="bg-dark">
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
                <h3 className="text-xl font-semibold text-white">Front-End Developer Intern</h3>
                <p className="text-primary">Pug Esports Academy, Delhi</p>
                <p className="text-gray-400">April 2024 - July 2024</p>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <Briefcase className="w-5 h-5 mr-2 mt-1 text-primary" />
                  <span>Developed responsive UIs using React.js & Next.js</span>
                </li>
                <li className="flex items-start">
                  <Briefcase className="w-5 h-5 mr-2 mt-1 text-primary" />
                  <span>Integrated REST APIs, improving data-fetching speed by 25%</span>
                </li>
                <li className="flex items-start">
                  <Briefcase className="w-5 h-5 mr-2 mt-1 text-primary" />
                  <span>Optimized rendering performance using React.memo and useCallback</span>
                </li>
                <li className="flex items-start">
                  <Briefcase className="w-5 h-5 mr-2 mt-1 text-primary" />
                  <span>Used Git for version control and collaborated with backend teams</span>
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