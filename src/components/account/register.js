import React from 'react';
import { SignupRequest } from "../../services/apiRequest";

class Register extends React.Component {

    constructor() {
        super();
        this.state = {
            register: false
        }
    }

    onChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    onClick = (e) => {
        e.preventDefault();
        console.log(this.state);
        SignupRequest(
            this.state.firstname,
            this.state.email,
            this.state.password,
            this.state.confirmPassword)
            .then(axiosRes => {
                console.log(axiosRes);
            })
            .catch(err => {
                console.log(err);
            });
    }


    render() {
        return (
            <div className="row">
                <div className="col-xs-11 col-md-6 col-sm-8" style={{ padding: '20px 10px' }} >
                    <h2>Register</h2>
                    <form >
                        <div className="form-group">
                            <label >Fisrt Name</label>
                            <input type="text" onChange={this.onChange} className="form-control" name="firstname" aria-describedby="first name" placeholder="Enter your First name" />
                        </div>

                        <div className="form-group">
                            <label >Email address</label>
                            <input type="email" onChange={this.onChange} className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input onChange={this.onChange} type="password" name="password" className="form-control" placeholder="Password" />
                        </div>

                        <div className="form-group">
                            <label >ConfirmPassword</label>
                            <input onChange={this.onChange} type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password" />
                        </div>

                        <button type="submit" onClick={this.onClick} className="btn " style={{ backgroundColor: '#ff0066', color: '#fff' }}>Register</button>
                    </form></div></div>
        )
    }
}

export default Register;