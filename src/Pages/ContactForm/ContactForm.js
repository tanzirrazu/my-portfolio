import React from 'react';

const ContactForm = () => {
	return (
		<div style={{ marginTop: '100px' }}>
			<form className='container'>
				<div className='row mb-4'>
					<div className='col'>
						<div className='form-outline'>
							<input type='text' placeholder='First Name' className='form-control' />
						</div>
					</div>
					<div className='col'>
						<div className='form-outline'>
							<input type='text' placeholder='Last Name' className='form-control' />
						</div>
					</div>
				</div>
				<div className='form-outline mb-4'>
					<input type='email' placeholder='Your Email' className='form-control' />
				</div>
				<div className='form-outline mb-4'>
					<input type='text' placeholder='Subject' className='form-control' />
				</div>
				<div className='form-outline mb-4'>
					<textarea
						type='password'
						placeholder='Your message'
						className='form-control'
						rows='6'
					/>
				</div>

				<button type='submit' className='btn btn-primary btn-block mb-4'>
					Send
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
