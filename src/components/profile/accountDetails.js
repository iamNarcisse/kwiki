import React, { Component } from 'react';
import ProfileNavBar from './navBar';
import { getUserDetailsRequest } from '../../services/apiRequest';
import Footer from '../footer';

class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {}
        }
    }

    componentDidMount() {
        this.getUserDetails()
    }
    getUserDetails = () => {
        getUserDetailsRequest()
            .then(axiosRes => {
                console.log(axiosRes)
                if (axiosRes && axiosRes.data && axiosRes.data.data) {
                    this.setState({
                        users: axiosRes.data.data
                    })
                }
            }).catch(err => {
                console.log(err)
            })
    }

    render() {

        return (
            <div>
                <ProfileNavBar />
                <div  className="container ">
                    <p>Account Details </p>
                                <div  className="card-deck row" >
                                    <div className="card bg-success my-5 col-sm-10 col-md-8 col-lg-5">
                                        <div className="card-body" >
                                            <p className="card-text">FirstName: {this.state.users.firstname}</p>
                                            <p className="card-text">LastName: {this.state.users.lastname} </p>
                                            <p className="card-text">Email: {this.state.users.email}</p>
                                            <p className="card-text">Address: {this.state.users.email} </p>
                                            <p className="card-text">Number: {this.state.users.phoneNumber} </p>
                                            <center><button type="submit" className=" btn" style={{ marginBottom: '5px', backgroundColor: '#ff0066', color: 'white' }}>Edit</button></center>
                                        </div>
                                    </div>
                     </div>
                </div><br /><br />
                <Footer/>
            </div>
        )
    }
}
export default UserDetails;