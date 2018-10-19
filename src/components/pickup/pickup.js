import React, { Component } from 'react';
import Header from '../header';
import Navigation from '../navigation';
import Footer from '../footer';

class Pickup extends Component {
    render() {
        return (
            <div>
                <Header />
                <Navigation />
                <h1 style={{ textAlign: 'center' }}>Pickup and Delivery</h1>
                <h2 style={{ textAlign: 'center' }}>Place your Pickup and Delivery Request</h2> <br />

                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="FullName">Full Name</label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="First & Last Name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="Email">Email</label>
                            <input type="email" className="form-control" id="inputPassword4" placeholder="Enter your Email Address" />
                        </div>
                    </div>

                    <div className="form-group col-md-6 ">
                        <label for="FullName">Amount</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="Enter Amount" />
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="FullName">Sender's Phone Number</label>
                            <input type="tel" className="form-control" id="inputEmail4" placeholder="Sender's Phone number" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="item">Item</label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="Enter your Email Address" />
                        </div>
                    </div>

                    <div className="form-group col-md-6 ">
                        <label for="FullName">Pickup Address</label>
                        <textarea type="text" className="form-control" id="inputEmail4" placeholder="Pickup Address" />
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="FullName">Receiver's Name</label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="Receiver's Name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="item">Receiver's Phone Number</label>
                            <input type="tel" className="form-control" id="inputPassword4" placeholder="Receiver's Phone Number" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="FullName">Receiver's Email</label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="Receiver's Email" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="item">Receiver's Address</label>
                            <textarea type="tel" className="form-control" id="inputPassword4" placeholder="Receiver's Address" />
                        </div>
                    </div>

                    <center><button type="submit" className="btn btn-primary">Send</button></center>
                </form><br />


                <Footer />
            </div>
        )
    }
}

export default Pickup;