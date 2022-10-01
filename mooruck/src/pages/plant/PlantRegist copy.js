import React, { useCallback, useEffect, useRef, useState } from 'react';
import PageTitle from '../../components/PageTitle';
import { BiSearch, BiPlus, BiX } from 'react-icons/bi';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
// import DatePicker from 'react-datepicker';

// import 'react-datepicker/dist/react-datepicker.css';

const PlantRegist = () => {
	const fileInput = useRef();
	const navigate = useNavigate();

	const [plant, setPlant] = useState({
		plantType: '',
		plantName: '',
		wateringCycle: '',
		nutrientsCycle: '',
		splitCycle: '',
		wateringDate: '',
		nutrientsDate: '',
		splitDate: '',
		sunshine: '',
		temperature: '',
		saleDate: '',
		plantImg: '',
		plantMemo: '',
	});
	const [sunshine, setSunshine] = useState([]);
	// 이미지 파일 상태 변수
	const [selectedFiles, setSelectedFiles] = useState('');
	const [registPlantImgUrl, setRegistPlantImgUrl] = useState('');

	const onPlantChange = (e) => {
		setPlant({ ...plant, [e.target.name]: e.target.value });
	};

	// 일조량
	const onClickSunshine = (e) => {
		e.preventDefault();
		// 버튼 클릭 시 스타일 추가
		e.target.classList.toggle('active');

		// 입력받은 값이 포함 되어 있는지 검사
		// true 이면 그 값을 제외한 나머지만 새로 배열 생성
		// flase 이면 그 값을 배열에 추가
		sunshine.includes(e.target.value)
			? setSunshine(sunshine.filter((item) => item !== e.target.value))
			: setSunshine(sunshine.concat(e.target.value));
	};

	useEffect(() => {
		setPlant({ ...plant, sunshine: sunshine });
	}, [sunshine]);

	// 이미지 추가 버튼 함수
	const handleButtonClick = (e) => {
		e.preventDefault();
		fileInput.current.click();
	};

	// 이미지 등록 저장 함수
	const imgUploadHandleChange = (e) => {
		console.log(e.target.files);
		// 미리보기 이미지 주소를 위한 변수 저장
		setRegistPlantImgUrl(URL.createObjectURL(e.target.files[0]));

		// 보낼 이미지 데이터 정보 저장
		setSelectedFiles(e.target.files);

		const formData = new FormData();
		formData.append(
			'uploadImages',
			this.state.selectedFiles,
			this.state.selectedFiles.name
		);
		const config = {
			headers: {
				'content-type': 'multipart/form-data',
			},
		};
		axios.post(`uploadAPI`, formData, config);

		// 전체적으로 보낼 데이터에 저장
	};

	// 등록
	const onSubmitPlant = (e) => {
		e.preventDefault();
		// axios
		// 	.post('http://localhost:3005/plant', plant)
		// 	.then((res) => {
		// 		console.log('데이터 처리 결과', res.data);
		// 		navigate('/');
		// 	})
		// 	.catch((err) => {
		// 		console.error('에러발생', err);
		// 	});
	};

	return (
		<div className="PlantRegist__wrap">
			<PageTitle title="식물 등록" />
			<div className="RegistForm__wrap">
				<form>
					<ul>
						<li>
							<img
								src={
									process.env.PUBLIC_URL + '/assets/img/icons/plant-kind.png'
								}
								alt=""
							/>
							<div className="input__box">
								<label htmlFor="">식물종류</label>
								<div className="plantKind__box">
									<input
										type="text"
										placeholder="식물종류"
										className="plantKind__input"
										name="plantType"
										value={plant.plantType}
										onChange={onPlantChange}
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
								<input
									type="text"
									placeholder="식물이름"
									name="plantName"
									value={plant.plantName}
									onChange={onPlantChange}
								/>
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
									<input
										type="text"
										placeholder="물주기"
										name="wateringCycle"
										value={plant.wateringCycle}
										onChange={onPlantChange}
									/>
									<input
										type="text"
										placeholder="영양제"
										name="nutrientsCycle"
										value={plant.nutrientsCycle}
										onChange={onPlantChange}
									/>
									<input
										type="text"
										placeholder="분갈이"
										name="splitCycle"
										value={plant.splitCycle}
										onChange={onPlantChange}
									/>
								</div>
							</div>
						</li>
						<li>
							<img
								src={
									process.env.PUBLIC_URL + '/assets/img/icons/plant_water.png'
								}
								alt=""
							/>
							<div className="input__box">
								<label htmlFor="">최근 물준날</label>
								<input
									type="date"
									name="wateringDate"
									value={plant.wateringDate}
									onChange={onPlantChange}
								/>
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
									<button
										name="sunshine"
										value="1"
										onClick={onClickSunshine}
										className="sunshine__btn"
									>
										양지
									</button>
									<button
										name="sunshine"
										value="2"
										onClick={onClickSunshine}
										className="sunshine__btn"
									>
										반양지
									</button>
									<button
										name="sunshine"
										value="3"
										onClick={onClickSunshine}
										className="sunshine__btn"
									>
										반음지
									</button>
									<button
										name="sunshine"
										value="4"
										onClick={onClickSunshine}
										className="sunshine__btn"
									>
										음지
									</button>
								</div>
							</div>
						</li>
						<li>
							<img
								src={
									process.env.PUBLIC_URL + '/assets/img/icons/thermometer.png'
								}
								alt=""
							/>
							<div className="input__box">
								<label>생육온도</label>
								<input
									type="text"
									name="temperature"
									value={plant.temperature}
									onChange={onPlantChange}
									placeholder="생육온도"
								/>
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
								<input
									type="date"
									name="nutrientsDate"
									value={plant.nutrientsDate}
									onChange={onPlantChange}
								/>
							</div>
						</li>
						<li>
							<img
								src={process.env.PUBLIC_URL + '/assets/img/icons/shovels.png'}
								alt=""
							/>
							<div className="input__box">
								<label htmlFor="">최근 분갈이</label>
								<input
									type="date"
									name="splitDate"
									value={plant.splitDate}
									onChange={onPlantChange}
								/>
							</div>
						</li>
						<li>
							<img
								src={process.env.PUBLIC_URL + '/assets/img/icons/together.png'}
								alt=""
							/>
							<div className="input__box">
								<label htmlFor="">식물 온 날</label>
								<input
									type="date"
									name="saleDate"
									value={plant.saleDate}
									onChange={onPlantChange}
								/>
							</div>
						</li>
						<li>
							{/* 이미지 업로드 */}
							<img
								src={process.env.PUBLIC_URL + '/assets/img/icons/camera.png'}
								alt=""
							/>
							<div className="input__box img__input">
								<label htmlFor="">사진등록</label>
								<div className="input__img-box">
									{/* 이미지 미리보기 박스 */}
									<input
										type="file"
										id="fileUpload"
										ref={fileInput}
										multiple={true}
										accept="image/*"
										onChange={imgUploadHandleChange}
									/>
									<button
										className="addPhoto__btn-box"
										onClick={handleButtonClick}
									>
										<BiPlus className="addPhoto__btn" label="이미지 업로드" />
									</button>
									{selectedFiles && (
										<div className="photo__view">
											<img alt="sample" src={registPlantImgUrl} />
										</div>
									)}
								</div>
							</div>
						</li>
						<li>
							<img
								src={process.env.PUBLIC_URL + '/assets/img/icons/together.png'}
								alt=""
							/>
							<div className="input__box">
								<label htmlFor="">메모</label>
								<textarea
									type="text"
									rows={5}
									name="plantMemo"
									value={plant.plantMemo}
									onChange={onPlantChange}
								/>
							</div>
						</li>
					</ul>
					<button type="button" onClick={onSubmitPlant}>
						등록
					</button>
				</form>
			</div>
		</div>
	);
};

export default PlantRegist;
