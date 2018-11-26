import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class BreadCrumb extends Component {

    render() {
        return (
            <div id="breadcrumb" className="section">
                <div className="container">
                <div className="row">
					<div className="col-md-12">
						<ul className="breadcrumb-tree">
							<li><Link to="/">Home</Link></li>
                <li><a href="#Categories">All Categories</a></li>
                <li><a href="#Accessories">Shoes</a></li>
                <li className="active">Men Shoes (2 Results)</li>
						</ul >
					</div >
				</div >
            {/* /row */ }
			</div >
            {/* /container */ }
        {/* /BREADCRUMB */ }
		</div >
		
        )
    }
}

export default BreadCrumb;