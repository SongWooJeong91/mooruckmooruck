import React from 'react';
import { BiPlus } from 'react-icons/bi';
import DiaryContents from '../../components/diary/DiaryContents';
import NavMenu from '../../components/NavMenu';
import PageTitle from '../../components/PageTitle';
import SearchWindow from '../../components/SearchWindow';

const DiaryList = () => {
	return (
		<div className="plantDiaryList__wrap">
			<PageTitle title="식물 일기장" />
			<SearchWindow />
			<DiaryContents />
			{/* <button title="식물일기 작성">
				<BiPlus className="plantDiaryAdd__btn-icon" />
			</button> */}
			<NavMenu />
		</div>
	);
};

export default DiaryList;
