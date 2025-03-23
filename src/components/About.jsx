import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-dark-light py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src="/Images/Alok-removebg-preview.png"
                alt="Developer workspace"
                className="w-64 sm:w-80 md:w-96 lg:w-[500px] h-auto rounded-xl shadow-xl 
                bg-gradient-to-t from-white/10 via-white/5 to-transparent backdrop-blur-md"
              />
            </div>

            {/* Text Section */}
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I am a passionate{" "}
                <span className="text-primary font-semibold">
                  Full Stack Developer
                </span>{" "}
                with a strong foundation in React.js, Next.js, and API
                integration. Currently pursuing a B.Tech in Computer Science &
                Engineering, I blend technical expertise with creative
                problem-solving to build seamless web experiences.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                During my internship at{" "}
                <span className="text-primary font-semibold">
                  Pug Esports Academy
                </span>
                , I optimized data-fetching performance by 25%, improved UI
                responsiveness, and collaborated on real-world projects. With
                200+ questions solved on LeetCode, I continuously refine my
                problem-solving skills
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Beyond coding, I am deeply passionate about{" "}
                <span className="text-primary font-semibold">music</span>. I
                share my musical journey through my{" "}
                <span className="text-primary font-semibold">
                  YouTube Channel
                </span>{" "}
                and{" "}
                <span className="text-primary font-semibold">Instagram</span>,
                where I perform and create compositions. My goal is to bridge
                technology and creativity, crafting both impactful applications
                and immersive musical experiences.
              </p>

              <a
                href="/resume/AlokkumarCV.pdf"
                target="_blank"
                download="AlokKumarCV.pdf"
                rel="noopener noreferrer"
                className="flex items-center py-5 font-bold text-gray-400 hover:text-white"
              >
                <ExternalLink size={18} className="mr-2" />
                <span className="text-primary-light  hover:text-red-400">
                  Download Resume
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
