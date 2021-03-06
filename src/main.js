import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './components/homePage';
import Store from './components/store/store';
import CheckOut from './components/checkOut/checkOut';
import ProductView from './components/productView/productView';
import Pickup from './components/pickup/pickup';
import Pay from './components/paystack/pay';
import Account from './components/account/account';
import Profile from './components/profile/profile';
import Cakes from './components/cakes/cakes';
import Food from './components/food/food';
import MenShoe from './components/menShoe/menShoe';
import FemaleShoe from './components/femaleShoe/femaleShoe';
import MenCloth from './components/menCloth/menCloth';
import WomenCloth from './components/womenCloth/womenCloth';
import WomenAccessories from './components/womenAccessories/womenAccessories';
import MenAccessories from './components/menAccessories/menAccessories';
import UserDetails from './components/profile/accountDetails';
import Admin from './components/Admin/admin';
import Orders from './components/Admin/orders/order';
import LoginAdmin from './components/Admin/login/login';
import OrderHistory from './components/profile/orderHistory';
import AboutUs from './components/aboutUs/aboutUsComponent';
import SavedItemPage from './components/savedItemPage';
import Terms from './components/terms/terms';
import Privacy from './components/terms/privacy';
import RelatedView from './components/productView/relatedview';
import OrderSuccess from './components/checkOut/orderSuccess';
import SignupComponent from './components/account/signUpComponent';
import OrdersAndReturns from './components/terms/ordersAndReturns';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => ( 
        JSON.parse(localStorage.getItem('user_details')) ? <Component {...props} /> : <Redirect to={{
            pathname : "/account",
            state : { from : props.location }
        }}/>
    )} />
)
class Main extends Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
        this.getUserToken();
        this.getAdminToken();
        this.getOrderIsTrue();
        this.getOnDelivery();
    }

    getOnDelivery = () => {
        this.setState({
            on_delivery: localStorage.getItem('on_delivery')
        })
    }

    getAdminToken = () => {
        this.setState({
            admin_token: localStorage.getItem("admin_token")
        })
    }

    getUserToken = () => {
        this.setState({
            user_token: localStorage.getItem("user_token")
        });
    }

    //This gets from localstorage whether order_purchased is set to true
    getOrderIsTrue = () => {
        this.setState({
            order_made: localStorage.getItem('order_placed')
        })
    }

    render() {
        return (
            <Switch >
                <Route exact path="/aboutus" component={AboutUs} />
                {this.state.order_made && (<Route exact path="/checkout" component={Pay} />)}
                <Route exact path="/store" component={Store} />
                {/*!this.state.order_made && (<Route exact path="/pay" component={CheckOut} />)*/}
                {!this.state.order_made &&  (<PrivateRoute exact path="/checkout" component={CheckOut} />)}
                <Route exact path="/productview/:item_id" component={ProductView} />
                <Route exact path="/relatedview/:item_id" component={RelatedView} />
                <Route exact path="/pickup" component={Pickup} />
                <Route exact path="/food" component={Food} />
                <Route exact path="/menshoe" component={MenShoe} />
                <Route exact path="/femaleshoe" component={FemaleShoe} />
                <Route exact path="/mencloth" component={MenCloth} />
                <Route exact path="/femalecloth" component={WomenCloth} />
                <Route exact path="/womenaccessories" component={WomenAccessories} />
                <Route exact path="/menaccessories" component={MenAccessories} />
                <Route exact path="/cakes" component={Cakes} />
                <Route exact path="/wishlist" component={SavedItemPage} />
                <Route exact path="/terms" component={Terms} />
                <Route exact path="/privacy" component={Privacy} />
                <Route exact path="/register" component={SignupComponent} />
                <Route exact path="/returns" component={OrdersAndReturns} />
                {this.state.on_delivery && (<Route exact path="/success" component={OrderSuccess} />)}
                {!this.state.admin_token && (<Route exact path="/admin_login" component={LoginAdmin} />)}
                {this.state.admin_token && (<Route exact path="/admin_login" component={Admin} />)}
                {!this.state.user_token && (<Route exact path="/account" component={Account} />)}
                {this.state.user_token && (<Route exact path="/account" component={Profile} />)}
                {this.state.user_token && (<Route exact path="/userDetails" component={UserDetails} />)}
                {this.state.user_token && (<Route exact path="/orderHistory" component={OrderHistory} />)}
                {this.state.admin_token && (<Route exact path="/customer_orders" component={Orders} />)}
                <Route path="/" component={HomePage} />
            </Switch>
        )
    }
}

export default Main;