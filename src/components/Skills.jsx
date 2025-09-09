import { motion } from "framer-motion";
import { Database, FileSpreadsheet, BarChart, LineChart, PieChart, Code, Server } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analytics",
      icon: <Database size={24} />,
      skills: [
        { name: "Excel", proficiency: 95, icon: <FileSpreadsheet size={16} /> },
        { name: "SQL (PostgreSQL)", proficiency: 90, icon: <Database size={16} /> },
        { name: "Power BI", proficiency: 85, icon: <BarChart size={16} /> },
        { name: "Data Cleaning", proficiency: 92, icon: <Database size={16} /> },
        { name: "Data Visualization", proficiency: 88, icon: <PieChart size={16} /> },
      ],
    },
    {
      title: "Python Libraries",
      icon: <Code size={24} />,
      skills: [
        { name: "Pandas", proficiency: 90, icon: <Database size={16} /> },
        { name: "NumPy", proficiency: 85, icon: <Database size={16} /> },
        { name: "Seaborn", proficiency: 80, icon: <LineChart size={16} /> },
        { name: "Matplotlib", proficiency: 85, icon: <BarChart size={16} /> },
        { name: "Scikit-learn", proficiency: 75, icon: <Database size={16} /> },
      ],
    },
    {
      title: "Database",
      icon: <Server size={24} />,
      skills: [
        { name: "PostgreSQL", proficiency: 90, icon: <Database size={16} /> },
        { name: "MySQL", proficiency: 85, icon: <Database size={16} /> },
        { name: "MongoDB", proficiency: 75, icon: <Database size={16} /> },
        { name: "Data Modeling", proficiency: 85, icon: <Database size={16} /> },
        { name: "Query Optimization", proficiency: 80, icon: <Database size={16} /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-primary-light to-primary dark:bg-gradient-to-b dark:from-primary-light dark:to-primary light:bg-gradient-to-b light:from-light-primary light:to-light-primary-dark text-white dark:text-white light:text-light-text"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills <span className="text-accent">(Data Focus)</span></h2>
          <div className="grid gap-8 lg:grid-cols-3 place-items-start">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-primary-dark dark:bg-primary-dark light:bg-light-primary p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 w-full border border-accent/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary rounded-full mr-3 text-accent">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-accent">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-accent">{skill.icon}</span>
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                        <span className="text-xs text-gray-400">{skill.proficiency}%</span>
                      </div>
                      <div className="h-2 w-full bg-primary rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-accent to-highlight rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Dashboard-like KPI indicator */}
                <div className="mt-6 p-3 bg-primary rounded-lg border border-accent/10 flex justify-between items-center">
                  <span className="text-xs text-gray-400">Proficiency Level</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full ${i < Math.floor(category.skills.reduce((acc, skill) => acc + skill.proficiency, 0) / category.skills.length / 20) ? 'bg-accent' : 'bg-gray-600'}`}
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
