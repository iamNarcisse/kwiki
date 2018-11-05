import React, { Component } from 'react';
class Card extends Component {
    render() {
        return (
            <div className="container ">
                <br /><h2>Welcome {this.props.name}</h2>
                <p>Account Details </p>
                <div >
                    <div className="card-deck" >
                        <div className="card bg-success my-5 col-sm-10 col-md-8 col-lg-5">
                            <div className="card-body" >
                                <p className="card-text">FirstName: {this.props.name}</p>
                                <p className="card-text">LastName: {this.props.lastname}</p>
                                <p className="card-text">Email: {this.props.email}</p>
                                <p className="card-text">Address: {this.props.email}</p>
                                <p className="card-text">Number: {this.props.phone}</p>
                            </div>
                        </div>
                    </div>
                </div></div>
        );

    }
}

export default Card;