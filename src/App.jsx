import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CodingMusicJourney from "./components/CodingMusicJourney";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GitHubAnalytics from "./components/GitHubAnalytics";
import DataVisualization from "./components/DataVisualization";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-dark text-gray-200 dark:bg-dark light:bg-gray-100 light:text-primary transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <CodingMusicJourney />
        <Experience />
        <Skills />
        <Projects />
        <GitHubAnalytics />
        <DataVisualization />
        <Contact />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
