import React, {Component} from 'react';
import Header from  '../header';
import Navigation from '../navigation';
import CheckOutBreadCrumb from './checkOutBreadCrumb';
import Billing from './billing';
//import OrderDetails from './orderDetails';
import NewsLetter from '../newsletter';
import Footer from '../footer';
class CheckOut extends Component {

    render() {

        return(

            <div>
                <Header />
                <Navigation />
                <CheckOutBreadCrumb />
                <Billing  />
                <NewsLetter />
                <Footer />
            </div>

        )
    }
}

export default CheckOut;