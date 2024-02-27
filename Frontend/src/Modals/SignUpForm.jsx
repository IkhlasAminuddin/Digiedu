import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SignUpForm = (props) => {
  const { show, closeModal } = props;
  const [seePass, setSeePass] = useState(false);
  const [seeRetype, setSeeRetype] = useState(false);
  const [input, setInput] = useState({ email: "", password: "", retype: "" });

  const openPass = () => {
    setSeePass(true);
  };
  const hidePass = () => {
    setSeePass(false);
  };

  const openRetype = () => {
    setSeeRetype(true);
  };
  const hideRetype = () => {
    setSeeRetype(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSignUp = () => {
    if (input.password !== input.retype) {
      Swal.fire({
        title: "Error!",
        text: "Password tidak sama!",
        icon: "error",
        confirmButtonText: "Cool",
      });
    } else {
      closeModal();
    }
  };

  console.log("cek input: ", input);

  return (
    <>
      <div>
        <Modal
          show={show}
          onHide={closeModal}
          className="mt-5 py-5"
          dialogClassName="signup-modal"
        >
          <Modal.Header>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  {seePass ? (
                    <Row>
                      <Col sm={10}>
                        <Form.Control
                          type="text"
                          placeholder="Password"
                          name="password"
                          onChange={handleChange}
                        />
                      </Col>
                      <Col sm={2}>
                        <Button variant="secondary" onClick={hidePass}>
                          <Icon.Eye />
                        </Button>
                      </Col>
                    </Row>
                  ) : (
                    <Row>
                      <Col sm={10}>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          name="password"
                          onChange={handleChange}
                        />
                      </Col>
                      <Col sm={2}>
                        <Button variant="secondary" onClick={openPass}>
                          <Icon.EyeSlash />
                        </Button>
                      </Col>
                    </Row>
                  )}
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3">
                  <Form.Label>Retype the Password</Form.Label>
                  {seeRetype ? (
                    <Row>
                      <Col sm={10}>
                        <Form.Control
                          type="text"
                          placeholder="Password"
                          name="retype"
                          onChange={handleChange}
                        />
                      </Col>
                      <Col sm={2}>
                        <Button variant="secondary" onClick={hideRetype}>
                          <Icon.Eye />
                        </Button>
                      </Col>
                    </Row>
                  ) : (
                    <Row>
                      <Col sm={10}>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          name="retype"
                          onChange={handleChange}
                        />
                      </Col>
                      <Col sm={2}>
                        <Button variant="secondary" onClick={openRetype}>
                          <Icon.EyeSlash />
                        </Button>
                      </Col>
                    </Row>
                  )}
                </Form.Group>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="success" onClick={handleSignUp}>
              Sign Up
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default SignUpForm;
