import React from "react";
import { motion } from "framer-motion";

const SkillIcons = () => {
  // Software developer skills with lightweight SVG icons
  const skills = [
    {
      name: "JavaScript",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="100%"
          height="100%"
        >
          <path fill="#ffd600" d="M6,42V6h36v36H6z" />
          <path
            fill="#000001"
            d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
          />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="100%"
          height="100%"
        >
          <rect x="6" y="6" width="36" height="36" fill="#3178c6" rx="4" />
          <path
            fill="#ffffff"
            d="M16 20h7v3h-2v9h-3v-9h-2v-3zm10.5 6.2c.6-.5 1.5-.9 2.7-.9 2.3 0 3.8 1.3 3.8 3.6V35h-3v-4c0-1-.6-1.7-1.7-1.7-1 0-1.8.5-1.8 1.8V35h-3v-9h3v1.2z"
          />
        </svg>
      ),
    },
    {
      name: "React",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="100%"
          height="100%"
        >
          <path
            fill="#80deea"
            d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
          />
          <path
            fill="#80deea"
            d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
          />
          <path
            fill="#80deea"
            d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
          />
          <circle cx="24" cy="24" r="4" fill="#80deea" />
        </svg>
      ),
    },
    {
      name: "Next.js",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="100%"
          height="100%"
        >
          <path
            fill="#212121"
            d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"
          />
        </svg>
      ),
    },
    {
      name: "Node.js",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="100%"
          height="100%"
        >
          <path fill="#3c873a" d="M24 4l15 8.7v17.6L24 44 9 30.3V12.7L24 4z" />
          <path
            fill="#ffffff"
            d="M24 15c-3.2 0-5.5 1.7-5.5 4.3 0 2.6 2.1 3.6 5.3 4l1.2.1v.5c0 1-.8 1.5-2.3 1.5-1.4 0-2.5-.4-3.5-.9l-1.1 2.7c1.3.7 3 1.1 4.8 1.1 3.7 0 5.9-1.8 5.9-4.8v-7.9H24z"
          />
        </svg>
      ),
    },
    {
      name: "Express",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="100%"
          height="100%"
        >
          <rect x="6" y="10" width="36" height="28" rx="4" fill="#111827" />
          <path
            fill="#e5e7eb"
            d="M15 29h5v2h-8v-2l5-7h-5v-2h8v2zM30.5 21c2.4 0 4.2 1.8 4.2 4.5S32.9 30 30.5 30s-4.2-1.8-4.2-4.5S28.1 21 30.5 21zm0 2.1c-1.2 0-2.1.9-2.1 2.4s.9 2.4 2.1 2.4 2.1-.9 2.1-2.4-.9-2.4-2.1-2.4z"
          />
        </svg>
      ),
    },
    {
      name: "MongoDB",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="100%"
          height="100%"
        >
          <path
            fill="#0f766e"
            d="M24 5c-1.5 3.4-8 9.3-8 18.1C16 30.7 19.4 35 24 39c4.6-4 8-8.3 8-15 0-8.8-6.5-14.7-8-19z"
          />
          <path
            fill="#ecfeff"
            d="M24 14c-2.5 2.6-4 5.3-4 9.1 0 3.5 1.4 6.2 4 8.9 2.6-2.7 4-5.4 4-8.9C28 19.3 26.5 16.6 24 14z"
            opacity="0.85"
          />
        </svg>
      ),
    },
    {
      name: "PostgreSQL",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="100%"
          height="100%"
        >
          <rect x="6" y="8" width="36" height="32" rx="6" fill="#1d4ed8" />
          <ellipse cx="24" cy="20" rx="10" ry="6" fill="#eff6ff" />
          <path fill="#1d4ed8" d="M19 18h3v6h-3zM26 18h3v6h-3z" />
        </svg>
      ),
    },
    {
      name: "JWT",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="100%"
          height="100%"
        >
          <rect x="6" y="6" width="36" height="36" rx="4" fill="#000000" />
          <path
            fill="#ffffff"
            d="M14 18h3v12h-3V18zm7 0h3v9h-3v-9zm7 0h3v12h-3V18z"
          />
          <path fill="#00d9ff" d="M12 14h24v2H12v-2zm0 18h24v2H12v-2z" />
        </svg>
      ),
    },
    {
      name: "API",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="100%"
          height="100%"
        >
          <rect x="6" y="6" width="36" height="36" rx="4" fill="#6366f1" />
          <circle cx="18" cy="18" r="3" fill="#ffffff" />
          <circle cx="30" cy="18" r="3" fill="#ffffff" />
          <circle cx="18" cy="30" r="3" fill="#ffffff" />
          <circle cx="30" cy="30" r="3" fill="#ffffff" />
          <path
            stroke="#ffffff"
            strokeWidth="2"
            fill="none"
            d="M18 18 L30 18 M18 18 L18 30 M30 18 L30 30 M18 30 L30 30"
          />
          <path
            stroke="#ffffff"
            strokeWidth="2"
            fill="none"
            d="M18 18 L30 30 M30 18 L18 30"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative w-full h-24 sm:h-32 md:h-40 mt-4 sm:mt-6 md:mt-8">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="absolute flex flex-col items-center justify-center"
          initial={{
            x: Math.random() * 80 - 40,
            y: Math.random() * 40 - 20,
            opacity: 0,
          }}
          animate={{
            x: [Math.random() * 80 - 40, Math.random() * 80 - 40],
            y: [Math.random() * 40 - 20, Math.random() * 40 - 20],
            opacity: 1,
          }}
          transition={{
            x: {
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
            y: {
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
            opacity: { duration: 1 },
          }}
          style={{
            left: `${index * (100 / skills.length) * 0.9 + 5}%`,
            top: `${Math.random() * 60}%`,
          }}
        >
          <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 p-1.5 sm:p-2 bg-primary-dark rounded-full border border-accent/30 dark:bg-primary-dark dark:border-accent/30 light:bg-light-primary-dark light:border-accent/30">
            {skill.icon}
          </div>
          <span className="text-xs sm:text-sm text-gray-300 mt-1 dark:text-gray-300 light:text-gray-700 hidden sm:block">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillIcons;
