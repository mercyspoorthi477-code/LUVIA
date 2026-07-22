import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ message = "Aligning lunar wisdom...", fullScreen = false }) => {
  const loaderContent = (
    <div className="flex flex-col items-center justify-center p-6 text-center select-none">
      <div className="relative w-20 h-20 mb-4 flex items-center justify-center">
        {/* Outer glowing pulsing ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-2 border-t-[#B794F4] border-r-[#F9A8D4] border-b-[#67E8F9] border-l-transparent shadow-[0_0_15px_rgba(183,148,244,0.5)]"
        />

        {/* Inner pulsing moon */}
        <motion.div
          animate={{ scale: [0.85, 1.1, 0.85], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-3xl"
        >
          🌙
        </motion.div>
      </div>

      {message && (
        <motion.p
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-sm font-medium text-[#B794F4] tracking-wide"
        >
          {message}
        </motion.p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#090B1A]/90 backdrop-blur-md">
        {loaderContent}
      </div>
    );
  }

  return loaderContent;
};

export default Loader;
