import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'C++', 'Python (familiar)'],
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'],
    },
    {
      title: 'State Management',
      skills: ['React Context API', 'Redux (familiar)'],
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'GitHub', 'Chrome DevTools', 'React Profiler', 'Lighthouse', 'Vite', 'Webpack'],
    },
  ];

  return (
    <section id="skills" className="bg-dark-light">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-dark p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-primary mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
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