import React, { useEffect, useState } from 'react';

import Projects from '../../Projects/Projects';
import Intro from '../../Intro/Intro';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import { WifiLoader } from 'react-awesome-loaders';
import Skills from './Skills/Skills';
import ContactForm from './ContactForm/ContactForm';

const Home = () => {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<div>
			{loading ? (
				<div className='position-absolute top-50 start-50 translate-middle'>
					{' '}
					<WifiLoader
						background={'transparent'}
						desktopSize={'150px'}
						mobileSize={'150px'}
						backColor='#E8F2FC'
						frontColor='#4645F6'
					/>
				</div>
			) : (
				<div>
					<Header />
					<Intro />
					<Skills />
					<Projects />
					<ContactForm />
					<Footer />
				</div>
			)}
		</div>
	);
};

export default Home;
