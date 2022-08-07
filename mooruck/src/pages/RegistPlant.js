import React from 'react';
import PageTitle from '../components/contents/PageTitle';
import RegistForm from '../components/plant/RegistForm';

const RegistPlant = () => {
	return (
		<div className="RegistPlant__wrap">
			{/* <h1>식물 등록</h1> */}
			<PageTitle title="식물 등록" />
			<RegistForm />
		</div>
	);
};

export default RegistPlant;
