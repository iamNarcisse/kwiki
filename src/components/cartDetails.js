import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Popover, OverlayTrigger } from 'react-bootstrap';
class CartDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            qty: ''
        }
    }

    work = () => {
        setInterval(() => {
            const getFromStorage = JSON.parse(localStorage.getItem('product'));
            if (Array.isArray(getFromStorage)) {
                this.setState({ qty: getFromStorage.length })
            } else {
                this.setState({ qty: 0 })
            }
        }, 1000)
    }
    componentDidMount() {
        //  this.getFromStorage();
        this.work();

    }

    componentWillUnmount() {
        clearInterval(this.work());
        //  clearInterval(this.getFromStorage())
    }


    /*getFromStorage = () => {
        setInterval(() => { 
            let getFromStorage = JSON.parse(localStorage.getItem('product'));

            if (getFromStorage !== undefined && getFromStorage !== null) {
                this.setState({
                    cart: getFromStorage
                })
            } else {
                this.setState({
                    cart: [0]
                })
            }

        }, 1200)
    }*/

    render() {

        function popoverBottom(data) {
            if (Array.isArray(data)) {
                return (
                    <Popover id="popover-positioned-bottom" title="">
                        {showItemInCart(data)}
                    </Popover>
                )
            } else {
                return (
                    <Popover id="popover-positioned-bottom" title="">
                        <div>No item</div>
                    </Popover>
                )
            }

        }


        function showItemInCart(cart) {
            let work = cart.map(item => {
                return (
                    <div key={item.id}>
                        <div className="product-widget">

                            <div className="product-img" > <img src={item.image} alt="product" /></div>
                            <div className="product-body">
                                <h3 className="product-name"><a href="#moreInfo">{item.name}</a></h3>
                                <h4 className="product-price"><span className="qty"> {item.qty} x </span>&#8358; {item.price}</h4>
                            </div>

                            <button onClick={
                                () => {
                                    const id = item.id;
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

                        <div className="cart-summary">
                            <small>  Item(s) selected</small>
                                    <h5  >SUBTOTAL: &#8358; {item.qty * item.price}</h5>
                        </div>
                        <div className="cart-btns">
                            <Link className="btnn" to="/pay">Checkout<i className="fa fa-arrow-circle-right"></i></Link>
                        </div><hr/>
                    </div>
                )
            });

            return (work
            );


        }


        return (
            < div className="dropdown" >
                <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom(JSON.parse(localStorage.getItem('product')))} >
                    <a href="#go" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                        <i className="fa fa-shopping-cart"></i>
                        <span >Your Cart</span>
                        <div className="qty">{this.state.qty}</div>
                    </a></OverlayTrigger>
                { /*<div className="cart-dropdown">
                    <div className="cart-list">
                        {this.state.cart.map(item => {

                            return (

                                <div key={item.id} className="product-widget">

                                    <div className="product-img" > <img src={item.image} alt="product" /></div>
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
                    <div className="cart-btns" >
                        <Link to="/pay">View Cart</Link>
                        <Link to="/pay">Checkout<i className="fa fa-arrow-circle-right"></i></Link>
                    </div>
                </div>*/}
            </div >
        )
    }
}

export default CartDetails;