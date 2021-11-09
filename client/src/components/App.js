import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import Home from '../components/Home/Home.js';
import Layout from '../components/Layout/Layout.js';
import AddTicketsForm from '../components/AddTicketsForm/AddTicketsForm.js';
import TicketsListing from './TicketsListing/TicketsListing.js';
import './App.css';
import TicketPage from './TicketPage/TicketPage.js';
import Dashboard from './Dashboard/Dashboard.js';


const App = () => {
    return(
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/add-tickets-form">
                        <AddTicketsForm />
                    </Route>
                    <Route path="/tickets">
                        <TicketsListing />
                    </Route>
                    <Route path="/tickets/:ticket_id">
                        <TicketPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;