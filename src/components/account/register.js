import React from 'react';
import { SignupRequest } from "../../services/apiRequest";
import RegisterMessage from './registerMessage';

class Register extends React.Component {

    constructor() {
        super();
        this.state = {
            firstname : '',
            lastname : '',
            email : '',
            phoneNumber : '',
            password : '',
            confirmPassword : '',
            register: false
        }
    }

    onChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    registerMessage = () => {
        this.setState({
            register: true
        })
    }

    disableButton = () => {
        this.setState({
            disable : true
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
                this.setState({response: 'Email has already been used'}, ()=> {this.setState({showError: true})})
            });
    }


    render() {
        const { firstname, lastname, email, password, confirmPassword, phoneNumber } = this.state;
        return (

            <div className="row">

                <div className="col-xs-11 col-md-6 col-sm-8 give" style={{ paddingTop: '40px', marginBottom: '12px' }} >
                    

                    <h2>SignUp</h2>
                    <form >
                        <div className="form-group">
                            <label >Fisrt Name</label>
                            <input type="text" onChange={this.onChange} value={firstname} className="form-control" name="firstname" aria-describedby="first name" placeholder="Enter your Firstname" />
                        </div>

                        <div className="form-group">
                            <label >Last name</label>
                            <input type="text" onChange={this.onChange} value={lastname} className="form-control" name="lastname" aria-describedby="lastname name" placeholder="Enter your Lastname" />
                        </div>

                        <div className="form-group">
                            <label >PhoneNumber</label>
                            <input type="tel" onChange={this.onChange} value={phoneNumber} className="form-control" name="phoneNumber" aria-describedby="first name" placeholder="Enter your phonenumber" maxLength="11" />
                        </div>

                        <div className="form-group">
                            <label >Email address</label>
                            <input type="email" onChange={this.onChange} value={email} className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input onChange={this.onChange} type="password" value={password} name="password" className="form-control" placeholder="Password"  required/>
                        </div>

                        <div className="form-group">
                            <label >ConfirmPassword</label>
                            <input onChange={this.onChange} type="password"  value={confirmPassword} className="form-control" name="confirmPassword" placeholder="Confirm Password" required/>
                        </div>
                        {this.state.showError === true && (<p style={{ color: 'red' }}>{this.state.response}</p>)}
                        <center>{this.state.register && <RegisterMessage />}</center>
                        { this.state.disable ? <center ><button type="submit" onClick={this.onClick} className="btn " style={{ backgroundColor: '#ff0066', color: '#fff' }}  disabled >Register</button></center>:  <center><button type="submit" onClick={this.onClick} className="btn " style={{ backgroundColor: '#ff0066', color: '#fff' }}  >Register</button> </center>}
                        
            
                    </form></div></div>
        )
    }
}

export default Register;