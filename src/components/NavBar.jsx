import React from "react";
import styled from "styled-components";

function NavBar() {
  return <Nav>
    <h3>Home</h3>
  </Nav>;
}
const Nav = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  background: #5c0075;
`;
export default NavBar;
