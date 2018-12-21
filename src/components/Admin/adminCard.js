import React from 'react';

export const AdminCard = (props) => {

    return(
        <div className="col-sm-4 col-md-4 col-lg-4">
        <div className={`card text-white bg-${props.color} mb-3` }style={{ maxWidth: '18rem' }}>
            <div className="card-header">Header</div>
            <div className="card-body">
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
    )

}