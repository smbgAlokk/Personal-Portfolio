import { motion } from "framer-motion";
import { Github, BarChart, FileSpreadsheet, Database, ExternalLink } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const projects = [
    {
      title: "E-Commerce REST API",
      description:
        "🔐 Secure E-Commerce Backend API – Built a scalable REST API with JWT authentication, role-based access control, and payment integration. Features include user management, product catalog, order processing, and real-time notifications.",
      image: "/Images/Book_Store.png",
      github: "https://github.com/smbgAlokk/Online-Book-Store",
      tech: ["Node.js", "Express", "JWT", "PostgreSQL", "Redis"],
      icon: <Database className="text-accent" size={24} />,
      insights: [
        "Implemented JWT-based authentication with refresh tokens",
        "Designed RESTful API following industry best practices",
        "Built scalable microservices architecture with Redis caching",
        "Achieved 99.9% uptime with proper error handling and logging",
      ],
      tools: ["Node.js", "Express", "PostgreSQL", "Redis", "JWT"],
    },
    {
      title: "GraphQL API Gateway",
      description:
        "Microservices API Gateway built with GraphQL, providing unified access to multiple backend services. Features include query optimization, rate limiting, and real-time subscriptions.",
      image: "/Images/Diwali_Analysis.png",
      github: "https://github.com/smbgAlokk/Diwali-Sales-Analysis",
      tech: ["GraphQL", "Apollo Server", "Node.js", "TypeScript"],
      icon: <BarChart className="text-accent" size={24} />,
      insights: [
        "Designed GraphQL schema for optimal query performance",
        "Implemented DataLoader for efficient data fetching",
        "Reduced API response time by 60% through query optimization",
        "Built real-time subscriptions using WebSocket",
      ],
      tools: ["GraphQL", "Apollo Server", "TypeScript", "Node.js"],
    },
    {
      title: "Microservices Architecture",
      description:
        "Distributed system architecture with service discovery, API gateway, and event-driven communication. Includes authentication service, user service, and notification service with Docker containerization.",
      image: "/Images/Dashboard.png",
      github: "https://github.com/smbgAlokk/Interactive-Dashboard",
      tech: ["Microservices", "Docker", "Kubernetes", "RabbitMQ"],
      icon: <FileSpreadsheet className="text-accent" size={24} />,
      insights: [
        "Architected scalable microservices with independent deployment",
        "Implemented service discovery and load balancing",
        "Reduced deployment time by 70% with containerization",
        "Built resilient system with circuit breakers and retry mechanisms",
      ],
      tools: ["Docker", "Kubernetes", "RabbitMQ", "Node.js"],
    },
    {
      title: "Moon Production – Full Stack Platform",
      description:
        "Production-ready full-stack application with secure authentication, RESTful APIs, and real-time features. Demonstrates expertise in backend architecture, database design, and API development.",
      image: "/Images/MoonStudio.png",
      github: "https://github.com/smbgAlokk/moon-production",
      liveUrl: "https://moon-production.vercel.app/",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      icon: <Database className="text-accent" size={24} />,
      insights: [
        "Built secure authentication system with JWT tokens",
        "Designed RESTful APIs with proper error handling",
        "Implemented MongoDB aggregation pipelines for complex queries",
        "Optimized API performance with indexing and caching strategies",
      ],
      tools: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    },
  ];

  // Toggle card flip
  const toggleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-primary to-primary-light text-white py-12 md:py-16 data-pattern-bg"
    >
      <div className="section-container px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-10">
            Projects <span className="text-accent">(Backend & APIs)</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-primary-light rounded-lg overflow-hidden border border-accent/20 min-h-[400px] md:min-h-[450px] relative perspective-1000"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="relative w-full h-full transition-all duration-500 preserve-3d cursor-pointer"
                  animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  onClick={() => toggleFlip(index)}
                >
                  {/* Front */}
                  <div className="absolute w-full h-full backface-hidden">
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
                      <p className="text-gray-300 mb-4 hidden md:block">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-primary text-accent text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* GitHub Button (Front) */}
                      <div className="flex space-x-4 relative z-50">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center px-4 py-2 bg-primary-dark/30 rounded-md text-accent hover:text-highlight transition-colors duration-300 cursor-pointer"
                        >
                          <Github size={18} className="mr-2" />
                          <span className="text-sm font-medium">Code</span>
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center px-4 py-2 bg-primary-dark/30 rounded-md text-accent hover:text-highlight transition-colors duration-300 cursor-pointer"
                          >
                            <ExternalLink size={18} className="mr-2" />
                            <span className="text-sm font-medium">View</span>
                          </a>
                        )}
                      </div>

                      <p className="mt-4 text-xs text-gray-400 text-center">
                        Click card to see details
                      </p>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-primary-light p-6 flex flex-col">
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

                    {/* GitHub Button (Back) */}
                    <div className="mt-auto flex gap-4 relative z-50">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center px-4 py-2 bg-primary-dark/30 rounded-md text-accent hover:text-highlight transition-colors duration-300 cursor-pointer"
                      >
                        <Github size={18} className="mr-2" />
                        <span className="text-sm font-medium">View Code</span>
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center px-4 py-2 bg-primary-dark/30 rounded-md text-accent hover:text-highlight transition-colors duration-300 cursor-pointer"
                        >
                          <ExternalLink size={18} className="mr-2" />
                          <span className="text-sm font-medium">View Live</span>
                        </a>
                      )}
                    </div>

                    <p className="mt-4 text-xs text-gray-400 text-center">
                      Click card to flip back
                    </p>
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
