import { Container, Nav, Navbar } from "react-bootstrap";
import { useSanctum } from "react-sanctum";
import { Link } from "react-router-dom";
import SettingsNav from "./SettingsNav";

export function NavB() {
  const { authenticated } = useSanctum();

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Turband
          </Navbar.Brand>

          <Nav className="me-auto">
            {authenticated === true ? (
              <Navbar>
                <Nav.Link as={Link} href="/" to="/posts/add">
                  Ekle
                </Nav.Link>

                <Nav.Item />
              </Navbar>
            ) : (
              authenticated === false && (
                <Navbar>
                  <Nav.Link as={Link} to="/auth/login" href="/auth/login">
                    Giriş Yap
                  </Nav.Link>
                  <Nav.Link
                    className="ms-2"
                    as={Link}
                    to="/auth/register"
                    href="/auth/register"
                  >
                    Kaydol
                  </Nav.Link>
                </Navbar>
              )
            )}
          </Nav>

          <Nav
            className=" my-2 my-lg-0"
            // style={{ maxHeight: "100px" }}
            // navbarScroll
          >
            <SettingsNav />
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}
