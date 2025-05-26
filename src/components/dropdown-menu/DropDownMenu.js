import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./style.css";

const DropDownMenu = ({ onClose, isVisible }) => {
	const menuClass = `dropdown-menu ${isVisible ? "" : "hidden-menu"}`;

	const navigate = useNavigate();

	const handleLinkClick = (path) => {
		onClose();
		navigate(path);
	};

	return (
		<div className={menuClass}>
			<nav className="nav">
				<h2 className="nav__heading">MENU</h2>
				<h3 className="nav__subheading">MAN</h3>
				<ul className="nav__ul">
					<li>
						<a className="nav__link" href="cart.html">
							Cart
						</a>
					</li>
					<li>
						<NavLink
							to="/page/1"
							className="nav__link"
							onClick={() => handleLinkClick("/page:1")}
						>
							Catalog
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/product"
							className="nav__link"
							onClick={() => handleLinkClick("/articles:1")}
						>
							Product
						</NavLink>
					</li>
					<li>
						<a className="nav__link" href="registration.html">
							Registration
						</a>
					</li>
					<li>
						<a className="nav__link" href="#">
							T-Shirts
						</a>
					</li>
				</ul>

				<h3 className="nav__subheading">WOMAN</h3>
				<ul className="nav__ul">
					<li>
						<a className="nav__link" href="#">
							Accesories
						</a>
					</li>
					<li>
						<a className="nav__link" href="#">
							jackets & Coats
						</a>
					</li>
					<li>
						<a className="nav__link" href="#">
							Polos
						</a>
					</li>
					<li>
						<a className="nav__link" href="#">
							T-Shirts
						</a>
					</li>
					<li>
						<a className="nav__link" href="#">
							Shirts
						</a>
					</li>
				</ul>

				<h3 className="nav__subheading">KIDS</h3>
				<ul className="nav__ul">
					<li>
						<a className="nav__link" href="#">
							Accesories
						</a>
					</li>
					<li>
						<a className="nav__link" href="#">
							jackets & Coats
						</a>
					</li>
					<li>
						<a className="nav__link" href="#">
							Polos
						</a>
					</li>
					<li>
						<a className="nav__link" href="#">
							T-Shirts
						</a>
					</li>
					<li>
						<a className="nav__link" href="#">
							Shirts
						</a>
					</li>
					<li>
						<a className="nav__link" href="#">
							Bags
						</a>
					</li>
				</ul>

				<div className="close">
					<button id="close_but" onClick={onClose}>
						<svg
							width="40"
							height="40"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M8.818 8.818a.75.75 0 0 1 1.061 0L12 10.939l2.122-2.121a.75.75 0 0 1 1.06 1.06L13.061 12l2.121 2.121a.75.75 0 0 1-1.06 1.061L12 13.061 9.88 15.182a.75.75 0 1 1-1.06-1.06L10.938 12 8.82 9.879a.75.75 0 0 1 0-1.061Z"
								fill="#424141"
							/>
						</svg>
					</button>
				</div>
			</nav>
		</div>
	);
};

export default DropDownMenu;
