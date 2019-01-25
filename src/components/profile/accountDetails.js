import React, { Component } from 'react';
import ProfileNavBar from './navBar';
import { getUserDetailsRequest } from '../../services/apiRequest';
import EditProfile from './editProfileComponent';
import Footer from '../footer';
class UserDetails extends Component {
        state = {
            users: {}
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
                    {(<EditProfile id={this.state.users._id} />)}
                    <br />
                <Footer />
            </div>
        )
    }
}
export default UserDetails;