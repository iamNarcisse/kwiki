import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileNavBar extends Component {

    logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('user_details');
        localStorage.removeItem('user_token');
        window.location.reload()
    }

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">Kwikikarts</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to="/account">Home</Link></li>
                            <li><Link  to="/userDetails">Manage Profile</Link></li>
                            <li><a href="orderHistory">Orders</a></li>
                            <li><a href="#paymentmethod">Payment Methods</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#logout" onClick={this.logout} ><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default ProfileNavBar;