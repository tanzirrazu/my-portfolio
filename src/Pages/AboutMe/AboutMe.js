import React from 'react';
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { DiReact } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import Typical from 'react-typical';
import { Card, Col, Row } from 'react-bootstrap';
import { AiFillFacebook } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const AboutMe = () => {
	const mongodbIcon = <SiMongodb />;
	const nodejsIcon = <FaNodeJs />;
	const reactIcon = <DiReact />;
	const javascriptIcon = <SiJavascript />;
	const htmlIcon = <AiFillHtml5 />;
	const cssIcon = <DiCss3 />;
	const facebookIcon = <AiFillFacebook />;
	const linkedInIcon = <BsLinkedin />;
	const twitterIcon = <AiFillTwitterSquare />;
	const instagramIcon = <FaInstagramSquare />;
	const githubIcon = <BsGithub />;

	return (
		<div
			className='bg-dark lg:vh-100 text-white'
			style={{ paddingTop: '100px', paddingBottom: '60px' }}>
			<Row xs={1} md={2} className='g-4 px-5 align-items-center'>
				<Col>
					<Card className='bg-dark'>
						<div>
							<h1 className='fw-bold'>Hello, I'm Razu Ahmed</h1>
							<h4>
								I'm a{' '}
								<Typical
									loop={Infinity}
									wrapper='b'
									steps={[
										'React Developer',
										1000,
										'Javascript Developer',
										1000,
										'MERN Developer',
										1000,
									]}></Typical>
							</h4>
							<p className='mt-4 text-muted'>
								I am a MERN stack developer. I am comfortable with HTML5, CSS3,
								JAVASCRIPT, DOM-MANIPULATION, REACT-JS, NODE-JS, MONGO-DB. I have
								completed a long training form Programming-hero Institute. There I have
								collected lots of experience and can make useful & Interesting web
								development content.
							</p>
							<div className='d-flex'>
								<h4 className='ms-3 text-primary'>{reactIcon}</h4>
								<h4 className='ms-3 text-warning'>{javascriptIcon}</h4>
								<h4 className='ms-3 text-success'>{nodejsIcon}</h4>
								<h4 className='ms-3 text-success'>{mongodbIcon}</h4>
								<h4 className='ms-3 text-danger'>{htmlIcon}</h4>
								<h4 className='ms-3 text-info'>{cssIcon}</h4>
							</div>
						</div>
					</Card>
				</Col>
				<Col>
					<div className='bg-dark '>
						<div className='d-flex align-items-center justify-content-center '>
							<div className='me-3'>
								<a href='https://web.facebook.com/tanjilraju72/' target='_blank'>
									<h2 className='ms-4 text-secondary'>{facebookIcon}</h2>
								</a>

								<a href='https://twitter.com/tanzir_razu' target='_blank'>
									<h2 className='ms-4 text-secondary'>{twitterIcon}</h2>
								</a>
								<a href='https://www.linkedin.com/in/tanzir-raju/' target='_blank'>
									<h2 className='ms-4 text-secondary'>{linkedInIcon}</h2>
								</a>
								<a href='https://github.com/tanzirrazu' target='_blank'>
									<h2 className='ms-4 text-secondary'>{githubIcon}</h2>
								</a>
								<a href='https://www.instagram.com/tanzir.razu/' target='_blank'>
									{' '}
									<h2 className='ms-4 text-secondary'>{instagramIcon}</h2>
								</a>
							</div>
							<div>
								<img
									style={{
										width: '280px',
										height: '300px',
										borderRadius: '30px',
									}}
									src='https://i.ibb.co/Y7YFV1f/myimg.jpg'
									className='img-fluid'
									alt='my-image'
								/>
							</div>
						</div>
					</div>
				</Col>
				<div>
					<a
						href='https://docs.google.com/forms/d/e/1FAIpQLSdFs8oxCn_rGHuABL8__EmA5FWV01aPTDczmeI0V6xN0sdC0Q/viewform?usp=pp_url'
						target='_blank'>
						{' '}
						<button className='btn btn-outline-light text-start'>Contact Me</button>
					</a>
				</div>
			</Row>
		</div>
	);
};

export default AboutMe;
