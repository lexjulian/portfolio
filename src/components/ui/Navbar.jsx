import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #333;
  color: #fff;
`;

const LogoContainer = styled.div`
  width: 120px;
  height: 40px;
  background-color: #e0e0e0;
  border-radius: 4px; /* Placeholder for logo */
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 24px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff; /* White links */
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #6c757d;
  }
`;

function Navbar() {
    return (
        <NavbarContainer>
            <LogoContainer /> {/* Placeholder for logo */}
            <NavLinks>
                <NavLink to="/">home</NavLink>
                <NavLink to="/blog">blog</NavLink>
                <NavLink to="/projects">projects</NavLink>
                <NavLink to="/contact">contact</NavLink>
            </NavLinks>
        </NavbarContainer>
    );
}

export default Navbar;
