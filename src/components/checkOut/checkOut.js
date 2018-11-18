import React, {Component} from 'react';
import Header from  '../header';
import CheckOutBreadCrumb from './checkOutBreadCrumb';
import Billing from './billing';
import NewsLetter from '../newsletter';
import Footer from '../footer';
class CheckOut extends Component {

    render() {

        return(

            <div>
                <Header />
                <CheckOutBreadCrumb />
                <Billing  />
                <NewsLetter />
                <Footer />
            </div>

        )
    }
}

export default CheckOut;