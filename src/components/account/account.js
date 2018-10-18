import React, { Component } from 'react';
import Header from '../header';
import Navigation from "../navigation";
import Footer from '../footer';

class Account extends Component {

    render() {
        return (
            <div>
                <Header />
                <Navigation />
                <br />
                <form>
                    <h2>Register</h2>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Fisrt Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="first name" placeholder="Enter your First name" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control"  placeholder="Password" />
                    </div>

                    <button type="submit" class="btn "  style={{backgroundColor: '#ff0066', color: '#fff'}}>Register</button>
                </form><br />

                      
                     <h2>Login</h2>
                <form >

                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>

                    <button type="submit" class="btn"  style={{backgroundColor: '#ff0066', color: '#fff'}}>Login</button>

                </form><br /><br />

                <Footer />
            </div>
        )
    }
}

export default Account;