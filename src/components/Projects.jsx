import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Flag, ShieldAlert } from 'lucide-react';

const Projects = () => {
  const achievements = [
    {
      title: 'AI Heist CTF',
      description: 'Secured 1st place overall as a team in this highly competitive Capture The Flag event.',
      type: '1st Place Team',
      icon: <Trophy size={24} />,
      tags: ['CTF', 'Web Exploitation', 'Forensics']
    },
    {
      title: 'CryptNite CTF',
      description: 'Qualified for the on-campus finals (among Top 60 teams nationwide) held at MIT Bengaluru.',
      type: 'National Finalist',
      icon: <Flag size={24} />,
      tags: ['Cryptography', 'Reverse Engineering', 'CTF']
    },
    {
      title: 'Active CTF Practice',
      description: 'Consistently practicing and solving machines across various difficulty levels to sharpen offensive security skills.',
      type: 'Continuous Learning',
      icon: <ShieldAlert size={24} />,
      tags: ['picoCTF', 'Boot2Root', 'Wargames']
    }
  ];

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-zinc-100 font-mono tracking-wider">
          <span className="text-accent">&gt;</span> CTFs & Operations
        </h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-accent/30 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-cardBg/50 backdrop-blur-md border border-slate-700 p-8 rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300 flex flex-col"
          >
            {/* Top decorative line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-zinc-800 group-hover:bg-accent transition-colors duration-300"></div>
            
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-slate-800 rounded-md text-accent border border-slate-700">
                {item.icon}
              </div>
              <span className="text-xs font-mono font-bold text-accentLight bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                {item.type}
              </span>
            </div>
            
            <h3 className="text-xl font-bold font-mono text-zinc-100 mb-3 group-hover:text-accent transition-colors">
              {item.title}
            </h3>
            
            <p className="text-zinc-400 mb-6 text-sm leading-relaxed flex-grow">
              {item.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {item.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="text-xs font-mono px-2 py-1 bg-slate-700/50 text-slate-300 rounded-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
