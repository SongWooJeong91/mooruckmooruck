import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DiaryEmpty from './components/plantDiary/DiaryEmpty';
import CopyrightInfo from './pages/CopyrightInfo';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Login from './pages/Login';
import Main from './pages/Main';
import PlantDiaryList from './pages/PlantDiaryList';
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
				<Route path="/registUser" element={<RegistUser />} />
				<Route path="/registPlant" element={<RegistPlant />} />
				<Route path="/copyrightInfo" element={<CopyrightInfo />} />
				<Route path="/plantDiaryList" element={<PlantDiaryList />} />
				<Route path="/diaryEmpty" element={<DiaryEmpty />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
