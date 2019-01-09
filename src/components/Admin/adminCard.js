import React from 'react';
import { Link } from 'react-router-dom';
export const AdminCard = (props) => {

    return (
        <div className="col-sm-4 col-md-6 col-lg-6 ">
            <div className={`card text-white bg-${props.color} mb-3`} style={{ maxWidth: '18rem', textAlign: 'center', borderRadius: '5px', height: '120px' }}>
                <div className="card-header" >{props.header}</div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    {props.no && (<p className="card-text">{props.no}</p>)}
                    {props.orderNo && (<p className="card-text">{props.orderNo}</p>)}
                    {props.see && (<Link to="/customer_orders"><p>View Results</p></Link>)}
                </div>
            </div>
        </div>
    )

}