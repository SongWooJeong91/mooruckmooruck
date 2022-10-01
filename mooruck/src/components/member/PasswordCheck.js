import React, { useState } from 'react';

const PasswordCheck = (props) => {
	const [password, setPassword] = useState('');

	const onPasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const submitPsResult = (e) => {
		e.preventDefault();
		console.log('체크 값 확인', password);
		// props.propFunction(pwCheckResult);
	};
	return (
		<form className="password__check-form">
			<div>
				<label>비밀번호</label>
				<input type="password" name="password" onChange={onPasswordChange} />
				<button onClick={submitPsResult}>확인</button>
			</div>
		</form>
	);
};

export default PasswordCheck;
