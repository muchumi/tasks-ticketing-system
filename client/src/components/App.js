import React from 'react';
import Layout from '../components/Layout/Layout.js';
import AddTicketsForm from '../components/AddTicketsForm/AddTicketsForm.js';
import './App.css';

const App = () => {
    return(
        <div className="App">
            {/* <Layout /> */}
            <AddTicketsForm />
        </div>
    );
}

export default App;