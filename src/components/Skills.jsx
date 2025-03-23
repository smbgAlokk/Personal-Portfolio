import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "C++", "Python (familiar)"],
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"],
    },
    {
      title: "State Management",
      skills: ["React Context API", "Redux (familiar)"],
    },
    {
      title: "AI Tools",
      skills: ["ChatGPT", "Bolt", "V0", "Cloud", "Cursor"],
    },
    {
      title: "Tools & Others",
      skills: [
        "Git",
        "GitHub",
        "Chrome DevTools",
        "React Profiler",
        "Lighthouse",
        "Vite",
        "Webpack",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-dark to-dark-lighter text-white"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-dark-light p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 w-full max-w-xs text-center"
              >
                <h3 className="text-2xl font-semibold">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag bg-primary">
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
