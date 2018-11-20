import React, { Component } from 'react';
import {addToCart} from '../../services/apiRequest';
class OrderDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            user: {}
        }
    }

    componentDidMount () {
        this.getFrom();
    }

    getFrom = () => {
        const productData = JSON.parse(localStorage.getItem('product'));
        const userData = JSON.parse(localStorage.getItem('user_details'))
        //console.log('Here is the user Data in console ' + userData.name)
        if(productData !== undefined && productData !==null) {
            this.setState({
                product: productData
            }, ()=> {this.setState({user: userData})})

           // console.log(this.state.user)
        }else {
            this.setState({
                product: [ 0]
            }, ()=> {this.setState({user: '' })})
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
                                    <div>1 x {item.name}</div>
                                    <div>&#8358;{item.price}</div></div></div>
                        )
                   

                    })}
                                   
                        
                    
                    <div className="order-col">
                        <div>Delivery</div>
                        <div><strong>&#8358;300</strong></div>
                    </div>
                    <div className="order-col">
                        <div><strong>TOTAL</strong></div>
                                <div><strong className="order-total">&#8358; </strong></div>
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="input-radio">
                        <input type="radio" name="payment" id="payment-2" />
                        <label htmlFor="payment-2">
                            <span></span>
                            Pay On Delivery
								</label>
                        <div className="caption">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="input-radio">
                        <input type="radio" name="payment" id="payment-3" />
                        <label htmlFor="payment-3">
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
                    <label htmlFor="terms">
                        <span></span>
                        I've read and accept the <a href="#terms">terms & conditions</a>
                    </label>
                </div>
                <a href="#placeOrder" className="primary-btn order-submit">Place order</a><br /><br />

                { /*  onClick={ ()=> {
                   //console.log(this.state.user._id)
                   if(this.state.product.id === undefined &&  this.state.user._id === undefined) {
                    
                   }else {
                       addToCart(
                           this.state.product.id, 
                           this.state.user._id, 
                           this.state.product.name,
                           this.props.firstName,
                           this.props.lastName,
                           this.props.email,
                           this.props.tel,
                           this.props.address,
                           this.props.city
                       )
                   // localStorage.removeItem('product'); window.location.reload()
                 */}
            </div>
        )
    }
}

export default OrderDetails;