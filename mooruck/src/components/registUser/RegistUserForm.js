import React from 'react';

const RegistUserForm = () => {
	return (
		<div className="registUserForm__wrap">
			<form action="">
				<div>
					<label htmlFor="">이메일</label>
					<input type="email" placeholder="이메일" />
				</div>
				<div>
					<label htmlFor="">비밀번호</label>
					<input type="password" placeholder="비밀번호" />
				</div>
				<div>
					<label htmlFor="">비밀번호 확인</label>
					<input type="password" placeholder="비밀번호 확인" />
				</div>
				<div>
					<label htmlFor="">이름</label>
					<input type="text" placeholder="이름" />
				</div>
				<div>
					<label htmlFor="">휴대전화</label>
					<input type="text" placeholder="휴대전화" />
				</div>
			</form>
			<button>가입</button>
		</div>
	);
};

export default RegistUserForm;
