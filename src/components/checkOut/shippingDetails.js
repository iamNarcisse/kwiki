import React, { Component } from 'react';

class ShippingDetails extends Component {

    render() {
        return (
            <div className="shiping-details">
                <div className="section-title">
                    <h3 className="title">Shiping address</h3>
                </div>
                <div className="input-checkbox">
                    <input type="checkbox" id="shiping-address" />
                    <label for="shiping-address">
                        <span></span>
                        Ship to a diffrent address?
								</label>
                    <div className="caption">
                        <div className="form-group">
                            <input className="input" type="text" name="first-name" placeholder="First Name" />
                        </div>
                        <div className="form-group">
                            <input className="input" type="text" name="last-name" placeholder="Last Name" />
                        </div>
                        <div className="form-group">
                            <input className="input" type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input className="input" type="text" name="address" placeholder="Address" />
                        </div>
                        <div className="form-group">
                            <input className="input" type="text" name="city" placeholder="City" />
                        </div>
                        <div className="form-group">
                            <input className="input" type="text" name="country" placeholder="Country" />
                        </div>
                        <div className="form-group">
                            <input className="input" type="text" name="zip-code" placeholder="ZIP Code" />
                        </div>
                        <div className="form-group">
                            <input className="input" type="tel" name="tel" placeholder="Telephone" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ShippingDetails;
