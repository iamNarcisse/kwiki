import React, { Component } from 'react';
import Header from '../header';
import Navigation from "../navigation";
import Axios from 'axios';
import Footer from '../footer';
import RegisterMessage from './registerMessage'


class Account extends Component {

    constructor() {
        super();
        this.state = {
            data: [{
                firstname: '',
                email: '',
                password: '',
                confirmPassword: ''
            }],

            register : false
        }
    }

    registerMessage = () => {
        this.setState({
            register : true
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onRegister = (e) => {
        e.preventDefault();
        const data = this.state;
        if (data.password !== data.confirmPassword  ) {
          console.log('password and confirmpassword does not match')
        } else {
           Axios.post("http://localhost:3000/users/add", data)
                .then((results) => { console.log(results);
                this.registerMessage(); })
                .catch((err) => { console.log(err) })
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Navigation />
                <br />
                    <center>{this.state.register && <RegisterMessage />}</center>
                <div className="container">
                    <div className="row" >
                        <div className="col-xs-11 col-md-6 col-sm-8" style={{ padding: '20px 10px' }}>
                            <form >
                                <h2>Login</h2>
                                <div className="form-group">
                                    <label >Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label >Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>

                                <button type="submit" className="btn" style={{ backgroundColor: '#ff0066', color: '#fff' }}>Login</button>

                            </form></div></div><br />
                    <div className="row">
                        <div className="col-xs-11 col-md-6 col-sm-8" style={{ padding: '20px 10px' }} >
                            <h2>Register</h2>
                            <form  onSubmit={this.onRegister}>
                                <div className="form-group">
                                    <label >Fisrt Name</label>
                                    <input type="text" className="form-control" onChange={this.onChange} name="firstname" value={this.state.data.firstname} aria-describedby="first name" placeholder="Enter your First name" />
                                </div>

                                <div className="form-group">
                                    <label >Email address</label>
                                    <input type="email" className="form-control" name="email" onChange={this.onChange} value={this.state.data.email} aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label >Password</label>
                                    <input type="password" onChange={this.onChange} name="password" value={this.state.data.password} className="form-control" placeholder="Password" />
                                </div>

                                <div className="form-group">
                                    <label >ConfirmPassword</label>
                                    <input type="password" className="form-control" name="confirmPassword" onChange={this.onChange} value={this.state.data.confirmPassword} placeholder="Confirm Password" />
                                </div>

                                <button type="submit" className="btn " style={{ backgroundColor: '#ff0066', color: '#fff' }}>Register</button>
                            </form></div></div></div><br />
                <Footer />
            </div>
        )
    }
}

export default Account;