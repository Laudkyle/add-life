import React from 'react'
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
    animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>
        <img src="./addlife-about.png" alt="Hero-Image" className='object-cover object-center w-full h-full' />
    </motion.div>
  )
}

export default About
