import "./../css/style-registration.css";

const Registration = () => {
	return (
		<>
			<section className="main-head center">
				<div className="top-head">
					<h2 className="top-head__heading">REGISTRATION</h2>
				</div>
			</section>

			<section className="registration center">
				<div className="registration__left">
					<form className="registration__form" action="#">
						<h2 className="registration__heading">Your Name</h2>
						<label>
							<input
								className="registration__item"
								type="text"
								name="name"
								placeholder="First Name"
								required
							/>
						</label>
						<label>
							<input
								className="registration__item"
								type="text"
								name="name"
								placeholder="Last Name"
								required
							/>
						</label>

						<div className="registration__radio-box">
							<label className="registration__radio-text">
								<input
									className="registration__radio"
									type="radio"
									name="level"
								/>
								Male
							</label>

							<label className="registration__radio-text">
								<input
									className="registration__radio"
									type="radio"
									name="level"
								/>
								Female
							</label>
						</div>

						<h2 className="registration__heading">Login details</h2>
						<label>
							<input
								className="registration__item"
								type="email"
								name="name"
								placeholder="Email"
								required
							/>
						</label>
						<label>
							<input
								className="registration__item"
								type="password"
								name="name"
								placeholder="Password"
								required
							/>
						</label>
						<p className="registration__text">
							Please use 8 or more characters, with at least 1 umber and
							a mixture of uppercase and lowercase letters
						</p>

						<button className="registration__button" type="submit">
							JOIN NOW
							<svg
								width="17.001"
								height="9.919"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M11.54.2c.06-.06.14-.12.23-.15.08-.04.17-.05.27-.05.09 0 .18.01.27.05.08.03.16.09.23.15l4.25 4.25c.06.07.12.15.15.23a.66.66 0 0 1 0 .55c-.03.08-.09.16-.15.23l-4.25 4.25a.72.72 0 0 1-.5.2.703.703 0 0 1-.71-.71c0-.18.07-.36.21-.5l3.74-3.75-3.74-3.74a.868.868 0 0 1-.16-.23.868.868 0 0 1-.05-.28c0-.09.02-.18.05-.27.04-.08.09-.16.16-.23Z"
									fill="#FFF"
									fill-rule="evenodd"
								/>
								<path
									d="M0 4.95c0-.18.07-.36.2-.5.14-.13.32-.2.5-.2h14.88c.19 0 .37.07.5.2.13.14.21.32.21.5 0 .19-.08.37-.21.51-.13.13-.31.2-.5.2H.7c-.18 0-.36-.07-.5-.2a.744.744 0 0 1-.2-.51Z"
									fill="#FFF"
									fill-rule="evenodd"
								/>
							</svg>
						</button>
					</form>
				</div>

				<div className="loyalty">
					<h2 className="loyalty__heading">LOYALTY HAS ITS PERKS</h2>
					<p className="loyalty__text">
						Get in on the loyalty program where you can earn points and
						unlock serious perks. Starting with these as soon as you join:
					</p>

					<ul className="loyalty__ul">
						<li className="loyalty__li">15% off welcome offer</li>
						<li className="loyalty__li">
							Free shipping, returns and exchanges on all orders
						</li>
						<li className="loyalty__li">
							$10 off a purchase on your birthday
						</li>
						<li className="loyalty__li">Early access to products</li>
						<li className="loyalty__li">Exclusive offers & rewards</li>
					</ul>
				</div>
			</section>
		</>
	);
};

export default Registration;
