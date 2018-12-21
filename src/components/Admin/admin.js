import React, { Component } from 'react';
import ProfileNavBar from './navBar';
import { AdminCard } from './adminCard';
import DatatablePage from './dataTable';
class Admin extends Component {

   
    render() {
        return (
            <div>
                < ProfileNavBar />
                <div className="container">
                    <div className="row justify">
                        <AdminCard color="info" />
                        <AdminCard color="info" />
                        <AdminCard color="info" />
                    </div>
                    <br />
                    <h2>Customers(Kwiks)</h2>
                    <DatatablePage />
                </div>
            </div>

        )
    }
}

export default Admin;