import { motion } from "framer-motion";

const CodingMusicJourney = () => {
  return (
    <section
      id="coding-music"
      className="py-16 bg-gradient-to-b from-dark to-dark-lighter text-white"
    >
      <div className="section-container">
        <h2 className="section-title">Coding Achievements 🚀</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center">
          {/* LeetCode Progress */}
          <motion.div
            className="bg-dark-light p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 w-full max-w-xs text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="https://leetcode.com/u/smbgAlok/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-semibold"
            >
              LeetCode Questions Solved:
              <span className="text-yellow-400 font-bold block text-3xl mt-2">
                230+ ✅
              </span>
            </a>
          </motion.div>

          {/* API Projects */}
          <motion.div
            className="bg-dark-light p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 w-full max-w-xs text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-gray-300">
              🔌 APIs Built
            </h3>
            <p className="text-gray-400 mb-4">
              RESTful & GraphQL APIs with JWT authentication and microservices architecture.
            </p>
            <div className="text-yellow-400 font-bold text-3xl">
              15+ APIs
            </div>
          </motion.div>

          {/* System Architecture */}
          <motion.div
            className="bg-dark-light p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 w-full max-w-xs text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-gray-300">
              🏗️ Systems Architected
            </h3>
            <p className="text-gray-400 mb-4">
              Scalable backend systems with microservices, caching, and optimized database design.
            </p>
            <div className="text-yellow-400 font-bold text-3xl">
              10+ Systems
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CodingMusicJourney;
