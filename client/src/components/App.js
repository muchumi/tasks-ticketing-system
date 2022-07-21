import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from '../components/Home/Home.js';
import AddTicketForm from './AddTicketForm/AddTicketForm.js';
import './App.css';
import PrivateRoute from './PrivateRoute/PrivateRoute.js';
import Dashboard from './Dashboard/Dashboard.js';
import Ticket from './Ticket/Ticket.js';


const App = () => {
    return(
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <PrivateRoute path="/dashboard">
                        <Dashboard />
                    </PrivateRoute>
                    <PrivateRoute path="/add-ticket">
                        <AddTicketForm />
                    </PrivateRoute>
                    <PrivateRoute path="/tickets/ticket_id">
                        <Ticket/>
                    </PrivateRoute>
                </Switch>
            </Router>
        </div>
    );
}


export default App;