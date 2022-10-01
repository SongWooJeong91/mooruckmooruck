import React from 'react';
import PageTitle from '../../components/PageTitle';
import MainLogout from '../../components/main/MainLogout';
import MainLogin from '../../components/main/MainLogin';

const Main = () => {
	return (
		<div className="main__wrap">
			<PageTitle title="무럭무럭" />
			{/* <MainLogout /> */}
			<MainLogin />
		</div>
	);
};

export default Main;
