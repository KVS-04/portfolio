import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Crosshair, Trophy, Flag } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-[80vh] flex flex-col justify-center items-start pt-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <div className="font-mono text-accent mb-4 flex items-center gap-2">
          <Terminal size={16} />
          <span className="text-sm">visitor@kvs:~$ whoami</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-zinc-100">
          Karan Veer Singh
        </h1>
        
        <h2 className="text-xl md:text-3xl font-bold text-zinc-400 mb-6 flex flex-wrap items-center gap-2">
          <span className="text-zinc-100 border-b-2 border-accent pb-1">Ethical Hacker & Red Teamer</span> 
          <span className="hidden md:inline text-zinc-600">|</span> 
          <span className="text-accentLight">CTF Player</span>
        </h2>
        
        <div className="max-w-2xl text-zinc-400 text-base md:text-lg mb-8 leading-relaxed space-y-4">
          <p>
            I'm a 3rd-year B.Tech CSE student specializing in Cyber Security at VIT Chennai. 
            Passionate about breaking systems to build them stronger, identifying vulnerabilities, and advancing my offensive security skills.
          </p>
        </div>

        {/* Highlighted Badges */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 font-mono text-sm">
          <div className="flex items-center gap-3 px-5 py-3 bg-accent/10 border border-accent/40 rounded-md shadow-[0_0_15px_rgba(14,165,233,0.2)]">
            <Trophy size={20} className="text-accent" />
            <div>
              <div className="text-zinc-300">TryHackMe</div>
              <div className="text-accent font-bold text-lg">Top 6% Player</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 px-5 py-3 bg-slate-800 border border-slate-700 rounded-md">
            <Flag size={20} className="text-zinc-400" />
            <div>
              <div className="text-zinc-300">picoCTF</div>
              <div className="text-zinc-400">Active Participant</div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 font-mono text-sm">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 bg-accent text-darkBg hover:bg-accentLight transition-all rounded-sm font-bold shadow-[0_0_15px_rgba(14,165,233,0.4)]"
          >
            <Crosshair size={18} />
            VIEW_OPERATIONS
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
