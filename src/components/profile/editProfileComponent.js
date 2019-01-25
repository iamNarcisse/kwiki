import React, { Component } from 'react';
import { updateProfile } from '../../services/apiRequest';
import { myStyle } from './style';
class EditProfile extends Component {
    state = {
        firstname: '',
        lastname: '',
        address: '',
        email: '',
        phoneNumber: '',
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleUpdate = () => {
        if (this.state.firstname === '' || this.state.lastname === '' || this.state.email === '' || this.state.address === '' || this.state.phoneNumber === '') {

            alert('All fields must me filled')

        } else {

            updateProfile(
                this.props.id,
                this.state.firstname,
                this.state.lastname,
                this.state.email,
                this.state.address,
                this.state.phoneNumber
            )
                .then(axiosRes => {
                    // console.log(axiosRes)
                })
                .catch(err => { console.log(err) })
        }

    }



    render() {
        return (
            <div>
                <div className='container' >
                    <div style={myStyle.card}>
                        <p>Account Details </p>
                        <div >
                            <form onSubmit={this.handleUpdate}>
                                <p><input type="text" id="firstname" style={myStyle.input} value={this.statefirstname} onChange={this.handleInputChange} required placeholder="Firstname" /> </p>
                                <p ><input type="text" id="lastname" style={myStyle.input} value={this.state.lastname} onChange={this.handleInputChange} required placeholder="Lastname" /> </p>
                                <p><input type="email" id="email" style={myStyle.input} value={this.state.email} onChange={this.handleInputChange} required placeholder="Email" /> </p>
                                <p><input type="text" id="address" style={myStyle.input} value={this.state.address} onChange={this.handleInputChange} required placeholder="Address" /> </p>
                                <p ><input type="tel" id="phoneNumber" style={myStyle.input} value={this.state.phoneNumber} onChange={this.handleInputChange} required placeholder="Phone number" /></p>

                                <center><button type="submit" onClick={this.handleUpdate} style={myStyle.link}>Update</button></center>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default EditProfile;