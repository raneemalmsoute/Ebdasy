import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ 
          duration: 1.5, 
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
        className="relative p-8"
      >
        <img
          src='/assets/loading_screen/EBDA Logo-01.png'
          alt="EBDA Loading Logo"
          className="w-64 md:w-96 h-auto object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;