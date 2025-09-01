
import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, Heart, Plus, Sparkles, ArrowRight, Phone, Users, BookOpen } from "lucide-react";

const LymphomaSupport = () => {
  const supportCards = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Learn About Lymphoma",
      subtitle: "Knowledge is power",
      description: "Understanding your diagnosis is the first step",
      buttonText: "Get Information",
      gradient: "from-purple-500 to-indigo-600",
      bgPattern: "opacity-10 bg-gradient-to-br from-purple-200 to-indigo-200",
      hoverGradient: "from-purple-600 to-indigo-700",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Find Emotional Support",
      subtitle: "You're not alone",
      description: "Connect with others who understand your journey",
      buttonText: "Join Support Groups",
      gradient: "from-pink-500 to-rose-600",
      bgPattern: "opacity-10 bg-gradient-to-br from-pink-200 to-rose-200",
      hoverGradient: "from-pink-600 to-rose-700",
    },
    {
      icon: <Phone className="w-12 h-12" />,
      title: "Get Immediate Help",
      subtitle: "24/7 Support Available",
      description: "Dial *939*101# for instant assistance",
      buttonText: "Call Now",
      gradient: "from-emerald-500 to-teal-600",
      bgPattern: "opacity-10 bg-gradient-to-br from-emerald-200 to-teal-200",
      hoverGradient: "from-emerald-600 to-teal-700",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
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
        duration: 0.6
      }
    }
  };

  const FloatingElement = ({ children, delay = 0, duration = 4 }) => (
    <motion.div
      animate={{
        y: [0, -15, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="w-full">
      {/* Support Cards Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-[#8e24aa] via-purple-600 to-purple-800 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full"
            animate={{
              scale: [1.2, 1, 1.2],
              y: [0, -40, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 relative inline-block"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.3)",
                  "0 0 40px rgba(255,255,255,0.5)",
                  "0 0 20px rgba(255,255,255,0.3)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Lymphoma Support
              <motion.div
                className="absolute -top-2 -right-8"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-8 h-8 text-white/70" />
              </motion.div>
            </motion.h1>
            <motion.div
              className="w-32 h-1 bg-white/60 mx-auto rounded-full mb-4"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.p
              className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Comprehensive support for lymphoma patients and their families
            </motion.p>
          </motion.div>

          {/* Cards Container */}
          <motion.div
            className="group grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {supportCards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative group-hover:blur-sm hover:!blur-none group-hover:scale-90 hover:!scale-100 transition-all duration-500 cursor-pointer"
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Card Background with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20" />
                
                {/* Main Card */}
                <div className="relative bg-white rounded-2xl p-6 sm:p-8 h-80 sm:h-96 shadow-2xl border border-gray-100 overflow-hidden">
                  {/* Background Pattern */}
                  <div className={`absolute inset-0 ${card.bgPattern} rounded-2xl`} />
                  
                  {/* Animated border on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0"
                    style={{
                      background: `linear-gradient(45deg, transparent 30%, rgba(142, 36, 170, 0.3) 50%, transparent 70%)`,
                      backgroundSize: '200% 200%'
                    }}
                    whileHover={{
                      opacity: 1,
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon */}
                    <FloatingElement delay={index * 0.2}>
                      <motion.div 
                        className="text-[#8e24aa] mb-6"
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: 10,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full inline-block shadow-lg">
                          {card.icon}
                        </div>
                      </motion.div>
                    </FloatingElement>

                    {/* Title */}
                    <motion.h2 
                      className="text-left text-xl sm:text-2xl font-bold text-[#8e24aa] mb-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    >
                      {card.title}
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p 
                      className="text-left text-gray-600 text-lg sm:text-xl mb-2 font-medium"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    >
                      {card.subtitle}
                    </motion.p>

                    {/* Description */}
                    <motion.p 
                      className="text-left text-gray-500 text-base sm:text-lg mb-8 flex-grow"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                    >
                      {card.description}
                    </motion.p>

                    {/* Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                    >
                      <motion.button
                        className={`w-full py-3 px-6 text-white bg-gradient-to-r ${card.gradient} rounded-full font-semibold shadow-lg relative overflow-hidden group/btn`}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 10px 30px rgba(142, 36, 170, 0.3)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${card.hoverGradient} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`}
                        />
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {card.buttonText}
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </span>
                        
                        {/* Button shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          style={{ transform: 'translateX(-100%)' }}
                          whileHover={{
                            transform: 'translateX(100%)',
                            transition: { duration: 0.6 }
                          }}
                        />
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Floating decorative elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-purple-300 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                  />
                  <motion.div
                    className="absolute bottom-6 left-4 w-1.5 h-1.5 bg-pink-300 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 0.9, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5 + 1
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Shortcode Highlight */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto border border-white/30"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Phone className="w-8 h-8 text-white mx-auto mb-3" />
              <p className="text-white text-lg mb-2">Quick Access Code</p>
              <p className="text-white text-3xl font-bold tracking-wider">*939*101#</p>
              <p className="text-white/80 text-sm mt-2">Dial for immediate support</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Hope Section */}
      <div className='w-full h-[50%] my-16 mx-auto'>
        <div className='text-[rgb(142,36,170)] max-w-[1000px] mx-auto px-4'>
          <motion.h1 
            className='text-[#4c1c5c] md:text-5xl sm:text-4xl text-3xl capitalize text-center my-8 font-bold'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            There is hope in lymphoma
          </motion.h1>
          <motion.p 
            className='text-center md:text-4xl sm:text-3xl text-2xl leading-relaxed'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Every lymphoma journey is different, but you don't have to walk it alone. 
            With advances in treatment, support from loved ones, and the strength of 
            the lymphoma community, there is reason for hope. Together, we face each 
            day with courage and determination.
          </motion.p>
          <motion.h3 
            className='text-center my-4 sm:text-2xl text-xl'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Source - <strong>Lymphoma Support Network</strong>
          </motion.h3>
        </div>
      </div>

      {/* Additional Resources Section */}
      <motion.div
        className="bg-gray-50 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#8e24aa] mb-8">Additional Support Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Users className="w-8 h-8 text-[#8e24aa] mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Support Groups</h3>
              <p className="text-gray-600">Connect with others on similar journeys</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <HelpCircle className="w-8 h-8 text-[#8e24aa] mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Treatment Information</h3>
              <p className="text-gray-600">Learn about lymphoma treatment options</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Heart className="w-8 h-8 text-[#8e24aa] mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Family Support</h3>
              <p className="text-gray-600">Resources for caregivers and families</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LymphomaSupport;