import React from 'react';
import { Jumbotron, Container, Row, Col, Form, Button } from 'react-bootstrap';
import PageBreadcrumb from '../Breadcrumb/Breadcrumb.js';
import './AddTicketsForm.css';

const AddTickets = ({ handleOnChange, handleOnSubmit }) => {
    return(
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="Add New Ticket"/>
                </Col>
            </Row>
            <Jumbotron>
                <h1 className="ticket-heading">Add New Ticket</h1>
                <Form autocomplete = "off" onSubmit = { handleOnSubmit }>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Client</Form.Label>
                        <Form.Control 
                            type="text"
                            name="client"
                            // value={client}
                            onChange={ handleOnChange }
                            placeholder="Enter Client Name"
                            required
                        />
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Issue</Form.Label>
                        <Form.Control
                            type="text"
                            name="issue"
                            // value={issue}
                            onChange = { handleOnChange }
                            placeholder = "Enter Issue Found"
                            required
                        />
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Details</Form.Label>
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
                        <Form.Label column sm={3}>
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
                    <Button type="submit" block variant="primary" className="mt-5 text-white">Add</Button>
                </Form>
            </Jumbotron>
        </Container>    
    );
}

export default AddTickets;