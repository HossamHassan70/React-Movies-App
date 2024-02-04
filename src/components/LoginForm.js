import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, Col, } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]{2,8}\.[^\s@]{2,6}$/; 
    return emailRegex.test(email);
  };
  
  const emailChanged = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (!validateEmail(newEmail)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };
  const validatePassword = (password) => {
    return password.length >= 8;
  };


  const passwordChanged = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (!validatePassword(newPassword)) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmitFunc = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <Container  className="position-relative row no-scroll-row">
      <Row className="justify-content-md-left mt-3">
        <Col xs={12} sm={6} md={4} lg={3} xl={3}>
          <Image src="https://www.sagatraining.ca/wp-content/uploads/2018/10/background-images-for-login-form-8.jpg"  />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={4}>
          <Form onSubmit={onSubmitFunc}>
            <Form.Group>
              <Form.Label className="text-primary mt-3">Email:</Form.Label>
              <Form.Control
                type="text"
                value={email}
                onChange={emailChanged}
                isInvalid={!!emailError}
              />
              <Form.Control.Feedback type="invalid">
                {emailError}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label className="text-primary mt-3">Password:</Form.Label>
              <Form.Control
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={passwordChanged}
                isInvalid={!!passwordError}
              />
              <Form.Control.Feedback type="invalid">
                {passwordError}
              </Form.Control.Feedback>
              <Button
                variant="info"
                className="mt-2"
                onClick={togglePassword}
              >
              <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={togglePassword}
              />
              </Button>
              
            </Form.Group>
            <Button
              className="my-3 col-3"
              variant="primary"
              type="submit"
              disabled={!!emailError || !!passwordError}
            >
              Login
            </Button>
          </Form>
        </Col>
        
      </Row>
    </Container>
  );
};

export default LoginForm;
