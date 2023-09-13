import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sketch from './pages/Sketch';
import Neighbor from './pages/Neighbor';
import Game from './pages/Game';
import Joy from './pages/Joy';
import Healing from './pages/Healing';
import About from './pages/About';
import Present from './component/main/Present';
import Location from './pages/Location';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import DongariRe from './pages/DongariRe';
import { useEffect } from 'react';
import axios from 'axios';
import { getCookie, setCookie } from './utils/cookie';

function App() {
	useEffect(() => {
		const cookie = getCookie('visitor');
		if (!cookie) {
			const currentDate = new Date();
			const expiresDate = new Date(
				currentDate.getFullYear(),
				currentDate.getMonth(),
				currentDate.getDate() + 1, // 다음 날로 설정
				0, // 시간을 00시로 설정
				0, // 분을 00분으로 설정
				0, // 초를 00초로 설정
			);
			// 시차 보정
			setCookie('visitor', 'visitor', { path: './', expires: expiresDate, secure: true });
			callAPI();
		}
	}, []);

	const callAPI = () => {
		axios.get('https://api.sku-sku.com/visitors/sketchcounts/')
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.error('API Error: ', error);
			})
	}
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/sketch' element={<Sketch />} />
					<Route path='/dongari' element={<DongariRe />} />
					<Route path='/neighbor' element={<Neighbor />} />
					<Route path='/joy' element={<Joy />} />
					<Route path='/game' element={<Game />} />
					<Route path='/healing' element={<Healing />} />
					<Route path='/about' element={<About />} />
					<Route path='/location' element={<Location />} />
					<Route path='/present' element={<Present />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;