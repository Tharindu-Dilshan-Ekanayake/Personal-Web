import React from 'react';
import { motion } from 'framer-motion';
import DP from '../images/ME.png';

export default function PortfolioComponent() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-transparent">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl overflow-hidden border border-orange-400 rounded-lg backdrop-blur-sm bg-white/30"
      >
        <div className="flex flex-col items-center gap-8 p-8 md:flex-row">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center md:w-1/3"
          >
            <img
              src={DP}
              alt="Tharindu Dilshan Ekanayake"
              className="object-cover w-56 h-56 border-4 border-orange-500 rounded-full shadow-lg"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center md:w-2/3 md:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-3 text-4xl font-bold text-gray-800"
            >
              Tharindu Dilshan Ekanayake
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mb-6 text-xl text-gray-700"
            >
              Full-Stack Developer | UI/UX Designer | Mobile & Desktop App Developer | Graphic Designer & Video Editor | Youtuber
            </motion.p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 font-bold text-white transition duration-300 ease-in-out bg-orange-500 rounded-full shadow-md hover:bg-orange-600 hover:shadow-lg"
            >
              Download CV
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}