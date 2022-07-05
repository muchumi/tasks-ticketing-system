import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import TicketsList from '../TicketsList/TicketsList.js';
import PageBreadcrumb from '../Breadcrumb/Breadcrumb.js';
import './Dashboard.css';
import dummyTickets from '../../assets/data/dummyTickets.json';
import SearchForm from '../SearchForm/SearchForm.js';

const Dashboard = () => {

    const [string, setString] = useState('');

    const [displayTicket, setDisplayTicket] = useState(dummyTickets);

    useEffect(() => {}, [string, displayTicket]);

    const handleOnChange = e => {
        const {value} = e.target;
        setString(value);
        searchTicket(value);
    }

    const searchTicket = string => {
        const displayTickets = dummyTickets.filter(row => row.issue.toLowerCase().includes(string.toLowerCase()));
        setDisplayTicket(displayTickets);
    };
    return(
        <div className="dashboard">
            <Container className="mt-3">
                <Row className="background">
                    <Col>
                        <PageBreadcrumb page="Dashboard"/>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <Link to="/add-ticket">
                            <Button variant="info" style={{fontSize: "1rem", borderRadius: "none"}}>
                                Add New Ticket
                            </Button>
                        </Link>
                    </Col>
                    <Col className="text-right">
                        <SearchForm handleOnChange={handleOnChange} string={string}/>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-2 new-tickets">
                        <TicketsList dummyTickets={displayTicket}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;