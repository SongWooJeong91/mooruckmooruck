import React from 'react';
import PlantList from '../../pages/plant/PlantList';
import SearchWindow from '../SearchWindow';
import NavMenu from '../NavMenu';

const MainLogin = () => {
	return (
		<div className="loginMain__wrap">
			<SearchWindow />
			<PlantList />
			<NavMenu />
		</div>
	);
};

export default MainLogin;
