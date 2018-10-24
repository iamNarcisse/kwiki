import React, { Component } from 'react';

class MenuToggle extends Component {
    render() {
        return (
            <div className="menu-toggle">
                <a href="#mo" >
                    <i className="fa fa-bars"></i>
                    <span>Menu</span>
                </a>
            </div>
        )
    }
}

export default MenuToggle;