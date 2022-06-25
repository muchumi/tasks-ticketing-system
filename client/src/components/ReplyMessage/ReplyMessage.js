import React from 'react';
import {Form, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

const ReplyMessage = ({message, handleOnChange, handleOnSubmit}) => {
    return(
        <Form onSubmit={handleOnSubmit}>
            <div className="text-weight-bolder text-secondary">
                <Form.Label>Reply</Form.Label>
            </div>
            <Form.Text>Please reply with your message below</Form.Text>
            <Form.Control
                name=""
                value = {message}
                onChange = {handleOnChange}
                as = "textarea"
                row = "5"
            />
            <div className="text-right">
                <Button variant="info" type="submit" className="mt-3 mb-3">Reply</Button>
            </div>
            
        </Form>
    );
};

ReplyMessage.propTypes = {
    handleOnChange:PropTypes.func.isRequired,
    handleOnSubmit:PropTypes.func.isRequired,
    message:PropTypes.string.isRequired
};

export default ReplyMessage;


