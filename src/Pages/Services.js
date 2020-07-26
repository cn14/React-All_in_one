import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Service from './Service';
const Services = () => {
	const [services, setServices] = useState([]);

	const fetchData = async () => {
		const res = await axios.get(
			'https://www.breakingbadapi.com/api/characters?name='
		);
		console.log(res.data);
		setServices(res.data);
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div className="row">
			{services.map((service) => (
				<Service key={service.char_id} service={service} />
			))}
		</div>
	);
};

export default Services;
