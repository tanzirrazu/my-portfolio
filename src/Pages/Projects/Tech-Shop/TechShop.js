import React from 'react';
import techShopImage1 from '../../../Images/techShop/tech1.png';
import techShopImage2 from '../../../Images/techShop/tech2.png';
import techShopImage3 from '../../../Images/techShop/tech3.png';
import { BsGithub } from 'react-icons/bs';
import { SiNetlify } from 'react-icons/si';
const TechShop = () => {
	const githubIcon = <BsGithub />;
	const netlifyIcon = <SiNetlify />;
	return (
		<div className='bg-dark text-white'>
			<h1 className='text-decoration-underline fw-bold pt-5 text-center '>
				<span className='text-info'>Project Name:</span> Tech-Shop
				<hr />
			</h1>
			<div className='container py-5'>
				<div className='d-md-flex justify-content-between '>
					<div className='mt-3'>
						<img
							src={techShopImage1}
							style={{ borderRadius: '20px' }}
							width='400px'
							height='400px'
							alt='image1'
						/>
					</div>
					<div className='mt-3'>
						<img
							src={techShopImage2}
							style={{ borderRadius: '20px' }}
							width='400px'
							height='400px'
							alt='image2'
						/>
					</div>
					<div className='mt-3'>
						<img
							src={techShopImage3}
							style={{ borderRadius: '20px' }}
							width='400px'
							height='400px'
							alt='image3'
						/>
					</div>
				</div>
				<div className='mt-3 text-white'>
					<h4 className='text-muted'>
						This is a tech kind of product-related website. I used React, Firebase,
						MongoDB to develop the website.
					</h4>
					<div>
						<ul>
							<li>
								On this website there are two-panel users and an admin. When users
								logged in User will see the user route and the admin see the admin
								routes.
							</li>
							<li>
								This is a tech kind of product-related website. I used React, Firebase,
								MongoDB to develop the website.
							</li>
							<li>On this website there are more than 70 products. </li>
							<li>In this project I use a stripe payment gateway. </li>
							<li>Admin Route different and user route different.</li>
						</ul>
					</div>
				</div>
				<div className='card-body d-flex justify-content-between'>
					<a
						href='https://tech-shop-36432.firebaseapp.com/'
						className='text-decoration-none text-info'>
						<h5 className='fw-bold'>{netlifyIcon} Live-Link</h5>
					</a>
					<a
						href='https://github.com/tanzirrazu/Tech-shop-client-side'
						className='text-decoration-none text-info'>
						<h5 className='fw-bold'>{githubIcon} Client-Link</h5>
					</a>
					<a
						href='https://github.com/tanzirrazu/Tech-shop-server-side'
						className='text-decoration-none text-info'>
						<h5 className='fw-bold'>{githubIcon} Server-Link</h5>
					</a>
				</div>
			</div>
		</div>
	);
};

export default TechShop;
