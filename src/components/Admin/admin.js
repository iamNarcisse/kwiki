import React, { Component } from 'react';
import ProfileNavBar from './navBar';
import { AdminCard } from './adminCard';
import CustomerTable from './customerTable';
import { getEntireCustomers, getEntireCustomersOrders } from '../../services/apiRequest';

class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            search: '',
            customers_no: '',
            orders_no: ''
        }
    }

    componentDidMount() {
        this.getCustomers();
        this.getOrders();
    }

    getCustomers = () => {
        getEntireCustomers()
            .then(axiosResponse => {
                if (axiosResponse && axiosResponse.data && axiosResponse.data.data.data) {
                    this.setState({
                        customers: axiosResponse.data.data.data
                    }, () => { this.setState({ customers_no: axiosResponse.data.data.no }) })
                }
            })
    }

    getOrders = () => {
        getEntireCustomersOrders()
            .then(axiosResponse => {
                if (axiosResponse && axiosResponse.data && axiosResponse.data.data.data) {
                    this.setState({
                        orders_no: axiosResponse.data.data.number
                    })
                }
            })
    }

    render() {
        return (
            <div>
                < ProfileNavBar />
                <div className="container">
                    <div className="myrow">
                        <AdminCard color="info" header="Customer Analytics" title="Order Analytics" no={this.state.customers_no} />
                        <AdminCard color="info" header="Orders Analytics" title="No. of Orders made" see={true} orderNo={this.state.orders_no} />
                    </div>
                    <br /><br />
                    <h2>Customers(Kwiks)</h2>
                    <CustomerTable customers={this.state.customers} />
                </div>
            </div>

        )
    }
}

export default Admin;