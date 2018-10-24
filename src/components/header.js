import React, { Component } from 'react';
import TopHeader from './topHeader';
import Logo from './logo';
import SearchBar from './searchBar';
import WishList from './wishList';
import Cart from './cart';
import MenuToggle from './menuToggle';

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

                                    {/* Wishlist */}
                                    <WishList />
                                    {/* /Wishlist */}

                                    {/* Cart */}
                                    <Cart />
                                    {/*   /Cart   */}
                                    {/* Menu Toogle */}
                                    <MenuToggle />
                                    {/* /Menu Toogle */}
                                </div>
                            </div>
                            {/* /ACCOUNT */}
                        </div>
                        {/* row */}
                    </div>
                    {/* container */}
                </div>
                {/* /MAIN HEADER */}
            </div>

        )
    }
}

export default Header;