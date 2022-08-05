import React from 'react';
import RegistUserForm from '../components/registUser/RegistUserForm';

const RegistUser = () => {
	return (
		<div className="registUser__wrap">
			<div className="registUser__box">
				<h1>회원가입</h1>
				<RegistUserForm />
			</div>
		</div>
	);
};

export default RegistUser;
