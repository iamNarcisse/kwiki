import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

//A container Function
class CustomerTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    onChangeSearch = (e) => {
        this.setState({
            search: e.target.value.substr(0, 20)
        })
    }

    render() {

        let customers = this.props.customers.filter(
            (customer) => {
                return customer.firstname.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );

        return (
            <div className="search">
                <form onSubmit={e => e.preventDefault()}>
                    <input type="search" name="search" value={this.state.search} onChange={this.onChangeSearch} placeholder="Search eg. Narcisse " />
                    <input type="submit" value='Search' />
                </form>
                <Table striped bordered condensed hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>FirstName</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>PhoneNumber</th>
                            <th>Date_Registered</th>
                        </tr>
                    </thead>
                    <tbody>

                        {customers.map(customer => {
                            return (
                                <tr key={customer._id}>
                                    <td>1</td>
                                    <td >{customer.firstname}</td>
                                    <td>{customer.lastname}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.phoneNumber}</td>
                                    <td>{customer.date_created}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </Table></div>
        )
    }
}

export default CustomerTable;
