import React from 'react';
import PageTitle from '../components/contents/PageTitle';
import SearchWindow from '../components/contents/SearchWindow';
import DiaryList from '../components/plantDiary/DiaryList';
import { BiPlus } from 'react-icons/bi';

const PlantDiaryList = () => {
	return (
		<div className="plantDiaryList__wrap">
			<PageTitle title="식물 일기장" />
			<SearchWindow />
			<DiaryList />
			<button title="식물일기 작성">
				<BiPlus className="plantDiaryAdd__btn-icon" />
			</button>
		</div>
	);
};

export default PlantDiaryList;
