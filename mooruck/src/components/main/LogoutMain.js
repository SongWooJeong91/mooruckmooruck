import React from 'react';

const LogoutMain = () => {
	return (
		<div className="logoutMain__wrap">
			<img
				className="myinfo__img"
				src={process.env.PUBLIC_URL + '/assets/img/relaxation.png'}
				alt="notificationti"
			/>
			<p>
				무럭무럭에 오신것을 환영합니다.
				<br /> 무럭무럭은 식물 일기장입니다.
				<br />
				소중한 반려식물의 성장을 기록해보세요.
			</p>
		</div>
	);
};

export default LogoutMain;
