import React, { Component } from 'react';
import { adminLoginRequest } from '../../../services/apiRequest';
class LoginAdmin extends Component {

    state = {
        inputEmail: '',
        inputPassword: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let email = this.state.inputEmail;
        let password = this.state.inputPassword;

        adminLoginRequest(email, password)
            .then(axiosResponse => {
                if (axiosResponse && axiosResponse.data && axiosResponse.data.data) {
                    localStorage.setItem(
                        "admin_token",
                        axiosResponse.data.data.token
                    );
                    localStorage.setItem(
                        "admin_details",
                        JSON.stringify(axiosResponse.data.data)
                    );

                    window.location.reload();
                }

            })
            .catch(err => { console.log('Not working', err) })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {

        return (
            <div className="login">
                <div className="container">
                    <div className="card card-login mx-auto mt-5">
                        <div className="card-header" style={{ textAlign: 'center', fontFamily: 'verdana' }}>Login Admin</div>
                        <div className="card-body">

                            <form  >
                                <div className="form-group">
                                    <div className="form-label-group">
                                        <label htmlFor="inputEmail">Email address</label>
                                        <input type="email" id="inputEmail" className="form-control" value={this.state.inputEmail} onChange={this.handleChange} placeholder="Email address" required="required" autoFocus="autofocus" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-label-group">
                                        <label htmlFor="inputPassword">Password</label>
                                        <input type="password" id="inputPassword" className="form-control" value={this.state.inputPassword} onChange={this.handleChange} placeholder="Password" required="required" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" value="remember-me" />
                                            Remember Password
                                     </label>
                                    </div>
                                </div>
                                <a className="btn btn-primary btn-block" href="index.html" onClick={this.handleSubmit} >Login</a>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginAdmin;