import React, { useEffect, useState } from 'react';

import Projects from '../../Projects/Projects';
import Intro from '../../Intro/Intro';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import { WifiLoader } from 'react-awesome-loaders';
import AboutMe from './AboutMe/AboutMe';

const Home = () => {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 4000);
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
					<AboutMe />
					<Projects />
					<Footer />
				</div>
			)}
		</div>
	);
};

export default Home;
