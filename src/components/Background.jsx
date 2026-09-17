import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#09090b] pointer-events-none">
      {/* Grid overlay for texture - static and cheap to render */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay"></div>
      
      {/* Hardware Accelerated CSS Animated Orbs (Much better FPS than JS animations) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-violet-600/20 rounded-full blur-[100px] animate-blob" style={{ willChange: 'transform' }} />
      
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-emerald-600/10 rounded-full blur-[100px] animate-blob-reverse" style={{ willChange: 'transform' }} />
      
      <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-sky-600/10 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '2s', willChange: 'transform' }} />

      <div className="absolute inset-0 bg-[#09090b]/60"></div>
    </div>
  );
};

export default Background;
