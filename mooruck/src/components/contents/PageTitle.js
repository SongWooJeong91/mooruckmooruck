import React from 'react';

const PageTitle = ({ title }) => {
	return (
		<div className="pageTitle__wrap">
			<h1 className="pageTitle__h1">{title}</h1>
		</div>
	);
};

export default PageTitle;
