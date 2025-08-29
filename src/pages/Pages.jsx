import React from "react";
import Home from "./Home";
import GetInvolved from "./Involved";
import Support from "./Support";
import About from "./About";
import Events from "./Events" ;
import Foundation from "./Foundation";
import Gallery from "./Gallery";
import Projects from "./Projects";
import { Route, Routes,useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Pages() {
    let location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/involved" element={<GetInvolved />} />
      <Route path="/support" element={<Support />} />
      <Route path="/foundation" element={<Foundation />} />
      <Route path="/events" element={<Events />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
    </AnimatePresence>
  );
}

export default Pages;
