import React, { Component } from 'react';
import Header from '../header';
import Navigation from "../navigation";
//import Axios from 'axios';
import Footer from '../footer';
import Login from './login';
import Register from './register';
import RegisterMessage from './registerMessage';


class Account extends Component {
    constructor() {
        super();
        this.state = {
            register: false
        }
    }
    registerMessage = () => {
        this.setState({
            register: true
        })
    }

    render() {
        return (
            <div>
                <Header />
                <Navigation />
                <br />
                <center>{this.state.register && <RegisterMessage />}</center>
                <div className="account container">
                    <Login />
                    <Register />
                </div><br />
                <Footer />
            </div>
        )
    }
}

export default Account;