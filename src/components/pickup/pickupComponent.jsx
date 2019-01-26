import React, { Component } from 'react';
import { myStyle } from './style';
import Header from '../header';

class PickupComponent extends Component {

    render() {

        return (
            <div>
                <Header />
                <div className="container">
                    <div style={myStyle.card}>
                        <form action="">
                        <div style={myStyle.myDiv}  >
                            <input style={myStyle.input} type="text" placeholder="Full name" />
                        </div>
                        <div style={myStyle.myDiv}>
                            <input style={myStyle.input} type="text" placeholder="Email" />
                        </div>

                        <div style={myStyle.myDiv}>
                            <input style={myStyle.input} type="text" placeholder="Phone number" />
                        </div>
                        <div style={myStyle.myDiv} >
                            <input style={myStyle.input} type="text" placeholder="Pick up address" />
                        </div>
                        <div  style={myStyle.myDiv}>
                            <input style={myStyle.input} type="text" placeholder="Delivery address" />
                        </div>

                        <div style={myStyle.myDiv} >
                            <input style={myStyle.input} type="text" placeholder="Receiver's  name" />
                        </div>
                        <div  style={myStyle.myDiv}>
                            <input style={myStyle.input} type="text" placeholder="Reciever's address" />
                        </div >

                        <div style={myStyle.myDiv} >
                            <input style={myStyle.input} type="text" placeholder="Receiver's phone number" />
                        </div>

                        <div style={myStyle.myDiv} >
                            <input style={myStyle.input} type="text" placeholder="Item " />
                        </div>
                        <div style={myStyle.myDiv} >
                            <input style={myStyle.input} type="text" placeholder="Amount" />
                        </div>

                        <div className="cont"  >
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </div>

                        </form>
                    </div>

                </div>
            </div>
        )
    }
}

export default PickupComponent;
