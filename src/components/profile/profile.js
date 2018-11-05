import React, { Component } from 'react';
//import Header from '../header';
import avatar from './avatar.png';
import Footer from '../footer';
import Card from './card';
import ProfileNavBar from './navBar';
import { getUserDetailsRequest } from '../../services/apiRequest';


const myStyle = {
    width: '70px',
    borderRadius: '200px',
}


class Profile extends Component {

    constructor(props) {
        super(props);
        this.state={
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
            <div>
               <ProfileNavBar />
                <div className="avatar">
               <center> <img src={avatar}  style={myStyle} alt="ava"/></center>
                </div>

                <div className="card-details">

                <Card name={this.state.user.firstname} email={this.state.user.email} lastname={this.state.user.lastname} phone={this.state.user.phoneNumber}/>
                </div>

                
               <Footer />
            </div>

        );
    }
}

export default Profile