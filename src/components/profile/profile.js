import React, { Component } from 'react';
//import Header from '../header';
import avatar from './avatar.png';
import Footer from '../footer';
import Card from './card';
import { Link } from 'react-router-dom';

const myStyle = {
    width: '70px',
    borderRadius: '200px',
}


class Profile extends Component {

    render() {
        return (
            <div>
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
                                <li className="active"><Link to="/profile">Home</Link></li>
                                <li><a href="#accountdetails">Account Details</a></li>
                                <li><a href="#orders">Orders</a></li>
                                <li><a href="#paymentmethod">Payment Methods</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#logout"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="avatar">
               <center> <img src={avatar}  style={myStyle} alt="ava"/></center>
                </div>

                <div className="card-details">

                <Card />
                </div>

                
               <Footer />
            </div>

        );
    }
}

export default Profile