import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export function BudNav() {
  return (
      <Navbar className="bg-body-primary d-flex me-auto container">
        <Container>
          <Navbar.Brand href="#home">
            ⚡ Frontender.itacademy
          </Navbar.Brand>
        </Container>
      </Navbar>
  );
}