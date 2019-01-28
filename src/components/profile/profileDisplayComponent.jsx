import React from 'react';
import Pic from './avatar.png';
import { Link } from 'react-router-dom';
import { myStyle } from './style';
const ProfileDisplayCard = (props) => {
    return (
        <div className="container">
            <div style={myStyle.card}>

                <img src={Pic} alt="profile" width='200' style={myStyle.pic} />
                <p style={myStyle.title} >Welcome </p>
                <div  >
                <p><i className="fa fa-user icon" style={myStyle.icon}></i> {props.firstname} {props.lastname} </p>
                <p><i className="fa fa-envelope icon" style={myStyle.icon}> </i> {props.email} </p>
                <p><i className="fa fa-phone" aria-hidden="true" style={myStyle.icon}></i> { props.phoneNumber} </p>
                <p><i className="fa fa-map-marker" aria-hidden="true" style={myStyle.icon}></i> {props.address} </p>
                <p><i className="fa fa-calendar-o" style={myStyle.icon}></i> {props.dob} </p></div>
                
                <div style={{ margin: '24px 0' }}>
                    <a href="#hg"><i className="fa fa-facebook"></i></a>
                </div>
                <p><Link to="/userdetails" style={myStyle.link}>Edit Profile</Link></p>
            </div>
        </div>
    )
}

export default ProfileDisplayCard;