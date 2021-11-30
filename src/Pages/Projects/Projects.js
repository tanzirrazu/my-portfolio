import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import techShopImage from '../../Images/tech-shop.png';
import travelWorld from '../../Images/travel world.png';
import watchedWorld from '../../Images/watches world.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Projects = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className='bg-dark text-white pb-5'>
			<div className='container ' style={{ paddingTop: '70px' }}>
				<div className='my-5'>
					<h1 className='text-decoration-underline fw-bold mb-3 text-center '>
						<span className='text-info'></span> My-Projects
					</h1>
					<hr />
				</div>
				<div className='row row-cols-1 row-cols-md-3 g-4  mx-auto'>
					<div
						className='col'
						data-aos='zoom-in'
						data-aos-duration='2000'
						data-aos-easing='ease-in-out'>
						<div className='card shadow-lg'>
							<img
								style={{
									width: '300px',
									height: '350px',
									margin: '0 auto',
									borderRadius: '40px',
								}}
								src={watchedWorld}
								className='text-center p-5'
								alt='watches-world'
							/>
							<div className='ms-3 mt-3 text-dark'>
								<h5 className='fw-bold '>
									Project: <span className='fw-normal'>Watches World</span>
								</h5>
								<p>
									This is an all kinds of watch-related website. I used React, Firebase,
									MongoDB to develop the website.
								</p>
							</div>

							<div className='ms-3 pb-3'>
								<Link
									to='/watchesProject'
									className='btn btn-outline-dark rounded-pill'>
									See more.....
								</Link>
							</div>
						</div>
					</div>
					<div
						className='col'
						data-aos='zoom-in-up'
						data-aos-duration='2000'
						data-aos-easing='ease-in-out'>
						<div className='card shadow-lg'>
							<img
								style={{
									width: '300px',
									height: '350px',
									margin: '0 auto',
									borderRadius: '40px',
								}}
								src={travelWorld}
								className='text-center p-5'
								alt='watches-world'
							/>
							<div className='ms-3 mt-3 text-dark'>
								<h5 className='fw-bold '>
									Project: <span className='fw-normal'>Travel World</span>
								</h5>
								<p>
									This is a Travel or Tour Based Website. I used React, Firebase, MongoDB
									to develop the website.
								</p>
							</div>

							<div className='ms-3 pb-3'>
								<Link to='/travelWorld' className='btn btn-outline-dark rounded-pill'>
									See more.....
								</Link>
							</div>
						</div>
					</div>
					<div
						className='col'
						data-aos='zoom-in-down'
						data-aos-duration='2000'
						data-aos-easing='ease-in-out'>
						<div className='card shadow-lg'>
							<img
								style={{
									width: '300px',
									height: '350px',
									margin: '0 auto',
									borderRadius: '40px',
								}}
								src={techShopImage}
								className='text-center p-5'
								alt='tech-shop'
							/>
							<div className='ms-3 mt-3 text-dark'>
								<h5 className='fw-bold '>
									Project: <span className='fw-normal'>Tech Shop</span>
								</h5>
								<p>
									This is a tech kind of product-related website. I used React, Firebase,
									MongoDB to develop the website.
								</p>
							</div>

							<div className='ms-3 pb-3'>
								<Link to='/techShop' className='btn btn-outline-dark rounded-pill'>
									See more.....
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
