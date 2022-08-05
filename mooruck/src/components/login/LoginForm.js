import React from 'react';

const LoginForm = () => {
	return (
		<div className="login__form-wrap">
			<form action="">
				<input type="text" placeholder="아이디" />
				<input type="password" placeholder="비밀번호" />
			</form>
			<button>로그인</button>
		</div>
	);
};

export default LoginForm;
