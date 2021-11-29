import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
	return (
		<div className='container' style={{ marginTop: '70px' }}>
			<div className='my-5'>
				<h1 className='text-decoration-underline fw-bold mb-3 text-center '>
					<span className='text-info'></span> My-Projects
				</h1>
				<hr />
			</div>
			<div className='row row-cols-1 row-cols-md-3 g-4  mx-auto'>
				<div className='col'>
					<div className='card shadow-lg'>
						<img
							style={{ width: '406px', height: '350px' }}
							src='https://i.ibb.co/Mp1KG7s/watches-world.png'
							className='text-center'
							alt='watches-world'
						/>
						<div className='ms-3 mt-3'>
							<h5 className='fw-bold'>
								Project: <span className='fw-normal'>Watches World</span>
							</h5>
						</div>
						<div className='card-body d-flex justify-content-between'>
							<a
								href='https://watch-world-9d86f.firebaseapp.com/'
								className='text-decoration-none text-info'>
								<h5 className='fw-bold'>Live-Link</h5>
							</a>
							<a
								href='https://github.com/tanzirrazu/watches-world-client-side'
								className='text-decoration-none text-info'>
								<h5 className='fw-bold'>Client-Link</h5>
							</a>
							<a
								href='https://github.com/tanzirrazu/watches-world-server-side'
								className='text-decoration-none text-info'>
								<h5 className='fw-bold'>Server-Link</h5>
							</a>
						</div>
						<div className='ms-3 pb-3'>
							<Link to='/details'>See more.....</Link>
						</div>
					</div>
				</div>
				<div className='col'>
					<div className='card'>
						<img src='...' className='card-img-top' alt='...' />
						<div className='card-body'>
							<h5 className='card-title'>Card title</h5>
							<p className='card-text'>
								This is a longer card with supporting text below as a natural lead-in to
								additional content. This content is a little bit longer.
							</p>
						</div>
					</div>
				</div>
				<div className='col'>
					<div className='card'>
						<img src='...' className='card-img-top' alt='...' />
						<div className='card-body'>
							<h5 className='card-title'>Card title</h5>
							<p className='card-text'>
								This is a longer card with supporting text below as a natural lead-in to
								additional content.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
