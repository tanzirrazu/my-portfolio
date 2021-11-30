import React from 'react';
import contctImage from '../../../../Images/contact.jpg';
const ContactForm = () => {
	return (
		<div className='bg-dark text-white'>
			<div className='container py-5'>
				<h1 className='text-decoration-underline fw-bold my-5 text-center '>
					<span className='text-info'></span> Contact Me
					<hr />
				</h1>

				<div className='row container row-cols-1 row-cols-md-2 g-4 align-items-center mx-auto'>
					<div className='col'>
						<img
							src={contctImage}
							className='img-fluid'
							alt='contact-img'
							style={{ width: '400px', borderRadius: '20px' }}
						/>
					</div>
					<div className='col'>
						<form
							target='_blank'
							action='https://formsubmit.co/tanzirahmmedraju@gmail.com'
							method='POST'>
							<div className='form-group'>
								<div className='form-row'>
									<div className='col'>
										<input
											type='text'
											name='name'
											className='form-control mb-3'
											placeholder='Full Name'
											required
										/>
									</div>
									<div className='col'>
										<input
											type='email'
											name='email'
											className='form-control mb-3'
											placeholder='Email Address'
											required
										/>
									</div>
								</div>
							</div>
							<div className='form-group'>
								<textarea
									placeholder='Your Message'
									className='form-control mb-3'
									name='message'
									rows='6'
									required></textarea>
							</div>
							<button type='submit' className='btn btn-lg btn-light btn-block'>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
