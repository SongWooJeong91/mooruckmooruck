import React from 'react';
import { Link } from 'react-router-dom';

const LogoutState = () => {
	return (
		<div className="LogoutState__wrap">
			<Link to="/login">
				<button>로그인</button>
			</Link>
			<Link to="/regist">
				<button>회원가입</button>
			</Link>
		</div>
	);
};

export default LogoutState;
