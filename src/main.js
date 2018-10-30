import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/homePage';
import Store from './components/store/store';
import CheckOut from './components/checkOut/checkOut';
import ProductView from './components/productView/productView';
import Pickup from './components/pickup/pickup';
import Account from './components/account/account';
import Profile from './components/profile/profile';
import Product from './components/sample/Product';
import ProductForm from './components/sample/ProductForm';
import ProductList from './components/sample/ProductList';
class Main extends Component {
    constructor() {
        super();
        this.state={}
    }
    componentDidMount () {
        this.getUserToken();
    }
    getUserToken = () => {
       this.setState({
        user_token: localStorage.getItem("user_token")
       });
    }

    render() {
        return (
            <Switch>
                <Route exact path="/store" component={Store} />
                <Route exact path="/checkOut" component={CheckOut} />
                <Route exact path="/productView/:item_id" component={ProductView} />
                <Route exact path="/pickup"   component={Pickup} />
                {!this.state.user_token && ( <Route exact path="/account"   component={Account} />)}
                {this.state.user_token &&(  <Route exact path="/account" component={Profile} />)}
                <Route exact path="/cart" component={Product} />
                <Route exact path="/new" component={ProductForm} />
                <Route exact path ="/productlist" component={ProductList} />
                
                <Route path="/" component={HomePage} />
            </Switch>
        )
    }
}

export default Main;