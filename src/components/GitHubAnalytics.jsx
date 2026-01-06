import { motion } from "framer-motion";
import { Github, GitBranch, GitPullRequest, Star } from "lucide-react";

const GitHubAnalytics = () => {
  return (
    <section
      id="github"
      className="bg-gradient-to-b from-primary-dark to-primary text-white"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            GitHub & Analytics <span className="text-accent">📊</span>
          </h2>

          {/* GitHub Stats */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-primary-light p-6 rounded-xl border border-accent/20">
              <h3 className="text-xl font-semibold text-accent mb-4">
                GitHub Stats
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center p-3 bg-primary rounded-lg">
                  <Star className="text-highlight mr-2" size={24} />
                  <div>
                    <p className="text-sm text-gray-300">Stars</p>
                    <p className="text-xl font-bold text-white">120+</p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-primary rounded-lg">
                  <GitBranch className="text-highlight mr-2" size={24} />
                  <div>
                    <p className="text-sm text-gray-300">Forks</p>
                    <p className="text-xl font-bold text-white">45+</p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-primary rounded-lg">
                  <GitPullRequest className="text-highlight mr-2" size={24} />
                  <div>
                    <p className="text-sm text-gray-300">Pull Requests</p>
                    <p className="text-xl font-bold text-white">75+</p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-primary rounded-lg">
                  <Github className="text-highlight mr-2" size={24} />
                  <div>
                    <p className="text-sm text-gray-300">Repositories</p>
                    <p className="text-xl font-bold text-white">30+</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contribution Graph */}
            <div className="bg-primary-light p-6 rounded-xl border border-accent/20">
              <h3 className="text-xl font-semibold text-accent mb-4">
                Contribution Graph
              </h3>

              <div className="relative h-64 w-full bg-primary rounded-lg p-4 overflow-hidden">
                {/* Animated contribution graph simulation */}
                <div className="absolute inset-0 flex items-end justify-around px-2">
                  {[...Array(30)].map((_, i) => {
                    const height = Math.floor(Math.random() * 70) + 10;
                    return (
                      <motion.div
                        key={i}
                        className="w-2 bg-accent rounded-t-sm"
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{
                          delay: i * 0.05,
                          duration: 1,
                          ease: "easeOut",
                        }}
                      />
                    );
                  })}
                </div>

                {/* Snake animation overlay */}
                <motion.div
                  className="absolute bottom-0 left-0 w-3 h-3 rounded-full bg-highlight"
                  animate={{
                    x: [0, "100%", "100%", 0, 0],
                    y: ["0%", "0%", "-50%", "-50%", "0%"],
                  }}
                  transition={{
                    duration: 8,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                />
              </div>

              <div className="mt-4 text-center">
                <a
                  href="https://github.com/smbgAlokk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:text-highlight transition-colors duration-300"
                >
                  <Github size={18} className="mr-2" />
                  View Full GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* Top Languages */}
          <div className="bg-primary-light p-6 rounded-xl border border-accent/20">
            <h3 className="text-xl font-semibold text-accent mb-4">
              Top Languages
            </h3>

            <div className="space-y-4">
              {[
                { name: "JavaScript", percentage: 35, color: "bg-accent" },
                { name: "TypeScript", percentage: 30, color: "bg-highlight" },
                { name: "Python", percentage: 20, color: "bg-green-500" },
                { name: "SQL", percentage: 10, color: "bg-purple-500" },
                { name: "Go", percentage: 5, color: "bg-blue-500" },
              ].map((language, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between">
                    <span>{language.name}</span>
                    <span>{language.percentage}%</span>
                  </div>
                  <div className="w-full bg-primary rounded-full h-2.5">
                    <motion.div
                      className={`h-2.5 rounded-full ${language.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${language.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubAnalytics;
