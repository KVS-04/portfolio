import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Network Guardian',
      description: 'Custom SIEM dashboard with real-time packet sniffing (Scapy), anomaly detection, local-app attribution (psutil), and ransomware file integrity monitoring. Built with FastAPI and a dynamic web UI.',
      type: 'Security Tool',
      icon: <Activity size={24} />,
      tags: ['Python', 'FastAPI', 'Scapy', 'Nmap', 'SIEM'],
      github: '#',
      link: '#'
    }
    // You can add more projects here in the future
  ];

  return (
    <section id="projects" className="py-20 relative z-10">
      <motion.div 
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-4 mb-12 overflow-hidden"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-zinc-100 font-mono tracking-wider whitespace-nowrap">
          <span className="text-accent">&gt;</span> Operations (Projects)
        </h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-accent/30 to-transparent"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative bg-cardBg/50 backdrop-blur-md border border-slate-700 p-8 rounded-lg overflow-hidden hover:border-accent/50 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] transition-all duration-300 flex flex-col"
          >
            {/* Top decorative line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-zinc-800 group-hover:bg-accent transition-colors duration-300"></div>
            
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-slate-800 rounded-md text-accent border border-slate-700">
                {item.icon}
              </div>
              <div className="flex gap-3">
                {item.github !== '#' && (
                  <a href={item.github} className="text-zinc-400 hover:text-accent transition-colors">
                    <Github size={20} />
                  </a>
                )}
                {item.link !== '#' && (
                  <a href={item.link} className="text-zinc-400 hover:text-accent transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
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
