import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-primary-light py-16 px-6">
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
                src="/Images/Alok.png"
                alt="Developer workspace"
                className="w-64 sm:w-80 md:w-96 lg:w-[500px] h-auto rounded-xl shadow-xl 
                bg-gradient-to-t from-white/10 via-white/5 to-transparent backdrop-blur-md"
              />
            </div>

            {/* Text Section */}
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm an enthusiastic{" "}
                <span className="text-accent font-semibold">
                  Data Analyst
                </span>{" "}
                with a passion for finding insights in raw data. Skilled in Excel, SQL, Power BI, and Python (Pandas, Numpy, Seaborn, Matplotlib), I specialize in cleaning, visualizing, and transforming data into clear business stories. Currently exploring Data Engineering to build scalable data pipelines. My journey started in Web Development, giving me an extra edge in building interactive dashboards and data apps.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                My expertise includes{" "}
                <span className="text-accent font-semibold">
                  Data Analysis, Data Visualization, and Business Intelligence
                </span>
                . I'm passionate about transforming complex datasets into actionable insights that drive business decisions and create value.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not analyzing data, you'll find me exploring new data visualization techniques, learning about big data technologies, or participating in data science competitions. I believe in continuous learning and staying updated with the latest industry trends in data analytics and engineering.
              </p>

              <a
                href="https://drive.google.com/file/d/1OZza08zQmapvObD5td1i3RJLq46ZouRa/view?usp=sharing"
                target="_blank"
                className="flex items-center py-5 font-bold text-gray-400 hover:text-white"
              >
                <ExternalLink size={18} className="mr-2" />
                <span className="text-accent hover:text-highlight">
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
