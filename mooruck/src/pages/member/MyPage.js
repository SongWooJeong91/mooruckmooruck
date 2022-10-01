import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';
import MyPageForm from '../../components/member/MyPageForm';
import MyPageBtnBox from '../../components/member/MyPageBtnBox';
import memberData from '../../data/member.json';
import PasswordCheck from '../../components/member/PasswordCheck';

const MyPage = () => {
	console.log(memberData, typeof memberData);
	const loginId = 1;
	// 패스워드 확인 결과를 위한 함수
	const pwCheck = (pwResult) => {
		console.log('pwCheck', pwResult);
	};
	return (
		<div className="myPage__wrap">
			<PageTitle title="내 정보" />

			{/* 하위 컴포넌트에 함수를 넘겨주고 그 값을 받아서  */}
			{/* if(true) {

			<MyPageForm memberData={memberData} />
			폼을 나타냄!
			} */}
			<PasswordCheck propFunction={pwCheck} />
		</div>
	);
};

export default MyPage;
