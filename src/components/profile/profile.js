import React, { Component } from 'react';
import ProfileNavBar from './navBar';
import { getUserDetailsRequest } from '../../services/apiRequest';
import ProfileDisplayCard from './profileDisplayComponent';

class Profile extends Component {
    state = {
        user: {}
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

                <div >
                    <ProfileDisplayCard {...user} />

                </div>

            </div>

        );
    }
}

export default Profile