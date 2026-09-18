import React from 'react';
import { motion } from 'framer-motion';

const ShinyText = ({ text, className = "" }) => {
  return (
    <motion.span
      className={`relative inline-block overflow-hidden ${className}`}
      initial={{ backgroundPosition: "200% center" }}
      animate={{ backgroundPosition: "-200% center" }}
      transition={{
        repeat: Infinity,
        duration: 3,
        ease: "linear",
      }}
      style={{
        backgroundImage: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4) 20%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 100%)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {text}
    </motion.span>
  );
};

export default ShinyText;
