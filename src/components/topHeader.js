import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class TopHeader extends Component {
    render() {
        return (
            <div>
                <div id="top-header">
                    <div className="container">
                        <ul className="header-links pull-left">
                            <li><a href="#moreInfo"><i className="fa fa-phone"></i> +234 706-622-3284</a></li>
                            <li><a href="#moreInfo"><i className="fa fa-envelope-o"></i>info@kwikikarts.ng</a></li>
                            <li><a href="#moreInfo"><i className="fa fa-map-marker"></i> Shop 5, Kuti Hall, University of Ibadan</a></li>
                        </ul>
                        <ul className="header-links pull-right">
                            <li><a href="#moreInfo">&#8358; NGN</a></li>
                            <li><Link to ="/account"><i className="fa fa-user-o"></i> My Account</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopHeader;