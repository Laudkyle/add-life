import React from "react";
import { motion } from "framer-motion";

const ActionSection = ({ actions }) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6, 
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        delay: 0.5
      }
    }
  };

  const FloatingElement = ({ children, delay = 0 }) => (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-purple-50 to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-12 right-12 w-28 h-28 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          How You Can Get Involved
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {actions.map((a, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-purple-100 flex flex-col overflow-hidden">
                
                {/* Floating decorative elements like Mission */}
                <FloatingElement delay={i * 0.5}>
                  <div className="absolute top-4 left-4">
                    {a.decorativeElements?.[0]?.icon || <div className="w-4 h-4 bg-purple-300 rounded-full" />}
                  </div>
                </FloatingElement>
                <FloatingElement delay={i * 0.5 + 1}>
                  <div className="absolute bottom-6 right-6">
                    {a.decorativeElements?.[1]?.icon || <div className="w-5 h-5 bg-pink-400 rounded-full" />}
                  </div>
                </FloatingElement>
                
                {/* Icon positioned in upper-left like Mission */}
                <motion.div 
                  className="flex justify-start mb-6"
                  variants={iconVariants}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full shadow-lg">
                    {a.icon}
                  </div>
                </motion.div>

                {/* Title with animated underline exactly like Mission */}
                <motion.h3
                  className="text-xl font-semibold text-gray-800 mb-6 relative text-left w-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {a.title}
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </motion.h3>

                {/* Description with Mission-style text animation */}
                <motion.p
                  className="text-gray-600 mb-6 relative leading-relaxed text-left"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  {a.desc}
                </motion.p>

                {/* Button */}
                <motion.button
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium shadow-lg relative z-10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {a.btn}
                </motion.button>

                {/* Decorative corner pulses exactly like Mission */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-purple-300 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-2 h-2 bg-pink-300 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ActionSection;