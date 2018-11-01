import React, { Component } from 'react';
//import Header from '../header';
import avatar from './avatar.png';
import Footer from '../footer';
import Card from './card';
import { getUserDetailsRequest } from '../../services/apiRequest';
import { Link } from 'react-router-dom';

const myStyle = {
    width: '70px',
    borderRadius: '200px',
}


class Profile extends Component {

    constructor(props) {
        super(props);
        this.state={
            user: {}
        }
        
    }

    componentDidMount() {
        this.getUserDetails();
    }

    logout = (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.reload()
    }

    getUserDetails = () => {
        getUserDetailsRequest()
            .then(axiosResponse => {
                console.log(axiosResponse);
                if (axiosResponse && axiosResponse.data && axiosResponse.data.data) {
                    this.setState({
                        user: axiosResponse.data.data
                    })

                    //console.log(user);
                }

               // console.log(user);
            })
    }

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
                                <li><a href="#logout" onClick={this.logout} ><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="avatar">
               <center> <img src={avatar}  style={myStyle} alt="ava"/></center>
                </div>

                <div className="card-details">

                <Card name={this.state.user.firstname} email={this.state.user.email} lastname={this.state.user.lastname} phone={this.state.user.phoneNumber}/>
                </div>

                
               <Footer />
            </div>

        );
    }
}

export default Profile