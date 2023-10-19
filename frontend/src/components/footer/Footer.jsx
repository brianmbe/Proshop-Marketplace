import { Row, Col, Container } from "react-bootstrap";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>Proshop &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
