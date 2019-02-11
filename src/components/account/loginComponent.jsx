import React from 'react';
import { LoginRequest } from '../../services/apiRequest';
import { Link, Redirect, withRouter } from 'react-router-dom';
import './login.css';
import './animate.css';
class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wantsToCheckout: false,
            showSecondButton: false
        }
    }
    

    componentDidMount() {
        this.checkIfCheckoutIsTrue();
    }

    checkIfCheckoutIsTrue = () => {
        if (JSON.parse(localStorage.getItem('checkout')) === true) {
            this.setState({
                showSecondButton: true
            })
        }
    }

    work = (e) => {
        e.preventDefault();
        LoginRequest(this.state.email, this.state.password)
            .then(axiosRes => {
                if (axiosRes && axiosRes.data && axiosRes.data.data) {
                    localStorage.setItem(
                        "user_token",
                        axiosRes.data.data.token
                    );
                    localStorage.setItem(
                        "user_details",
                        JSON.stringify(axiosRes.data.data)
                    );
                    this.setState({
                        wantsToCheckout: true
                    })
                }
            })
            .catch(err => {
                console.log(err);
                this.setState({ response: 'Invalid Email/Password' }, () => { this.setState({ showError: true }) })
            });
        
    }

    onChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value.trim() })
    }

    onClick = (e) => {
        e.preventDefault();
        LoginRequest(this.state.email, this.state.password)
            .then(axiosRes => {
                console.log(axiosRes.data.message);
                if (axiosRes && axiosRes.data && axiosRes.data.data) {
                    localStorage.setItem(
                        "user_token",
                        axiosRes.data.data.token
                    );
                    localStorage.setItem(
                        "user_details",
                        JSON.stringify(axiosRes.data.data)
                    );

                    window.location.reload();
                }
            })
            .catch(err => {
                console.log(err);
                this.setState({ response: 'Invalid Email/Password' }, () => { this.setState({ showError: true }) })
            });
    }

    render() {

        const {  showSecondButton, wantsToCheckout } = this.state;
        const { from } = this.props.location.state || {from : {pathname : "/"}}
        if (wantsToCheckout === true) {
            return (
                <Redirect to ={ from } />
            )
        }

        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30">
                        <form className="login100-form validate-form">
                            <span className="login100-form-title p-b-55">
                                Login
                        </span>

                            <div className="wrap-input100 validate-input m-b-16" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" type="text" onChange={this.onChange} name="email" placeholder="Email" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <span className="lnr lnr-envelope"></span>
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input m-b-16" data-validate="Password is required">
                                <input className="input100" onChange={this.onChange} type="password" name="password" placeholder="Password" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <span className="lnr lnr-lock"></span>
                                </span>
                            </div>

                            <div className="contact100-form-checkbox m-l-4">
                                <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                                <label className="label-checkbox100" htmlFor="ckb1">
                                    Remember me
                            </label>
                            </div>

                            <div className="container-login100-form-btn p-t-25">
                                {!showSecondButton  && <button className="login100-form-btn" onClick={this.onClick}>
                                    Login
                            </button>}

                                {showSecondButton && <button className="login100-form-btn" onClick={this.work}>
                                    Login
                            </button>}
                            </div>

                            <div className="text-center w-full p-t-115">
                                <span className="txt1">
                                    Not a member?
                            </span>

                                <Link to="/register" className="txt1 bo1 hov1">
                                    Sign up now
                            </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(LoginComponent);