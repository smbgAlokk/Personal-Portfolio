import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  BarChart,
  FileSpreadsheet,
  Database,
} from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  // Section class with data pattern background
  const sectionClass = "bg-primary py-10 sm:py-12 md:py-16 data-pattern-bg";
  const projects = [
    {
      title: "Diwali Sales Data Analysis",
      description:
        "Analyzed customer purchase behavior and sales trends. Created interactive visualizations to identify top products and customer segments.",
      image: "/Images/Diwali_Analysis.png",
      github: "https://github.com/smbgAlokk/Diwali-Sales-Analysis",
      tech: ["Python", "Pandas", "Numpy", "Seaborn", "Matplotlib"],
      icon: <BarChart className="text-accent" size={24} />,
      insights: [
        "Identified top-performing product categories",
        "Discovered key customer demographics",
        "Increased sales targeting efficiency by 35%",
      ],
      tools: ["Python", "Pandas", "Matplotlib", "Jupyter Notebook"],
    },
    {
      title: "Advanced Excel Sales Dashboard",
      description:
        "Interactive Excel dashboard designed to analyze Sales Executive performance across multiple Indian cities. Leverages advanced Excel functionalities like Pivot Tables, Slicers, Filters, Macros, Developer Tools, and Conditional Formatting.",
      image: "/Images/Dashboard.png",
      github: "https://github.com/smbgAlokk/excel-sales-dashboard",
      tech: ["Advanced Excel", "Pivot Tables", "Macros", "Data Analysis"],
      icon: <FileSpreadsheet className="text-accent" size={24} />,
      insights: [
        "Automated reporting saved 10+ hours weekly",
        "Visualized KPIs for executive decision-making",
        "Implemented dynamic filtering for data exploration",
      ],
      tools: ["Excel", "Power Query", "VBA", "Pivot Tables"],
    },
    {
      title: "Moon Production – Studio Booking Platform",
      description:
        "A full-stack platform showing versatility in web development. Demonstrates ability to build interactive data-driven applications.",
      image: "/Images/MoonStudio.png",
      github: "https://github.com/smbgAlokk/moon-production",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      icon: <Database className="text-accent" size={24} />,
      insights: [
        "Developed booking management system",
        "Implemented user authentication and profiles",
        "Created interactive dashboard for studio availability",
      ],
      tools: ["React", "Node.js", "MongoDB", "Express"],
    },
  ];

  // State to track which card is flipped
  const [flippedCards, setFlippedCards] = useState({});

  // Function to toggle card flip
  const toggleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-primary to-primary-light text-white py-10 sm:py-12 md:py-16 data-pattern-bg"
    >
      <div className="section-container px-3 sm:px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 md:mb-10 text-center">
            Projects <span className="text-accent">(Data Focus)</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-primary-light rounded-lg overflow-hidden border border-accent/20 min-h-[400px] h-auto md:h-[450px] perspective-1000"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  className="relative w-full h-full transition-all duration-500 preserve-3d"
                  animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  onClick={() => toggleFlip(index)} // flip only when card itself clicked
                >
                  {/* Front of card */}
                  <div className="absolute w-full h-full backface-hidden pointer-events-auto">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-primary-dark/80 p-2 rounded-full">
                        {project.icon}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-accent mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-primary text-accent text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* ✅ Clickable GitHub button */}
                      <div className="flex space-x-4 relative z-50 pointer-events-auto">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.stopPropagation();
                            e.nativeEvent.stopImmediatePropagation();
                          }}
                          className="inline-flex items-center px-4 py-2 bg-primary-dark/30 rounded-md text-accent hover:text-highlight transition-colors duration-300 cursor-pointer"
                        >
                          <Github size={18} className="mr-2" />
                          <span className="text-sm font-medium">Code</span>
                        </a>
                      </div>

                      <div className="mt-4 text-center">
                        <p className="text-xs text-gray-400">
                          Click to see details
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-primary-light p-4 sm:p-6 flex flex-col pointer-events-auto">
                    <div className="flex items-center mb-4">
                      {project.icon}
                      <h3 className="text-xl font-semibold text-accent ml-2">
                        {project.title}
                      </h3>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-accent mb-2">
                        Key Insights:
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {project.insights.map((insight, i) => (
                          <li key={i} className="text-sm text-gray-300">
                            {insight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-accent mb-2">
                        Tools Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-primary text-xs rounded-full text-accent"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* ✅ Clickable GitHub button on back */}
                    <div className="mt-auto flex gap-4 relative z-50 pointer-events-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.nativeEvent.stopImmediatePropagation();
                        }}
                        className="flex items-center px-4 py-2 bg-primary-dark/30 rounded-md text-accent hover:text-highlight transition-colors cursor-pointer"
                      >
                        <Github size={18} className="mr-2" />
                        <span className="text-sm font-medium">View Code</span>
                      </a>
                    </div>

                    <div className="mt-4 text-center">
                      <p className="text-xs text-gray-400">
                        Click to flip back
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
