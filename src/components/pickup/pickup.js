import React, { Component } from 'react';
import Header from '../header';
import Navigation from '../navigation';
import Footer from '../footer';
import Axios from 'axios';
import AlertMessage from '../alertMessages';

class Pickup extends Component {

    constructor() {
        super();
        this.state = {
            data: [{
                senderfullname: '',
                senderemail: '',
                senderphoneno: '',
                amount: '',
                item: '',
                receiveraddress: '',
                receiveremail: '',
                receiverfullname: '',
                receiverphoneno: '',
                pickupaddress: ''
            }],
            alert: false
        };

    }

    alertMessage = () => {
        this.setState({
            alert : true
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = this.state;
        Axios.post("http://localhost:3000/pickups/add", data).then(
            (results) => {
                console.log(results);
                this.alertMessage();
            }
        );

    }


    render() {
        return (
            <div>
                <Header />
                <Navigation />
                <br />
                <h1 style={{ textAlign: 'center', fontFamily: 'verdana', fontSize: '16px' }}>Pickup and Delivery</h1>
                <h2 style={{ textAlign: 'center', fontFamily: 'verdana', fontSize: '14px' }}>Place your Pickup and Delivery Request</h2> <br />

               <center> {this.state.alert && <AlertMessage />} </center>

                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label >Full Name</label>
                                <input type="text" className="form-control" id="inputEmail4" onChange={this.onChange} value={this.state.data.senderfullname} name="senderfullname" placeholder="First & Last Name" required />
                            </div>
                            <div className="form-group col-md-6">
                                <label >Email</label>
                                <input type="email" className="form-control" name="senderemail" onChange={this.onChange} value={this.state.data.senderemail} id="email" placeholder="Enter your Email Address" />
                            </div>
                        </div>

                        <div className="form-group col-md-6 ">
                            <label >Amount</label>
                            <input type="text" className="form-control" name="amount"  onChange={this.onChange} value={this.state.data.amount} placeholder="Enter Amount" required />
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label >Sender's Phone Number</label>
                                <input type="tel" className="form-control"  onChange={this.onChange} value={this.state.data.senderphoneno} maxLength="11" name="senderphoneno" placeholder="Sender's Phone number" required />
                            </div>
                            <div className="form-group col-md-6">
                                <label >Item</label>
                                <input type="text" className="form-control"  onChange={this.onChange} value={this.state.data.item} name="item" placeholder="Enter your Email Address" />
                            </div>
                        </div>

                        <div className="form-group col-md-6 ">
                            <label >Pickup Address</label>
                            <textarea type="text" className="form-control"  name="pickupaddress" onChange={this.onChange} value={this.state.data.pickupaddress} placeholder="Pickup Address" required />
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label >Receiver's Name</label>
                                <input type="text" className="form-control"  name="receiverfullname" onChange={this.onChange} value={this.state.data.receiverfullname} placeholder="Receiver's Name" required />
                            </div>
                            <div className="form-group col-md-6">
                                <label >Receiver's Phone Number</label>
                                <input type="tel" className="form-control"  name="receiverphoneno" onChange={this.onChange} value={this.state.data.receiverphoneno} placeholder="Receiver's Phone Number" maxLength="11" required />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label >Receiver's Email</label>
                                <input type="email" className="form-control"  name="receiveremail" value={this.state.data.receiveremail} onChange={this.onChange} placeholder="Receiver's Email" />
                            </div>
                            <div className="form-group col-md-6">
                                <label >Receiver's Address</label>
                                <textarea type="text" className="form-control"  onChange={this.onChange} value={this.state.data.receiveraddress} name="receiveraddress" placeholder="Receiver's Address" required />
                            </div>
                        </div>

                        <center><button type="submit" className="btn "  style={{ backgroundColor: '#ff0066', color: '#fff' }} >Send</button></center>

                    </form>
                </div><br />
                <Footer />
            </div >
        )
    }
}

export default Pickup;