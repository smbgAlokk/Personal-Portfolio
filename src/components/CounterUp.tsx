import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface CounterUpProps {
  start?: number;
  end: number;
  duration?: number;
}

const CounterUp: React.FC<CounterUpProps> = ({
  start = 0,
  end,
  duration = 2,
}) => {
  const [count, setCount] = useState<number>(start);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  console.log("CounterUp Mounted"); // ✅ Log when component renders
  console.log("In View:", inView); // ✅ Log when element is in view

  useEffect(() => {
    if (inView) {
      console.log("Counter Started!"); // ✅ Log when counter animation starts
      let startTime: number | null = null;

      const step = (timestamp: number) => {
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
      className="bg-red-500 text-white text-2xl font-bold px-6 py-3 rounded-lg shadow-lg transition transform hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      LeetCode Questions Solved:{" "}
      <motion.span className="text-yellow-300">{count}+</motion.span>
    </motion.a>
  );
};

export default CounterUp;
