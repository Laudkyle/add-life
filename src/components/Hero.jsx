import { motion } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useState, useEffect } from "react";
import "@splidejs/react-splide/css";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  // React component

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   // Fetch data from the backend API when the component mounts
  //   fetch("http://backend.addlifetoyears.org")
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setData(result);
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="text-[#ff0000] capitalize"
    >
      <div className="w-full sm:mx-auto h-screen text-center flex flex-col justify-center mt-[-96px] bg-white">
        <p className="text-2xl font-bold p-2">You must survive</p>
        <h1 className="md:text-6xl sm:text-5xl text-3xl font-bold md:py-6 text-[#8e24aa]">Cancer is no death sentence</h1>
        <TypeAnimation
      sequence={[
        'Cancer is a word, not a sentence',
        2000,
        'There is life after cancer',
        2000,
        'We will fight with you!!!',
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="md:text-4xl sm:text-3xl text-2xl font-bold"
    />
      </div>

    </motion.div>
  );
}

export default Hero