import React from 'react';
import PageTitle from '../../components/PageTitle';
import DiaryRegistForm from '../../components/diary/DiaryRegistForm';

const DiaryRegist = () => {
	return (
		<div className="registPlantDiary__wrap">
			<PageTitle title="식물일기 등록" />

			<DiaryRegistForm />
			<button>등록</button>
		</div>
	);
};

export default DiaryRegist;
