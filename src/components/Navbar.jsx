import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed top-2 w-full  z-50 transition-all duration-300 rounded-full  ${
        isScrolled ? "bg-dark/50 backdrop-blur-sm" : "bg-transparent  "
      } `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-white">AK</span>
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
                  className="nav-link cursor-pointer"
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

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
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
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white cursor-pointer"
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
