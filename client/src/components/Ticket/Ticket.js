import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PageBreadcrumb from '../Breadcrumb/Breadcrumb.js';
import MessageHistory from '../MessageHistory/MessageHistory.js';
import ReplyMessage from '../ReplyMessage/ReplyMessage.js'
import dummyTickets from '../../assets/data/dummyTickets.json';

const ticket = dummyTickets[0];
const Ticket = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {}, [message]);

    const handleOnChange = (e) => {
        setMessage(e.target.value);
    };

    const handleOnSubmit = () => {
        alert('Form submitted!!!');
    }

    return(
        <Container className="mt-2">
            <Row>
                <Col>
                    <PageBreadcrumb page = "Ticket" />
                </Col>
            </Row>
            <Row>
                <Col className = "text-weight-bolder text-secondary">
                    <div className = "issue">Issue: {ticket.issue}</div>
                    <div className = "date">Date: {ticket.date}</div>
                    <div className = "status">Status: {ticket.status}</div>
                </Col>
                <Col className = "text-right">
                    <Button variant="outline-info">Close Ticket</Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <MessageHistory message={ticket.history} />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <ReplyMessage 
                    message = {message} 
                    handleOnChange={handleOnChange}
                    handleOnSubmit={handleOnSubmit}
                    />
                </Col>
            </Row>
        </Container>
    )
};


export default Ticket;