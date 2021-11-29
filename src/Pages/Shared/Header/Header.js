import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { BsCloudDownload } from 'react-icons/bs';

const Header = () => {
	const downloadIcon = <BsCloudDownload />;
	return (
		<div className='shadow-lg'>
			<Navbar variant='dark' bg='dark' expand='lg' fixed='top'>
				<Container>
					<Navbar.Brand href='#home'>Tanzir Ahmed Raju</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto d-flex align-items-center'>
							<NavLink to='/home' className='text-decoration-none text-white ms-4'>
								Home
							</NavLink>
							<NavLink to='/projects' className='text-decoration-none text-white ms-4'>
								Projects
							</NavLink>
							<Button
								href='https://drive.google.com/file/d/1YNFIwGfaepAqySzKoAre4HEjC_i3Mi9S/view?usp=sharing'
								name='resume'
								target='_blank'
								download
								variant='dark'
								className='btn btn-outline-light ms-4 rounded-pill'>
								<span className>{downloadIcon} </span>
								Resume
							</Button>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
