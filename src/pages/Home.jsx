import { motion } from "framer-motion";
import styled from "styled-components";
import { Splide,SplideSlide } from "@splidejs/react-splide";
import React, { useState, useEffect } from 'react';

function Home() {
    // React component

const [data, setData] = useState([]);

useEffect(() => {
  // Fetch data from the backend API when the component mounts
  fetch('http://backend.addlifetoyears.org/')
    .then(response => response.json())
    .then(result => setData(result))
    .catch(error => console.error('Error fetching data:', error));

    console.log(data)
}, []);
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
    <Container>
    <Splide
    options={{
        perPage: 1,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
    }}>
        {data.map((item) => {
            <div key={item.id}>
            <h4>{"https://addlifetoyears.org/" + item.img}</h4>
            </div>
        })}
    </Splide>

    </Container>
    </motion.div>
  );
}
const Container = styled.div`
    width:96%;
`;
export default Home;
