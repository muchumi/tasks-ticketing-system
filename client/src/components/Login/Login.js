import React from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './Login.css';

const Login = ({ handleOnChange, handleOnSubmit, switchForm, email, password }) => {
    return(
        <Container>
            <Row>
                <Col>
                    <h1 className="loginHeading text-info text-center">TTS Client Login</h1>
                    <hr />
                    <Form onSubmit={handleOnSubmit} autoComplete="off">
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={email}
                                onChange = {handleOnChange}
                                placeholder="you@example.com"
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={password}
                                onChange = {handleOnChange}
                                placeholder="Enter Password"
                                required
                            />
                        </Form.Group>
                        <Button type="submit" block className="loginButton">login</Button>
                    </Form>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="!#" onClick={() => switchForm("rest")}>Forgot Password?</a>
                </Col>
            </Row>
        </Container>
    );
};

Login.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    switchForm: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
};

export default Login;