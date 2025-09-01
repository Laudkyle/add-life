import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineHeart, AiOutlinePicture, AiOutlineTeam, AiOutlineProject } from "react-icons/ai";
import { FaRibbon, FaHandsHelping, FaRegNewspaper } from "react-icons/fa";
import { motion } from "framer-motion";

const NavBar = () => {
  const [nav, setNav] = useState(true);

  return (
    <div className="w-full flex justify-between z-50 items-center h-[96px] bg-transparent p-4">
      {/* Desktop Logo */}
      <div className="w-[200px] my-2 hidden md:block">
        <img
          className="cursor-pointer"
          src="./addlife-logo.png"
          alt="logo"
        />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex p-4 text-[#8E24AA] font-medium">
        <ul className="flex justify-end items-center">
          <li className="p-2"><NavLink to={"/"}>Home</NavLink></li>
          <li className="p-2"><NavLink to={"/cancer"}>Cancer</NavLink></li>
          <li className="p-2"><NavLink to={"/involved"}>Get Involved</NavLink></li>
          <li className="p-2"><NavLink to={"/support"}>Lymphoma Support</NavLink></li>
          <li className="p-2"><NavLink to={"/foundation"}>Our Foundation</NavLink></li>
          <li className="p-2"><NavLink to={"/events"}>News & Events</NavLink></li>
          <li className="p-2"><NavLink to={"/projects"}>Projects</NavLink></li>
          <li className="p-2"><NavLink to={"/gallery"}>Gallery</NavLink></li>
        </ul>
      </div>

      {/* Mobile Floating Navbar */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] bg-white rounded-2xl shadow-lg border border-[#8E24AA] px-4 py-2 flex justify-around items-center z-50">
        {[
          { to: "/", icon: <AiOutlineHome size={22} />, label: "Home" },
          { to: "/cancer", icon: <FaRibbon size={22} />, label: "Cancer" },
          { to: "/involved", icon: <FaHandsHelping size={22} />, label: "Involved" },
          { to: "/support", icon: <AiOutlineHeart size={22} />, label: "Support" },
          { to: "/foundation", icon: <AiOutlineTeam size={22} />, label: "Foundation" },
          { to: "/events", icon: <FaRegNewspaper size={22} />, label: "Events" },
          { to: "/projects", icon: <AiOutlineProject size={22} />, label: "Projects" },
          { to: "/gallery", icon: <AiOutlinePicture size={22} />, label: "Gallery" },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center text-[#8E24AA]"
          >
            <NavLink to={item.to}>
              {item.icon}
            </NavLink>
            <span className="text-[10px]">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
