import React from 'react';

const MyPageBtnBox = ({ title }) => {
	console.log(title);
	return (
		<div className="myPageBtnBox-wrap">
			<button>{title}</button>
		</div>
	);
};

export default MyPageBtnBox;
