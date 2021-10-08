import React from 'react';
import { Table } from 'react-bootstrap';
import './NewTickets.css';

const NewTickets = ({ dummyTickets }) => {
    return(
        <div>
            <h1 className="newTicketsHeading">Recently Added Tickets:</h1>
            <Table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tasks</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyTickets.length ? dummyTickets.map((ticket) => (
                        <tr key={ticket.id}>
                            <td>{ticket.id}</td>
                            <td>{ticket.tasks}</td>
                            <td>{ticket.status}</td>
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
}

export default NewTickets;