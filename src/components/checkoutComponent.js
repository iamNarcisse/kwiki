import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class CheckOut extends Component {

    render() {
        return (
            <div>
                < Link to="/pay">
                    <i className="fa fa-handshake-o"></i>
                    <span>Check Out</span>
                    {/*  <div className="qty"></div> */}
                </Link>
            </div>
        )
    }
}

export default CheckOut;