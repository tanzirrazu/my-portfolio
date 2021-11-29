import React from 'react';

const Footer = () => {
	return (
		<div className='bg-light py-5 text-dark pt-5 '>
			<div>
				<div className='container d-md-flex justify-content-evenly'>
					<div>
						<h4>About</h4>
						<p style={{ width: '400px' }}>
							Hi, i am Tanzir Ahmed Raju MERN stack developer. I have completed a long
							training form Programming-hero Institute. There I have collected lots of
							experience and can make useful & Interesting web development content.
						</p>
					</div>
					<div>
						<h4>Contact</h4>
						<span>Email: tanzirahmmedraju@gmial.com</span>
						<br />
						<span>Phone: 01885484541</span>
						<br />
						<span>Location: Nandail, 2290, Mymensingh, Bangladesh</span>
					</div>
				</div>

				<div className='mt-5'>
					<hr />
					<p className='text-center'>Copyright © Tanzir Ahmed Razu 2021</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
