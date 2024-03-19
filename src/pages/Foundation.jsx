import React from 'react';
import { motion } from 'framer-motion';


function Foundation() {
  return (
    <motion.div
    animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>
      <h1>About Our Foundation</h1>
    </motion.div>
  )
}

export default Foundation
