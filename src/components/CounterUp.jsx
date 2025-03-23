import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CounterUp = ({ start = 20, end, duration = 5 }) => {
  const [count, setCount] = useState(start);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let startTime = null;

      const step = (timestamp) => {
        if (startTime === null) startTime = timestamp;
        const progress = Math.min(
          (timestamp - startTime) / (duration * 1000),
          1
        );
        setCount(Math.floor(progress * (end - start) + start));

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  }, [inView, start, end, duration]);

  return (
    <motion.a
      ref={ref}
      href="https://leetcode.com/u/smbgAlok/"
      target="_blank"
      rel="noopener noreferrer"
      className="block sm:w-auto bg-primary-dark hover:bg-primary text-white text-lg sm:text-lg md:text-xl font-semibold px-4 sm:px-6 py-3 rounded-xl shadow-lg 
       transform transition-colors duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl text-center mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      LeetCode Questions Solved:{" "}
      <motion.span className="text-orange-300 font-bold text-xl sm:text-2xl md:text-3xl">
        {count}+
      </motion.span>
    </motion.a>
  );
};

export default CounterUp;
