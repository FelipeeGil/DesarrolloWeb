import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Inicio</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/tienda">Tienda</Nav.Link>
          <Nav.Link href="/contactanos">Contactanos</Nav.Link>
          <Nav.Link href="/nosotros">Sobre nosotros</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
