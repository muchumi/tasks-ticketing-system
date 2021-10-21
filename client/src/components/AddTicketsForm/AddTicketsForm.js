import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import './AddTicketsForm.css';

const AddTicketsForm = () => {
    const[formData, setFormData] = useState({
        client: "",
        issue: "",
        details: "",
        date: ""
    });

    const handleOnChange = (e) => {
        const{name, value} = e.target;
        setFormData({
            ...formData, [name]: value
        });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('Submit request received', formData);
    }
    return(
        <div className="add-ticket">
            <Form autoComplete = "off" onSubmit = { handleOnSubmit }>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Client</Form.Label>
                    <Col sm={9}>
                        <Form.Control 
                            name="client"
                            value={formData.client}
                            onChange={ handleOnChange }
                            placeholder="Enter Client Name"
                            required
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Issue</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="issue"
                            value={formData.issue}
                            onChange = { handleOnChange }
                            placeholder = "Enter Issue Found"
                            required
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Details</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            as="textarea"
                            name="details"
                            rows="5"
                            value={formData.details}
                            onChange = { handleOnChange }
                            placeholder = "Enter Details"
                            required
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                        Date
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={ handleOnChange }
                            required
                        />
                    </Col>
                </Form.Group>
                <Button type="submit" block variant="info" className="mt-5 text-white">Add</Button>
            </Form>
        </div>  
    );
}

export default AddTicketsForm;