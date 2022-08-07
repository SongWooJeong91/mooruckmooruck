import React from 'react';
import { BiSearch } from 'react-icons/bi';
const SearchWindow = () => {
	return (
		<div className="searchWindow__wrap">
			<input type="text" />
			<BiSearch className="searchWindow-icon" />
		</div>
	);
};

export default SearchWindow;
