import React from 'react';
import { NavLink } from 'react-router-dom';

import './Common.css';
const Common = ({ title, description, btn_text, visit, img }) => {
	return (
		<div className="page">
			<div className="page__content">
				<h1>{title}</h1>
				<h4>{description}</h4>
				<NavLink className=" btn btn-outline-success" to={visit}>
					{btn_text}
				</NavLink>
			</div>
			<div className="page__picture">
				<img src={img} className="picture" alt="page_picture" />
			</div>
		</div>
	);
};

export default Common;
