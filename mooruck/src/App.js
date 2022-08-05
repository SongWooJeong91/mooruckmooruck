import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Login from './pages/Login';
import Main from './pages/Main';
import RegistPlant from './pages/RegistPlant';
import RegistUser from './pages/RegistUser';

const App = () => {
	return (
		<div>
			<Header />
			{/* <Main /> */}
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Login />} />
				<Route path="/regist" element={<RegistUser />} />
				<Route path="/registPlant" element={<RegistPlant />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
