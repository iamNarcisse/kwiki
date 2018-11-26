import React, { Component } from 'react';

class SuccessMessage extends Component {
    render() {

        return (
            <div className="alert alert-success" style={{width: '300px', justifyContent: 'center'}}>
                <strong>
                Registration Successfully
        </strong>
        <p>Order Placed, Thanks for Choosing KwikiKarts</p>
            </div>
        )
    }
}

export default SuccessMessage