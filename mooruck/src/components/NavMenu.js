import React from 'react';
import { BiPlus } from 'react-icons/bi';
import { RiBook2Line, RiPlantLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const NavMenu = () => {
	return (
		<div className="navMenu__wrap">
			<div className="nav__btn-box">
				<Link to="/diaryRegist" className="nav__item">
					<RiBook2Line className="nav__diaryadd-icon" />
				</Link>
				<Link to="/plantRegist" className="nav__item">
					<RiPlantLine className="nav__plantadd-icon" />
				</Link>
			</div>
			<div className="main__Add-box">
				<BiPlus className="main__Add-btnicon" />
			</div>
		</div>
	);
};

export default NavMenu;
