import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NewTickets from '../NewTickets/NewTickets.js';
import PageBreadcrumb from '../Breadcrumb/Breadcrumb.js';
import './Dashboard.css';
import AddTicketsForm from '../AddTicketsForm/AddTicketsForm.js';
import dummyTickets from '../../assets/data/dummyTickets.json';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import SearchForm from '../SearchForm/SearchForm.js';

const Dashboard = () => {
    return(
        <div className="dashboard">
            <Container className="mt-3">
                <Row className="background">
                    <Col>
                        <PageBreadcrumb page="Dashboard"/>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="mt-5 mb-2">
                    <Col>
                        <LinkContainer to="/add-tickets">
                            <Button variant="info">Add New Task Ticket</Button>
                        </LinkContainer>
                    </Col>
                    <Col className="text-right">
                        <SearchForm />
                    </Col>
                </Row>
                {/* <Row>
                    <Col className="text-center mb-2">
                        <div>Total Tickets: 5000</div>
                        <div>Pending Tickets: 2100</div>
                    </Col>
                </Row> */}
                <Row>
                    <Col className="mt-2 new-tickets">
                        <NewTickets dummyTickets={dummyTickets}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;