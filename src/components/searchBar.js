import React, { Component } from 'react';
import { searchQuery } from '../services/apiRequest';
class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    onChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    onClick = (e) => {
        e.preventDefault();
        console.log(this.state.query)
        searchQuery (this.state.query)
        .then(AxiosRes => {
            console.log(AxiosRes.data.data)
        })
        .catch(err => {
            console.log(err)
        })
    }




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
                        <input onChange={this.onChange} className="input" placeholder="Search here" />
                        <button onClick={this.onClick} className="search-btn">Search</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchBar;