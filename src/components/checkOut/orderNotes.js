import React, { Component } from 'react';

class OrderNote extends Component {

    render() {
        return (
            <div className="order-notes">
                <textarea className="input" placeholder="Order Notes"></textarea>
            </div>
        )
    }
}
export default OrderNote;