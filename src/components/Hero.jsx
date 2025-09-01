import { motion } from "framer-motion";
import React from "react";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-red-100 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-purple-100 rounded-full opacity-20"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-red-200 rounded-full opacity-15"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div
        className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Main tagline */}
          <motion.p 
            className="text-xl sm:text-2xl font-bold text-[#ff0000] mb-4 tracking-wide p-2"
            variants={itemVariants}
          >
            You must survive
          </motion.p>

          {/* Hero title */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-[#8e24aa] py-6"
            variants={itemVariants}
          >
            Cancer is no death sentence
          </motion.h1>

          {/* TypeAnimation for rotating messages */}
          <motion.div 
            className="h-20 sm:h-24 md:h-28 flex items-center justify-center"
            variants={itemVariants}
          >
            <TypeAnimation
              sequence={[
                'Cancer is a word, not a sentence',
                2000,
                'There is life after cancer',
                2000,
                'We will fight with you!!!',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700"
            />
          </motion.div>

          {/* Call to action */}
          <motion.div 
            className="mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
            variants={itemVariants}
          >
            <motion.button
              className="w-full sm:w-auto px-8 py-4 bg-[#ff0000] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-red-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.button>
            
            <motion.button
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#8e24aa] font-semibold rounded-full border-2 border-[#8e24aa] shadow-lg hover:shadow-xl hover:bg-purple-50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Statistics or testimonial indicator */}
          <motion.div 
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
            variants={itemVariants}
          >
            <div className="p-4">
              <div className="text-3xl font-bold text-[#8e24aa]">87%</div>
              <div className="text-gray-600 text-sm">Success Rate</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-[#8e24aa]">78+</div>
              <div className="text-gray-600 text-sm">Lives Touched</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-[#8e24aa]">24/7</div>
              <div className="text-gray-600 text-sm">Support Available</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
<img 
src=""
/>
      
    </div>
  );
};

export default Hero;