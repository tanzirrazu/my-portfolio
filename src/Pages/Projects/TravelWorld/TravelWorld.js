import React from 'react';
import travelWorldImage1 from '../../../Images/travelWorld/travel1.png';
import travelWorldImage2 from '../../../Images/travelWorld/travel2.png';
import travelWorldImage3 from '../../../Images/travelWorld/travel3.png';
import { BsGithub } from 'react-icons/bs';
import { SiNetlify } from 'react-icons/si';
const TravelWorld = () => {
	const githubIcon = <BsGithub />;
	const netlifyIcon = <SiNetlify />;
	return (
		<div className='bg-dark text-white'>
			<h1 className='text-decoration-underline fw-bold pt-5 text-center '>
				<span className='text-info'>Project Name:</span> Travel-World
				<hr />
			</h1>
			<div className='container py-5'>
				<div className='d-md-flex justify-content-between '>
					<div className='mt-3'>
						<img
							src={travelWorldImage1}
							style={{ borderRadius: '20px' }}
							width='400px'
							height='400px'
							alt='image1'
						/>
					</div>
					<div className='mt-3'>
						<img
							src={travelWorldImage2}
							style={{ borderRadius: '20px' }}
							width='400px'
							height='400px'
							alt='image2'
						/>
					</div>
					<div className='mt-3'>
						<img
							src={travelWorldImage3}
							style={{ borderRadius: '20px' }}
							width='400px'
							height='400px'
							alt='image3'
						/>
					</div>
				</div>
				<div className='mt-3 text-white'>
					<h4 className='text-muted'>
						This is a Travel or Tour Based Website. I used React, Firebase, MongoDB to
						develop the website.
					</h4>
					<div>
						<ul>
							<li>
								On this website there are two-panel users and an admin. When users
								logged in User will see the user route and the admin see the admin
								routes.
							</li>
							<li>In this project I use a stripe payment gateway.</li>
							<li>Without login, user can't see product details.</li>
							<li>An admin can make another admin.</li>
							<li>Admin Route different and user route different.</li>
						</ul>
					</div>
				</div>
				<div className='card-body d-flex justify-content-between'>
					<a
						href='https://world-travel-2f872.web.app/'
						className='text-decoration-none text-info'>
						<h5 className='fw-bold'>{netlifyIcon} Live-Link</h5>
					</a>
					<a
						href='https://github.com/tanzirrazu/travel-world-client-side'
						className='text-decoration-none text-info'>
						<h5 className='fw-bold'>{githubIcon} Client-Link</h5>
					</a>
					<a
						href='https://github.com/tanzirrazu/travel-world-server-side'
						className='text-decoration-none text-info'>
						<h5 className='fw-bold'>{githubIcon} Server-Link</h5>
					</a>
				</div>
			</div>
		</div>
	);
};

export default TravelWorld;
