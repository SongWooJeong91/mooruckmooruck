import React from 'react';
import { RiBook2Line, RiPlantLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PlantItem = () => {
	return (
		<div className="plantItem__wrap">
			<div className="plantItem__hover-box">
				<div className="plantItem__text-box">
					<p>곰둥이</p>
					<div className="plantItem__text">
						<div className="plantItem__text-title title__ls">
							<img
								src={process.env.PUBLIC_URL + '/assets/img/icons/water.png'}
								alt=""
							/>
							물주기
						</div>
						<span>30일</span>
					</div>
					<div className="plantItem__text">
						<div className="plantItem__text-title title__ls">
							<img
								src={process.env.PUBLIC_URL + '/assets/img/icons/sunshine.png'}
								alt=""
							/>
							일조량
						</div>
						<span>반음지</span>
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
						<span>21 ~ 27</span>
					</div>
				</div>
				<div className="plant__btn-box">
					<div className="plant__btn">
						<Link to="/plantDiaryList">
							<RiBook2Line
								className="plant__btn-bibookheart"
								title="식물일기 바로가기"
							/>
						</Link>
					</div>
					<div className="plant__btn">
						<RiPlantLine
							className="plant__btn-bishare"
							title="식물정보 바로가기"
						/>
					</div>
				</div>
			</div>
			<img
				src={process.env.PUBLIC_URL + '/assets/img/plant-img01.png'}
				alt=""
			/>
		</div>
	);
};

export default PlantItem;
