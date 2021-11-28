import React from 'react';
import { MdPersonSearch } from 'react-icons/md';
import { AiFillFacebook } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
	const findIcon = <MdPersonSearch />;
	const facebookIcon = <AiFillFacebook />;
	const linkedInIcon = <BsLinkedin />;
	const twitterIcon = <AiFillTwitterSquare />;
	const instagramIcon = <FaInstagramSquare />;
	const githubIcon = <BsGithub />;
	return (
		<div className='bg-dark py-5 text-white my-5'>
			<div>
				<div>
					<h4 className='text-center'>
						Find Me <span className='fs-3'>{findIcon}</span>{' '}
					</h4>
					<div className='d-flex justify-content-center text-white'>
						<a href='' target='_blank'>
							<h4 className='ms-4'>{facebookIcon}</h4>
						</a>

						<a href='' target='_blank'>
							<h4 className='ms-4'>{twitterIcon}</h4>
						</a>
						<a href='' target='_blank'>
							<h4 className='ms-4'>{linkedInIcon}</h4>
						</a>
						<a href='' target='_blank'>
							<h4 className='ms-4'>{githubIcon}</h4>
						</a>
						<a href='' target='_blank'>
							{' '}
							<h4 className='ms-4'>{instagramIcon}</h4>
						</a>
					</div>
				</div>
				<hr />
				<p className='text-center'>Copyright © Tanzir Ahmed Razu Portfolio 2021</p>
				<hr />
			</div>
		</div>
	);
};

export default Footer;
