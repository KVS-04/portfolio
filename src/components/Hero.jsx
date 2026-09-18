import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Crosshair, Trophy, Flag, GraduationCap } from 'lucide-react';
import ShinyText from './ui/ShinyText';
import Magnetic from './ui/Magnetic';

const Hero = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="home" className="min-h-[80vh] flex flex-col justify-center items-start pt-20 relative">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full"
      >
        <motion.div variants={item} className="font-mono text-accent mb-4 flex items-center gap-2">
          <Terminal size={16} />
          <span className="text-sm">visitor@kvs:~$ whoami</span>
        </motion.div>
        
        <motion.h1 variants={item} className="text-4xl md:text-7xl font-extrabold mb-4 tracking-tight">
          <ShinyText text="Karan Veer Singh" className="text-zinc-100 drop-shadow-md" />
        </motion.h1>
        
        <motion.h2 variants={item} className="text-xl md:text-3xl font-bold text-zinc-400 mb-6 flex flex-wrap items-center gap-2">
          <span className="text-zinc-100 border-b-2 border-accent pb-1">Ethical Hacker & Red Teamer</span> 
          <span className="hidden md:inline text-zinc-600">|</span> 
          <span className="text-accentLight">CTF Player</span>
        </motion.h2>
        
        <motion.div variants={item} className="max-w-2xl text-zinc-400 text-base md:text-lg mb-8 leading-relaxed space-y-4">
          <p>
            I'm a 3rd-year B.Tech CSE student specializing in Cyber Security at VIT Chennai. 
            Passionate about breaking systems to build them stronger, identifying vulnerabilities, and advancing my offensive security skills.
          </p>
          <Magnetic>
            <div className="flex items-center gap-2 text-accentLight font-mono mt-2 bg-accent/10 w-max px-3 py-1 rounded-md border border-accent/20 hover:bg-accent/20 transition-colors cursor-default">
              <GraduationCap size={18} />
              <span>Current CGPA: 9.01</span>
            </div>
          </Magnetic>
        </motion.div>

        {/* Highlighted Badges */}
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-10 font-mono text-sm">
          <Magnetic>
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="flex items-center gap-3 px-5 py-3 bg-accent/10 border border-accent/40 rounded-md shadow-[0_0_15px_rgba(167,139,250,0.2)] cursor-default"
            >
              <Trophy size={20} className="text-accent" />
              <div>
                <div className="text-zinc-300">TryHackMe</div>
                <div className="text-accent font-bold text-lg">Top 6% Player</div>
              </div>
            </motion.div>
          </Magnetic>
          
          <Magnetic>
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="flex items-center gap-3 px-5 py-3 bg-slate-800 border border-slate-700 rounded-md cursor-default"
            >
              <Flag size={20} className="text-zinc-400" />
              <div>
                <div className="text-zinc-300">picoCTF</div>
                <div className="text-zinc-400">Active Participant</div>
              </div>
            </motion.div>
          </Magnetic>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap gap-4 font-mono text-sm">
          <Magnetic>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 bg-accent text-darkBg hover:bg-accentLight transition-all rounded-md font-bold shadow-[0_0_15px_rgba(167,139,250,0.4)]"
            >
              <Crosshair size={18} />
              VIEW_OPERATIONS
            </motion.a>
          </Magnetic>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
