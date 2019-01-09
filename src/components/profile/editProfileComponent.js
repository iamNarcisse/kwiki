import React, { Component } from 'react';
import { updateProfile } from '../../services/apiRequest';
class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            address: '',
            email: '',
            phoneNumber: '',
        }
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
                    console.log(axiosRes)
                })
                .catch(err => { console.log(err) })
        }

    }



    render() {

        return (
            <div>
                <p>Account Details </p>
                <div className="card-deck row" >
                    <div className="card bg-success my-5 col-sm-10 col-md-8 col-lg-5">
                        <div className="card-body" >
                            <form onSubmit={this.handleUpdate}>
                                <p className="card-text">FirstName:<input type="text" id="firstname" className="form-control" value={this.statefirstname} onChange={this.handleInputChange} required /> </p>
                                <p className="card-text">LastName: <input type="text" id="lastname" className="form-control" value={this.state.lastname} onChange={this.handleInputChange} required /> </p>
                                <p className="card-text">Email: <input type="email" id="email" className="form-control" value={this.state.email} onChange={this.handleInputChange} required /> </p>
                                <p className="card-text">Address:<input type="text" id="address" className="form-control" value={this.state.address} onChange={this.handleInputChange} required /> </p>
                                <p className="card-text">PhoneNumber: <input type="tel" id="phoneNumber" className="form-control" value={this.state.phoneNumber} onChange={this.handleInputChange} required /></p>

                                <center><button type="submit" onClick={this.handleUpdate} className=" btn" style={{ marginBottom: '5px', backgroundColor: '#ff0066', color: 'white' }}>Update</button></center>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default EditProfile;