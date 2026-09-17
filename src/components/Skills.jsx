import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Wrench, Code2, Monitor, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Core Concepts',
      icon: <Shield size={20} />,
      items: [
        'Ethical Hacking', 'Penetration Testing', 'Network Security', 
        'Vulnerability Assessment', 'OSINT', 'Web Application Security', 
        'Android Pentesting', 'Cryptography', 'Digital Forensics', 'Cloud Security'
      ]
    },
    {
      title: 'Security Tools',
      icon: <Wrench size={20} />,
      items: [
        'Wireshark', 'Nmap', 'Burp Suite', 'Metasploit', 'Hydra', 
        'John the Ripper', 'Hashcat', 'SearchThatHash', 'Ettercap', 
        'Gobuster', 'Netcat', 'Nikto', 'SQLmap', 'Aircrack-ng', 'ADB'
      ]
    },
    {
      title: 'Programming & Scripting',
      icon: <Code2 size={20} />,
      items: [
        'Python', 'Java', 'C', 'C++', 'SQL'
      ]
    },
    {
      title: 'Operating Systems',
      icon: <Monitor size={20} />,
      items: [
        'Linux (Kali Linux, Ubuntu)', 'Windows'
      ]
    },
    {
      title: 'Cloud Platforms',
      icon: <Cloud size={20} />,
      items: [
        'Microsoft Azure'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 200 } }
  };

  return (
    <section id="skills" className="py-20 relative z-10">
      <motion.div 
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-4 mb-12 overflow-hidden"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-zinc-100 font-mono tracking-wider whitespace-nowrap">
          <span className="text-accent">&gt;</span> Arsenal
        </h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-accent/30 to-transparent"></div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-10"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-3 text-zinc-200">
              <motion.span 
                whileHover={{ rotate: 360 }} 
                transition={{ duration: 0.5 }}
                className="text-accent"
              >
                {category.icon}
              </motion.span>
              <h3 className="text-xl font-bold font-mono">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: skillIndex * 0.03, type: "spring" }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 text-zinc-300 rounded-md text-sm font-mono shadow-sm hover:border-accent/50 hover:text-accent hover:shadow-[0_0_10px_rgba(167,139,250,0.3)] transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
