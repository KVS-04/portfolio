import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#09090b] pointer-events-none">
      {/* Grid overlay for texture - hidden on mobile for performance */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay hidden md:block"></div>
      
      {/* Hardware Accelerated CSS Animated Orbs - Hidden on mobile, they crush mobile GPUs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-violet-600/20 rounded-full blur-[100px] animate-blob hidden md:block" style={{ willChange: 'transform' }} />
      
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-emerald-600/10 rounded-full blur-[100px] animate-blob-reverse hidden md:block" style={{ willChange: 'transform' }} />
      
      <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-sky-600/10 rounded-full blur-[100px] animate-blob hidden md:block" style={{ animationDelay: '2s', willChange: 'transform' }} />

      {/* Static mobile fallback gradient (very cheap to render) */}
      <div className="absolute top-0 right-0 w-full h-[50vh] bg-gradient-to-bl from-violet-900/10 to-transparent block md:hidden"></div>
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-tr from-emerald-900/10 to-transparent block md:hidden"></div>

      <div className="absolute inset-0 bg-[#09090b]/60"></div>
    </div>
  );
};

export default Background;
