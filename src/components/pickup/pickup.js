import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import Axios from 'axios';
import AlertMessage from '../alertMessages';
import { API_KEY } from '../../services/api_key';
import { sendPickUpAndDelivery } from '../../services/apiRequest';
import {location, location_02} from './locations';
import AutoComplete from '../autoSuggest';

class Pickup extends Component {

    constructor() {
        super();
        this.state = {
            amount: '',
            start: '',
            destination: '',
            senderfullname: '',
            senderemail: '',
            senderphoneno: '',
            item: '',
            receiveremail: '',
            receiverfullname: '',
            receiverphoneno: '',
            
            alert: false,
            showSend: false
        };

    }

    disabled = () => {
        let text = 'disabled';
        return text
    }

    handleStart = (value) => {
        this.setState ({
            start : value
        })
    }

    handleDestination = (value) => {
        this.setState({
            destination : value
        })
    }

    onChangeState = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    onSubmit = (e) => {
        let start = this.state.start;
        let destination = this.state.destination;
        e.preventDefault()
        const proxyUrl = "https://cors-anywhere.herokuapp.com/" //Don't forget to create your own proxy domain on heroku
        const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${start}&destinations=${destination}&key=` + API_KEY + `&region=ng`;
        Axios.get(proxyUrl + url)
            .then(axiosResonse => {
                let data = axiosResonse.data.rows;
                for (let i = 0; i < data.length; i++) {

                    let dataValue = data[i].elements;

                    for (let i = 0; i < dataValue.length; i++) {

                        let distance = dataValue[i].distance;
                    
                        let convertedToNumber = parseInt(distance.text, 10);
                        
                        let price = (convertedToNumber * 2 * 40);
                        //console.log(price)
                        if( price === null || price === 0 || price ===undefined ) {
                               // checkUI(start, destination)
                               for (let i = 0; i < location.length; i++) {
                                for (let l = 0; l < location_02.length; l++) {
                                    if (start === location[i].name && destination === location_02[l].name) {
                                        this.setState({
                                            amount : 300
                                        }, ()=> {this.setState({
                                            showSend : true
                                        })})
                                    }
                        
                                }
                            }
                              
                        } else {
                            this.setState({
                                amount : price
                            }, ()=> {this.setState({
                                showSend : true
                            })})
                        }

                        
                    }
                }

            })
            .catch(err => { console.log(err) })
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



    handleReceiveAddress = (e) => {
        this.setState({
            receiveraddress: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = this.state;
        sendPickUpAndDelivery(data)
            .then(
                (results) => {
                    console.log(results)
                    this.alertMessage();
                }
            )
            .catch(err => {
                console.log('Pickup not send ' + err)
            })

    }


    render() {
        return (
            <div>
                <Header />
                <br />
                <h1 style={{ textAlign: 'center', fontFamily: 'verdana', fontSize: '16px' }}>Pickup and Delivery</h1>
                <h2 style={{ textAlign: 'center', fontFamily: 'verdana', fontSize: '14px' }}>Place your Pickup and Delivery Request</h2> <br />

                <center> {this.state.alert && <AlertMessage />} </center>

                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label >Full Name</label>
                                <input type="text" className="form-control" id="inputEmail4" onChange={this.onChange} value={this.state.senderfullname} name="senderfullname" placeholder="First & Last Name" required />
                            </div>
                            <div className="form-group col-md-6">
                                <label >Email</label>
                                <input type="email" className="form-control" name="senderemail" onChange={this.onChange} value={this.state.senderemail} id="email" placeholder="Enter your Email Address" />
                            </div>
                        </div>

                        
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label >Sender's Phone Number</label>
                                <input type="tel" className="form-control" onChange={this.onChange} value={this.state.senderphoneno} maxLength="11" name="senderphoneno" placeholder="Sender's Phone number" required />
                            </div>
                            <div className="form-group col-md-6">
                                <label >Item</label>
                                <input type="text" className="form-control" onChange={this.onChange} value={this.state.item} name="item" placeholder="Item" />
                            </div>
                        </div>

                        <div className="form-group col-md-6">
                            <label>PickUp Address:</label>
                       <AutoComplete work={this.handleStart} placeholder="Enter pickup address eg. Kuti Hall, UI" />

                            {/* <input type="text" className="form-control" name="start" value={this.state.start} onChange={this.onChangeState} placeholder="Enter pickup address eg. Awo Hall, UI" />*/}
                           
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label >Receiver's Name</label>
                                <input type="text" className="form-control" name="receiverfullname" onChange={this.onChange} value={this.state.receiverfullname} placeholder="Receiver's Name" required />
                            </div>
                            <div className="form-group col-md-6">
                                <label >Receiver's Phone Number</label>
                                <input type="tel" className="form-control" name="receiverphoneno" onChange={this.onChange} value={this.state.receiverphoneno} placeholder="Receiver's Phone Number" maxLength="11" required />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label >Receiver's Email</label>
                                <input type="email" className="form-control" name="receiveremail" value={this.state.receiveremail} onChange={this.onChange} placeholder="Receiver's Email" />
                            </div>


                            <div className="form-group col-md-6">
                                <label>Receivers address:</label>

                       <AutoComplete work={this.handleDestination} placeholder="Enter delivery address eg. Awo Hall, UI" />

                                {/* <input type="text" className="form-control" name="destination" value={this.state.destination} onChange={this.onChangeState} placeholder="Enter delivery address eg. Kuti Hall, UI" /> */} 

                            </div>
                        </div>

                        <div className="form-group col-md-6 ">
                            <label >Amount</label>
                            <input type="text" className="form-control" name="amount" value={this.state.amount} placeholder="Amount" disabled />
                        </div>

                        <div >
                            <p><input style={{ position: 'relative', left: '20px', marginRight: '25px' }} type="checkbox" onChange={this.onSubmit} /> Kindly Click to get amount for delivery</p>
                        </div>
                        <center>
                        <input type="reset" value="Cancel" onClick={ (e)=> {e.preventDefault(); window.location.reload()}} style={{  marginRight: '25px' }} className="btn btn-danger" />
                             {
                            this.state.showSend === true && (<button type="submit" className="btn " style={{ backgroundColor: '#ff0066', color: '#fff' }} >Send</button>)} 
                            {this.state.showSend === false && (<button type="submit" className="btn " style={{ backgroundColor: '#ff0066', color: '#fff' }} disabled >Send</button>)}  </center>
                    </form>

                </div><br />
                <Footer />
            </div >
        )
    }
}

export default Pickup;