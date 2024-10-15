import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #111111;
  color: #fff;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  padding: 0.5rem 0;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 24px;
  margin-left: auto;
`;

const SocialLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 24px;
`;

const SocialLink = styled(Link)`
  text-decoration: none;
  color: #fff; /* White links */
  font-size: 25px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #6c757d;
  }
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
            <Container>
                <Link to="/">
                    <Logo />
                </Link>
                <NavLinks>
                    <NavLink to="/projects">projects</NavLink>
                    <NavLink to="/blog">blog</NavLink>
                    <NavLink to="/contact">contact</NavLink>
                </NavLinks>
                <SocialLinks>
                    <SocialLink
                        to="https://www.linkedin.com/in/alexander-john-julian-026809234/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn />
                    </SocialLink>
                    <SocialLink>
                        <FaTwitter />
                    </SocialLink>
                    <SocialLink
                        to="https://github.com/lexjulian"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </SocialLink>
                </SocialLinks>
            </Container>
        </NavbarContainer>
    );
}

export default Navbar;
