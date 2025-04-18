import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Employee Management System",
      description:
        "A comprehensive system built with React, Vite, and Tailwind CSS featuring role-based access control, real-time performance tracking, and automated reports.",
      image: "/Images/EMS.png",
      github: "https://github.com/smbgAlokk/employee-management",
      tech: ["React", "Vite", "Tailwind CSS", "Context API"],
    },
    {
      title: "TipTap Text Editor",
      description:
        "A customizable Rich Text Editor built using React and TipTap with advanced text formatting capabilities and a modern, responsive UI.",
      image: "/Images/TipTap.png",
      github: "https://github.com/smbgAlokk/tiptap-editor",
      live: "https://tiptaptexteditor.netlify.app/",
      tech: ["React", "TipTap", "Tailwind CSS"],
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-dark to-dark-lighter text-white"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-dark-light rounded-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-white"
                    >
                      <Github size={20} className="mr-1" />
                      <span>Code</span>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-300 hover:text-white"
                      >
                        <ExternalLink size={20} className="mr-1" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
