import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NewTickets from '../NewTickets/NewTickets.js';
import PageBreadcrumb from '../Breadcrumb/Breadcrumb.js';
import './Dashboard.css';
import dummyTickets from '../../assets/data/dummyTickets.json';

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
                <Row>
                    <Col className="text-center mt-5 mb-2">
                        <Button variant="info" className="addTicketButton">Add New Task Ticket</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mb-2">
                        <div>Total Tickets: 5000</div>
                        <div>Pending Tickets: 2100</div>
                    </Col>
                </Row>
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