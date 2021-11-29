import React from 'react';

const AboutMe = () => {
	return (
		<div>
			<div className='my-5 container'>
				<h1 className='text-decoration-underline fw-bold mb-3 text-center'>
					My-Skills
				</h1>
				<hr />
				<div className='row row-cols-1 row-cols-md-3 g-4'>
					<div className='col'>
						<div className='card  h-100 shadow-lg p-5'>
							<h2 className='fw-bold text-muted text-decoration-underline mb-4'>
								Comfortable with
							</h2>
							<h4>
								<button className='btn btn-dark rounded-pill mb-3'>HTML5 </button>{' '}
								<button className='btn btn-dark rounded-pill mb-3'>CSS3</button>{' '}
								<button className='btn btn-dark rounded-pill mb-3'>BOOTSTRAP4/5</button>{' '}
								<button className='btn btn-dark rounded-pill mb-3'>TAILWIND-CSS</button>{' '}
								<button className='btn btn-dark rounded-pill mb-3'>METARIAL-UI</button>{' '}
								<button className='btn btn-dark rounded-pill mb-3'>FIREBASE</button>{' '}
								<button className='btn btn-dark rounded-pill mb-3'>JAVASCRIPT</button>{' '}
								<button className='btn btn-dark rounded-pill mb-3'>
									DOM-MANIPULATION
								</button>{' '}
								<button className='btn btn-dark rounded-pill '>REACT-JS</button>{' '}
								<button className='btn btn-dark rounded-pill '> NODE-JS</button>{' '}
								<button className='btn btn-dark rounded-pill '> MONGO-DB</button>{' '}
							</h4>
						</div>
					</div>
					<div className='col'>
						<div className='card h-100 shadow-lg p-5'>
							<h2 className='fw-bold text-muted text-decoration-underline mb-4'>
								Familiar with
							</h2>
							<h4>
								<button className='btn btn-dark rounded-pill mb-3'>
									REACT-NATIVE{' '}
								</button>{' '}
								<button className='btn btn-dark rounded-pill mb-3'>NEXT-JS </button>{' '}
								<button className='btn btn-dark rounded-pill mb-3'>REACT-REDUX </button>{' '}
								<button className='btn btn-dark rounded-pill mb-3'>
									PAYMENT-GATEWAY-STRIPE{' '}
								</button>{' '}
								<button className='btn btn-dark rounded-pill mb-3'>
									REACT-CLASS-COMPONENT{' '}
								</button>{' '}
							</h4>
						</div>
					</div>
					<div className='col'>
						<div className='card h-100 shadow-lg p-5'>
							<h2 className='fw-bold text-decoration-underline text-muted mb-4 '>
								Tools
							</h2>
							<h4>
								<button className='btn btn-dark rounded-pill mb-3'>VS Code </button>{' '}
								<button className='btn btn-dark rounded-pill mb-3'>FIREBASE </button>{' '}
								<button className='btn btn-dark rounded-pill mb-3'>GITHUB </button>{' '}
								<button className='btn btn-dark rounded-pill mb-3'>NETLIFY </button>{' '}
								<button className='btn btn-dark rounded-pill mb-3'>HEROKU </button>{' '}
								<button className='btn btn-dark rounded-pill mb-3'>PHOTOSHOP </button>{' '}
								<button className='btn btn-dark rounded-pill mb-3'>FIGMA </button>{' '}
							</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
