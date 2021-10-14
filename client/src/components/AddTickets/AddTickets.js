import React, { useState } from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import AddTicketsForm from '../AddTicketsForm/AddTicketsForm.js';
import PageBreadcrumb from '../Breadcrumb/Breadcrumb.js';

const AddTickets = () => {

    const [formData, setFormData] = useState({
        client: " ", issue: " ", details: " ", date: " "
    });

    const handleOnChange = (e) => {
        const { name, value} = e.target;
        setFormData({
            ...formData, [name]: value
        });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

    }
    return(
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="Add New Ticket"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddTicketsForm 
                        handleOnChange={handleOnChange} 
                        handleOnSubmit={handleOnSubmit}
                        client={formData.client}
                        issue={formData.issue}
                        details = {formData.details}
                        date = {formData.date}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default AddTickets;