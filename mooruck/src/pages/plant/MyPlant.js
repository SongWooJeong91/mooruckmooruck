import React from 'react';
import NavMenu from '../../components/NavMenu';
import PageTitle from '../../components/PageTitle';
import SearchWindow from '../../components/SearchWindow';
import PlantList from './PlantList';

const MyPlant = () => {
	return (
		<div className="myPlant__wrap">
			<PageTitle title="내 반려식물" />
			<SearchWindow />
			<PlantList />
			<NavMenu />
		</div>
	);
};

export default MyPlant;
