import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/homePage';
import Store from './components/store/store';
import CheckOut from './components/checkOut/checkOut';
import ProductView from './components/productView/productView';

class Main extends Component {
    render() {
        return (

            <Switch>
                <Route exact path="/store" component={Store} />
                <Route exact path="/checkOut" component={CheckOut} />
                <Route exact path="/productView" component={ProductView} />
                <Route path="/" component={HomePage} />
            </Switch>
        )
    }
}

export default Main;