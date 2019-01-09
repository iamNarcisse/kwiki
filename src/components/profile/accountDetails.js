import React, { Component } from 'react';
import ProfileNavBar from './navBar';
import { getUserDetailsRequest } from '../../services/apiRequest';
import Footer from '../footer';
import EditProfile from './editProfileComponent';
class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {},
            showEdit: false,
        }
    }

    showEdit = () => {
        this.setState({
            showEdit: true
        })
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
                <div className="container ">
                    {this.state.showEdit && (<EditProfile id={this.state.users._id} />)}
                    {!this.state.showEdit && (
                        <div>
                            <p>Account Details </p>
                            <div className="card-deck row" >
                                <div className="card bg-success my-5 col-sm-10 col-md-8 col-lg-5">
                                    <div className="card-body" >
                                        <p className="card-text">FirstName:{this.state.users.firstname} </p>
                                        <p className="card-text">LastName: {this.state.users.lastname} </p>
                                        <p className="card-text">Email: {this.state.users.email} </p>
                                        <p className="card-text">Address: {this.state.users.address}  </p>
                                        <p className="card-text">Number: {this.state.users.phoneNumber}</p>
                                        <center><button onClick={this.showEdit} className=" btn" style={{ marginBottom: '5px', backgroundColor: '#ff0066', color: 'white' }}>Edit</button></center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>

                <br /><br />
                <Footer />
            </div>
        )
    }
}
export default UserDetails;