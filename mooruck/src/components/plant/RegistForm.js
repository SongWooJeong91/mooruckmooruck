import React from 'react';
import { BiSearch, BiPlus } from 'react-icons/bi';

const RegistForm = () => {
	return (
		<div className="RegistForm__wrap">
			<form action="">
				<ul>
					<li>
						<img
							src={process.env.PUBLIC_URL + '/assets/img/icons/plant-kind.png'}
							alt=""
						/>
						<div className="input__box">
							<label htmlFor="">식물종류</label>
							<div className="plantKind__box">
								<input
									type="text"
									placeholder="식물종류"
									className="plantKind__input"
								/>
								<BiSearch className="plantSearch__btn" />
							</div>
						</div>
					</li>
					<li>
						<img
							src={process.env.PUBLIC_URL + '/assets/img/icons/plant.png'}
							alt=""
						/>
						<div className="input__box">
							<label htmlFor="">식물이름</label>
							<input type="text" placeholder="식물이름" />
						</div>
					</li>
					<li>
						<img
							src={process.env.PUBLIC_URL + '/assets/img/icons/alram.png'}
							alt=""
						/>
						<div className="input__box">
							<label htmlFor="">물주기 / 영양제 / 분갈이</label>
							<div className="group__set">
								<input type="text" placeholder="물주기" />
								<input type="text" placeholder="영양제" />
								<input type="text" placeholder="분갈이" />
							</div>
						</div>
					</li>
					<li>
						<img
							src={process.env.PUBLIC_URL + '/assets/img/icons/plant_water.png'}
							alt=""
						/>
						<div className="input__box">
							<label htmlFor="">최근 물준날</label>
							<input type="date" />
						</div>
					</li>
					<li>
						<img
							src={process.env.PUBLIC_URL + '/assets/img/icons/sunshine.png'}
							alt=""
						/>
						<div className="input__box">
							<label htmlFor="">일조량</label>
							<div className="group__set">
								<button>양지</button>
								<button>반양지</button>
								<button>반음지</button>
								<button>음지</button>
							</div>
						</div>
					</li>
					<li>
						<img
							src={process.env.PUBLIC_URL + '/assets/img/icons/thermometer.png'}
							alt=""
						/>
						<div className="input__box">
							<label>생육온도</label>
							<input type="text" />
						</div>
					</li>
					<li>
						<img
							src={
								process.env.PUBLIC_URL +
								'/assets/img/icons/nutritionalSupplements.png'
							}
							alt=""
						/>
						<div className="input__box">
							<label htmlFor="">최근 영양제</label>
							<input type="date" />
						</div>
					</li>
					<li>
						<img
							src={process.env.PUBLIC_URL + '/assets/img/icons/shovels.png'}
							alt=""
						/>
						<div className="input__box">
							<label htmlFor="">최근 분갈이</label>
							<input type="date" />
						</div>
					</li>
					<li>
						<img
							src={process.env.PUBLIC_URL + '/assets/img/icons/together.png'}
							alt=""
						/>
						<div className="input__box">
							<label htmlFor="">식물 온 날</label>
							<input type="date" />
						</div>
					</li>
					<li>
						<img
							src={process.env.PUBLIC_URL + '/assets/img/icons/camera.png'}
							alt=""
						/>
						<div className="input__box">
							<label htmlFor="">사진등록</label>
							<div className="addPhoto__btn-box">
								<BiPlus className="addPhoto__btn" />
							</div>
						</div>
					</li>
				</ul>
			</form>
			<button>등록</button>
		</div>
	);
};

export default RegistForm;
