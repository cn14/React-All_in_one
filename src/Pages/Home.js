import React from 'react';
import Common from './Common';
import welcome from '../img/welcome.png';
const Home = () => {
	return (
		<Common
			title="Welcome to Nakshatra"
			description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, accusantium?"
			img={welcome}
			btn_text="Services"
			visit="/services"
		/>
	);
};

export default Home;
