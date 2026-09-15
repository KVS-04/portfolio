import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';

function App() {
  return (
    <div className="min-h-screen bg-darkBg text-slate-300 selection:bg-accent selection:text-white font-sans relative">
      
      {/* Dynamic Interactive Background */}
      <Background />

      {/* Subtle overlay gradient to ensure text readability */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent to-darkBg/80 pointer-events-none z-0"></div>

      <Navbar />
      <main className="max-w-6xl mx-auto px-6 sm:px-12 pt-24 pb-12 relative z-10 flex flex-col gap-32">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
