import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, HelpCircle, Info, Users, Heart, Shield } from "lucide-react";

const Faq = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const faqData = [
    {
      id: 1,
      question: "What is cancer?",
      answer: "Cancer is a group of diseases involving abnormal cell growth with the potential to invade or spread to other parts of the body.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Info className="w-6 h-6" />,
      gradient: "from-purple-500 to-indigo-600",
      category: "Basic Information"
    },
    {
      id: 2,
      question: "How can I support someone with cancer?",
      answer: "Offer emotional support, help with daily tasks, listen without judgment, and encourage professional treatment.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Heart className="w-6 h-6" />,
      gradient: "from-pink-500 to-rose-600",
      category: "Support"
    },
    {
      id: 3,
      question: "What are common cancer symptoms?",
      answer: "Symptoms vary but may include unexplained weight loss, fatigue, lumps, changes in skin, persistent cough, or unusual bleeding.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <HelpCircle className="w-6 h-6" />,
      gradient: "from-emerald-500 to-teal-600",
      category: "Symptoms"
    },
    {
      id: 4,
      question: "How can cancer be prevented?",
      answer: "Maintain a healthy lifestyle, avoid tobacco, limit alcohol, protect from sun, get regular screenings, and stay physically active.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-600",
      category: "Prevention"
    },
    {
      id: 5,
      question: "Where can I find support groups?",
      answer: "Contact local hospitals, cancer centers, online communities, or organizations like the American Cancer Society for support group information.",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Users className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-600",
      category: "Community"
    },
    {
      id: 6,
      question: "What treatment options are available?",
      answer: "Treatment options include surgery, chemotherapy, radiation therapy, immunotherapy, targeted therapy, and hormone therapy.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Info className="w-6 h-6" />,
      gradient: "from-violet-500 to-purple-600",
      category: "Treatment"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % faqData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + faqData.length) % faqData.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentSlide + i) % faqData.length;
      cards.push(faqData[index]);
    }
    return cards;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateY: -90 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
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
    <div className="relative min-h-screen bg-gradient-to-br from-[#8e24aa] via-purple-600 to-purple-800 py-16 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-white/5 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, -50, 0],
            opacity: [0.05, 0.2, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/5 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase relative inline-block"
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
            Frequently Asked Questions
            <FloatingElement delay={0.5}>
              <motion.div
                className="absolute -top-4 -right-10"
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
            </FloatingElement>
          </motion.h1>
          <motion.div
            className="w-40 h-1 bg-white/60 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          <motion.button
            onClick={prevSlide}
            className="p-4 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="p-4 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Cards Container */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {getVisibleCards().map((faq, index) => (
              <motion.div
                key={`${currentSlide}-${faq.id}`}
                variants={cardVariants}
                className="group cursor-pointer"
                style={{ perspective: "1000px" }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="relative w-full h-[450px]  preserve-3d group-hover:my-rotate-y-180  duration-500"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  whileHover={{
                    rotateY: 180
                  }}
                  transition={{ duration: 0.7 }}
                >
                  {/* Front of card */}
                  <div 
                    className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-2xl"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="relative h-full">
                      <img 
                        src={faq.image} 
                        alt={faq.question}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Category badge */}
                      <motion.div 
                        className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${faq.gradient} rounded-full text-white text-sm font-semibold`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        {faq.category}
                      </motion.div>

                      {/* Question preview */}
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`p-2 bg-gradient-to-r ${faq.gradient} rounded-full`}>
                            {faq.icon}
                          </div>
                          <span className="text-sm font-medium opacity-80">Question {faq.id}</span>
                        </div>
                        <h3 className="text-lg font-bold line-clamp-2">
                          {faq.question}
                        </h3>
                        <p className="text-sm opacity-70 mt-2">Hover to see answer</p>
                      </div>

                      {/* Decorative elements */}
                      <FloatingElement delay={index * 0.2}>
                        <div className="absolute top-6 right-6 w-2 h-2 bg-white/50 rounded-full" />
                      </FloatingElement>
                      <FloatingElement delay={index * 0.2 + 1}>
                        <div className="absolute bottom-20 right-6 w-1.5 h-1.5 bg-white/30 rounded-full" />
                      </FloatingElement>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div 
                    className="absolute inset-0 w-full h-full rotate-y-180 backface-hidden rounded-2xl shadow-2xl"
                    style={{ 
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)"
                    }}
                  >
                    <div className={`h-full bg-gradient-to-br ${faq.gradient} p-8 rounded-2xl relative overflow-hidden`}>
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 right-10 w-20 h-20 bg-white rounded-full" />
                        <div className="absolute bottom-10 left-10 w-16 h-16 bg-white rounded-full" />
                        <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                      </div>

                      <div className="relative z-10 h-full flex flex-col justify-center text-center text-white">
                        <motion.div 
                          className="mb-6"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full inline-block mb-4">
                            {faq.icon}
                          </div>
                          <h2 className="text-xl font-bold mb-2">{faq.category}</h2>
                        </motion.div>

                        <motion.h3 
                          className="text-lg font-semibold mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          {faq.question}
                        </motion.h3>
                        
                        <motion.p 
                          className="text-sm leading-relaxed opacity-90"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 }}
                        >
                          {faq.answer}
                        </motion.p>

                        {/* Floating decorative elements */}
                        <motion.div
                          className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.4, 0.8, 0.4],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <motion.div
                          className="absolute bottom-6 left-4 w-1.5 h-1.5 bg-white/30 rounded-full"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.7, 0.3],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-12">
          {faqData.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Bottom text */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="text-white/70 text-lg">
            Have more questions? Don't hesitate to reach out for support
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;