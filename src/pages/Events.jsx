import React from 'react'
import { motion } from 'framer-motion';

function Events() {
  return (
    <motion.div
    animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      <h1>News and Events</h1>
    </motion.div>
  )
}

export default Events
