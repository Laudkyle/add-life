import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full flex justify-center items-center">
    <div className="w-[200px] my-2">
      <h1 className="text-[#8E24AA] font-bold text-3xl">LoGo</h1>
    </div>
      <div className="flex p-4 justify-end items-center text-[#8E24AA] font-medium">
        <NavLink to={"/"} className={"p-4"}>
          Home
        </NavLink>
        <NavLink to={"/about"} className={"p-4"}>
          Cancer
        </NavLink>
        <NavLink to={"/involved"} className={"p-4"}>
          Get Involved
        </NavLink>
        <NavLink to={"/support"} className={"p-4"}>
          Lymphoma Support
        </NavLink>
        <NavLink to={"/foundation"} className={"p-4"}>
          Our Foundation
        </NavLink>
        <NavLink to={"/events"} className={"p-4"}>
          News & Events
        </NavLink>
        <NavLink to={"/projects"} className={"p-4"}>
          Projects
        </NavLink>
        <NavLink to={"/gallery"} className={"p-4"}>
          Gallery
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
