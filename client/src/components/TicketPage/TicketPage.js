import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PageBreadcrumb from '../Breadcrumb/Breadcrumb';
import TicketMessage from '../TicketMessage/TicketMessage.js';
import dummyTickets from '../../assets/data/dummyTickets.json';
import UpdateTicket from '../UpdateTicket/UpdateTicket';

const ticket = dummyTickets[0];
const TicketPage = () => {

    const[details, setDetails] = useState('');

    const handleOnChange = () => {

    }
    
    return(
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page = "Ticket"/>
                </Col>
            </Row>
            <Row>
                <Col className="text-weight-bolder text-secondary">
                    <div className="client">Client: {ticket.client} </div>
                    <div className="issue">Issue: {ticket.issue} </div>
                    <div className="details">Details: {ticket.details} </div>
                    <div className="date">Date: {ticket.date} </div>
                </Col>
                <Col className="text-right">
                    <Button variant="outline-info">Close Ticket</Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <TicketMessage message={ticket.history}/>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <UpdateTicket details = {details} handleOnChange = {handleOnChange} />
                </Col>
            </Row>
        </Container>
    );
}

export default TicketPage;