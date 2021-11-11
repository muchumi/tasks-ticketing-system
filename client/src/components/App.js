import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import Home from '../components/Home/Home.js';
import Layout from '../components/Layout/Layout.js';
import AddTicketsForm from '../components/AddTicketsForm/AddTicketsForm.js';
import TicketsListing from './TicketsListing/TicketsListing.js';
import './App.css';
import TicketPage from './TicketPage/TicketPage.js';
import Dashboard from './Dashboard/Dashboard.js';
import PrivateRoute from './PrivateRoute/PrivateRoute.js';


const App = () => {
    return(
        <div className="App">
            <Router>
                <Switch>
                    <PrivateRoute exact path="/">
                        <Home />
                    </PrivateRoute>
                    <PrivateRoute path="/dashboard">
                        <Dashboard />
                    </PrivateRoute>
                    <PrivateRoute path="/add-tickets-form">
                        <AddTicketsForm />
                    </PrivateRoute>
                    <PrivateRoute path="/tickets">
                        <TicketsListing />
                    </PrivateRoute>
                    <PrivateRoute path="/tickets/:ticket_id">
                        <TicketPage />
                    </PrivateRoute>
                </Switch>
            </Router>
        </div>
    );
}

export default App;