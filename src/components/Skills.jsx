import { motion } from "framer-motion";
import {
  Database,
  FileSpreadsheet,
  BarChart,
  LineChart,
  PieChart,
  Code,
  Server,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Technologies",
      icon: <Server size={24} />,
      skills: [
        { name: "Node.js", proficiency: 95, icon: <Code size={16} /> },
        {
          name: "Express.js",
          proficiency: 92,
          icon: <Code size={16} />,
        },
        { name: "Python", proficiency: 88, icon: <Code size={16} /> },
        {
          name: "Django/Flask",
          proficiency: 85,
          icon: <Code size={16} />,
        },
        {
          name: "TypeScript",
          proficiency: 90,
          icon: <Code size={16} />,
        },
      ],
    },
    {
      title: "API & Authentication",
      icon: <Database size={24} />,
      skills: [
        { name: "REST APIs", proficiency: 95, icon: <Database size={16} /> },
        { name: "GraphQL", proficiency: 85, icon: <Database size={16} /> },
        { name: "JWT", proficiency: 92, icon: <Code size={16} /> },
        { name: "OAuth2", proficiency: 88, icon: <Code size={16} /> },
        { name: "WebSocket", proficiency: 80, icon: <Database size={16} /> },
      ],
    },
    {
      title: "Architecture & Database",
      icon: <Server size={24} />,
      skills: [
        { name: "System Design", proficiency: 90, icon: <LineChart size={16} /> },
        { name: "Microservices", proficiency: 88, icon: <Server size={16} /> },
        { name: "PostgreSQL", proficiency: 92, icon: <Database size={16} /> },
        {
          name: "MongoDB",
          proficiency: 85,
          icon: <Database size={16} />,
        },
        {
          name: "Redis",
          proficiency: 82,
          icon: <Database size={16} />,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-primary-light to-primary dark:bg-gradient-to-b dark:from-primary-light dark:to-primary light:bg-gradient-to-b light:from-light-primary light:to-light-primary-dark text-white dark:text-white light:text-light-text py-10 sm:py-12 md:py-16 data-pattern-bg"
    >
      <div className="section-container px-3 sm:px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 md:mb-10 text-center">
            Skills <span className="text-accent">(Backend & Architecture)</span>
          </h2>
          <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-start">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-primary-dark dark:bg-primary-dark light:bg-light-primary p-3 xs:p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 w-full border border-accent/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="p-2 xs:p-3 bg-primary rounded-full mr-2 xs:mr-3 text-accent">
                    {category.icon}
                  </div>
                  <h3 className="text-xl xs:text-2xl font-semibold text-accent">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1 xs:gap-2">
                          <span className="text-accent">{skill.icon}</span>
                          <span className="text-xs xs:text-sm font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs text-gray-400">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="h-1.5 xs:h-2 w-full bg-primary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-accent to-highlight rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{
                            duration: 1,
                            delay: 0.2 + skillIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dashboard-like KPI indicator */}
                <div className="mt-4 sm:mt-6 p-2 xs:p-3 bg-primary rounded-lg border border-accent/10 flex justify-between items-center">
                  <span className="text-xs text-gray-400">
                    Proficiency Level
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i <
                          Math.floor(
                            category.skills.reduce(
                              (acc, skill) => acc + skill.proficiency,
                              0
                            ) /
                              category.skills.length /
                              20
                          )
                            ? "bg-accent"
                            : "bg-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
