import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import CourseLogo from '../assets/img/CourseLogo.png'

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [expanded, setExpanded] = useState(false)

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect (() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor)
  })

  return (
    <div>
      <Navbar expanded={expanded} expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold">
            Course!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              {navLinks.map((data) => {
                return (
                  <div className="nav-link text-center" key={data.id}>
                    <NavLink
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                      to={data.path}
                      onClick={() => setExpanded(false)}
                      end
                    >
                      {data.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
            <div className="text-center">
              <button className="btn btn-outline-danger rounded-1">
                Join With Us!
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;