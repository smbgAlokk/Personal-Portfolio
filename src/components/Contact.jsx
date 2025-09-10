import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-primary to-primary-light data-pattern-bg relative z-0"
    >
      <div className="section-container relative z-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="section-title">
            Let's Work Together <span className="text-highlight">🚀</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-center text-gray-300 mb-12">
              Open to{" "}
              <span className="text-accent font-semibold">Data Analyst</span>{" "}
              and{" "}
              <span className="text-highlight font-semibold">
                Data Engineering
              </span>{" "}
              opportunities. Let's connect and create something amazing with
              data. Whether you need help with data analysis, visualization, or
              building data pipelines, I'm here to help transform your raw data
              into valuable insights that drive business decisions.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left side */}
              <div className="space-y-6">
                <motion.a
                  href="mailto:contact.alokkumarr@gmail.com"
                  className="relative z-10 flex items-center text-gray-300 hover:text-white transition-all duration-300 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-6 h-6 text-accent mr-3 group-hover:text-highlight transition-colors duration-300" />
                  <span>contact.alokkumarr@gmail.com</span>
                </motion.a>

                <motion.a
                  href="tel:+916392772903"
                  className="relative z-10 flex items-center text-gray-300 hover:text-white transition-all duration-300 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="w-6 h-6 text-accent mr-3 group-hover:text-highlight transition-colors duration-300" />
                  <span>+91 6392772903</span>
                </motion.a>

                <motion.div
                  className="relative z-10 flex items-center text-gray-300 group"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-6 h-6 text-accent mr-3 group-hover:text-highlight transition-colors duration-300" />
                  <span>Delhi, India</span>
                </motion.div>
              </div>

              {/* Right side */}
              <div className="space-y-6">
                <motion.a
                  href="https://github.com/smbgAlokk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 flex items-center text-gray-300 hover:text-white transition-all duration-300 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className="w-6 h-6 text-accent mr-3 group-hover:text-highlight transition-colors duration-300" />
                  <span>github.com/smbgAlokk</span>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/alokkumarr04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 flex items-center text-gray-300 hover:text-white transition-all duration-300 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Linkedin className="w-6 h-6 text-accent mr-3 group-hover:text-highlight transition-colors duration-300" />
                  <span>linkedin.com/in/alokkumarr04</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
