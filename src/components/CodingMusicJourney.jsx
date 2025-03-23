import { motion } from "framer-motion";

const CodingMusicJourney = () => {
  return (
    <section
      id="coding-music"
      className="py-16 bg-gradient-to-b from-dark to-dark-lighter text-white"
    >
      <div className="section-container">
        <h2 className="section-title">My Dual Passion 🚀</h2>
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
              <span className="text-primary font-bold block text-3xl mt-2">
                200+ ✅
              </span>
            </a>
          </motion.div>

          {/* YouTube Channel */}
          <motion.div
            className="bg-dark-light p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 w-full max-w-xs text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-gray-300">
              🎥 My Musical YouTube Channel
            </h3>
            <p className="text-gray-400 mb-4">
              I create and share my musical performances & compositions.
            </p>
            <a
              href="https://www.youtube.com/channel/UC0ITEPla-cz6U9YXqC-Se_A"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg shadow-lg transition"
            >
              🎵 Visit My YouTube
            </a>
          </motion.div>

          {/* Instagram Musical Interest */}
          <motion.div
            className="bg-dark-light p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 w-full max-w-xs text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-gray-300">
              🎶 My Musical Passion on Instagram
            </h3>
            <p className="text-gray-400 mb-4">
              Check out my musical journey & performances on Instagram.
            </p>
            <a
              href="https://www.instagram.com/unplugged_alok/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-primary text-primary hover:bg-gray-400 rounded-lg transition"
            >
              🎸 Follow Me on Instagram
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CodingMusicJourney;
