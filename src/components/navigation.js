import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            
                <nav id="navigation">
                    <div className="container">
                        <div id="responsive-nav">
                            <ul className="main-nav nav navbar-nav">
                                <li className="active"><Link to="/">Home</Link></li>
                                <li><a href="#HotDeals">Hot Deals</a></li>
                                <li><a href="#Categories">Categories</a></li>
                                <li><a href="#Laptops">Cakes</a></li>
                                <li><a href="#SmartPhones">Clothes</a></li>
                                <li><a href="#Cameras">Food</a></li>
                                <li><a href="#Acessories">Accessories</a></li>
                                <li><Link to="/store">Store</Link></li>
                                <li><Link to="/pickup">Pickup & Delivery</Link></li>
                            </ul>
                            
                        </div>
                    </div>
                </nav>
                
        )

    }
}

export default Navigation;