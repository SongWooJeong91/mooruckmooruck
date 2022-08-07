import React from 'react';
import { BiLogOut, BiPlus } from 'react-icons/bi';
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
						<div className="myInfo__box-rb">
							<div>
								<p>오늘의 물주기</p>
								<p>0</p>
							</div>
							<div>
								<p>반려식물</p>
								<p>0</p>
							</div>
						</div>
					</div>
				</div>
				<BiPlus className="plant__add-btn" title="식물 등록" />
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
