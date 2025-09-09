import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BarChart, LineChart, PieChart } from 'lucide-react';

const DataVisualization = () => {
  const canvasRef = useRef(null);
  
  // Simple bar chart visualization
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Data for visualization
    const data = [65, 40, 85, 30, 55, 75, 45];
    const maxValue = Math.max(...data);
    const barWidth = width / data.length - 10;
    
    // Draw bars
    data.forEach((value, index) => {
      const barHeight = (value / maxValue) * (height - 40);
      const x = (barWidth + 10) * index + 5;
      const y = height - barHeight - 20;
      
      // Create gradient for bars
      const gradient = ctx.createLinearGradient(0, y, 0, height - 20);
      gradient.addColorStop(0, '#00B5D8'); // accent color
      gradient.addColorStop(1, '#FFD700'); // highlight color
      
      // Draw bar
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.roundRect(x, y, barWidth, barHeight, 5);
      ctx.fill();
      
      // Draw value
      ctx.fillStyle = '#fff';
      ctx.font = '12px Inter';
      ctx.textAlign = 'center';
      ctx.fillText(value, x + barWidth / 2, y - 5);
    });
    
    // Draw x-axis
    ctx.strokeStyle = '#4a5568';
    ctx.beginPath();
    ctx.moveTo(0, height - 20);
    ctx.lineTo(width, height - 20);
    ctx.stroke();
    
    // Draw labels
    ctx.fillStyle = '#cbd5e0';
    ctx.font = '10px Inter';
    ctx.textAlign = 'center';
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    labels.forEach((label, index) => {
      const x = (barWidth + 10) * index + barWidth / 2 + 5;
      ctx.fillText(label, x, height - 5);
    });
  }, []);
  
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
            <div className="bg-primary-light dark:bg-primary-light light:bg-light-primary p-6 rounded-xl border border-accent/20">
              <h3 className="text-xl font-semibold text-accent mb-4">Weekly Data Trends</h3>
              <div className="relative h-64 w-full bg-primary dark:bg-primary light:bg-light-primary-dark rounded-lg p-4 overflow-hidden">
                <canvas 
                  ref={canvasRef} 
                  width={500} 
                  height={250}
                  className="w-full h-full"
                ></canvas>
              </div>
            </div>
            
            {/* Visualization Types */}
            <div className="bg-primary-light dark:bg-primary-light light:bg-light-primary p-6 rounded-xl border border-accent/20">
              <h3 className="text-xl font-semibold text-accent mb-4">Visualization Types</h3>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-4 bg-primary dark:bg-primary light:bg-light-primary-dark rounded-lg">
                  <BarChart className="text-highlight mb-2" size={32} />
                  <p className="text-center">Bar Charts</p>
                  <p className="text-xs text-gray-400 text-center mt-1">Compare values across categories</p>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-primary dark:bg-primary light:bg-light-primary-dark rounded-lg">
                  <LineChart className="text-highlight mb-2" size={32} />
                  <p className="text-center">Line Charts</p>
                  <p className="text-xs text-gray-400 text-center mt-1">Track changes over time</p>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-primary dark:bg-primary light:bg-light-primary-dark rounded-lg">
                  <PieChart className="text-highlight mb-2" size={32} />
                  <p className="text-center">Pie Charts</p>
                  <p className="text-xs text-gray-400 text-center mt-1">Show composition of data</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-primary dark:bg-primary light:bg-light-primary-dark rounded-lg">
                <h4 className="font-medium text-accent mb-2">Data Analysis Process</h4>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Data Collection & Cleaning</li>
                  <li>Exploratory Data Analysis</li>
                  <li>Statistical Modeling</li>
                  <li>Data Visualization</li>
                  <li>Insights & Recommendations</li>
                </ol>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataVisualization;