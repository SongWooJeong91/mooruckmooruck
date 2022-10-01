import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyPageBtnBox from './MyPageBtnBox';

const MyPageForm = ({ memberData }) => {
	// const member = memberData[0];
	const loginId = 1;
	const [member, setMember] = useState({
		email: '',
		password: '',
		username: '',
		phone: '',
		mphoto: '',
	});

	const onMyInfoChange = (e) => {
		setMember({ ...member, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		axios
			.get(`http://localhost:3005/member/${loginId}`)
			.then((res) => {
				console.log('백엔드에서 넘어온 회원정보 : ', res);
				if (res.data.code === '200') {
					setMember(res.data.data);
				} else {
					alert('백엔드 호출 에러 (로그인 회원 정보)');
				}
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	const onMyPageSave = (e) => {
		e.preventDefault();
	};

	return (
		<div className="myPageForm__wrap">
			<form action="" className="myPage__contents">
				<div className="myinfo__category align-ct">
					<img
						className="myinfo__img"
						src={process.env.PUBLIC_URL + '/assets/img/plant-img01.png'}
						alt="notificationti"
					/>
				</div>
				<div className="myinfo__category">
					<span>이름</span>
					<input
						type="text"
						name="username"
						value={member.username}
						onChange={onMyInfoChange}
					/>
				</div>
				<div className="myinfo__category">
					<span>이메일</span>
					<input type="email" name="email" value={member.email} readOnly />
				</div>
				<div className="myinfo__category">
					<span>비밀번호</span>
					<input type="password" name="password" />
				</div>
				<div className="myinfo__category">
					<span>휴대전화</span>
					<input type="text" name="phone" value={member.phone} />
				</div>
				<button onClick={onMyPageSave}>수정</button>
			</form>
		</div>
	);
};

export default MyPageForm;
