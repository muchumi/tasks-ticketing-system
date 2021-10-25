import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import './AddTicketsForm.css';
import validateText from '../../utils/validation.js';

const AddTicketsForm = () => {
    const[formData, setFormData] = useState({
        client: "",
        issue: "",
        details: "",
        date: ""
    });

    const [formDataError, setFormDataError] = useState({
        client: false,
        issue: false,
        details: false,
        date: false
    });

    useEffect(() => {}, [formData, formDataError]);

    const handleOnChange = (e) => {
        const{name, value} = e.target;
        setFormData({
            ...formData, [name]: value
        });
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setFormDataError({
            client: formDataError.client,
            issue: formDataError.issue,
            details: formDataError.details,
            date: formDataError.date
        });
        const isClientValid = await validateText(formData.client);
        setFormDataError({
            ...formDataError, client: !isClientValid
        });
    }
    return(
        <div className="add-ticket bg-light">
            {/* <h1 className="text-info text-center">Add A New Ticket</h1>
            <hr/> */}
            <Form autoComplete = "off" onSubmit = { handleOnSubmit }>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Client</Form.Label>
                    <Col sm={9}>
                        <Form.Control 
                            name="client"
                            value={formData.client}
                            onChange={ handleOnChange }
                            placeholder="Enter Client Name"
                        />
                        <Form.Text className="text-danger">{formDataError.client && "* Client is required"}</Form.Text>
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
                        />
                    </Col>
                </Form.Group>
                <Button type="submit" block variant="info" className="mt-5 text-white">Add</Button>
            </Form>
        </div>  
    );
}

export default AddTicketsForm;