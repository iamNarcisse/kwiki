import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="header-search">
                    <form>
                        <select className="input-select">
                            <option value="0">All Categories</option>
                            <option value="1">Food</option>
                            <option value="1">Shoes</option>
                            <option value="1">Sandals</option>
                            <option value="1">Cakes</option>
                            <option value="1">Clothes</option>
                            <option value="1">Accessories</option>
                        </select>
                        <input className="input" placeholder="Search here" />
                        <button className="search-btn">Search</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchBar;