import React from 'react';
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { DiReact } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
const AboutMe = () => {
	const mongodbIcon = <SiMongodb />;
	const nodejsIcon = <FaNodeJs />;
	const reactIcon = <DiReact />;
	const javascriptIcon = <SiJavascript />;
	const htmlIcon = <AiFillHtml5 />;
	const cssIcon = <DiCss3 />;
	return (
		<div className='bg-dark text-white py-5'>
			<div className='container'>
				<div className='text-center'>
					<h1 className='fw-bold'>
						Hello, I'm <span className='text-info'>R</span>azu Ahmed
					</h1>

					<p className='mt-4 text-white'>
						I am a MERN stack developer. I am comfortable with HTML5, CSS3,
						JAVASCRIPT, DOM-MANIPULATION, REACT-JS, NODE-JS, MONGO-DB. I have
						completed a long training form Programming-hero Institute. There I have
						collected lots of experience and can make useful & Interesting web
						development content.
					</p>
					<div className='d-flex justify-content-center'>
						<h4 className='ms-3 text-primary'>{reactIcon}</h4>
						<h4 className='ms-3 text-warning'>{javascriptIcon}</h4>
						<h4 className='ms-3 text-success'>{nodejsIcon}</h4>
						<h4 className='ms-3 text-success'>{mongodbIcon}</h4>
						<h4 className='ms-3 text-danger'>{htmlIcon}</h4>
						<h4 className='ms-3 text-info'>{cssIcon}</h4>
					</div>
				</div>
				<div className='pt-5'>
					<h4 className='text-decoration-underline fw-bold mb-3'>Education</h4>
					<hr />
					<div>
						<h5>B.B.S – Bachelor Business Studies</h5>
						<p>
							Gov’t Shahid Smriti Adarsha College, Nandail, Mymensingh, Bangladesh
						</p>
					</div>
				</div>

				<div className='mt-5'>
					<h4 className='text-decoration-underline fw-bold mb-3'>Language</h4>
					<hr />
					<div>
						<h5>
							Bangla (native), English (Basic), Hindi (conversational), Urdu
							(conversational)
						</h5>
					</div>
				</div>
				<div className='pt-5'>
					<h4 className='text-decoration-underline fw-bold mb-3'>Key Strength</h4>
					<hr />
					<div>
						<h5>
							Ability to learn new things very quickly finds solution of problems,
							highly trustworthy, capability of working under pressure and strictly
							maintains time.
						</h5>
					</div>
				</div>
				<div className='pt-5'>
					<h4 className='text-decoration-underline fw-bold mb-3'>Hobbies</h4>
					<hr />
					<div>
						<h5>Reading | Cooking | Sports & Exercise | Music</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
