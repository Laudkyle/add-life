import React from 'react'
import { motion } from 'framer-motion';


function Projects() {
  return (
    <motion.div
    animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }} >
      <h1>Projects</h1>
    </motion.div>
  )
}

export default Projects
