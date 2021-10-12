import React from 'react';
import Home from '../components/Home/Home.js';
import Layout from '../components/Layout/Layout.js';
import AddTicketsForm from '../components/AddTicketsForm/AddTicketsForm.js';
import './App.css';

const App = () => {
    return(
        <div className="App">
            {/* <Layout /> */}
            <AddTicketsForm />
            {/* <Home /> */}
        </div>
    );
}

export default App;