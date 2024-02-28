import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponents = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold ">Course!</h3>
            <p className="desc">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              officia molestiae quaerat veniam labore nam ad eum nobis
              recusandae asperiores.
            </p>
            <div className="no mb-2 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 123 4567-8901</p>
              </Link>
            </div>
            <div className="email">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">Person.email@Gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="/kelas">Kelas</Link>
            <Link to="/testimonial">Testimonial</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="syaratketentuan">Syarat dan Ketentuan</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3"> Subscribe untuk info menarik.</h5>
            <div className="subscribe">
              <input type="text" placeholder="Subscribe..." />
              <button className="btn btn-danger rounded-end rounded-0">
                Subscribe
              </button>
            </div>
            <div className="social mt-3">
              <a href="https://www.facebook.com/ikhlas.aminuddin/" target="_blank">
                <i className="fa-brands fa-facebook"></i>
                </a>
              <a href="https://www.twitter.com" target="_blank" style={{color:'#2176de'}}>
                <i className="fa-brands fa-twitter"></i>
                </a>
              <a href="https://www.linkedin.com/in/ikhlasaminuddin/" target="_blank" style={{color:'#2176de'}}>
                <i className="fa-brands fa-linkedin"></i>
                </a>
              <a href="https://www.youtube.com" target="_blank" style={{color:'red'}}>
                <i className="fa-brands fa-youtube"></i>
                </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">Ikhlas</span>, All Right Reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponents;
