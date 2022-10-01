import React from 'react';

const DiaryRegistForm = () => {
	return (
		<div className="diaryRegistForm__wrap">
			<p>작성일 2022-08-19</p>
			<form action="">
				<div className="title__box">
					<label htmlFor="">제목</label>
					<input type="text" />
				</div>
				<textarea name="" id="" cols="30" rows="10"></textarea>
				<input type="file" />
			</form>
		</div>
	);
};

export default DiaryRegistForm;
