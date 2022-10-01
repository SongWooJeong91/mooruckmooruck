import React from 'react';
import { RiMoreFill } from 'react-icons/ri';
const PlantDiaryItem = () => {
	return (
		<div className="plantDiaryItem__wrap">
			<div className="plantView__diary-item">
				<img
					className="myinfo__img"
					src={process.env.PUBLIC_URL + '/assets/img/plant-img01.png'}
					alt="notificationti"
				/>
				<div className="plantView__diaryText-box">
					<span>2022-08-20</span>
					<p>
						<strong>오늘의 곰둥이 곰둥이 관찰 1일차</strong> 오늘 곰둥이 잎이
						하나 떨어졌다.오늘 곰둥이 잎이 하나 떨어졌다.오늘 곰둥이 잎이 하나
						떨어졌다.
					</p>
				</div>
				<RiMoreFill className="plantView__more-btn" />
			</div>
		</div>
	);
};

export default PlantDiaryItem;
