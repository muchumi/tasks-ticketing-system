import React, { useState } from 'react';
import { Jumbotron } from 'react-bootstrap';
import Login from '../Login/Login.js';
import ResetPassword from '../ResetPassword/ResetPassword.js';
import './Home.css';

const Home = () => {
    const [state, setState] = useState({
        email: "", password: ""
    });

    const [formLoad, setFormLoad] = useState("login");

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        switch(name){
            case 'email':
                setState(value)
                break
            case 'password':
                setState(value)
                break
            default:
                break
        }
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        // More validations to be created
        // if(!state.email || !state.password){
        //     alert("Fill all the fields!")
        // }
    }

    const handleOnResetSubmit = (e) => {
        e.preventDefault();
        if(!state.email){
            alert("Please provide your email!");
        }
    }

    const switchForm = (formType) => {
        setFormLoad(formType);
    }
    return(
        <div className="Home bg-info">
            <Jumbotron className="form-box">
                {formLoad === "login" && (
                    <Login 
                        handleOnChange={handleOnChange} 
                        handleOnSubmit={handleOnSubmit} 
                        email={state.email}
                        password = {state.password}
                        switchForm={switchForm} 
                    />
                )}
                {formLoad === "rest" && (
                    <ResetPassword 
                        handleOnChange={handleOnChange} 
                        handleOnResetSubmit={handleOnResetSubmit} 
                        email = {state.email}
                        switchForm = {switchForm} 
                    />
                )}
            </Jumbotron>   
        </div>
    );
};

export default Home;