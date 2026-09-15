import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Shield } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Terminal', href: '#home' },
    { name: 'Arsenal', href: '#skills' },
    { name: 'CTFs & Projects', href: '#projects' },
    { name: 'Comms', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-darkBg/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group text-xl font-bold font-mono tracking-tight">
          <Shield className="text-accent group-hover:text-accentLight transition-colors" size={24} />
          <span className="text-zinc-100 group-hover:text-accentLight transition-colors">
            KVS<span className="text-accent">_</span>04
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-400 hover:text-accentLight hover:text-glow transition-all duration-300 relative group"
            >
              <span className="text-accent mr-1">/</span>
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 border border-accent/50 text-accent hover:bg-accent hover:text-darkBg transition-all font-semibold rounded-sm"
          >
            CONNECT
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-zinc-400 hover:text-zinc-100" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-darkBg/95 backdrop-blur-lg border-b border-white/5 flex flex-col items-center py-6 gap-6 font-mono"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-accentLight transition-colors text-lg"
            >
              <span className="text-accent mr-2">&gt;</span>
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
