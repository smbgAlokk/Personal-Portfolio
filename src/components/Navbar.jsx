import { useState, useEffect, useContext } from "react";
import { Link } from "react-scroll";
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "GitHub", to: "github" },
    { name: "Visualization", to: "visualization" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed top-2 w-full z-50 transition-all duration-300 rounded-full ${
        isScrolled 
          ? isDarkMode 
            ? "bg-primary/80 backdrop-blur-sm" 
            : "bg-light-primary/80 backdrop-blur-sm" 
          : "bg-transparent"
      } dark:text-white light:text-light-text`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-accent">AK</span>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  className="nav-link cursor-pointer hover:text-accent"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/smbgAlokk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-highlight"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/alokkumarr04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-highlight"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:contact.alokkumarr@gmail.com"
              className="text-accent hover:text-highlight"
            >
              <Mail size={20} />
            </a>
            <button 
              className="bg-highlight/90 hover:bg-highlight text-primary px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300"
              onClick={() => window.open('/Resume/AlokkumarCV.pdf', '_blank')}
            >
              Resume
            </button>
            <button
              onClick={toggleTheme}
              className="p-1 rounded-full hover:bg-primary-light dark:hover:bg-primary-light light:hover:bg-light-dark transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun size={20} className="text-highlight" />
              ) : (
                <Moon size={20} className="text-accent" />
              )}
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-accent hover:text-highlight focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-light">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-64}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-accent cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex justify-center space-x-6 py-4 border-t border-dark-lighter">
            <a
              href="https://github.com/smbgAlokk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/alokkumarr04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:contact.alokkumarr@gmail.com"
              className="text-gray-300 hover:text-white"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
