import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";

const SignInForm = (props) => {
  const { show, closeModal } = props;
  const [seePass, setSeePass] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });


  const openPass = () => {
    setSeePass(true);
  };
  const hidePass = () => {
    setSeePass(false);
  };

  const openModalSignUp = () => {
    setShowSignUp(true);
    closeModal();
  };

  const closeModalSignUp = () => {
    setShowSignUp(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const login = () => {
    localStorage.setItem('user', input.email)
    closeModal()
  }

  console.log("input sign In:", input)


  return (
    <>
      <div className="signin-modal">
        <Modal show={show} onHide={closeModal} className="mt-5 py-5">
          <Modal.Header>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={handleChange} name="email"/>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                {seePass ? (
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={input.password}
                      />
                    </Col>
                    <Col sm={2}>
                      <Button variant="secondary" onClick={hidePass}>
                        <Icon.Eye />
                      </Button>
                    </Col>
                  </Row>
                ) : (
                  <div>
                  <Row>
                    <Col >
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={input.password}
                      />
                    </Col>
                    <Col sm={2}>
                      <Button variant="secondary" onClick={openPass}>
                        <Icon.EyeSlash />
                      </Button>
                    </Col>
                  </Row>
                  </div>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Row>
                  <p>
                    No account yet?{" "}
                    <Link onClick={openModalSignUp}>Sign Up!</Link>
                  </p>
                </Row>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="success" onClick={login}>Login</Button>
          </Modal.Footer>
        </Modal>
      </div>
      <SignUpForm show={showSignUp} closeModal={closeModalSignUp} />
    </>
  );
};

export default SignInForm;
