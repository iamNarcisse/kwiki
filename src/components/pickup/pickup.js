import React, { Component } from 'react';
import Header from '../header';
import Navigation from '../navigation';
import Footer from '../footer';
import Axios from 'axios';
import AlertMessage from '../alertMessages';

const PickUpAddressArray = ['Agbowo', 'Bodija', 'Mokola', 'Ajibode', 'Sango', 'UI'];
const deliveryAddressArray = ['Agbowo', 'Bodija', 'Mokola', 'Ajibode', 'Sango', 'UI'];

class Pickup extends Component {

    constructor() {
        super();
        this.state = {
            pickuparray: PickUpAddressArray,
            deliveryaddress: deliveryAddressArray,
            pickupaddress: '',
            receiveraddress: '',
            amount: '',
            data: [{
                senderfullname: '',
                senderemail: '',
                senderphoneno: '',
                item: '',
                receiveremail: '',
                receiverfullname: '',
                receiverphoneno: '',
            }],
            alert: false
        };

    }

    handleAmount = () => {
        const pickupaddress = this.state.pickupaddress;
        const receiveraddress = this.state.receiveraddress
        if (pickupaddress === 'Bodija' && receiveraddress === 'Sango') {
            this.setState({
                amount: 500
            })

        } else if (pickupaddress === 'Agbowo' && receiveraddress === 'UI') {
            this.setState({
                amount: 300
            })

        }else if(pickupaddress === 'Bodija' && receiveraddress === 'Mokola') {
            this.setState({
                amount: 1000
            })
        }
    }

    alertMessage = () => {
        this.setState({
            alert: true
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }

    handlePickAddress = (e) => {
        this.setState({
            pickupaddress: e.target.value
        })
    }

    onAmount = (e) => {
        this.setState({
            amount: e.target.value
        })
    }

    handleReceiveAddress = (e) => {
        this.setState({
            receiveraddress: e.target.value
        })
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
                            <input type="text" className="form-control" name="amount" onChange={this.onAmount} value={this.state.amount} placeholder="Amount" disabled />
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label >Sender's Phone Number</label>
                                <input type="tel" className="form-control" onChange={this.onChange} value={this.state.data.senderphoneno} maxLength="11" name="senderphoneno" placeholder="Sender's Phone number" required />
                            </div>
                            <div className="form-group col-md-6">
                                <label >Item</label>
                                <input type="text" className="form-control" onChange={this.onChange} value={this.state.data.item} name="item" placeholder="Enter your Email Address" />
                            </div>
                        </div>

                        <div className="form-group col-md-6">
                            <label>PickUp Address:</label>
                            <select onChange={this.handlePickAddress} className="form-control"  >
                                {this.state.pickuparray.map((pickuparray, index) => {
                                    return (
                                        <option key={index} value={pickuparray}>{pickuparray}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label >Receiver's Name</label>
                                <input type="text" className="form-control" name="receiverfullname" onChange={this.onChange} value={this.state.data.receiverfullname} placeholder="Receiver's Name" required />
                            </div>
                            <div className="form-group col-md-6">
                                <label >Receiver's Phone Number</label>
                                <input type="tel" className="form-control" name="receiverphoneno" onChange={this.onChange} value={this.state.data.receiverphoneno} placeholder="Receiver's Phone Number" maxLength="11" required />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label >Receiver's Email</label>
                                <input type="email" className="form-control" name="receiveremail" value={this.state.data.receiveremail} onChange={this.onChange} placeholder="Receiver's Email" />
                            </div>


                            <div className="form-group col-md-6">
                                <label>Receivers address:</label>
                                <select onChange={this.handleReceiveAddress} className="form-control">
                                    {this.state.deliveryaddress.map((deliveraddress, index) => {
                                        return (
                                            <option key={index} value={deliveraddress}>{deliveraddress}</option>

                                        )
                                    })}


                                </select>
                            </div> 
                        </div>

                                     

                        <div >
                               
                               <p><input style={{position : 'relative', left: '20px', marginRight: '25px'}} type="checkbox" onChange={this.handleAmount}  /> Kindly Click to get amount for Delivery</p>
                        </div>
                        <center><button type="submit" className="btn " style={{ backgroundColor: '#ff0066', color: '#fff' }} >Send</button></center>

                    </form>

                </div><br />
                <Footer />
            </div >
        )
    }
}

export default Pickup;