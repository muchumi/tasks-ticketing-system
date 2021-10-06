import React from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './ResetPassword.css';

const ResetPassword = ({ handleOnChange, handleOnSubmit, switchForm, email }) => {
    return(
        <Container>
            <Row>
                <Col>
                    <h1 className="loginHeading text-info text-center">Reset Password Form</h1>
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
                        <Button type="submit" className="resetButton">Reset</Button>
                    </Form>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="!#" onClick={() => switchForm("login")}>Cancel Password Reset</a>
                </Col>
            </Row>
        </Container>
    );
};

ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    switchForm: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
};

export default ResetPassword;