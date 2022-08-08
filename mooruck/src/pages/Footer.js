import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="footer__wrap">
			<ul>
				<li>
					<Link to="/copyrightInfo" className="footerLink">
						개발 정보
					</Link>
				</li>
				<li>
					<Link to="/copyrightInfo" className="footerLink">
						저작권 정보
					</Link>
				</li>
			</ul>
			<p>Copyright ⓒ 2022.Woojeong Song All rights reserved.</p>
		</div>
	);
};

export default Footer;
