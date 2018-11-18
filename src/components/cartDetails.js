import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class CartDetails extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }

    render() {
        return (
            < div className="dropdown" >
                <a href="#go" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                    <i className="fa fa-shopping-cart"></i>
                    <span >Your Cart</span>
                    <div className="qty">{this.props.qty}</div>
                </a>
                <div className="cart-dropdown">
                    <div className="cart-list">
                        <div className="product-widget">
                                <div className="product-img"> <img src={this.props.image} alt="" /></div>
                                <div className="product-body">
                                    <h3 className="product-name"><a href="#moreInfo">{this.props.name}</a></h3>
                                    <h4 className="product-price"><span className="qty"> {this.props.qty} x </span>&#8358; {this.props.price}</h4>
                                </div>

                            <button className="delete"><i className="fa fa-close"></i></button>
                        </div>
                    </div>
                    <div className="cart-summary">
                        <small>  Item(s) selected</small>
                        <h5>SUBTOTAL: &#8358; {this.props.qty * this.props.price}</h5></div>
                    <div className="cart-btns">
                        <a href="#moreInfo">View Cart</a>
                        <Link to="/checkout">Checkout  <i className="fa fa-arrow-circle-right"></i></Link>
                    </div>
                </div>
            </div >
        )
    }
}

export default CartDetails;