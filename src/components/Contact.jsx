import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-dark-lighter">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Contact</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-gray-300 mb-12">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <a
                  href="mailto:contact.alokkumarr@gmail.com"
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-6 h-6 text-primary mr-3" />
                  <span>contact.alokkumarr@gmail.com</span>
                </a>
                <a
                  href="tel:+916392772903"
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Phone className="w-6 h-6 text-primary mr-3" />
                  <span>+91 6392772903</span>
                </a>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  <span>Delhi, India</span>
                </div>
              </div>
              <div className="space-y-6">
                <a
                  href="https://github.com/smbgAlokk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Github className="w-6 h-6 text-primary mr-3" />
                  <span>github.com/smbgAlokk</span>
                </a>
                <a
                  href="https://linkedin.com/in/alokkumarr04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Linkedin className="w-6 h-6 text-primary mr-3" />
                  <span>linkedin.com/in/alokkumarr04</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
