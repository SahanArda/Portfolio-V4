import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./NavbarComponent.module.css";

const NavbarComponent = () => {
  return (
    <div className={styles.main}>
      <Navbar
        collapseOnSelect
        expand="md"
        className={`mb-3 ${styles.nav_bar}`}
        data-bs-theme= "dark"
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand href="#">Arda Sahan</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby=" offcanvasNavbarLabel-expand-md"
            placement="end"
            backdrop="static"
            data-bs-theme="dark"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id=" offcanvasNavbarLabel-expand-md">
                Arda Sahan
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className={styles.nav_link} href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About</Nav.Link>
                <Nav.Link href="#action2">Experience</Nav.Link>
                <Nav.Link href="#action2">Projects</Nav.Link>
                <Nav.Link href="#action2">Contact</Nav.Link>
                <Button variant="primary" className={styles.nav_button}>Resume</Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <video
        autoPlay
        muted
        loop
        className={styles.blackhole}
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default NavbarComponent;
