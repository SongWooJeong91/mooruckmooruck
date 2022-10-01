import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
	const [login, setLogin] = useState({
		memail: '',
		mpassword: '',
	});
	const onLoginChange = (e) => {
		setLogin({ ...login, [e.target.name]: e.target.value });
	};
	// 엔터 치면 로그인 호출
	const onLoginKeyPress = (e) => {
		if (e.key === 'Enter') {
			onLogin();
		}
	};

	const navigate = useNavigate();

	const onLogin = () => {
		window.confirm('로그인 되었습니다.');
		navigate('/');
	};
	return (
		<div className="login__form-wrap">
			<form action="">
				<input
					type="text"
					placeholder="아이디"
					name="memail"
					onChange={onLoginChange}
					value={login.memail}
				/>
				<input
					type="password"
					placeholder="비밀번호"
					name="mpassword"
					onChange={onLoginChange}
					onKeyPress={onLoginKeyPress}
					value={login.mpassword}
				/>
			</form>
			<button onClick={onLogin}>로그인</button>
		</div>
	);
};

export default LoginForm;
