import React from 'react';

const Projects = () => {
	return (
		<div className='container' style={{ marginTop: '70px' }}>
			<div className='my-5'>
				<h1 className='text-decoration-underline fw-bold mb-3 text-center'>
					My-Projects
				</h1>
				<hr />
			</div>
			<div className='row row-cols-1 row-cols-md-2 g-4  mx-auto'>
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
			</div>
		</div>
	);
};

export default Projects;
