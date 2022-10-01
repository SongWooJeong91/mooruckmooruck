import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Header from './components/header/Header';
import Main from './pages/main/Main';
import DiaryList from './pages/diary/DiaryList';
import DiaryRegist from './pages/diary/DiaryRegist';
import Login from './pages/member/Login';
import MemberRegist from './pages/member/MemberRegist';
import MyPageModify from './pages/member/MyPageModify';
import MyPage from './pages/member/MyPage';
import PlantRegist from './pages/plant/PlantRegist';
import MyPlant from './pages/plant/MyPlant';
import PlantDetail from './pages/plant/PlantDetail';
import CopyrightInfo from './pages/CopyrightInfo';
import Footer from './components/Footer';
const App = () => {
	// axios.defaults.baseURL = 'http://localhost:3005';
	return (
		<div>
			<Header />
			{/* <Main /> */}
			<Routes>
				{/* main */}
				<Route path={process.env.PUBLIC_URL + '/'} element={<Main />} />
				{/* diary */}
				<Route
					path={process.env.PUBLIC_URL + '/diaryList'}
					element={<DiaryList />}
				/>
				<Route
					path={process.env.PUBLIC_URL + '/diaryRegist'}
					element={<DiaryRegist />}
				/>
				{/* member */}
				<Route path={process.env.PUBLIC_URL + '/login'} element={<Login />} />
				<Route
					path={process.env.PUBLIC_URL + '/memberRegist'}
					element={<MemberRegist />}
				/>
				<Route
					path={process.env.PUBLIC_URL + '/myPageModify'}
					element={<MyPageModify />}
				/>
				<Route path={process.env.PUBLIC_URL + '/myPage'} element={<MyPage />} />
				{/* plant */}
				<Route
					path={process.env.PUBLIC_URL + '/plantRegist'}
					element={<PlantRegist />}
				/>
				<Route
					path={process.env.PUBLIC_URL + '/plantDetail'}
					element={<PlantDetail />}
				/>
				<Route
					path={process.env.PUBLIC_URL + '/myPlant'}
					element={<MyPlant />}
				/>

				<Route
					path={process.env.PUBLIC_URL + '/copyrightInfo'}
					element={<CopyrightInfo />}
				/>
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
