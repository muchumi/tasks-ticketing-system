import React from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';


const UpdateTicket = ({ details, handleOnChange, handleOnSubmit }) => {
    return(
        <Form onSubmit = {handleOnSubmit}>
            <Form.Label>Reply</Form.Label>
            <Form.Text>Please Reply or Update Your Message Here:</Form.Text>
            <Form.Control
                as="textarea"
                name="details"
                value={details}
                onChange={handleOnChange}
                row="5"
            />
            <div className="text-right mt-3 mb-3">
                <Button variant="info" type="submit">Reply</Button>
            </div>
        </Form>
    );
}

UpdateTicket.propTypes = {
    details: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired
};

export default UpdateTicket;