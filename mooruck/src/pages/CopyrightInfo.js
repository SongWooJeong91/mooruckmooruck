import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';

const CopyrightInfo = () => {
	return (
		<div className="copyrightInfo__wrap">
			<PageTitle title="저작권 정보" />
			<div className="copyrightInfo__box">
				<h3>icon</h3>
				<a
					href="https://www.flaticon.com"
					title="haystack icons"
					target="_blank"
					rel="noopener noreferrer"
				>
					flaticon
				</a>
			</div>
			<div className="copyrightInfo__box">
				<h3>img</h3>
			</div>
			<div className="copyrightInfo__box">
				<h3>font</h3>
				<a
					href="https://noonnu.cc/font_page/115"
					title="yg-jalnan"
					target="_blank"
					rel="noopener noreferrer"
				>
					여기어때 잘난체
				</a>
				<a
					href="https://noonnu.cc/font_page/901"
					title="Happiness-Sans-Regular"
					target="_blank"
					rel="noopener noreferrer"
				>
					해피니스 산스
				</a>
			</div>
		</div>
	);
};

export default CopyrightInfo;
