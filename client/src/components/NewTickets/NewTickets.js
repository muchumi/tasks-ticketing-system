import React from 'react';
import { Table } from 'react-bootstrap';
import './NewTickets.css';

const NewTickets = ({ dummyTickets }) => {
    if(!dummyTickets.Length)
    return(
        <div>
            <h1 className="newTicketsHeading">Recently Added Tickets:</h1>
            <Table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Client</th>
                        <th>Issue</th>
                        <th>Details</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyTickets.length ? dummyTickets.map((ticket) => (
                        <tr key={ticket.id}>
                            <td>{ticket.id}</td>
                            <td>{ticket.client}</td>
                            <td>{ticket.issue}</td>
                            <td>{ticket.details}</td>
                            <td>{ticket.date}</td>
                        </tr>
                    )) :
                    <tr>
                        <td colSpan="4" className="text-center">No Tickets Available</td>
                    </tr>
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default NewTickets;