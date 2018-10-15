import React, {Component} from 'react';

class CheckOutBreadCrumb extends Component {

    render() {
        return(
            <div id="breadcrumb" className="section">
			
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h3 className="breadcrumb-header">Checkout</h3>
						<ul className="breadcrumb-tree">
							<li><a href="#Home">Home</a></li>
							<li className="active">Checkout</li>
						</ul>
					</div>
				</div>
				
			</div>
		</div>
        );
    }
}

export default CheckOutBreadCrumb;