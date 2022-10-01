import axios from 'axios';
import React, { useEffect, useState } from 'react';

import PlantItem from '../../components/plant/PlantItem';

const PlantList = () => {
	const [plant, setPlant] = useState([]);
	let memberNum = 1;
	//백엔드에서 식물 목록 조회
	useEffect(() => {
		axios
			.get(`http://localhost:3005/plant/${memberNum}`)
			.then((res) => {
				console.log('백엔드에서 넘어온 식물 목록 : ', res);
				if (res.data.code === '200') {
					setPlant(res.data.data);
				} else {
					alert('백엔드 호출 에러 (식물 목록)');
				}
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);
	return (
		<div className="plantList__wrap">
			{plant.map((plantItem, idx) => (
				<PlantItem plant={plantItem} key={idx} />
			))}
		</div>
	);
};

export default PlantList;
