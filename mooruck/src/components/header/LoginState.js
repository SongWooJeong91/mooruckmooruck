import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { RiBook2Line, RiPlantLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const LoginState = () => {
	const [member, setMember] = useState({
		id: '',
		email: '',
		password: '',
		username: '',
		phone: '',
		photo: '',
	});
	const idx = 1;

	return (
		<div className="loginState__wrap">
			<div className="userIcon__box">
				<img
					src={process.env.PUBLIC_URL + '/assets/img/icons/user.png'}
					alt="notificationti"
				/>
			</div>
			<div className="mypage__box">
				<div className="myInfo__box">
					<Link to="/myPage">
						<img
							className="myinfo__img"
							src={process.env.PUBLIC_URL + '/assets/img/icons/user.png'}
							alt="notificationti"
						/>
					</Link>
					<div className="myInfo__box-right">
						<div className="myInfo__box-rt">
							<Link to="/myPage" className="myInfo__username">
								<span>{member.username}</span>
							</Link>
							<BiLogOut className="myInfo__logout-btn" title="로그아웃" />
						</div>
					</div>
				</div>
				<Link to="/myPlant" className="loginState__plantList-btn">
					<RiPlantLine className="loginState__plantList-icon" />내 반려식물
				</Link>
				<Link to="/plantDiaryList" className="loginState__plantDiaryList-btn">
					<RiBook2Line className="loginState__plantList-icon" />
					식물 일기
				</Link>
				<div className="noti__box">
					<div className="noti">
						<div className="noti__text">
							<span>2022-08-07</span>
							<p>
								<strong>곰둥이</strong> 물주는 날입니다.
							</p>
						</div>
						<img
							className="myinfo__img"
							src={process.env.PUBLIC_URL + '/assets/img/icons/water.png'}
							alt="notificationti"
						/>
					</div>
					<div className="noti">
						<div className="noti__text">
							<span>2022-08-07</span>
							<p>
								<strong>곰둥이</strong> 분갈이 하는날 입니다.
							</p>
						</div>
						<img
							className="myinfo__img"
							src={process.env.PUBLIC_URL + '/assets/img/icons/shovels.png'}
							alt="notificationti"
						/>
					</div>
					<div className="noti">
						<div className="noti__text">
							<span>2022-08-07</span>
							<p>
								<strong>곰둥이</strong> 영양제 주는날 입니다.
							</p>
						</div>
						<img
							className="myinfo__img"
							src={
								process.env.PUBLIC_URL +
								'/assets/img/icons/nutritionalSupplements.png'
							}
							alt="notificationti"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginState;
