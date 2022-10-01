import React from 'react';
import { Link } from 'react-router-dom';
import LoginState from './LoginState';
import LogoutState from './LogoutState';

const Header = () => {
	const result = true;
	return (
		<div className="header__wrap">
			<div className="logo__wrap">
				<Link to="/" className="logo_link">
					<h1>
						<img
							src={process.env.PUBLIC_URL + '/assets/img/icons/logo-img.png'}
							alt=""
						/>
						무럭무럭
					</h1>
				</Link>
			</div>
			{result ? <LoginState /> : <LogoutState />}
		</div>
	);
};

export default Header;
