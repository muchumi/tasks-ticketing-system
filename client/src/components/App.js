import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import Home from '../components/Home/Home.js';
import Layout from '../components/Layout/Layout.js';
import AddTicketsForm from '../components/AddTicketsForm/AddTicketsForm.js';
import './App.css';
import Ticket from './Tickets/Tickets.js';
import Dashboard from './Dashboard/Dashboard.js';
import PrivateRoute from './PrivateRoute/PrivateRoute.js';


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
                    <PrivateRoute path="/tickets/:ticket_id">
                        <Ticket />
                    </PrivateRoute>
                    <PrivateRoute path="/add-tickets">
                        <AddTicketsForm />
                    </PrivateRoute>
                </Switch>
            </Router>
        </div>
    );
}

export default App;