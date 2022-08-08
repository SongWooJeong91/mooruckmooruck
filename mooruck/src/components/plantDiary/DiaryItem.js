import React from 'react';

const DiaryItem = () => {
	return (
		<div className="diaryItem__wrap">
			<div className="diaryItem__img-box">
				<img
					src={process.env.PUBLIC_URL + '/assets/img/flower.png'}
					alt="flower"
				/>
			</div>
			<div className="diaryItem__text-box">
				<span>2022-08-08</span>
				<p>1일차 곰둥이 앞머리 손질 1화</p>
			</div>
		</div>
	);
};

export default DiaryItem;
