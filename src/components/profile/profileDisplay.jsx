import React from 'react';
import Pic from './avatar.png'
const ProfileDisplay = (props) => {

    return (
        <div className="container">
            <div className="profile-display">
                <div className="profile-card">

                    <img src={Pic} alt="avatar" />

                    <div style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'verdana', textAlign: 'center' }}>
                        <p style={{ paddingTop: '10px' }}>{props.name} {props.lastname}  </p>
                        <p> {props.address} </p>
                    </div>

                    <hr />

                    <div style={{ fontFamily: 'Verdana', fontWeight: 'bold', fontSize: '16px' }}>
                        <p>Mobile Number : {props.phone}</p>
                        <p>Email : {props.email} </p>
                        <p>Password : *****</p>
                    </div>



                </div>
            </div>
        </div>
    )

}

export default ProfileDisplay