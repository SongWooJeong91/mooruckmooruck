import React from 'react';
import { Link } from 'react-router-dom';
import DiaryEmpty from './DiaryEmpty';
import DiaryItem from './DiaryItem';

const DiaryList = () => {
	return (
		<div className="diaryList__wrap">
			<Link to="/" className="diaryItemLink">
				<DiaryItem />
			</Link>
			<Link to="/" className="diaryItemLink">
				<DiaryItem />
			</Link>
			<Link to="/" className="diaryItemLink">
				<DiaryItem />
			</Link>
			<Link to="/" className="diaryItemLink">
				<DiaryItem />
			</Link>
			<Link to="/" className="diaryItemLink">
				<DiaryItem />
			</Link>
			<Link to="/" className="diaryItemLink">
				<DiaryItem />
			</Link>
			<Link to="/" className="diaryItemLink">
				<DiaryItem />
			</Link>
			<Link to="/" className="diaryItemLink">
				<DiaryItem />
			</Link>
			{/* <DiaryEmpty /> */}
		</div>
	);
};

export default DiaryList;
