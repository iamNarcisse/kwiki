import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            
                <nav id="navigation">
                    {/* container */}
                    <div className="container">
                        {/* responsive-nav */}
                        <div id="responsive-nav">
                            {/* NAV */}
                            <ul className="main-nav nav navbar-nav">
                                <li className="active"><a href="#home">Home</a></li>
                                <li><a href="#HotDeals">Hot Deals</a></li>
                                <li><a href="#Categories">Categories</a></li>
                                <li><a href="#Laptops">Laptops</a></li>
                                <li><a href="#SmartPhones">Smartphones</a></li>
                                <li><a href="#Cameras">Cameras</a></li>
                                <li><a href="#Acessories">Accessories</a></li>
                                <li><Link to="/pickup">Pickup & Delivery</Link></li>
                            </ul>
                            {/* /NAV */}
                        </div>
                        {/* /responsive-nav */}
                    </div>
                    {/* /container */}
                    {/* /NAVIGATION */}
                </nav>
                
        )

    }
}

export default Navigation;