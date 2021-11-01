import React, { useState, useEffect } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import PageBreadcrumb from '../Breadcrumb/Breadcrumb.js';
import SearchForm from '../SearchForm/SearchForm.js';
import NewTickets from '../NewTickets/NewTickets.js';
import dummyTickets from '../../assets/data/dummyTickets.json';

const TicketsListing = () => {
    const[stringData, setStringData] = useState({
        string: ""
    });

    const[displayTicket, setDisplayTicket] = useState(dummyTickets);

    useEffect(() => {}, [stringData, displayTicket]);

    const handleOnChange = (e) => {
        const{value} = e.target;
        setStringData(value);
        searchTicket(value);
    };

    const searchTicket = (searchString) => {
        const ticketsData = dummyTickets.filter(item => item.issue.toLowerCase().includes(searchString.toLowerCase()));
        setDisplayTicket(ticketsData);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page = "Tickets List"/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <Button variant = "info">Add New Task Ticket</Button>
                </Col>
                <Col className="text-right">
                    <SearchForm handleOnChange = {handleOnChange} string = {stringData.string}/>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <NewTickets dummyTickets = {displayTicket}/>
                </Col>
            </Row>
        </Container>
    );
}

export default TicketsListing;