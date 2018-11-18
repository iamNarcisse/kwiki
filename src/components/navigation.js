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
                            <li><a href="#Categories">Categories</a></li>
                            <li><Link to="/cakes">Cakes</Link></li>
                            <li className="dropdown">
                                <Link  className="dropdown-toogle" data-toggle="dropdown" to="#men">Clothes
                                <span className="caret"></span>
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link to="/mencloth">Men</Link></li>
                                    <li><Link to="/femalecloth">Women</Link></li>

                                </ul>
                                </li>
                            <li className="dropdown">
                                <Link  className="dropdown-toogle" data-toggle="dropdown" to="#men">Shoes/Sandals
                                <span className="caret"></span>
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link to="/menshoe">Men</Link></li>
                                    <li><Link to="/femaleshoe">Women</Link></li>

                                </ul>
                                </li>
                            <li><Link to="/food">Food</Link></li>
                            <li className="dropdown">
                                <a className="dropdown-toogle" data-toggle="dropdown" href="#Acessories">Accessories
                                <span className="caret"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/menaccessories">Men</Link></li>
                                    <li><Link to="/womenaccessories">Women</Link></li>

                                </ul>
                            </li>
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