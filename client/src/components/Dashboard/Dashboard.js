import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import TicketsList from '../TicketsList/TicketsList.js';
import PageBreadcrumb from '../Breadcrumb/Breadcrumb.js';
import './Dashboard.css';
import AddTicketsForm from '../AddTicketsForm/AddTicketsForm.js';
import dummyTickets from '../../assets/data/dummyTickets.json';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import SearchForm from '../SearchForm/SearchForm.js';

const Dashboard = () => {
    const [string, setString] = useState('');
    useEffect(() => {}, [string]);
    const handleOnChange = e => {
        setString(e.target.value);
    }
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
                <Row className="mt-4">
                    <Col>
                        <LinkContainer to="/add-tickets">
                            <Button variant="info">Add New Task Ticket</Button>
                        </LinkContainer>
                    </Col>
                    <Col className="text-right">
                        <SearchForm handleOnChange={handleOnChange} string={string}/>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-2 new-tickets">
                        <TicketsList dummyTickets={dummyTickets}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;