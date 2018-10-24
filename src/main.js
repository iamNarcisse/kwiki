import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/homePage';
import Store from './components/store/store';
import CheckOut from './components/checkOut/checkOut';
import ProductView from './components/productView/productView';
import Pickup from './components/pickup/pickup';
import Account from './components/account/account';
import Profile from './components/profile/profile';
class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/store" component={Store} />
                <Route exact path="/checkOut" component={CheckOut} />
                <Route exact path="/productView" component={ProductView} />
                <Route exact path="/pickup"   component={Pickup} />
                <Route exact path="/account"   component={Account} />
                <Route exact path="/profile" component={Profile} />
                <Route path="/" component={HomePage} />
            </Switch>
        )
    }
}

export default Main;