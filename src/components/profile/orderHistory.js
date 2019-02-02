import React, { Component } from 'react';
import { getUserOrderHistory } from '../../services/apiRequest';
import { Table } from 'react-bootstrap';
import ProfileNavBar from './navBar';
class OrderHistory extends Component {
    state = {
        orders: []
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
                }
            }).catch(error => { console.log(error) })
    }

    render() {

        const { orders } = this.state;

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

                        {orders.map(order => {
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

                    </tbody>
                </Table>
            </div>
        )
    }
}

export default OrderHistory;