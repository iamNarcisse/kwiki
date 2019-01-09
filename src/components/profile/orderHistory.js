import React, { Component } from 'react';
import { getUserOrderHistory } from '../../services/apiRequest';
import { Table } from 'react-bootstrap';
import ProfileNavBar from './navBar';
class OrderHistory extends Component {

    constructor(props) {
        super(props)
        this.state = {
            orders: []
        }
    }

    componentDidMount() {
        this.getUserId()
    }

    getUserId = () => {
        getUserOrderHistory()
            .then(axiosRes => {
                if (axiosRes && axiosRes.data && axiosRes.data.data) {
                    this.setState({
                        orders: axiosRes.data.data
                    })

                    console.log(axiosRes.data.data)

                }
            })

    }

    render() {

        return (
            <div>
                <ProfileNavBar />
            <Table striped bordered condensed hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ProductID</th>
                        <th>UserID</th>
                        <th>FullName</th>
                        <th>PurchasedItem</th>
                        <th>Price</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>

                    {this.state.orders.map(order => {
                        return (
                            <tr key={order._id}>
                                <td>1</td>
                                <td >{order.productId}</td>
                                <td>{order.userId}</td>
                                <td>{order.customerName}</td>
                                <td>{order.productName}</td>
                                <td>{order.productPrice}</td>
                                <td>{order.date_created}</td>
                            </tr>
                        )
                    })}

                    { 
                        /**
                         * 
                         *     <tr>
                        <td>1</td>
                        <td >{orders.productId}</td>
                        <td>{orders.userId}</td>
                        <td>{orders.customerName}</td>
                        <td>{orders.productName}</td>
                        <td>{orders.productPrice}</td>
                        <td>{orders.date_created}</td>
                    </tr>
                         */
                    }

                        

                </tbody>
            </Table>
          </div>
        )
    }
}

export default OrderHistory;