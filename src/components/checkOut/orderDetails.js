import React, { Component } from 'react';
class OrderDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productFromCart: [
                {
                    name: 'Fried Rice',
                    price: 6000,
                    qty: 1
                }
            ]
        }
    }



    render() {
        return (
            <div className="col-md-5 order-details">
                <div className="section-title text-center">
                    <h3 className="title">Your Order</h3>
                </div>
                <div className="order-summary">
                    <div className="order-col">
                        <div><strong>PRODUCT</strong></div>
                        <div><strong>TOTAL</strong></div>
                    </div>
                    <div className="order-products">
                            {this.state.productFromCart.map(item => {
                                return (
                                      <div  key={item.qty} className="order-col">
                                    <div>{item.qty}x {item.name}</div>
                                    <div>&#8358;{item.price}</div></div>
                            )
                            })}
                    </div>
                    <div className="order-col">
                        <div>Delivery</div>
                        <div><strong>&#8358;300</strong></div>
                    </div>
                    <div className="order-col">
                        <div><strong>TOTAL</strong></div>
                        {this.state.productFromCart.map(item=> {
                            return(
                                <div><strong className="order-total">&#8358;{(item.qty * item.price) + 300}</strong></div>
                            )
                        })}
                        
                    </div>
                </div>
                <div className="payment-method">
                    <div className="input-radio">
                        <input type="radio" name="payment" id="payment-1" />
                        <label for="payment-1">
                            <span></span>
                            Direct Bank Transfer
								</label>
                        <div className="caption">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="input-radio">
                        <input type="radio" name="payment" id="payment-2" />
                        <label for="payment-2">
                            <span></span>
                            Pay On Delivery
								</label>
                        <div className="caption">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="input-radio">
                        <input type="radio" name="payment" id="payment-3" />
                        <label for="payment-3">
                            <span></span>
                            Paystack System
								</label>
                        <div className="caption">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className="input-checkbox">
                    <input type="checkbox" id="terms" />
                    <label for="terms">
                        <span></span>
                        I've read and accept the <a href="#terms">terms & conditions</a>
                    </label>
                </div>
                <a href="#placeOrder" className="primary-btn order-submit">Place order</a>
            </div>
        )
    }
}

export default OrderDetails;