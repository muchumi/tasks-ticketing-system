import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../components/Home/Home.js';
import AddTicketForm from './AddTicketForm/AddTicketForm.js';
import './App.css';
import PrivateRoute from './PrivateRoute/PrivateRoute.js';
import Dashboard from './Dashboard/Dashboard.js';
import Ticket from './Ticket/Ticket.js';


const App = () => {
    return(
        // <div className="App">
        //     <Router>
        //         <Routes>
        //             <Route exact path="/">
        //                 <Home />
        //             </Route>
        //             <PrivateRoute path="/dashboard">
        //                 <Dashboard />
        //             </PrivateRoute>
        //             <PrivateRoute path="/add-ticket">
        //                 <AddTicketForm />
        //             </PrivateRoute>
        //             <PrivateRoute path="/tickets/ticket_id">
        //                 <Ticket/>
        //             </PrivateRoute>
        //         </Routes>
        //     </Router>
        // </div>
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" component={Home}/>
                    <PrivateRoute path="/dashboard" component={Dashboard}/>
                    <PrivateRoute path="/add-ticket" component={AddTicketForm}/>
                    <PrivateRoute path="/tickets/ticket_id" component={Ticket}/>
                </Routes>
            </Router>
        </div>
    );
}


export default App;