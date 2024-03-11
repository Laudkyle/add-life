import React from 'react'
import {motion} from "framer-motion"

function Home() {
  return (
    <motion.div
    animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
    <h1>Home</h1>
    </motion.div>
  )
}

export default Home
