import React, { useEffect, useState } from 'react';
import AboutMe from '../../AboutMe/AboutMe';
// import ContactForm from '../../ContactForm/ContactForm';
import Projects from '../../Projects/Projects';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import { WifiLoader } from 'react-awesome-loaders';

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
					<AboutMe />
					<Projects />
					{/* <ContactForm /> */}
					<Footer />
				</div>
			)}
		</div>
	);
};

export default Home;
