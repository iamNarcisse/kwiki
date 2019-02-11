import React, { Component } from 'react';
import PlaceOrderButton from './placeOrderComponent';
import OrderButton from './placeOrderButton2';
import { Link } from 'react-router-dom';
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

    PayOnline = () => {
        this.setState({
            online: true
        }, ()=> {this.setState({onDelivery : false})})

    }

    onDelivery = () => {
        this.setState(
            { onDelivery: true }, ()=> {this.setState({online : false})}
        )
    }

    getTotal = () => {
        let product = JSON.parse(localStorage.getItem('product'));
        if (product !== null) {
            let price = product.map(item => {
                return item.price
            } );
            let qty = product.map(item => {
                return item.qty
            });
    
            let sum = price.map((me, you) => {
              return me * qty[you]
            });
    
            let total = sum.reduce((prev, cur) => {
                return prev + cur
            }, 0);
    
            this.setState({
                total: (total + this.state.Delivery)
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
        } else {
            this.setState({
                product: [0]
            }, () => { this.setState({ user: '' }) })
        }
    }

    render() {
        const { online, onDelivery } = this.state;
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
                                    <div>{item.qty} x {item.name}</div> <button onClick={

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
                                            window.location.reload()
                                        }
                                    } className="delete"><i className="fa fa-close"></i></button>
                                    <div>&#8358;{ item.qty * item.price}</div></div></div>
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
                        <input type="radio" name="payment" id="payment-2" onClick={this.onDelivery} />
                        <label htmlFor="payment-2">
                            <span></span>
                            Pay On Delivery
								</label>
                        <div className="caption">
                            <p></p>
                        </div>
                    </div>
                    
                   <div className="input-radio">
                        <input type="radio" name="payment" id="payment-3" onClick={this.PayOnline} />
                        <label htmlFor="payment-3">
                            <span></span>
                            Pay Online
								</label>
                        <div className="caption">
                            <p>An extra charge of &#8358;50 will be added for transaction below &#8358;2000 and &#8358;100 for transaction above &#8358;2000</p>
                        </div>
                </div>

                </div>
                <div className="input-checkbox">
                    <input type="checkbox" id="terms" />
                    <label htmlFor="terms">
                        <span></span>
                        I've read and accepted the <Link to="/terms">terms & conditions</Link>
                    </label>
                </div>
                <br /><br />
                {online && (
                <PlaceOrderButton firstName={this.props.firstName} lastName={this.props.lastName} email={this.props.email} city={this.props.city} tel={this.props.tel} address={this.props.address} />
                )}
                {onDelivery && (
                <OrderButton firstName={this.props.firstName} lastName={this.props.lastName} email={this.props.email} city={this.props.city} tel={this.props.tel} address={this.props.address} />                  
                )}
            </div>
        )
    }
}

export default OrderDetails;