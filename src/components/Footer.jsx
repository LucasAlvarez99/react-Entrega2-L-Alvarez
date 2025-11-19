import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../index.css";

function Footer() {
  return (
    <footer className="footer-bootstrap mt-auto py-4">
      <Container>
        <Row className="gy-4 text-center text-md-start">
          {/* SECCIÓN 1 */}
          <Col md={4}>
            <h5 className="text-info fw-bold">Las Puertas del Olimpo</h5>
            <p className="text-muted mb-0">
              Tu lugar para encontrar productos y entradas de tus bandas
              favoritas 🎸
            </p>
          </Col>

          {/* SECCIÓN 2 */}
          <Col md={4}>
            <h6 className="text-info fw-semibold mb-2">Enlaces</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#" className="footer-link">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Productos
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contacto
                </a>
              </li>
            </ul>
          </Col>

          {/* SECCIÓN 3 */}
          <Col md={4}>
            <h6 className="text-info fw-semibold mb-2">Seguinos</h6>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="https://www.facebook.com/lucas.alvarez.330309/" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/el_mago_lucas/" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/lucas-alvarez-bernardez/?skipRedirect=true" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </Col>
        </Row>

        <hr className="mt-4 mb-3" />

        <Row>
          <Col className="text-center">
            <small className="text-secondary">
              © {new Date().getFullYear()} Las Puertas del Olimpo — Todos los
              derechos reservados
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
