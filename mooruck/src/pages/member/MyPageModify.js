import React from 'react';
import { Link } from 'react-router-dom';
import MyPageBtnBox from '../../components/member/MyPageBtnBox';
import MyPageForm from '../../components/member/MyPageForm';
import PageTitle from '../../components/PageTitle';

const MyPageModify = () => {
	return (
		<div className="myPageUpdate__wrap">
			<PageTitle title="내 정보" />
			<MyPageForm />
			<Link to="/myPage" className="mypage__btn-link">
				<MyPageBtnBox title="저장" />
			</Link>
		</div>
	);
};

export default MyPageModify;
