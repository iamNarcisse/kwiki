import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class CartDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            qty: ''
        }
    }
    componentDidMount() {
        this.getFromStorage();
    }

    youClick = (e) => {
      e.preventDefault();

      alert('You click me')
    }

    getFromStorage = () => {
        const getFromStorage = JSON.parse(localStorage.getItem('product'));

        if (getFromStorage !== undefined && getFromStorage !== null) {
            const getNumber = getFromStorage.length
            this.setState({
                cart: getFromStorage
            }, () => { this.setState({ qty: getNumber }) })
        } else {
            this.setState({
                cart: [0]
            }, () => { this.setState({ qty: 0 }) })
        }

    }

    render() {
        return (
            < div className="dropdown" >
                <a href="#go" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                    <i className="fa fa-shopping-cart"></i>
                    <span >Your Cart</span>
                    <div className="qty">{this.state.qty}</div>
                </a>
                <div className="cart-dropdown">
                    <div className="cart-list">
                        {this.state.cart.map(item => {

                            return (

                                <div key={item.id} className="product-widget">

                                    <div className="product-img"> <img src={item.image} alt="" /></div>
                                    <div className="product-body">
                                        <h3 className="product-name"><a href="#moreInfo">{item.name}</a></h3>
                                        <h4 className="product-price"><span className="qty">  x </span>&#8358; {item.price}</h4>
                                    </div>

                                    <button onClick={

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
                                </div>
                            )
                        })}
                    </div>
                    <div className="cart-summary">
                        <small>  Item(s) selected</small>
                        {this.state.cart.map(item => {
                            return (
                                <h5 key={item.id} >SUBTOTAL: &#8358; {1 * item.price}</h5>
                            )
                        })}
                    </div>
                    <div className="cart-btns">
                        <Link to="/pay">View Cart</Link>
                        <Link to="/pay">Checkout<i className="fa fa-arrow-circle-right"></i></Link>
                    </div>
                </div>
            </div >
        )
    }
}

export default CartDetails;