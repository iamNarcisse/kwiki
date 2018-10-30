import React, { Component } from 'react';
import { getUserDetailsRequest } from '../../services/apiRequest';

class Card extends Component {
    constructor() {
        super();
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        this.getUserDetails();
    }
    getUserDetails = () => {
        getUserDetailsRequest()
            .then(axiosResponse => {
                console.log(axiosResponse);
                if (axiosResponse && axiosResponse.data && axiosResponse.data.data) {
                    this.setState({
                        user: axiosResponse.data.data
                    })

                    //console.log(user);
                }

               // console.log(user);
            })
    }


    render() {
        return (

            <div className="container ">
                <br /><h2>Welcome {this.state.user.firstname}</h2>
                <p>Account Details </p>
                <div >
                    <div className="card-deck" >
                        <div className="card bg-success my-5 col-sm-10 col-md-8 col-lg-5">
                            <div className="card-body" >
                                <p className="card-text">UserName: Kwiki</p>
                                <p className="card-text">Name: {this.state.user.firstname}</p>
                                <p className="card-text">Email: {this.state.user.email}</p>
                                <p className="card-text">Address: University of Ibadan</p>
                                <p className="card-text">Number: +23490776655</p>
                                <center><button type="submit" className=" btn" style={{ marginBottom: '5px', backgroundColor: '#ff0066', color: 'white' }}>Edit</button></center>
                            </div>
                        </div>
                    </div>
                </div></div>
        );

    }
}

export default Card;