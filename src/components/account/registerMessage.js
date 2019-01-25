import React from 'react';
import { Link } from 'react-router-dom';
const RegisterMessage = () => {
    return (
        <div className="alert alert-success" style={{ width: '300px', justifyContent: 'center' }}>
            <strong>
                Registration Successfully
        </strong>
            <p>Thanks for choosing Kwikikarts, we will always serve you better</p>
            <strong><Link to="/account">Login to proceed</Link></strong>
        </div>
    )

}

export default RegisterMessage