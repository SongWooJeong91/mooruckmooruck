import React from 'react';
import PlantList from '../../pages/PlantList';
import SearchWindow from '../contents/SearchWindow';
import NavMenu from './NavMenu';

const LoginMain = () => {
	return (
		<div className="loginMain__wrap">
			<SearchWindow />
			<PlantList />
			<NavMenu />
		</div>
	);
};

export default LoginMain;
