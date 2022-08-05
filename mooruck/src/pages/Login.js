import React from 'react';
import LoginForm from '../components/login/LoginForm';

const Login = () => {
	return (
		<div className="login__wrap">
			<div className="login__box">
				<h1>로그인</h1>
				<LoginForm></LoginForm>
				<p>비밀번호를 잊어버리셨나요?</p>
			</div>
		</div>
	);
};

export default Login;
