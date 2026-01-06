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
                    Architected and developed scalable backend systems using Node.js, Express, and microservices patterns
                  </span>
                </li>
                <li className="flex items-start">
                  <Briefcase className="w-5 h-5 mr-2 mt-1 text-slate-950" />
                  <span>
                    Implemented secure authentication systems with JWT, OAuth2, and role-based access control
                  </span>
                </li>
                <li className="flex items-start">
                  <Briefcase className="w-5 h-5 mr-2 mt-1 text-slate-950" />
                  <span>
                    Designed and optimized RESTful and GraphQL APIs, improving response times by 40% through caching and query optimization
                  </span>
                </li>
                <li className="flex items-start">
                  <Briefcase className="w-5 h-5 mr-2 mt-1 text-slate-950" />
                  <span>
                    Collaborated on system architecture decisions, database design, and DevOps practices
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
                  <Briefcase className="w-5 h-5 mr-2 mt-1 text-slate-950" />
                  <span>Built RESTful APIs using Node.js, Express, and MongoDB for frontend integration</span>
                </li>
                <li className="flex items-start">
                  <Briefcase className="w-5 h-5 mr-2 mt-1 text-slate-950" />
                  <span>
                    Implemented JWT-based authentication and authorization middleware, securing API endpoints
                  </span>
                </li>
                <li className="flex items-start">
                  <Briefcase className="w-5 h-5 mr-2 mt-1 text-slate-950" />
                  <span>
                    Optimized API performance through database indexing, query optimization, and Redis caching
                  </span>
                </li>
                <li className="flex items-start">
                  <Briefcase className="w-5 h-5 mr-2 mt-1 text-slate-950" />
                  <span>
                    Collaborated with frontend teams on API contracts, error handling, and data validation strategies
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
