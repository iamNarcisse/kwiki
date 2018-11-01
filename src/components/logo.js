import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import photo from '../logo.png';

class Logo extends Component {
    render() {
        return (
                <div className="col-md-3">
                    <div className="header-logo">
                        <Link to="/" className="logo" >
                            <img src={photo} alt="" />
                        </Link>
                    </div>
                </div>
        )
    }
}
export default Logo;