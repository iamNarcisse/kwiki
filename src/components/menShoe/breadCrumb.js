import React, { Component } from 'react';

class BreadCrumb extends Component {

    render() {
        return (
            <div id="breadcrumb" className="section">
                <div className="container">
                <div className="row">
					<div className="col-md-12">
						<ul className="breadcrumb-tree">
							<li><a href="#home">Home</a></li>
                <li><a href="#Categories">All Categories</a></li>
                <li><a href="#Accessories">Accessories</a></li>
                <li className="active">Headphones (227,490 Results)</li>
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