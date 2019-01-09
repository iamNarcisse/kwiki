import React, { Component } from 'react';
//import Header from '../header';
import Footer from '../footer';
//import Card from './card';
import ProfileNavBar from './navBar';
import { getUserDetailsRequest } from '../../services/apiRequest';
import ProfileDisplay from './profileDisplay';



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

                <div className="card-details">

                <ProfileDisplay  name={this.state.user.firstname} email={this.state.user.email} lastname={this.state.user.lastname} phone={this.state.user.phoneNumber} address={this.state.user.address}/>

               { /*<Card name={this.state.user.firstname} email={this.state.user.email} lastname={this.state.user.lastname} phone={this.state.user.phoneNumber} address={this.state.user.address} /> */}
                </div>


                
               <Footer />
            </div>

        );
    }
}

export default Profile