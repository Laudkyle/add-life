import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full flex justify-between items-center h-[96px] bg-transparent p-4">
      <div className="w-[200px] my-2">
        <h1 className="text-[#8E24AA] font-bold text-3xl">LoGo</h1>
      </div>
      <div className="hidden md:flex p-4 text-[#8E24AA] font-medium">
        <ul className="flex  justify-end items-center">
          <li className={"p-2 "}>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className={"p-2 "}>
            <NavLink to={"/about"}>Cancer</NavLink>
          </li>
          <li className={"p-2 "}>
            <NavLink to={"/involved"}>Get Involved</NavLink>
          </li>
          <li className={"p-2 "}>
            <NavLink to={"/support"}>Lymphoma Support</NavLink>
          </li>
          <li className={"p-2 "}>
            <NavLink to={"/foundation"}>Our Foundation</NavLink>
          </li>
          <li className={"p-2 "}>
            <NavLink to={"/events"}>News & Events</NavLink>
          </li>
          <li className={"p-2 "}>
            <NavLink to={"/projects"}>Projects</NavLink>
          </li>
          <li className={"p-2"}>
            <NavLink to={"/gallery"}>Gallery</NavLink>
          </li>
        </ul>
      </div>
      <div onClick={handleNav} className="block md:hidden text-[#8e24aa]">
        {nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-[-100%] ease-in-out duration-500"
            : "fixed left-0 top-0 w-[250px] bg-white border-r border-r-green-900 h-screen ease-in-out duration-500"
        }
      >
        <div className="w-[200px]">
          <h1 className="text-[#8E24AA] p-4 font-bold text-3xl">LoGo</h1>
        </div>
        <div className=" text-[#8E24AA] font-medium z-10">
          <ul className="uppercase p-4 z-1">
            <li onClick={handleNav} className={"p-2 border-b border-b-[#8E24AA]"}>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li onClick={handleNav} className={"p-2 border-b border-b-[#8E24AA]"}>
              <NavLink to={"/about"}>Cancer</NavLink>
            </li>
            <li onClick={handleNav} className={"p-2 border-b border-b-[#8E24AA]"}>
              <NavLink to={"/involved"}>Get Involved</NavLink>
            </li>
            <li onClick={handleNav} className={"p-2 border-b border-b-[#8E24AA]"}>
              <NavLink to={"/support"}>Lymphoma Support</NavLink>
            </li>
            <li onClick={handleNav} className={"p-2 border-b border-b-[#8E24AA]"}>
              <NavLink to={"/foundation"}>Our Foundation</NavLink>
            </li>
            <li onClick={handleNav} className={"p-2 border-b border-b-[#8E24AA]"}>
              <NavLink to={"/events"}>News & Events</NavLink>
            </li>
            <li onClick={handleNav} className={"p-2 border-b border-b-[#8E24AA]"}>
              <NavLink to={"/projects"}>Projects</NavLink>
            </li>
            <li onClick={handleNav} className={"p-2"}>
              <NavLink to={"/gallery"}>Gallery</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
