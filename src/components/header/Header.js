import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./style.css";
import logo from "./logo.svg";
import DropDownMenu from "../dropdown-menu/DropDownMenu";
import ItemsInBasket from "../itemsInBasket/ItemsInBasket";

function Header() {
	const [isMenuVisible, setIsMenuVisible] = useState(false);

	const toggleMenu = () => {
		setIsMenuVisible(!isMenuVisible);
	};

	const closeMenu = () => {
		setIsMenuVisible(false);
	};

	return (
		<header className="header center">
			<div className="header_main">
				<div className="header__logo">
					<NavLink to="/">
						<img src={logo} alt="Logo" />
					</NavLink>

					<button id="button_find">
						<svg
							className="icon"
							width="26"
							height="27"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M18.059 17.625A10.395 10.395 0 1 0 10.419 21c2.253.003 4.445-.731 6.24-2.09l7.749 7.807a.926.926 0 0 0 .66.285.9.9 0 0 0 .66-.285.971.971 0 0 0 0-1.346l-7.67-7.746ZM1.886 10.5a8.535 8.535 0 1 1 8.534 8.6 8.575 8.575 0 0 1-8.534-8.6Z"
								fill="#E8E8E8"
							/>
						</svg>
					</button>
				</div>
				<div className="header__menu">
					<button id="button_lines" onClick={toggleMenu}>
						<svg
							className="icon"
							width="32.000000"
							height="23.000000"
							viewBox="0 0 32 23"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							// xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<desc>Created with Pixso.</desc>
							<defs />
							<path
								d="M0 23L0 20.31L32 20.31L32 23L0 23ZM0 12.76L0 10.06L32 10.06L32 12.76L0 12.76ZM0 2.68L0 0L32 0L32 2.68L0 2.68Z"
								fill="#E8E8E8"
								fillOpacity="1.000000"
								fillRule="nonzero"
							/>
						</svg>
					</button>

					<button id="button_man" className="hidden">
						<NavLink to="/registration">
							<svg
								className="icon"
								width="29"
								height="29"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M14.5 19.93c4.5 0 8.15-4.47 8.15-9.97C22.65 4.47 19 0 14.5 0a7.43 7.43 0 0 0-5.84 3 11.106 11.106 0 0 0-2.32 6.97c0 5.49 3.66 9.96 8.16 9.96Zm0-18.12c3.5 0 6.34 3.66 6.34 8.15 0 4.5-2.85 8.16-6.34 8.16-3.5 0-6.35-3.66-6.35-8.16 0-4.49 2.85-8.15 6.35-8.15Zm6.34 16.31c-.24 0-.47.1-.64.27a.91.91 0 0 0-.27.64c0 .24.1.47.27.64.17.17.4.26.64.26 1.68 0 3.29.67 4.48 1.86a6.36 6.36 0 0 1 1.86 4.49.9.9 0 0 1-.26.64.9.9 0 0 1-.64.26H2.71a.9.9 0 0 1-.64-.26.944.944 0 0 1-.26-.64c0-1.68.67-3.3 1.86-4.49a6.378 6.378 0 0 1 4.48-1.86.9.9 0 0 0 .64-.26c.17-.17.27-.4.27-.64s-.1-.47-.27-.64a.91.91 0 0 0-.64-.27c-2.16 0-4.23.86-5.76 2.39A8.15 8.15 0 0 0 0 26.28c0 .72.28 1.41.79 1.92s1.2.79 1.92.8h23.57a2.76 2.76 0 0 0 1.92-.8c.51-.51.79-1.2.8-1.92a8.202 8.202 0 0 0-2.4-5.77 8.145 8.145 0 0 0-5.76-2.39Z"
									fill="#E8E8E8"
								/>
							</svg>
						</NavLink>
					</button>
					<button id="button_cart" className="hidden">
						<NavLink to="/cart">
							<svg
								className="icon"
								width="32.000000"
								height="29.000000"
								viewBox="0 0 32 29"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								// xmlns:xlink="http://www.w3.org/1999/xlink"
							>
								<desc>Created with Pixso.</desc>
								<defs />
								<path
									d="M26.2 29C25.55 28.97 24.94 28.69 24.49 28.22C24.05 27.75 23.81 27.12 23.82 26.47C23.83 25.82 24.1 25.2 24.56 24.75C25.03 24.3 25.65 24.04 26.3 24.04C26.94 24.04 27.57 24.3 28.03 24.75C28.49 25.2 28.76 25.82 28.77 26.47C28.79 27.12 28.54 27.75 28.1 28.22C27.66 28.69 27.04 28.97 26.4 29L26.2 29ZM6.75 26.31C6.75 25.78 6.91 25.27 7.2 24.83C7.49 24.39 7.91 24.04 8.4 23.84C8.89 23.64 9.43 23.58 9.95 23.69C10.47 23.79 10.95 24.05 11.32 24.42C11.7 24.79 11.95 25.27 12.06 25.79C12.16 26.31 12.11 26.85 11.9 27.34C11.7 27.83 11.36 28.25 10.92 28.54C10.48 28.84 9.96 29 9.43 29C9.08 29 8.73 28.93 8.4 28.79C8.08 28.66 7.78 28.46 7.53 28.21C7.28 27.96 7.09 27.67 6.95 27.34C6.82 27.02 6.75 26.67 6.75 26.31L6.75 26.31ZM10.55 20.68C10.29 20.68 10.04 20.6 9.83 20.44C9.62 20.28 9.47 20.06 9.4 19.81L4.57 2.36L1.18 2.36C0.86 2.36 0.56 2.23 0.34 2.01C0.12 1.79 0 1.49 0 1.18C0 0.86 0.12 0.56 0.34 0.34C0.56 0.12 0.86 0 1.18 0L5.46 0C5.72 -0.01 5.97 0.08 6.18 0.24C6.38 0.39 6.53 0.61 6.6 0.86L11.43 18.32L24.61 18.32L29 8.27L14.4 8.27C14.24 8.27 14.08 8.25 13.93 8.19C13.79 8.13 13.65 8.05 13.54 7.94C13.42 7.83 13.33 7.69 13.27 7.55C13.21 7.4 13.18 7.25 13.18 7.09C13.18 6.93 13.21 6.77 13.27 6.63C13.33 6.48 13.42 6.35 13.54 6.24C13.65 6.13 13.79 6.04 13.93 5.98C14.08 5.93 14.24 5.9 14.4 5.91L30.81 5.91C31 5.9 31.2 5.95 31.37 6.05C31.54 6.14 31.69 6.27 31.79 6.44C31.9 6.6 31.97 6.79 31.99 6.99C32 7.18 31.97 7.38 31.9 7.56L26.49 19.97C26.4 20.18 26.25 20.36 26.05 20.49C25.86 20.61 25.64 20.68 25.41 20.68L10.55 20.68Z"
									fill="#E8E8E8"
									fillOpacity="1.000000"
									fillRule="nonzero"
								/>
							</svg>
						</NavLink>
					</button>
					<ItemsInBasket />
				</div>
			</div>
			{isMenuVisible && (
				<DropDownMenu onClose={closeMenu} isVisible={isMenuVisible} />
			)}
		</header>
	);
}

export default Header;
