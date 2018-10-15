import React, { Component } from 'react';
import photo from '../logo.png';

class Logo extends Component {
    render() {
        return (
                <div className="col-md-3">
                    <div className="header-logo">
                        <a href="#logo" className="logo">
                            <img src={photo} alt="" />
                        </a>
                    </div>
                </div>
        )
    }
}
export default Logo;