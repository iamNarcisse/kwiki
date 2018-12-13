import React, { Component } from 'react';
import PlaceOrderButton from './placeOrderComponent';
//import {addToCart} from '../../services/apiRequest';
class OrderDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            user: {},
            total: 0,
            Delivery: 300
        }
    }
    componentDidMount() {
        this.getFrom();
        this.getTotal();
    }

    getTotal = () => {
        let data = JSON.parse(localStorage.getItem('product'));
        if (data !== null) {

            let msgTotal = data.reduce(function (prev, curl) {
                return prev + curl.price;
            }, 0);
            this.setState({
                total: (msgTotal + this.state.Delivery)
            }, () => { localStorage.setItem('SumTotal', JSON.stringify(this.state.total)) })

        } else {
            this.setState({
                total: 0
            }, () => { this.setState({ Delivery: 0 }) })
        }

    }

    getFrom = () => {
        const productData = JSON.parse(localStorage.getItem('product'));
        const userData = JSON.parse(localStorage.getItem('user_details'));
        if (productData !== undefined && productData !== null) {
            this.setState({
                product: productData
            }, () => { this.setState({ user: userData }) })

            // console.log(this.state.user)
        } else {
            this.setState({
                product: [0]
            }, () => { this.setState({ user: '' }) })
        }
    }

    render() {
        return (
            <div className="col-md-5 order-details" >
                <div className="section-title text-center">
                    <h3 className="title">Your Order</h3>
                </div>
                <div className="order-summary">
                    <div className="order-col">
                        <div><strong>PRODUCT</strong></div>
                        <div><strong>TOTAL</strong></div>
                    </div>
                    {this.state.product.map(item => {
                        return (
                            <div key={item.id} className="order-products">
                                <div className="order-col">
                                    <div>1 x {item.name}</div> <button onClick={

                                        () => {
                                            const id = item.id;
                                            console.log(id)
                                            //Get products from localstorage
                                            let getFromStorage = JSON.parse(localStorage.getItem('product'));
                                            //Loop through the array
                                            for (let i = 0; i < getFromStorage.length; i++) {
                                                if (getFromStorage[i].id === id) {
                                                    getFromStorage.splice(i, 1);
                                                }
                                            }
                                            localStorage.setItem('product', JSON.stringify(getFromStorage))
                                        }
                                    } className="delete"><i className="fa fa-close"></i></button>
                                    <div>&#8358;{item.price}</div></div></div>
                        )

                    })}

                    <div className="order-col">
                        <div>Delivery</div>
                        <div><strong>&#8358;300</strong></div>
                    </div>
                    <div className="order-col">
                        <div><strong>TOTAL</strong></div>


                        <div ><strong className="order-total">&#8358; {this.state.total} </strong></div>
                    </div>
                </div>
                <div className="payment-method">
                    <div className="input-radio">
                        <input type="radio" name="payment" id="payment-1" />
                        <label htmlFor="payment-1">
                            <span></span>
                            Direct Bank Transfer
								</label>
                        <div className="caption">
                            <p>Bank Transfer to this account: 000000000</p>
                        </div>
                    </div>
                    <div className="input-radio">
                        <input type="radio" name="payment" id="payment-2" />
                        <label htmlFor="payment-2">
                            <span></span>
                            Pay On Delivery
								</label>
                        <div className="caption">
                            <p>Pay on Item Delivery</p>
                        </div>
                    </div>
                    <div className="input-radio">
                        <input type="radio" name="payment" id="payment-3" />
                        <label htmlFor="payment-3">
                            <span></span>
                            Paystack System
								</label>
                        <div className="caption">
                            <p>Pay online </p>
                        </div>
                    </div>
                </div>
                <div className="input-checkbox">
                    <input type="checkbox" id="terms" />
                    <label htmlFor="terms">
                        <span></span>
                        I've read and accept the <a href="#terms">terms & conditions</a>
                    </label>
                </div>
                <br /><br />
                <PlaceOrderButton firstName={this.props.firstName} lastName={this.props.lastName} email={this.props.email} city={this.props.city} tel={this.props.tel} address={this.props.address} />
            </div>
        )
    }
}

export default OrderDetails;