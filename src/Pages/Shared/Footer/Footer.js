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
		<div className='bg-dark py-3 text-white mt-5'>
			<div>
				<p className='text-center'>Copyright © Tanzir Ahmed Razu 2021</p>
			</div>
		</div>
	);
};

export default Footer;
