import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, LineChart, PieChart, ChevronLeft, ChevronRight, Database, TrendingUp } from 'lucide-react';

const DataVisualization = () => {
  const canvasRef = useRef(null);
  const [activeChart, setActiveChart] = useState('bar');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const chartTypes = [
    { id: 'bar', name: 'Bar Chart', icon: <BarChart size={24} /> },
    { id: 'line', name: 'Line Chart', icon: <LineChart size={24} /> },
    { id: 'pie', name: 'Pie Chart', icon: <PieChart size={24} /> },
  ];
  
  const visualizationData = [
    {
      title: "Weekly Data Trends",
      description: "Analysis of weekly performance metrics showing key patterns",
      type: "bar",
      icon: <BarChart size={24} />
    },
    {
      title: "Monthly Revenue Growth",
      description: "Tracking revenue patterns across different business segments",
      type: "line",
      icon: <LineChart size={24} />
    },
    {
      title: "Market Segment Distribution",
      description: "Breakdown of customer segments and their relative proportions",
      type: "pie",
      icon: <PieChart size={24} />
    },
  ];

  const nextChart = () => {
    setCurrentIndex((prev) => (prev + 1) % visualizationData.length);
    setActiveChart(visualizationData[(currentIndex + 1) % visualizationData.length].type);
  };

  const prevChart = () => {
    setCurrentIndex((prev) => (prev - 1 + visualizationData.length) % visualizationData.length);
    setActiveChart(visualizationData[(currentIndex - 1 + visualizationData.length) % visualizationData.length].type);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    const values = [65, 40, 85, 30, 55, 75, 60];
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
    const segments = ["Product A", "Product B", "Product C", "Product D"];
    const segmentValues = [35, 25, 20, 20];
    const segmentColors = ["#38bdf8", "#0ea5e9", "#0284c7", "#0369a1"];

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (activeChart === 'bar') {
      // Calculate bar width and spacing
      const barCount = values.length;
      const barWidth = (canvas.width - 40) / barCount * 0.6;
      const spacing = (canvas.width - 40) / barCount * 0.4;
      const startX = 20;

      // Draw bars
      values.forEach((value, index) => {
        const x = startX + index * (barWidth + spacing);
        const barHeight = (value / 100) * (canvas.height - 60);
        const y = canvas.height - 30 - barHeight;

        // Create gradient for bar
        const gradient = ctx.createLinearGradient(0, y, 0, canvas.height - 30);
        gradient.addColorStop(0, "#38bdf8");
        gradient.addColorStop(1, "#0ea5e9");

        // Draw bar
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, barHeight, 5);
        ctx.fill();

        // Draw value on top of bar
        ctx.fillStyle = "#f8fafc";
        ctx.font = "10px Inter";
        ctx.textAlign = "center";
        ctx.fillText(value, x + barWidth / 2, y - 5);

        // Draw x-axis label
        ctx.fillStyle = "#94a3b8";
        ctx.fillText(days[index], x + barWidth / 2, canvas.height - 10);
      });

      // Draw x-axis line
      ctx.strokeStyle = "#475569";
      ctx.beginPath();
      ctx.moveTo(10, canvas.height - 30);
      ctx.lineTo(canvas.width - 10, canvas.height - 30);
      ctx.stroke();
    } else if (activeChart === 'line') {
      // Draw line chart
      const lineValues = [40, 60, 45, 70, 55, 80, 65];
      const pointCount = lineValues.length;
      const pointSpacing = (canvas.width - 40) / (pointCount - 1);
      const startX = 20;
      
      // Draw grid lines
      ctx.strokeStyle = "#475569";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < 5; i++) {
        const y = 20 + i * (canvas.height - 50) / 4;
        ctx.beginPath();
        ctx.moveTo(20, y);
        ctx.lineTo(canvas.width - 20, y);
        ctx.stroke();
      }
      
      // Draw line
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 3;
      ctx.beginPath();
      lineValues.forEach((value, index) => {
        const x = startX + index * pointSpacing;
        const y = canvas.height - 30 - (value / 100) * (canvas.height - 60);
        
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
        
        // Draw points
        ctx.fillStyle = "#0ea5e9";
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw value above point
        ctx.fillStyle = "#f8fafc";
        ctx.font = "10px Inter";
        ctx.textAlign = "center";
        ctx.fillText(value, x, y - 10);
        
        // Draw x-axis label
        ctx.fillStyle = "#94a3b8";
        ctx.fillText(months[index], x, canvas.height - 10);
      });
      ctx.stroke();
      
      // Draw x-axis line
      ctx.strokeStyle = "#475569";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(10, canvas.height - 30);
      ctx.lineTo(canvas.width - 10, canvas.height - 30);
      ctx.stroke();
    } else if (activeChart === 'pie') {
      // Draw pie chart
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) - 30;
      
      let startAngle = 0;
      let total = segmentValues.reduce((sum, value) => sum + value, 0);
      
      // Draw segments
      segmentValues.forEach((value, index) => {
        const sliceAngle = (value / total) * 2 * Math.PI;
        
        ctx.fillStyle = segmentColors[index];
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
        ctx.closePath();
        ctx.fill();
        
        // Draw labels
        const labelAngle = startAngle + sliceAngle / 2;
        const labelX = centerX + (radius * 0.7) * Math.cos(labelAngle);
        const labelY = centerY + (radius * 0.7) * Math.sin(labelAngle);
        
        ctx.fillStyle = "#f8fafc";
        ctx.font = "10px Inter";
        ctx.textAlign = "center";
        ctx.fillText(`${value}%`, labelX, labelY);
        
        startAngle += sliceAngle;
      });
      
      // Draw legend
      const legendX = canvas.width - 100;
      const legendY = 30;
      
      segmentValues.forEach((value, index) => {
        const y = legendY + index * 20;
        
        // Draw color box
        ctx.fillStyle = segmentColors[index];
        ctx.fillRect(legendX, y, 10, 10);
        
        // Draw label
        ctx.fillStyle = "#94a3b8";
        ctx.font = "10px Inter";
        ctx.textAlign = "left";
        ctx.fillText(segments[index], legendX + 15, y + 8);
      });
    }
  }, [activeChart, currentIndex]);
  
  return (
    <section id="visualization" className="bg-gradient-to-b from-primary-light to-primary dark:bg-gradient-to-b dark:from-primary-light dark:to-primary light:bg-gradient-to-b light:from-light-primary-dark light:to-light-primary text-white dark:text-white light:text-light-text">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Data Visualization <span className="text-accent">📊</span></h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Canvas Visualization */}
            <motion.div 
              className="bg-primary-light dark:bg-primary-light light:bg-light-primary p-6 rounded-xl border border-accent/20 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  {visualizationData[currentIndex].icon}
                  <h3 className="text-xl font-semibold text-accent ml-2">
                    {visualizationData[currentIndex].title}
                  </h3>
                </div>
                <div className="flex space-x-2">
                  {chartTypes.map((chart) => (
                    <motion.button
                      key={chart.id}
                      className={`p-2 rounded-full ${activeChart === chart.id ? 'bg-accent text-white' : 'bg-primary text-gray-400'}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveChart(chart.id)}
                    >
                      {chart.icon}
                    </motion.button>
                  ))}
                </div>
              </div>
              
              <p className="text-sm text-gray-400 mb-4">{visualizationData[currentIndex].description}</p>
              
              <div className="relative h-64 w-full bg-primary dark:bg-primary light:bg-light-primary-dark rounded-lg p-4 overflow-hidden">
                <canvas 
                  ref={canvasRef} 
                  className="w-full h-full"
                ></canvas>
                
                {/* Navigation arrows */}
                <div className="absolute inset-0 flex items-center justify-between pointer-events-none px-2">
                  <motion.button
                    className="bg-primary-dark/80 p-2 rounded-full text-accent pointer-events-auto"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={prevChart}
                  >
                    <ChevronLeft size={20} />
                  </motion.button>
                  <motion.button
                    className="bg-primary-dark/80 p-2 rounded-full text-accent pointer-events-auto"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextChart}
                  >
                    <ChevronRight size={20} />
                  </motion.button>
                </div>
              </div>
              
              {/* Chart type indicator */}
              <div className="flex justify-center mt-4 space-x-1">
                {visualizationData.map((_, index) => (
                  <div 
                    key={index} 
                    className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-accent' : 'bg-gray-600'}`}
                  />
                ))}
              </div>
            </motion.div>
            
            {/* Visualization Types */}
            <div className="bg-primary-light dark:bg-primary-light light:bg-light-primary p-6 rounded-xl border border-accent/20">
              <div className="flex items-center mb-4">
                <Database className="text-accent mr-2" size={20} />
                <h3 className="text-xl font-semibold text-accent">Visualization Types</h3>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <motion.div 
                  className="flex flex-col items-center p-4 bg-primary dark:bg-primary light:bg-light-primary-dark rounded-lg"
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <BarChart className="text-highlight mb-2" size={32} />
                  <p className="text-center">Bar Charts</p>
                  <p className="text-xs text-gray-400 text-center mt-1">Compare values across categories</p>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col items-center p-4 bg-primary dark:bg-primary light:bg-light-primary-dark rounded-lg"
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <LineChart className="text-highlight mb-2" size={32} />
                  <p className="text-center">Line Charts</p>
                  <p className="text-xs text-gray-400 text-center mt-1">Track changes over time</p>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col items-center p-4 bg-primary dark:bg-primary light:bg-light-primary-dark rounded-lg"
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <PieChart className="text-highlight mb-2" size={32} />
                  <p className="text-center">Pie Charts</p>
                  <p className="text-xs text-gray-400 text-center mt-1">Show composition of data</p>
                </motion.div>
              </div>
              
              <motion.div 
                className="mt-6 p-4 bg-primary dark:bg-primary light:bg-light-primary-dark rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <TrendingUp className="text-accent mr-2" size={20} />
                  <h4 className="font-medium text-accent">Data Analysis Process</h4>
                </div>
                <ol className="space-y-3">
                  {[
                    "Data Collection & Cleaning",
                    "Exploratory Data Analysis",
                    "Statistical Modeling",
                    "Data Visualization",
                    "Insights & Recommendations"
                  ].map((step, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-light flex items-center justify-center mr-2">
                        <span className="text-accent text-xs">{index + 1}</span>
                      </div>
                      <span>{step}</span>
                    </motion.li>
                  ))}
                </ol>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataVisualization;