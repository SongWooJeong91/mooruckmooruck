import React from 'react';
import LoginMain from '../components/main/LoginMain';
import LogoutMain from '../components/main/LogoutMain';

const Main = () => {
	return (
		<div className="main__wrap">
			<h1>무럭무럭</h1>
			<LoginMain />
			{/* <LogoutMain /> */}
		</div>
	);
};

export default Main;
