import React from 'react';
import Header from '../header';
import Footer from '../footer';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
    const name = JSON.parse(localStorage.getItem('user_details'));
    return (
        <div>
            <Header />
            <br />
            <br />
            <div className="container">
                <div className="alert alert-success " >
                    <h4 style={{ textAlign: 'center' }}> Dear, { name && name.firstname} </h4>
                    <div style={{ textAlign: 'center' }}>Order Placed Successfully</div><br />
                    <div style={{ textAlign: 'center' }}><em >Thanks for choosing Kwikikarts, we will always serve you better!</em></div>
                </div>

                <Link to="/" style={{ textAlign: 'center' }} ><h2 style={{fontFamily : 'verdana'}}>Back to Homepage</h2></Link>
                <div>

                </div>
            </div>
            <br />
            <br />
            <Footer />
        </div>
    )
}
export default OrderSuccess;