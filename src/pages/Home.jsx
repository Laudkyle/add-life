import { motion } from "framer-motion";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useState, useEffect } from "react";
import "@splidejs/react-splide/css";

function Home() {
  // React component

  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API when the component mounts
    fetch("http://backend.addlifetoyears.org")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="text-[#fa6cd6]"
    >
      <div className="w-full max-w-[1240px] mx-auto h-screen text-center flex flex-col justify-center mt-[-96px]">
        <p className="text-2xl font-bold p-2 capitalize">you must survive</p>
        <h1 className="md:text-6xl sm:text-5xl text-3xl font-bold md:py-6 text-[#8e24aa]">Cancer is no death sentence</h1>
        <h2 className="md:text-4xl sm:text-3xl text-xl font-bold">We will fight with you</h2>
      </div>
    </motion.div>
  );
}

export default Home;
