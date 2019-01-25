import React from 'react';
import { SignupRequest } from "../../services/apiRequest";
import RegisterMessage from './registerMessage';
import { Link } from 'react-router-dom';
class SignupComponent extends React.Component {
    state = {
        register: false,
        firstname: '',
        lastname: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    registerMessage = () => {
        this.setState({
            register: true
        })
    }

    disableButton = () => {
        this.setState({
            disable: true
        })
    }



    onClick = (e) => {
        e.preventDefault();
        console.log(this.state);
        SignupRequest(
            this.state.firstname,
            this.state.email,
            this.state.password,
            this.state.confirmPassword,
            this.state.lastname,
            this.state.phoneNumber
        )
            .then(axiosRes => {
                if (axiosRes) {
                    this.setState({
                        showError: false
                    })
                }
                console.log(axiosRes);
                this.registerMessage();
                this.disableButton();
            })
            .catch(res => {
                console.log(res);
                this.setState({ response: 'Email has already been used' }, () => { this.setState({ showError: true }) })
            });
    }

    render() {
        const { firstname, lastname, email, phoneNumber, password, confirmPassword } = this.state;
        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30">
                        <form className="login100-form validate-form">
                            <span className="login100-form-title p-b-55">
                                Register
                        </span>

                            <div className="wrap-input100 validate-input m-b-16" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" type="text" onChange={this.onChange} value={firstname} name="firstname" placeholder="Firstname" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <span className="lnr lnr-envelope"></span>
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input m-b-16" data-validate="Password is required">
                                <input className="input100" type="text" onChange={this.onChange} value={lastname} name="lastname" placeholder="Lastname" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <span className="lnr lnr-lock"></span>
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input m-b-16" data-validate="Password is required">
                                <input className="input100" type="email" onChange={this.onChange} value={email} name="email" placeholder="Email" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <span className="lnr lnr-lock"></span>
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input m-b-16" data-validate="Password is required">
                                <input className="input100" type="tel" onChange={this.onChange} value={phoneNumber} name="phoneNumber" placeholder="Phone Number" maxLength="11" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <span className="lnr lnr-lock"></span>
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input m-b-16" data-validate="Password is required">
                                <input className="input100" type="password" onChange={this.onChange} value={password} name="password" placeholder="Password" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <span className="lnr lnr-lock"></span>
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input m-b-16" data-validate="Password is required">
                                <input className="input100" type="password" onChange={this.onChange} value={confirmPassword} name="confirmPassword" placeholder="confirm Password" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <span className="lnr lnr-lock"></span>
                                </span>
                            </div>


                            <div className="container-login100-form-btn p-t-25">
                                {this.state.disable ? <button onClick={this.onClick} className="login100-form-btn" disabled>
                                    Register
                            </button> : <button onClick={this.onClick} className="login100-form-btn" >
                                        Register
                            </button>}
                            </div>

                            {this.state.showError === true && (<p style={{ color: 'red' }}>{this.state.response}</p>)}
                            <center><br /> {this.state.register && <RegisterMessage />}</center>

                            <div className="text-center w-full p-t-115">
                                <span className="txt1">
                                    Already  a member?
                            </span>
                                <Link className="txt1 bo1 hov1" to="/account">
                                    login
                            </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignupComponent;