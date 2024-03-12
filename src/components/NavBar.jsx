import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <Nav>
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'/about'}>Cancer</NavLink>
    <NavLink to={'/involved'}>Get Involved</NavLink>
    <NavLink to={'/support'}>Lymphoma Support</NavLink>
    <NavLink to={'/foundation'}>Our Foundation</NavLink>
    <NavLink to={'/events'}>News & Events</NavLink>
    <NavLink to={'/projects'}>Projects</NavLink>
    <NavLink to={'/gallery'}>Gallery</NavLink>
  </Nav>;
}
const Nav = styled.div`
  width: 96%;
  height: 100px;
  display: flex;
  margin:auto;
  background: #5c0075;
`;
export default NavBar;
