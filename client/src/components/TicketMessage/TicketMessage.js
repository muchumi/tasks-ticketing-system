import React from 'react';
import PropTypes from 'prop-types';
import './TicketMessage.css';

const TicketMessage = ({ message }) => {
    console.log(message);
    if(!message) return null
    return message.map((row, i) => 
        <div key={i} className="ticket-message mt-3">
            <div className="send font-weight-bold text-secondary">
                <div className="sender">{row.sender}</div>
                <div className="date">{row.date}</div>
            </div>
            <div className="message">{row.message}</div>
        </div>
    );
}

TicketMessage.propTypes = {
    // handleOnChange: PropTypes.func.isRequired,
    // handleOnSubmit: PropTypes.func.isRequired,
    message: PropTypes.array.isRequired,
};

export default TicketMessage;