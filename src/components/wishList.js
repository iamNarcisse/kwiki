import React, { Component } from 'react';

class WishList extends Component {

    render() {
        return (
            <div>
                <a href="#wishlist">
                    <i className="fa fa-heart-o"></i>
                    <span>Your Wishlist</span>
                    <div className="qty">2</div>
                </a>
            </div>
        )
    }
}

export default WishList;