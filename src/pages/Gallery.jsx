import React from 'react'
import { motion } from 'framer-motion';

function Gallery() {
  return (
    <motion.div
    animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>
      <h1>Gallery</h1>
    </motion.div>
  )
}

export default Gallery
