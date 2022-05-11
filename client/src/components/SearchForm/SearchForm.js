import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

const SearchForm = ({ handleOnChange, string }) => {
    console.log(string);
    return(
        <div>
            <Form autoComplete="off">
                <Form.Group as = {Row}>
                    <Form.Label column sm = "3">Search:</Form.Label>
                    <Col sm = "9">
                        <Form.Control
                            name = "string"
                            value = {string}
                            onChange = {handleOnChange}
                            placeholder = "Search ..."
                        />
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
}
SearchForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    string: PropTypes.string.isRequired
}
export default SearchForm;