import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Diwali Sales Data Analysis",
      description:
        "Analyzed customer purchase behavior and sales trends. Created interactive visualizations to identify top products and customer segments.",
      image: "/Images/EMS.png",
      github: "https://github.com/smbgAlokk/diwali-sales-analysis",
      tech: ["Python", "Pandas", "Numpy", "Seaborn", "Matplotlib"],
    },
    {
      title: "Advanced Excel Sales Dashboard",
      description:
        "Interactive Excel dashboard designed to analyze Sales Executive performance across multiple Indian cities. Leverages advanced Excel functionalities like Pivot Tables, Slicers, Filters, Macros, Developer Tools, and Conditional Formatting.",
      image: "/Images/TipTap.png",
      github: "https://github.com/smbgAlokk/excel-sales-dashboard",
      tech: ["Advanced Excel", "Pivot Tables", "Macros", "Data Analysis"],
    },
    {
      title: "Moon Production – Studio Booking Platform",
      description:
        "A full-stack platform showing versatility in web development. Demonstrates ability to build interactive data-driven applications.",
      image: "/Images/bag.png",
      github: "https://github.com/smbgAlokk/moon-production",
      tech: ["React", "Node.js", "MongoDB", "Express"],
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-primary to-primary-light text-white"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Projects <span className="text-accent">(Data Focus)</span></h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-primary-light rounded-lg overflow-hidden border border-accent/20"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-accent mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-primary text-accent text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-accent hover:text-highlight"
                    >
                      <Github size={20} className="mr-1" />
                      <span>Code</span>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-accent hover:text-highlight"
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
