import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
	return (
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
	);
};

export default Logo;
