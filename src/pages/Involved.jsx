import React from 'react'
import { motion } from 'framer-motion';

function Involved() {
  return (
    <motion.div
    animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      <h1>Get Involved</h1>
    </motion.div>
  )
}

export default Involved
