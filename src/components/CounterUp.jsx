import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Database, BarChart3, Lightbulb } from "lucide-react";

const CounterUp = ({ start = 20, end, duration = 5 }) => {
  const [counts, setCounts] = useState({
    datasets: start,
    dashboards: Math.floor(start / 2),
    insights: Math.floor(start / 3)
  });
  
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
        
        setCounts({
          datasets: Math.floor(progress * (end - start) + start),
          dashboards: Math.floor(progress * (Math.floor(end/2) - Math.floor(start/2)) + Math.floor(start/2)),
          insights: Math.floor(progress * (Math.floor(end/1.5) - Math.floor(start/3)) + Math.floor(start/3))
        });

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  }, [inView, start, end, duration]);

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mx-auto mt-6 mb-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, staggerChildren: 0.1 }}
    >
      <InsightCard 
        icon={<Database className="text-accent" size={24} />}
        count={counts.datasets}
        label="Datasets Analyzed"
      />
      
      <InsightCard 
        icon={<BarChart3 className="text-highlight" size={24} />}
        count={counts.dashboards}
        label="Dashboards Built"
      />
      
      <InsightCard 
        icon={<Lightbulb className="text-orange-300" size={24} />}
        count={counts.insights}
        label="Problems Solved"
      />
    </motion.div>
  );
};

const InsightCard = ({ icon, count, label }) => {
  return (
    <motion.div
      className="bg-primary-dark hover:bg-primary text-white px-4 py-3 rounded-xl shadow-lg border border-accent/20
      transform transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center"
      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    >
      <div className="flex items-center justify-center mb-2">
        {icon}
      </div>
      <motion.span className="text-accent font-bold text-xl sm:text-2xl md:text-3xl block">
        {count}+
      </motion.span>
      <span className="text-sm text-gray-300">{label}</span>
    </motion.div>
  );
};


export default CounterUp;
