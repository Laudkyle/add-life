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
      <Container>
        {data.map((item) => (
          <div key={item.key}>
            <img src={"https://addlifetoyears.org/"+item.img} alt={item.img} />
          </div>
        ))}
      </Container>
    </motion.div>
  );
}

const Container = styled.div`
  width: 96%;
`;

export default Home;
