import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('#hero');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(link.href);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.h1
          className="text-2xl md:text-3xl font-extrabold text-blue-400 tracking-wide"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Serhii Chalyi
        </motion.h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className={`group relative text-lg font-semibold transition-all duration-300 ${
                activeSection === link.href
                  ? 'text-blue-400 neon-glow'
                  : 'text-gray-200 hover:text-blue-400'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          className="md:hidden bg-black bg-opacity-90 px-6 pb-4 space-y-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className={`block text-xl font-semibold transition ${
                activeSection === link.href
                  ? 'text-blue-400 neon-glow'
                  : 'text-gray-200 hover:text-blue-400'
              }`}
            >
              {link.label}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
