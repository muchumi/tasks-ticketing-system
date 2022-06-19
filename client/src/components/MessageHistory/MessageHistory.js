import React from 'react';
import PropTypes from 'prop-types';
const MessageHistory = ({message}) => {
    console.log(message);
    if (!message) return null
    return message.map((row, i) => 
    <div key={i} className="messageHistory">
            <div className="send">
                <div className="sender">{row.sender}</div>
                <div className="date">{row.date}</div>
            </div>
            <div className="message">{row.message}</div>
        </div>)
}

export default MessageHistory;

MessageHistory.propTypes = {
    message:PropTypes.array.isRequired
}