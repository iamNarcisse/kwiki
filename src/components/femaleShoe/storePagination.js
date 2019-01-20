import React from 'react';

const StorePagination = () => {
	return (

		<div className="store-filter clearfix">
			<span className="store-qty">Showing 20-100 products</span>
			<ul className="store-pagination">
				<li className="active">1</li>
				<li><a href="#Two">2</a></li>
				<li><a href="#Three">3</a></li>
				<li><a href="#Four">4</a></li>
				<li><a href="#Five"><i className="fa fa-angle-right"></i></a></li>
			</ul>
		</div>
	)
}


export default StorePagination;