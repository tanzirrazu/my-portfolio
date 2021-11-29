import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutMe = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div>
			<div className='my-5 container'>
				<div
					className='my-5'
					data-aos='fade-left'
					data-aos-duration='1500'
					data-aos-easing='ease-in-out'>
					<h1 className='text-decoration-underline fw-bold mb-3 text-center'>
						My-Skills
					</h1>
					<hr />
				</div>
				<div className='row row-cols-1 row-cols-md-3 g-4'>
					<div
						className='col '
						data-aos='fade-right'
						data-aos-duration='1500'
						data-aos-easing='ease-in-out'>
						<div className='card  h-100 shadow-lg p-5 bg-warning'>
							<h2 className='fw-bold text-secondary text-decoration-none mb-4'>
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
								<button className='btn btn-dark rounded-pill mb-3'>REACT-JS</button>{' '}
								<button className='btn btn-dark rounded-pill mb-3'> NODE-JS</button>{' '}
								<button className='btn btn-dark rounded-pill mb-3'> MONGO-DB</button>{' '}
							</h4>
						</div>
					</div>
					<div
						className='col'
						data-aos='fade-up'
						data-aos-duration='1500'
						data-aos-anchor-placement='center-bottom'
						data-aos-easing='ease-in-out'>
						<div className='card h-100 shadow-lg p-5 bg-light'>
							<h2 className='fw-bold text-muted text-decoration-none mb-4'>
								Familiar with
							</h2>
							<h4>
								<button className='btn btn-dark rounded-pill mb-3'>
									REACT-NATIVE{' '}
								</button>{' '}
								<button className='btn btn-dark rounded-pill mb-3'>NEXT-JS </button>{' '}
								<button className='btn btn-dark rounded-pill mb-3'>REDUX </button>{' '}
								<button className='btn btn-dark rounded-pill mb-3'>STRIPE </button>{' '}
								<button className='btn btn-dark rounded-pill mb-3'>
									CLASS-COMPONENT{' '}
								</button>{' '}
							</h4>
						</div>
					</div>
					<div
						className='col'
						data-aos='fade-up'
						data-aos-duration='1500'
						data-aos-anchor-placement='bottom-bottom'
						data-aos-easing='ease-in-out'>
						<div className='card h-100 shadow-lg p-5 bg-danger'>
							<h2 className='fw-bold  text-muted mb-4 '>Tools</h2>
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
				<div
					className='mt-5'
					data-aos='fade-up'
					data-aos-duration='1500'
					data-aos-anchor-placement='top-center'
					data-aos-easing='ease-in-out'>
					<h4 className='text-decoration-underline fw-bold mb-3'>Education</h4>
					<hr />
					<div>
						<h5>B.B.S – Bachelor Business Studies</h5>
						<p>
							Gov’t Shahid Smriti Adarsha College, Nandail, Mymensingh, Bangladesh
						</p>
					</div>
				</div>
				<div
					className='mt-5'
					data-aos='fade-up'
					data-aos-duration='1500'
					data-aos-anchor-placement='center-center'
					data-aos-easing='ease-in-out'>
					<h4 className='text-decoration-underline fw-bold mb-3'>Language</h4>
					<hr />
					<div>
						<h5>
							Bangla (native), English (Basic), Hindi (conversational), Urdu
							(conversational)
						</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
