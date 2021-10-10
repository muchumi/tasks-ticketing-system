import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PageBreadcrumb from '../Breadcrumb/Breadcrumb.js';

const AddTickets = ({ handleOnChange, handleOnSubmit }) => {
    return(
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="Add Ticket"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form autocomplete = "off" onSubmit = { handleOnSubmit }>
                        <Form.Group>
                            <Form.Label>Client</Form.Label>
                            <Form.Control 
                                type="text"
                                name="client"
                                // value={client}
                                onChange={ handleOnChange }
                                placeholder="Enter Client Name"
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Issue</Form.Label>
                            <Form.Control
                                type="text"
                                name="issue"
                                // value={issue}
                                onChange = { handleOnChange }
                                placeholder = "Enter Issue Found"
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Details</Form.Label>
                            <Form.Control
                                as="textarea"
                                type="text"
                                name="details"
                                rows="5"
                                // value={details}
                                onChange = { handleOnChange }
                                placeholder = "Enter Details"
                                required
                            />
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={3} lg={3}>
                                Date
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    type="date"
                                    name="date"
                                    // value={date}
                                    onChange={ handleOnChange }
                                    required
                                />
                            </Col>
                        </Form.Group>
                        <Button type="submit" variant="info" className="mt-5 text-white">Add</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AddTickets;