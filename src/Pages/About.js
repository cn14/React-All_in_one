import React from 'react';
import Common from './Common';
import about from '../img/about.png';
const About = () => {
	return (
		<Common
			title="About Nakshatra"
			description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, accusantium?"
			img={about}
			btn_text="Contact Us"
			visit="/contact"
		/>
	);
};

export default About;
