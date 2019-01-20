import React from 'react';
const StoreFilter = () => {
	const Label = (text, aug1, aug2) => (
		<label>
			{text}:
				<select className="input-select">
				<option value="0">{aug1}</option>
				<option value="1">{aug2}</option>
			</select>
		</label>

	);

	return (
		<div className="store-filter clearfix">
			<div className="store-sort">
				{Label('Sorted By', 'Popular', 'Position')}
				{Label('Show', 20, 50)}
			</div>
			<ul className="store-grid">
				<li className="active"><i className="fa fa-th"></i></li>
				<li><a href="#name"><i className="fa fa-th-list"></i></a></li>
			</ul>
		</div>
	)
}
export default StoreFilter;