import React, { useState } from "react";

const SizeFilter = ({ onFilterChange }) => {
	const [selectedSizes, setSelectedSizes] = useState([]);

	const handleSizeChange = (size) => {
		setSelectedSizes((prevSizes) => {
			if (prevSizes.includes(size)) {
				return prevSizes.filter((s) => s !== size); // Удалить размер, если он уже выбран
			} else {
				return [...prevSizes, size]; // Добавить размер, если он не выбран
			}
		});
		onFilterChange(selectedSizes);
	};

	const handleApplyFilter = () => {
		
	};

	return (
		<section className="filter-sort center">
			<details className="filter">
				<summary className="filter__summary">
					<span className="filter__heading hidden">FILTER</span>
					<svg
						width="15.000000"
						height="10.000000"
						viewBox="0 0 15 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						// xmlns:xlink="http://www.w3.org/1999/xlink"
					>
						<desc>Created with Pixso.</desc>
						<defs />
						<path
							id="Vector"
							d="M0.83 10L4.16 10C4.62 10 5 9.62 5 9.16C5 8.7 4.62 8.33 4.16 8.33L0.83 8.33C0.37 8.33 0 8.7 0 9.16C0 9.62 0.37 10 0.83 10ZM0 0.83C0 1.29 0.37 1.66 0.83 1.66L14.16 1.66C14.62 1.66 15 1.29 15 0.83C15 0.37 14.62 0 14.16 0L0.83 0C0.37 0 0 0.37 0 0.83ZM0.83 5.83L9.16 5.83C9.62 5.83 10 5.45 10 5C10 4.54 9.62 4.16 9.16 4.16L0.83 4.16C0.37 4.16 0 4.54 0 5C0 5.45 0.37 5.83 0.83 5.83Z"
							fill="#000000"
							fillOpacity="1.000000"
							fillRule="nonzero"
						/>
					</svg>
				</summary>
				<div className="filter__content">
					<details open className="filter__item">
						<summary className="filter__head">CATEGORY</summary>
						<div className="filter__link-box">
							<a href="#" className="filter__link">
								Accessories
							</a>
							<a href="#" className="filter__link">
								Bags
							</a>
							<a href="#" className="filter__link">
								Denim
							</a>
							<a href="#" className="filter__link">
								Hoodies & Sweatshirts
							</a>
							<a href="#" className="filter__link">
								Jackets & Coats
							</a>
							<a href="#" className="filter__link">
								Polos
							</a>
							<a href="#" className="filter__link">
								Shirts
							</a>
							<a href="#" className="filter__link">
								Shoes
							</a>
							<a href="#" className="filter__link">
								Sweaters & Knits
							</a>
							<a href="#" className="filter__link">
								T-Shirts
							</a>
							<a href="#" className="filter__link">
								Tanks
							</a>
						</div>
					</details>

					<details className="filter__item">
						<summary className="filter__head">BRAND</summary>
						<div className="filter__link-box">
							<a href="#" className="filter__link">
								Accessories
							</a>
							<a href="#" className="filter__link">
								Bags
							</a>
							<a href="#" className="filter__link">
								Denim
							</a>
							<a href="#" className="filter__link">
								Hoodies & Sweatshirts
							</a>
							<a href="#" className="filter__link">
								Jackets & Coats
							</a>
							<a href="#" className="filter__link">
								Polos
							</a>
							<a href="#" className="filter__link">
								Shirts
							</a>
							<a href="#" className="filter__link">
								Shoes
							</a>
							<a href="#" className="filter__link">
								Sweaters & Knits
							</a>
							<a href="#" className="filter__link">
								T-Shirts
							</a>
							<a href="#" className="filter__link">
								Tanks
							</a>
						</div>
					</details>

					<details className="filter__item">
						<summary className="filter__head">DESIGNER</summary>
						<div className="filter__link-box">
							<a href="#" className="filter__link">
								Accessories
							</a>
							<a href="#" className="filter__link">
								Bags
							</a>
							<a href="#" className="filter__link">
								Denim
							</a>
							<a href="#" className="filter__link">
								Hoodies & Sweatshirts
							</a>
							<a href="#" className="filter__link">
								Jackets & Coats
							</a>
							<a href="#" className="filter__link">
								Polos
							</a>
							<a href="#" className="filter__link">
								Shirts
							</a>
							<a href="#" className="filter__link">
								Shoes
							</a>
							<a href="#" className="filter__link">
								Sweaters & Knits
							</a>
							<a href="#" className="filter__link">
								T-Shirts
							</a>
							<a href="#" className="filter__link">
								Tanks
							</a>
						</div>
					</details>
				</div>
			</details>

			<div className="sort">
				<details className="sort__details">
					<summary className="sort__summary">
						<span className="sort__heading">TRENDING NOW</span>
						<svg
							width="10.020020"
							height="5.046143"
							viewBox="0 0 10.02 5.04614"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							// xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<desc>Created with Pixso.</desc>
							<defs />
							<path
								id="Vector"
								d="M5 5.04C4.83 5.04 4.67 4.98 4.54 4.87L0.25 1.27C0.11 1.15 0.02 0.97 0 0.78C-0.02 0.59 0.04 0.4 0.16 0.26C0.28 0.11 0.46 0.02 0.64 0C0.83 -0.02 1.02 0.04 1.17 0.16L5 3.39L8.83 0.28C8.9 0.22 8.98 0.17 9.07 0.15C9.16 0.12 9.26 0.11 9.35 0.12C9.45 0.13 9.54 0.16 9.62 0.2C9.7 0.25 9.78 0.31 9.83 0.38C9.9 0.46 9.95 0.55 9.98 0.64C10.01 0.73 10.02 0.83 10.01 0.93C10 1.03 9.97 1.13 9.93 1.21C9.88 1.3 9.81 1.38 9.73 1.44L5.45 4.92C5.31 5.01 5.16 5.05 5 5.04Z"
								fill="#6F6E6E"
								fillOpacity="1.000000"
								fillRule="nonzero"
							/>
						</svg>
					</summary>
				</details>

				<details className="sort__details">
					<summary className="sort__summary">
						<span className="sort__heading">SIZE</span>
						<svg
							width="10.020020"
							height="5.046143"
							viewBox="0 0 10.02 5.04614"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<desc>Created with Pixso.</desc>
							<defs />
							<path
								id="Vector"
								d="M5 5.04C4.83 5.04 4.67 4.98 4.54 4.87L0.25 1.27C0.11 1.15 0.02 0.97 0 0.78C-0.02 0.59 0.04 0.4 0.16 0.26C0.28 0.11 0.46 0.02 0.64 0C0.83 -0.02 1.02 0.04 1.17 0.16L5 3.39L8.83 0.28C8.9 0.22 8.98 0.17 9.07 0.15C9.16 0.12 9.26 0.11 9.35 0.12C9.45 0.13 9.54 0.16 9.62 0.2C9.7 0.25 9.78 0.31 9.83 0.38C9.9 0.46 9.95 0.55 9.98 0.64C10.01 0.73 10.02 0.83 10.01 0.93C10 1.03 9.97 1.13 9.93 1.21C9.88 1.3 9.81 1.38 9.73 1.44L5.45 4.92C5.31 5.01 5.16 5.05 5 5.04Z"
								fill="#6F6E6E"
								fillOpacity="1.000000"
								fillRule="nonzero"
							/>
						</svg>
					</summary>
					<div className="sort__box">
						{["XS", "S", "M", "L", "XL"].map((size) => (
							<div className="sort__check" key={size}>
								<input
									id={`sort__check${size}`}
									type="checkbox"
									checked={selectedSizes.includes(size)}
									onChange={() => handleSizeChange(size)}
								/>
								<label htmlFor={`sort__check${size}`}>{size}</label>
							</div>
						))}
						<button onClick={handleApplyFilter}>Применить фильтр</button>
					</div>
				</details>

				<details className="sort__details">
					<summary className="sort__summary">
						<span className="sort__heading">PRICE</span>
						<svg
							width="10.020020"
							height="5.046143"
							viewBox="0 0 10.02 5.04614"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							// xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<desc>Created with Pixso.</desc>
							<defs />
							<path
								id="Vector"
								d="M5 5.04C4.83 5.04 4.67 4.98 4.54 4.87L0.25 1.27C0.11 1.15 0.02 0.97 0 0.78C-0.02 0.59 0.04 0.4 0.16 0.26C0.28 0.11 0.46 0.02 0.64 0C0.83 -0.02 1.02 0.04 1.17 0.16L5 3.39L8.83 0.28C8.9 0.22 8.98 0.17 9.07 0.15C9.16 0.12 9.26 0.11 9.35 0.12C9.45 0.13 9.54 0.16 9.62 0.2C9.7 0.25 9.78 0.31 9.83 0.38C9.9 0.46 9.95 0.55 9.98 0.64C10.01 0.73 10.02 0.83 10.01 0.93C10 1.03 9.97 1.13 9.93 1.21C9.88 1.3 9.81 1.38 9.73 1.44L5.45 4.92C5.31 5.01 5.16 5.05 5 5.04Z"
								fill="#6F6E6E"
								fillOpacity="1.000000"
								fillRule="nonzero"
							/>
						</svg>
					</summary>
				</details>
			</div>
		</section>
	);
};

export default SizeFilter;
