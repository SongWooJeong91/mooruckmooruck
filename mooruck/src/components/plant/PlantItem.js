import React, { useState } from 'react';
import { RiBook2Line, RiPlantLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PlantItem = ({ plant }) => {
	console.log('plant 개인 정보', plant);
	const [sunshine, setSunshine] = useState([]);
	

	return (
		<div className="plantItem__wrap">
			<div className="plantItem__hover-box">
				<div className="plantItem__text-box">
					<p>{plant.plantName}</p>
					<div className="plantItem__text">
						<div className="plantItem__text-title title__ls">
							<img
								src={process.env.PUBLIC_URL + '/assets/img/icons/water.png'}
								alt=""
							/>
							물주기
						</div>
						<span>{plant.wateringCycle}</span>
					</div>
					<div className="plantItem__text">
						<div className="plantItem__text-title title__ls">
							<img
								src={process.env.PUBLIC_URL + '/assets/img/icons/sunshine.png'}
								alt=""
							/>
							일조량
						</div>
						<span>{plant.sunshine}</span>
						{/* {console.log('sunshine 타입', typeof plant.sunshine)} */}
					</div>
					<div className="plantItem__text">
						<div className="plantItem__text-title">
							<img
								src={
									process.env.PUBLIC_URL + '/assets/img/icons/thermometer.png'
								}
								alt=""
							/>
							생육온도
						</div>
						<span>{plant.temperature}</span>
					</div>
				</div>
				<div className="plant__btn-box">
					<div className="plant__btn">
						{/* 식물 일기 바로 가려면 식물 번호로 정보 조회해서 식물 일기 목록으로 가야됨
						만약에 식물일기가 있다면 바로 가기
						만약에 식물일기가 없다면 없다고 알려주기 */}
						<Link to="/diaryList">
							<RiBook2Line
								className="plant__btn-bibookheart"
								title="식물일기 바로가기"
							/>
						</Link>
					</div>
					<div className="plant__btn">
						{/* 식물정보 바로 가려면 식물 번호로 식물 정보 조회 */}
						<Link to="/plantDetail">
							<RiPlantLine
								className="plant__btn-bishare"
								title="식물정보 바로가기"
							/>
						</Link>
					</div>
				</div>
			</div>
			<img src={`http://localhost:3005${plant.plantImg}`} alt="" />
		</div>
	);
};

export default PlantItem;
