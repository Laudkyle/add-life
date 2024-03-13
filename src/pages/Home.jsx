import { motion } from "framer-motion";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useState, useEffect } from "react";

function Home() {
  // React component

  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API when the component mounts
    fetch("https://backend.addlifetoyears.org/")
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
    >
      <div className="w-full h-screen mt-[-96px]">
        <Splide
          options={{
            perPage: 1,
            arrows: false,
            pagination: false,
            drag: "free",
          }}
        >
          {data.map((item) => (
            <SplideSlide key={item.key}>
              <img
                src={"https://addlifetoyears.org/" + item.img}
                alt={item.img}
                className="w-full h-full"
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </motion.div>
  );
}

export default Home;
