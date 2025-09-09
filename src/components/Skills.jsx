import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analytics",
      skills: ["Excel", "SQL (PostgreSQL)", "Power BI", "Data Cleaning", "Data Visualization", "Business Intelligence"],
    },
    {
      title: "Python Libraries",
      skills: ["Pandas", "NumPy", "Seaborn", "Matplotlib", "Scikit-learn"],
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Data Modeling", "Query Optimization"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Jupyter Notebook", "VS Code", "Git", "GitHub", "Tableau"],
    },
    {
      title: "Web Development",
      skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "RESTful APIs"],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-primary-light to-primary text-white"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills <span className="text-accent">(Data Focus)</span></h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-primary-dark p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 w-full max-w-xs text-center border border-accent/20"
              >
                <h3 className="text-2xl font-semibold text-accent mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 bg-primary text-accent text-xs rounded-full m-1">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
