import React, { Component } from 'react';
import Footer from '../footer';
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
        const { user } = this.state;
        return (
            <div>
               <ProfileNavBar />

                <div className="card-details">

                <ProfileDisplay  {...user} />

                </div>


                
               <Footer />
            </div>

        );
    }
}

export default Profile