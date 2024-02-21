import { Accordion, Container, Row, Col } from "react-bootstrap";
import { faq } from "../data/index";

const FaqComponent = () => {
  return (
    <div className="faq">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s">
              Pertanyaan yang sering ditanyakan
            </h2>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-4 pt-5"> {/* ukuran lg (>=992px) maka 2 column dalam 1 row, sisanya 1 column dalam row*/}
          {faq.map((data) => {
            return <>
            <Col key={data.id} data-aos='fade-up' data-aos-duration='1000'>
            <Accordion className="shadow-sm">
              <Accordion.Item eventKey={data.eventKey}>
                <Accordion.Header>{data.title}</Accordion.Header>
                <Accordion.Body>
                  {data.desc}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
            </>
          })}
        </Row>
      </Container>
    </div>
  );
};

export default FaqComponent;
