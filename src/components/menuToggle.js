import React, { Component } from 'react';

class MenuToggle extends Component {
    render() {
        return (
            <div className="menu-toggle">
                <a href="#more">
                    <i className="fa fa-bars"></i>
                    <span>Menu</span>
                </a>
            </div>
        )
    }
}

export default MenuToggle;