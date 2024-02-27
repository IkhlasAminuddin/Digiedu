import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";
import { semuaKelas } from "../data/index";

const BuyClass = (props) => {
  const { show, close, idKelas } = props;

  return (
    <>
      <div className="beli-kelas">
        <Modal show={show} onHide={close} className="py-5 mt-5" size="lg">
          {semuaKelas.map((kelas) =>
            kelas.id == idKelas ? (
              <>
                <Modal.Header key={kelas.id}>
                  <Modal.Title>{kelas.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Row >
                    <img
                      src={kelas.image}
                      alt="unsplash.com"
                      className="mb-5 rounded-top"
                    />
                    <div className="star mb-3 px-3">
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                    <i className={kelas.star4}></i>
                    <i className={kelas.star5}></i>
                  </div>
                  </Row>
                  <Row className="mb-4">
                    <h5 className="text-success fw-bold">Harga: {kelas.price}</h5>
                  </Row>
                  <Row className="mb-4">
                    <h5>Desc: </h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Alias magni perspiciatis sint. Ut, nulla at. Non
                      perspiciatis, dolore distinctio pariatur impedit eius
                      nesciunt amet voluptatem voluptas, laborum consectetur at
                      veniam deserunt aut molestias fugit reprehenderit aliquid
                      praesentium, cum ducimus ullam.
                    </p>
                  </Row>
                  <Row>
                    <h5>Keuntungan: </h5>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                  </Row>
                </Modal.Body>
              </>
            ) : (
              <></>
            )
          )}
          <Modal.Footer>
            <Button variant="secondary" onClick={close}>
              Close
            </Button>
            <Button variant="success">Beli kelas</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default BuyClass;
