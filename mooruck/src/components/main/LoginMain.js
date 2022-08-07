import React from 'react';
import PlantList from '../../pages/PlantList';
import SearchWindow from '../contents/SearchWindow';

const LoginMain = () => {
	return (
		<div className="loginMain__wrap">
			<SearchWindow />
			<PlantList />
		</div>
	);
};

export default LoginMain;
