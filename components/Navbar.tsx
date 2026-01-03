import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Skills', href: '#skills' },
];

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Initialize theme based on document class
  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      // Create a reversed copy to check from bottom to top
      // This ensures nested/later sections (like Publications) are caught before their parents/earlier siblings
      const sections = [...NAV_ITEMS].reverse().map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="bg-surfaceContainerLow/80 dark:bg-surfaceContainerHigh/90 backdrop-blur-xl shadow-2xl dark:shadow-black/50 border border-white/20 dark:border-outlineVariant/50 rounded-full pl-6 pr-2 py-2 pointer-events-auto flex items-center justify-between gap-4 md:gap-1 transition-all duration-300 w-full md:w-auto"
        >

          <a href="#" className="font-display font-bold text-xl text-textMain mr-4">RN.</a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveSection(item.href.substring(1))}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? 'text-textMain' : 'text-textMuted hover:text-textMain'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white dark:bg-secondaryContainer rounded-full -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}

            <div className="w-px h-6 bg-outlineVariant/30 mx-2" />
          </div>

          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full text-textMain hover:bg-surfaceContainerHighest transition-colors relative overflow-hidden group"
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode='wait' initial={false}>
                <motion.div
                  key={isDark ? 'moon' : 'sun'}
                  initial={{ y: -20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Moon size={20} /> : <Sun size={20} />}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-textMain rounded-full active:bg-surfaceContainerHighest"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Contact Button */}
            <a
              href="#contact"
              className="hidden md:block ml-1 px-5 py-2.5 rounded-full bg-primary text-onPrimary text-sm font-bold hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/20"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-24 left-4 right-4 z-40 bg-surfaceContainerLow dark:bg-surfaceContainerHigh border border-outlineVariant/50 rounded-3xl overflow-hidden shadow-2xl p-4 md:hidden origin-top"
          >
            <div className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-4 text-lg font-medium text-textMain rounded-xl hover:bg-surfaceContainerHighest transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-4 text-lg font-bold text-center text-onPrimary rounded-xl bg-primary shadow-lg"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;