import { Container, Row, Col } from "react-bootstrap";
import { semuaKelas } from "../data/index";
import FaqComponent from "../components/FaqComponent";
import { useState } from "react";
import BuyClass from "../Modals/BuyClass";


const KelasPage = () => {

  const [idKelas, setIdKelas] = useState(0)
  const [showKelas, setShowKelas] = useState(false)

  const pilihKelas = (id) => {
    setIdKelas(id)
    setShowKelas(true)
  }
  const tutupKelas = () => {
    setIdKelas(0)
    setShowKelas(false)
  }

  return (
    <div className="kelas-page">
      <div className="kelas min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">Semua Kelas</h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </Col>
          </Row>
          <Row>
          {semuaKelas.map((kelas) => {
              return (
                <Col key={kelas.id} className="shadow rounded"
                data-aos='fade-up'
                data-aos-delay={kelas.delay}
                data-aos-duration='1000'>
                  <img
                    src={kelas.image}
                    alt="unsplash.com"
                    className="w-100 mb-5 rounded-top"
                  />
                  <div className="star mb-2 px-3">
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                    <i className={kelas.star4}></i>
                    <i className={kelas.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3">{kelas.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-success fw-bold">{kelas.price}</p>
                    <button className="btn btn-danger rounded-1" onClick={() => pilihKelas(kelas.id)}>
                      {kelas.buy}
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <FaqComponent/>
      <BuyClass 
      show = {showKelas}
      close= {tutupKelas}
      idKelas = {idKelas}/>
    </div>
  );
};

export default KelasPage;
