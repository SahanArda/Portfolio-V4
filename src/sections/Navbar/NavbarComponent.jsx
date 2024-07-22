import {
  Button,
  Container,
  Nav,
  Navbar,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";
import Blackhole from "../../components/Blackhole/Blackhole";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import styles from "./NavbarComponent.module.css";

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleSelect = () => {
    setExpanded(false);
  };

  return (
    <div className={styles.main}>
      <Navbar
        collapseOnSelect
        expand="md"
        className={`mb-3 ${styles.nav_bar}`}
        data-bs-theme="dark"
        fixed="top"
        expanded={expanded}
        onToggle={handleToggle}
      >
        <Container fluid>
          <Navbar.Brand className="ps-3" href="/">
            Arda Sahan
          </Navbar.Brand>
          <Navbar.Toggle
            className={styles.toggle}
            aria-controls="offcanvasNavbar-expand-md"
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
            backdrop="static"
            data-bs-theme="dark"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                Arda Sahan
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 gap-3 pe-3">
                <ScrollLink
                  className={`nav-link ${styles.nav_link}`}
                  to="Home"
                  smooth={false}
                  duration={500}
                  offset={-100}
                  onClick={() => {
                    handleSelect();
                    setExpanded(false);
                  }}
                >
                  Home
                </ScrollLink>
                <ScrollLink
                  to="Experience"
                  smooth={false}
                  duration={500}
                  offset={-100}
                  className={`nav-link ${styles.nav_link}`}
                  onClick={() => {
                    handleSelect();
                    setExpanded(false);
                  }}
                >
                  Experience
                </ScrollLink>
                <ScrollLink
                  to="Projects"
                  smooth={false}
                  duration={500}
                  offset={-100}
                  className={`nav-link ${styles.nav_link}`}
                  onClick={() => {
                    handleSelect();
                    setExpanded(false);
                  }}
                >
                  Projects
                </ScrollLink>
                <NavDropdown
                  title={<span className={styles.nav_link}>Contact</span>}
                  id="offcanvasNavbarDropdown-expand-md"
                >
                  {/* <NavDropdown.Item
                    className={styles.icon}
                    href="https://github.com/SahanArda"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className={`fa-brands fa-github fa-lg ${styles.github_icon}`}
                    />{" "}
                    Github
                  </NavDropdown.Item> */}
                  <NavDropdown.Item
                    className={styles.icon}
                    href="https://www.linkedin.com/in/arda-sahan-142309250/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className={`fa-brands fa-linkedin fa-lg ${styles.linkedin_icon}`}
                    />{" "}
                    LinkedIn
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    className={styles.icon}
                    href="mailto:ardambp@outlook.com?subject=Hey Arda!"
                    rel="noopener noreferrer"
                  >
                    <i
                      className={`fa-solid fa-envelope fa-lg ${styles.email_icon}`}
                    />{" "}
                    Email
                  </NavDropdown.Item>
                </NavDropdown>
                <Button
                  href="https://github.com/SahanArda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.github_btn}
                >
                  <i
                    className={`fa-brands fa-github fa-lg ${styles.github_icon}`}
                  />{" "}
                  Github
                </Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <Blackhole />
    </div>
  );
};

export default NavbarComponent;
