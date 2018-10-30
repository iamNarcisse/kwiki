import React, { Component } from 'react';
import myImage from '../assets/img/food1.jpg';
import {Link } from 'react-router-dom';

const pic = myImage;
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [
                {
                    price: 600,
                    name: 'Fried Rice',
                    qty: 1,
                    productImage: pic
                }
            ],
        }
    }
    render() {
        return (
            < div className="dropdown" >
                <a href="#go" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                    <i className="fa fa-shopping-cart"></i>
                    <span>Your Cart</span>
                    {this.state.cart.map(item => {
                        return (
                            <div key={item.qty} className="qty">{item.qty}</div>
                        )
                    })}
                </a>
                <div className="cart-dropdown">
                    <div className="cart-list">
                        <div className="product-widget">
                            
                            {this.state.cart.map(item => {
                                return (
                                    <div key={item.price}>
                                    <div className="product-img"> <img src={item.productImage} alt="" /></div>
                                    <div  className="product-body">
                                        <h3 className="product-name"><a href="#moreInfo">{item.name}</a></h3>
                                        <h4 className="product-price"><span className="qty">{item.qty}x</span>&#8358;{item.price}</h4>
                                    </div></div>
                                )
                            })}

                            <button className="delete"><i className="fa fa-close"></i></button>
                        </div>


                    </div>
                    <div className="cart-summary">
                    {this.state.cart.map(item => {
                        return(<div key={item.qty}>
                            <small> {item.qty} Item(s) selected</small>
                            <h5>SUBTOTAL: &#8358; {item.price * item.qty}</h5></div>
                        )
                    })}
                    </div>
                    <div className="cart-btns">
                        <a href="#moreInfo">View Cart</a>
                        <Link to="/checkout">Checkout  <i className="fa fa-arrow-circle-right"></i></Link>
                    </div>
                </div>
            </div >

        )
    }
}
export default Cart;