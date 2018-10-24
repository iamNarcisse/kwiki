import React, { Component } from 'react';

class AlertMessage extends Component {

    render() {

        return (
            <div className="alert alert-success" style={{width: '300px', justifyContent: 'center'}}>
                <strong>
                    Sent
        </strong>
        <p>Thanks for choosing Kwikikarts, we will always serve you better</p>
            </div>
        )
    }
}

export default AlertMessage