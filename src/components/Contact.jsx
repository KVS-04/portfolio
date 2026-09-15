import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative z-10 mb-20">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-zinc-100 font-mono tracking-wider">
          <span className="text-accent">&gt;</span> Comms
        </h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-accent/30 to-transparent"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-1 bg-cardBg/50 backdrop-blur-md border border-slate-700 p-8 rounded-lg relative overflow-hidden w-full"
        >
          <h3 className="text-xl font-bold font-mono mb-4 text-zinc-100">Initialize Handshake</h3>
          <p className="text-zinc-400 mb-8 text-sm leading-relaxed">
            I'm always open to discussing CTF challenges, security research, or potential opportunities. 
            Feel free to reach out via email or phone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:veer10024@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent/10 border border-accent/50 text-accent hover:bg-accent hover:text-darkBg transition-all font-mono font-bold rounded-sm text-sm"
            >
              <Mail size={18} />
              veer10024@gmail.com
            </a>
            <a
              href="tel:+919508346251"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white transition-all font-mono font-bold rounded-sm text-sm"
            >
              <Phone size={18} />
              +91 9508346251
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-row md:flex-col gap-4"
        >
          <SocialLink href="https://github.com/KVS-04" icon={<Github size={24} />} label="GitHub" />
          <SocialLink href="https://www.linkedin.com/in/karan-veer-singh-06b146372" icon={<Linkedin size={24} />} label="LinkedIn" />
        </motion.div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group flex items-center gap-3 p-4 bg-cardBg/80 border border-slate-700 text-slate-400 hover:text-accent hover:border-accent/50 rounded-lg transition-all duration-300"
    title={label}
  >
    {icon}
    <span className="hidden md:inline font-mono text-sm group-hover:text-zinc-200 transition-colors">{label}</span>
  </a>
);

export default Contact;
