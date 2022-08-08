import React from 'react';

const DiaryEmpty = () => {
	return (
		<div className="diaryEmpty__wrap">
			<img
				src={process.env.PUBLIC_URL + '/assets/img/bicycle.png'}
				alt="flower"
			/>
			<p>
				아직 작성한 일기가 없어요.
				<br />
				일기를 작성해주세요.
			</p>
		</div>
	);
};

export default DiaryEmpty;
