import React from 'react';
import Home from '../components/Home/Home.js';
import Layout from '../components/Layout/Layout.js';
import AddTicketsForm from '../components/AddTicketsForm/AddTicketsForm.js';
import TicketsListing from './TicketsListing/TicketsListing.js';
import './App.css';
import TicketPage from './TicketPage/TicketPage.js';


const App = () => {
    return(
        <div className="App">
            {/* <Layout /> */}
            {/* <AddTicketsForm /> */}
            {/* <Home /> */}
            {/* <TicketsListing /> */}
            <TicketPage />
        </div>
    );
}

export default App;