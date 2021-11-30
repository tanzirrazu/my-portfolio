import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blog from './Pages/Blog/Blog';
import Projects from './Pages/Projects/Projects';
import WatchesProject from './Pages/Projects/WatchesProject/WatchesProject';
import TravelWorld from './Pages/Projects/TravelWorld/TravelWorld';
import TechShop from './Pages/Projects/Tech-Shop/TechShop';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/home' element={<Home />} />
					<Route path='/' element={<Home />} />
					<Route path='/aboutMe' element={<AboutMe />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/watchesProject' element={<WatchesProject />} />
					<Route path='/travelWorld' element={<TravelWorld />} />
					<Route path='/techShop' element={<TechShop />} />
					<Route path='/blog' element={<Blog />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
