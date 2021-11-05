import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';
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
                <Routes>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/tickets">
                        <TicketsListing />
                    </Route>
                    <Route path="/tickets/ticket_id">
                        <TicketPage />
                    </Route>
                    <Route path="/add-tickets-form">
                        <AddTicketsForm />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;