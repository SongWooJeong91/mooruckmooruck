import React from 'react';
import PageTitle from '../components/contents/PageTitle';
import LoginMain from '../components/main/LoginMain';
import LogoutMain from '../components/main/LogoutMain';

const Main = () => {
	return (
		<div className="main__wrap">
			<PageTitle title="무럭무럭" />
			<LoginMain />
			{/* <LogoutMain /> */}
		</div>
	);
};

export default Main;
