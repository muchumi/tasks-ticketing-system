import React from 'react';
import Header from '../Layout/Includes/Header/Header.js';
import Footer from '../Layout/Includes/Footer/Footer.js';
import Dashboard from '../Dashboard/Dashboard.js';

const Layout = () => {
    return(
        <div className="layout">
            <div className="header">
                <Header />
            </div>
            <main className="main">
                <Dashboard />
            </main>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}

export default Layout;