import React from 'react';
import { BiLogOut, BiPlus } from 'react-icons/bi';
import { RiBook2Line, RiPlantLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const LoginState = () => {
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
					<img
						className="myinfo__img"
						src={process.env.PUBLIC_URL + '/assets/img/icons/user.png'}
						alt="notificationti"
					/>
					<div className="myInfo__box-right">
						<div className="myInfo__box-rt">
							<Link to="/" className="myInfo__username">
								<span>식집사</span>
							</Link>
							<BiLogOut className="myInfo__logout-btn" title="로그아웃" />
						</div>
						{/* <div className="myInfo__box-rb">
							<Link to="/" className="myInfo__plantState">
								<img
									src={process.env.PUBLIC_URL + '/assets/img/icons/water.png'}
									alt="notificationti"
								/>
								<span>1</span>
							</Link>
							<Link to="/" className="myInfo__plantState">
								<img
									src={
										process.env.PUBLIC_URL +
										'/assets/img/icons/nutritionalSupplements.png'
									}
									alt="notificationti"
								/>
								<span>2</span>
							</Link>
							<Link to="/" className="myInfo__plantState">
								<img
									src={process.env.PUBLIC_URL + '/assets/img/icons/shovels.png'}
									alt="notificationti"
								/>
								<span>1</span>
							</Link>
						</div> */}
					</div>
				</div>
				<Link to="/" className="loginState__plantList-btn">
					<RiBook2Line className="loginState__plantList-icon" /> 내 반려식물
				</Link>
				<Link to="/plantDiaryList" className="loginState__plantDiaryList-btn">
					<RiPlantLine className="loginState__plantList-icon" />
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
