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
    >
      <div className="mt-1 m-6 z-0">
        <Splide
          options={{
            perPage: 1,
            arrows: false,
            pagination: false,
            gap:"2rem",
          }}
        >
          {data.map((item) => (
            <SplideSlide key={item.key}>
            <div className="overflow-hidden rounded-md h-[50%]"></div>
              <img
                src={"https://addlifetoyears.org/" + item.img}
                alt={item.img}
                className="w-[100%] h-[100%] object-cover left-0"
              />
            </SplideSlide>

          ))}

        </Splide>
      </div>
    </motion.div>
  );
}

export default Home;
