import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class TopHeader extends Component {
    render() {
        return (
            <div>
                <div id="top-header">
                    <div className="container">
                     
                        <ul className="header-links pull-right" >
                          
                            <li><Link to ="/account"><i className="fa fa-user-o"></i> My Account</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopHeader;