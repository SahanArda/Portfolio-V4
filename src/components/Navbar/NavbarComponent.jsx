import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./NavbarComponent.module.css";

const NavbarComponent = () => {
  return (
    <div className={styles.main}>
      <Navbar
        collapseOnSelect
        expand="md"
        className={`mb-3 ${styles.nav_bar}`}
        data-bs-theme="dark"
        fixed="top"
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
                <Nav.Link className={styles.nav_link} href="/">
                  Home
                </Nav.Link>
                <Nav.Link className={styles.nav_link} href="#action2">
                  Experience
                </Nav.Link>
                <Nav.Link className={styles.nav_link} href="#action2">
                  Projects
                </Nav.Link>
                <NavDropdown
                  title={<span className={styles.nav_link}>Contact</span>}
                  id="offcanvasNavbarDropdown-expand-md"
                >
                  <NavDropdown.Item
                    className={styles.icon}
                    href="https://github.com/SahanArda"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className={`fa-brands fa-github fa-lg ${styles.github_icon}`}
                    />{" "}
                    Github
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
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
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.resume_btn}
                >
                  Resume
                </Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <video autoPlay muted loop className={styles.blackhole}>
        <source src="/blackhole.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default NavbarComponent;
