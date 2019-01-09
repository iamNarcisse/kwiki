import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { getEntireCustomersOrders } from '../../../services/apiRequest';
//A container Function
class OrderTable extends Component {
    state = {
        orders: [],
        search: '',
        currentPage: 1,
        ordersPerPage : 3
    }

    componentDidMount() {
        this.getOrders()
    }

   /* handleClick = (e) => {
     this.setState({
         currentPage: Number(e.target.id)
     })

    }*/


    onChangeSearch = (e) => {
        this.setState({
            search: e.target.value.substr(0, 20)
        })
    }

    getOrders = () => {
        getEntireCustomersOrders()
            .then(axiosResponse => {
                if (axiosResponse && axiosResponse.data && axiosResponse.data.data.data) {


                    this.setState({
                        orders: axiosResponse.data.data.data
                    })
                }
            })
    }

    render() {

      /*  const { currentPage, ordersPerPage } = this.state;

        //Logic for Displaying Orders

        const indexOfLastOrder = currentPage * ordersPerPage;
        const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
        const currentOrders =  this.state.orders.slice(indexOfFirstOrder, indexOfLastOrder);*/

        let orders = this.state.orders.filter(
            (order) => {
                return order.customerName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
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
                </Table></div>
        )
    }
}

export default OrderTable;
