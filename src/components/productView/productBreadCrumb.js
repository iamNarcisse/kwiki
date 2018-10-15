import React, { Component } from 'react';

class ProductBreadCrumb extends Component {

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
                <li><a>Headphones</a></li>
                <li className="active">Product name goes here</li>
						</ul >
					</div >
				</div >
            
			</div >
		</div >
		
        )
    }
}

export default ProductBreadCrumb;