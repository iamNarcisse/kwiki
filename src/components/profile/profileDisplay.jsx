import React from 'react';
import Pic from './avatar.png';
const myStyles = {
    first: { fontSize: '24px', fontWeight: 'bold', fontFamily: 'verdana', textAlign: 'center' },
    second: { fontFamily: 'Verdana', fontWeight: 'bold', fontSize: '16px' }
}
const ProfileDisplay = (props) => {
    return (
        <div className="container">
            <div className="profile-display">
                <div className="profile-card">
                    <img src={Pic} alt="avatar" />
                    <div style={myStyles.first}>
                        <p style={{ paddingTop: '10px' }}>{props.name} {props.lastname}  </p>
                        <p> {props.address} </p>
                    </div>
                    <hr />
                    <div style={myStyles.second}>
                        <p>Mobile Number : {props.phoneNumber}</p>
                        <p>Email : {props.email} </p>
                        <p>Password : *****</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProfileDisplay