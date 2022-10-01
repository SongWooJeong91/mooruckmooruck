import React from 'react';
import {
	RiPlantFill,
	RiHomeGearFill,
	RiBook2Fill,
	RiDraftFill,
	RiSunFill,
	RiCelsiusFill,
	RiContrastDrop2Fill,
	RiMoreFill,
} from 'react-icons/ri';
import {
	FaPen,
	FaTrashAlt,
	FaWineBottle,
	FaRegCalendarCheck,
} from 'react-icons/fa';
import PageTitle from '../../components/PageTitle';
import PlantDiaryItem from '../../components/plant/PlantDiaryItem';
import NavMenu from '../../components/NavMenu';

const PlantDetail = () => {
	return (
		<div className="plantView__wrap">
			<PageTitle title="내 반려식물" />
			<div className="plantView__contents">
				<div className="plantView__plant-img">
					<img
						className="myinfo__img"
						src={process.env.PUBLIC_URL + '/assets/img/plant-img01.png'}
						alt="notificationti"
					/>
				</div>
				<div className="plantView__plant-name">
					<h3>곰둥이</h3>
				</div>

				<div className="plantView__category">
					<div className="plantView__Items">
						<div className="plantView__content-title">
							<RiHomeGearFill className="plantView__icon" />
							생육정보
						</div>
						<div className="plantView__content">
							<p>
								<RiContrastDrop2Fill />
								<span>10일</span>
							</p>

							<p>
								<RiSunFill />
								<span>반음지</span>
							</p>

							<p>
								<RiCelsiusFill />
								<span>25~30</span>
							</p>
						</div>
					</div>
				</div>
				<div className="plantView__category">
					<div className="plantView__Items">
						<div className="plantView__content-title">
							<FaRegCalendarCheck className="plantView__icon" />
							D-day
						</div>
						<div className="plantView__content">
							<p>
								물주기
								<span>D-10</span>
								<button>
									<RiContrastDrop2Fill className="dday__btn-icon" />
								</button>
							</p>
							<p>
								영양제
								<span>D-10</span>
								<button>
									<FaWineBottle className="dday__btn-icon" />
								</button>
							</p>
							<p>
								분갈이
								<span>D-10</span>
								<button>
									<RiPlantFill className="dday__btn-icon" />
								</button>
							</p>
						</div>
					</div>
				</div>
				<div className="plantView__category">
					<div className="plantView__Items">
						<div className="plantView__content-title">
							<RiDraftFill className="plantView__icon" />
							메모
						</div>
						<div className="plantView__content">
							<p className="plantView__memo">
								곰둥이는 목마르면 앞머리가 생겨요!
							</p>
						</div>
					</div>
				</div>
				<div className="plantView__category">
					<div className="plantView__Items">
						<div className="plantView__content-title">
							<RiBook2Fill className="plantView__icon" />
							일기장
						</div>
						<div className="plantView__diary-box">
							<PlantDiaryItem />
							<PlantDiaryItem />
							<PlantDiaryItem />
							<PlantDiaryItem />
							<PlantDiaryItem />
							<PlantDiaryItem />
						</div>
					</div>
				</div>
			</div>
			<div className="plantView__btn-box">
				<button>
					{/* <FaPen className="plantView__btn-icon" /> */}
					수정
				</button>
				<button>
					삭제
					{/* <FaTrashAlt className="plantView__btn-icon" /> */}
				</button>
			</div>
			<NavMenu />
		</div>
	);
};

export default PlantDetail;
