import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MemberRegist = () => {
	// 초기값
	const [member, setMember] = useState({
		email: '',
		password: '',
		username: '',
		phone: '',
	});
	const navigate = useNavigate();

	const [checkMessage, setCheckMessage] = useState('');

	// Ref
	const useremail = useRef();
	const userpw = useRef();
	const userphone = useRef();
	const username = useRef();
	const registInfoText = useRef();

	// 최초 컴포넌트 로딩 시 이메일 입력란에 포커스
	useEffect(() => {
		useremail.current.focus();
	}, []);

	const onMemberChange = (e) => {
		setMember({ ...member, [e.target.name]: e.target.value });
	};

	// 이메일 유효성 검사
	const checkEmail = (email) => {
		var regExp =
			/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

		// 형식에 맞는 경우 true 리턴
		let result = regExp.test(email);
		// console.log('이메일 유효성 검사 :: ', result);

		if (!result) {
			setCheckMessage('이메일 형식에 맞지 않습니다.');
			useremail.current.focus();
		} else {
			axios
				.get(`http://localhost:3005/member/search/${member.email}`)
				.then((res) => {
					console.log('백엔드에서 제공된 전체 데이터 구조파악:', res);
					if (res.data.code === '200') {
						console.log('이메일 중복 결과값', res.data.data.result);
						result = res.data.data.result;
						if (!result) {
							setCheckMessage('이미 가입되어 있는 이메일 입니다.');
							useremail.current.focus();
						}
					} else {
						alert('백엔드 호출 에러 발생');
					}
				})
				.catch((err) => {
					console.error(err);
				});
		}
		return result;
	};
	//비밀번호 유효성 검사
	const checkPassword = (password) => {
		//  8 ~ 10자 영문, 숫자 조합
		// var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
		var regExp =
			/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~?!@#$%^&*_-]).{8,}$/;
		// 형식에 맞는 경우 true 리턴
		let result = regExp.test(password);
		// console.log('비밀번호 유효성 검사 :: ', result);
		if (!result) {
			setCheckMessage('비밀번호 형식에 맞지 않습니다.');
			userpw.current.focus();
		}
		return result;
	};

	// 핸드폰번호 유효성 검사
	const checkPhonenumber = (phone) => {
		// 숫자만 입력시
		var regExp = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
		// 형식에 맞는 경우 true 리턴
		let result = regExp.test(phone);
		// console.log('핸드폰번호 유효성 검사 :: ', result);
		if (!result) {
			setCheckMessage('핸드폰번호 형식에 맞지 않습니다.');
			userphone.current.focus();
		} else {
			axios
				.get(`http://localhost:3005/member/search/${member.phone}`)
				.then((res) => {
					console.log('백엔드에서 제공된 전체 데이터 구조파악:', res);
					if (res.data.code === '200') {
						console.log('휴대전화 중복 결과값', res.data.data.result);
						result = res.data.data.result;
						if (!result) {
							setCheckMessage('이미 가입되어 있는 전화번호 입니다.');
							userphone.current.focus();
						}
					} else {
						alert('백엔드 호출 에러 발생');
					}
				})
				.catch((err) => {
					console.error(err);
				});
		}
		return result;
	};

	// 회원가입 버튼 호출 함수
	const onMemberSave = () => {
		if (member.email === '' || member.email === undefined) {
			setCheckMessage('이메일이 입력되지 않았습니다.');
			useremail.current.focus();
			return;
		}

		if (member.password === '' || member.password === undefined) {
			setCheckMessage('비밀번호가 입력되지 않았습니다.');
			userpw.current.focus();
			return;
		}

		if (member.username === '' || member.username === undefined) {
			setCheckMessage('이름이 입력되지 않았습니다.');
			username.current.focus();
			return;
		}

		if (member.phone === '' || member.phone === undefined) {
			setCheckMessage('휴대전화가 입력되지 않았습니다.');
			userphone.current.focus();
			return;
		}

		let emailResult = checkEmail(member.email);
		let passwordResult = checkPassword(member.password);
		let phoneResult = checkPhonenumber(member.phone);
		console.log(
			'저장 시점 함수 결과 확인',
			emailResult,
			passwordResult,
			phoneResult
		);
		// 유효성 검사 결과 모두 true라면
		if (emailResult && passwordResult && phoneResult) {
			setCheckMessage('');
			axios
				.post('http://localhost:3005/member', member)
				.then((res) => {
					console.log('데이터 처리 결과', res.data);
					alert('환영합니다~ 회원가입이 완료되었습니다.');
					navigate('/login');
				})
				.catch((err) => {
					console.error('에러발생', err);
				});
		}
	};
	return (
		<div className="memberRegist__wrap">
			<div className="registUser__box">
				<h1>회원가입</h1>
				<div className="registUserForm__wrap">
					<form action="">
						<div className="regist__info-text" ref={registInfoText}>
							{checkMessage}
						</div>
						<div>
							<label htmlFor="">이메일</label>
							<input
								type="email"
								name="email"
								value={member.email}
								onChange={onMemberChange}
								ref={useremail}
							/>
						</div>
						<div>
							<label htmlFor="">비밀번호</label>
							<input
								type="password"
								placeholder="영문 대소문자, 특수문자, 숫자 포함 8자 이상"
								name="password"
								value={member.password}
								onChange={onMemberChange}
								ref={userpw}
							/>
						</div>
						<div>
							<label htmlFor="">이름</label>
							<input
								type="text"
								name="username"
								value={member.username}
								onChange={onMemberChange}
								ref={username}
							/>
						</div>
						<div>
							<label htmlFor="">휴대전화</label>
							<input
								type="text"
								placeholder="숫자만 입력"
								name="phone"
								value={member.phone}
								onChange={onMemberChange}
								ref={userphone}
							/>
						</div>
					</form>
					<button onClick={onMemberSave}>가입</button>
				</div>
			</div>
		</div>
	);
};

export default MemberRegist;
