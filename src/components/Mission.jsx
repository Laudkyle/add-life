import React from "react";
import { motion } from "framer-motion";
import { Megaphone, Heart, Sparkles, Users, Shield, Star } from "lucide-react";

const Mission = () => {
  const missions = [
    {
      title: "Create Awareness",
      text: "We are dedicated to spreading knowledge and creating awareness so that individuals and communities are informed and empowered.",
      img: "./awareness.png",
      icon: <Megaphone className="w-10 h-10 text-[#5c007a]" />,
      bgGradient: "from-purple-100 to-pink-50",
      decorativeElements: [
        { icon: <Sparkles className="w-4 h-4 text-purple-300" />, position: "top-4 left-4" },
        { icon: <Users className="w-5 h-5 text-purple-400" />, position: "bottom-6 right-6" },
      ]
    },
    {
      title: "Offer Support",
      text: "We are here to provide support to everyone who reaches out, ensuring no one goes through challenges alone.",
      img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      icon: <Heart className="w-10 h-10 text-[#8e24aa]" />,
      bgGradient: "from-pink-100 to-purple-50",
      decorativeElements: [
        { icon: <Shield className="w-4 h-4 text-pink-300" />, position: "top-6 right-4" },
        { icon: <Star className="w-5 h-5 text-pink-400" />, position: "bottom-4 left-6" },
      ]
    },
  ];

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

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
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
    <section className="w-full py-20 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20"
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
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20"
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
        <motion.div
          className="absolute top-1/2 left-20 w-16 h-16 bg-purple-300 rounded-full opacity-10"
          animate={{
            x: [0, 50, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-4 text-[#5c007a] uppercase relative inline-block"
            animate={{
              textShadow: [
                "0 0 0px rgba(92, 0, 122, 0.3)",
                "0 0 20px rgba(92, 0, 122, 0.3)",
                "0 0 0px rgba(92, 0, 122, 0.3)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Our Mission
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-6 h-6 text-purple-400" />
            </motion.div>
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-[#5c007a] to-[#8e24aa] mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div 
          className="space-y-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {missions.map((mission, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`flex flex-col lg:flex-row items-center gap-16 ${
                idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image side */}
              <motion.div 
                className="relative w-full lg:w-1/2 group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${mission.bgGradient} rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500`} />
                
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-3xl shadow-2xl">
                  <motion.img
                    src={mission.img}
                    alt={mission.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    variants={imageVariants}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Overlay with decorative elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Floating decorative elements */}
                  {mission.decorativeElements.map((element, i) => (
                    <FloatingElement key={i} delay={i * 0.5}>
                      <div className={`absolute ${element.position}`}>
                        {element.icon}
                      </div>
                    </FloatingElement>
                  ))}
                  
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border-4 border-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-border opacity-0 group-hover:opacity-50"
                    animate={{
                      background: [
                        "linear-gradient(0deg, #a855f7, #ec4899, #a855f7)",
                        "linear-gradient(90deg, #a855f7, #ec4899, #a855f7)",
                        "linear-gradient(180deg, #a855f7, #ec4899, #a855f7)",
                        "linear-gradient(270deg, #a855f7, #ec4899, #a855f7)",
                        "linear-gradient(360deg, #a855f7, #ec4899, #a855f7)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </div>
              </motion.div>

              {/* Text side */}
              <motion.div 
                className="w-full lg:w-1/2 text-center lg:text-left relative"
                variants={textVariants}
              >
                <div className="relative p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl border border-purple-100">
                  {/* Icon */}
                  <motion.div 
                    className="flex justify-center lg:justify-start mb-6"
                    variants={iconVariants}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full shadow-lg">
                      {mission.icon}
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3 
                    className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {mission.title}
                    <motion.div
                      className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </motion.h3>

                  {/* Text */}
                  <motion.p 
                    className="text-gray-600 text-lg leading-relaxed relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    {mission.text}
                  </motion.p>

                  {/* Decorative corner elements */}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;