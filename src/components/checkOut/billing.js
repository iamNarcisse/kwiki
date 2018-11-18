import React, { Component } from 'react';
import OrderDetails from './orderDetails';
class Billing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: '',
            email: '',
            address: '',
            city: '',
            tel: '',
            firstName: ''
        }
    }

    handleFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        }
        )
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlelastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }

    handleCity = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    handleTel = (e) => {
        this.setState({
            tel: e.target.value
        })
    }

    handleAddress = (e) => {
        this.setState({
            address: e.target.value
        })
    }
    
    render() {
        return (<div>
            <div className="col-md-7">
                <div className="billing-details">
                    <div className="section-title">
                        <h3 className="title">Billing address</h3>
                    </div>
                    <div className="form-group">
                        <input className="input form-control" type="text" onChange={this.handleFirstName} value={this.state.firstName} name="firstName" placeholder="First Name" />
                    </div>
                    <div className="form-group">
                        <input className="input form-control" type="text" onChange={this.handlelastName} value={this.state.lastName} name="lastName" placeholder="Last Name" />
                    </div>
                    <div className="form-group">
                        <input className="input form-control" type="email" onChange={this.handleEmail} value={this.state.email} name="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input className="input form-control" type="text" onChange={this.handleAddress} value={this.state.address} name="address" placeholder="Address" />
                    </div>
                    <div className="form-group">
                        <input className="input form-control" type="text" name="city" onChange={this.handleCity} value={this.state.city} placeholder="City" />
                    </div>

                    <div className="form-group">
                        <input className="input form-control" type="tel" onChange={this.handleTel} value={this.state.tel} name="tel" placeholder="Telephone" />
                    </div>
                    <div className="form-group">
                        <div className="input-checkbox">
                            <input type="checkbox" id="create-account" />
                            <label htmlFor="create-account">
                                <span></span>
                                Create Account?
									</label>
                            <div className="caption">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                <input className="input" type="password" name="password" placeholder="Enter Your Password" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <OrderDetails firstName={this.state.firstName} lastName={this.state.lastName} city={this.state.city} tel={this.state.tel} address={this.state.address} email={this.state.email} />
        </div>
        )
    }
}

export default Billing;