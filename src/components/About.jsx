import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-dark-light">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/Images/Alok-removebg-preview.png"
                alt="Developer workspace"
                className="w-[500px] h-[500px] rounded-lg shadow-xl bg-gradient-to-t from-white/10 via-white/5 to-transparent backdrop-blur-md"
              />
            </div>
            <div>
              <p className="text-gray-300 mb-6">
                I'm a passionate Front-End Developer with a keen eye for
                creating engaging user interfaces and exceptional web
                experiences. Currently pursuing my B.Tech in Computer Science &
                Engineering, I combine my academic knowledge with practical
                experience in modern web technologies.
              </p>
              <p className="text-gray-300 mb-6">
                During my internship at Pug Esports Academy, I've had the
                opportunity to work on real-world projects, improving my skills
                in React.js, Next.js, and API integration. I'm particularly
                proud of achieving a 25% improvement in data-fetching
                performance through optimization techniques.
              </p>
              <p className="text-gray-300">
                I'm always eager to learn new technologies and best practices,
                staying up-to-date with the latest developments in the front-end
                ecosystem. My goal is to create web applications that not only
                look great but also provide seamless user experiences.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
