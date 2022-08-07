import React from 'react';

import PlantItem from '../components/plant/PlantItem';

const PlantList = () => {
	return (
		<div className="plantList__wrap">
			<PlantItem />
			<PlantItem />
			<PlantItem />
		</div>
	);
};

export default PlantList;
