import React, { Component } from 'react';
import TopHeader from './topHeader';
import Logo from './logo';
import SearchBar from './searchBar';
import CheckOut from './checkoutComponent';
import Cart from './cart';
import MenuToggle from './menuToggle';
import Navigation from './navigation';
import { Link } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div>
                <TopHeader />
                <div id="header">
                    <div className="container">
                        <div className="row">
                            <Logo />
                            <SearchBar />
                            <div className="col-md-3 clearfix">
                                <div className="header-ctn">
                                     <CheckOut />
                                    <Cart /> 
                                    <MenuToggle />
                                    {
                                         JSON.parse(localStorage.getItem('user_details')) && (
                                            <div className="wishy" >
                                            < Link to="/wishlist">
                                                <i className="fa fa-heart-o" aria-hidden="true" ></i>
                                                <span>Wishlist</span>
                                                {/*  <div className="qty"></div> */}
                                            </Link>
                                        </div>
                                        )
                                    }
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Navigation />
            </div>
        )
    }
}

export default Header;