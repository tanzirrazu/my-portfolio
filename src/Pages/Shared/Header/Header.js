import React, { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { BsCloudDownload } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Header = () => {
	const downloadIcon = <BsCloudDownload />;
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div
			className='shadow-lg'
			data-aos='fade-left'
			data-aos-duration='1500'
			data-aos-easing='ease-in-out'>
			<Navbar variant='dark' bg='dark' expand='lg' fixed='top'>
				<Container>
					<Navbar.Brand className='fw-bold text-muted'>
						Tanzir Ahmed <span className='text-info fw-bold'>R</span>aju
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto d-flex align-items-center'>
							<NavLink to='/home' className='text-decoration-none text-white ms-4'>
								Home
							</NavLink>
							<NavLink to='/projects' className='text-decoration-none text-white ms-4'>
								Projects
							</NavLink>
							<a
								href='https://drive.google.com/file/d/1YNFIwGfaepAqySzKoAre4HEjC_i3Mi9S/view?usp=sharing'
								name='resume'
								target='_blank'
								rel='noreferrer'
								download>
								<Button
									variant='dark'
									className='btn btn-outline-info ms-4 rounded-pill'>
									<span className>{downloadIcon} </span>
									Resume
								</Button>
							</a>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
