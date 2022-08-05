import React from 'react';
import Logo from '../components/header/Logo';
import UserState from '../components/header/UserState';

const Header = () => {
	return (
		<div className="header__wrap">
			<Logo />
			<UserState />
		</div>
	);
};

export default Header;
