import React, { useState } from "react";
import "./../css/style-catalog.css";
import MainHead from "../components/main-head/MainHead.js";
import Black from "../components/black/Black.js";


import { Link, NavLink, useParams } from "react-router-dom";
import Pagination from "../components/pagination/Pagination.js";
import SizeFilter from "../components/sizeFilter/SizeFilter.js";

const Catalog = ({ data }) => {
	const {pageNumber} = useParams();
	const currentPage = pageNumber ? parseInt(pageNumber, 10) : 1;
	const productsPerPage = 6;
	const startIndex = (currentPage - 1) * productsPerPage;
	// const currentProducts = data.slice(startIndex, startIndex + productsPerPage);

	// Состояние для хранения выбранных размеров
	const [selectedSizes, setSelectedSizes] = useState([]);

	// Функция для фильтрации продуктов по выбранным размерам
	const filterProductsBySize = (products) => {
		if (selectedSizes.length === 0) {
			return products; // Если размеры не выбраны, возвращаем все продукты
		}
		return products.filter((product) => selectedSizes.includes(product.size)); // Предполагается, что у продукта есть свойство size
	};

	// Фильтруем продукты на основе выбранных размеров
	const filteredProducts = filterProductsBySize(data);
	const currentProducts = filteredProducts.slice(
		startIndex,
		startIndex + productsPerPage
	);

	// Функция для обновления выбранных размеров
	const handleFilterChange = (sizes) => {
		setSelectedSizes(sizes);
	};

	return (
		<>
			<MainHead />
			<SizeFilter onFilterChange={handleFilterChange} />
	
			<div className="product-box center">
				<div className="fetured_items__grid">
					{currentProducts.map((product, index) => {
						return (
							<div key={index} className="item1 items">
								<Link className="items__img" to={`/articles/${product.id}`}>
									<img src={product.img} alt={product.title} />
								</Link>

								<div className="card_items">
									<h3 className="card_items__head">{product.title}</h3>
									<p className="card_items__text">{product.text}</p>
									<p className="card_items__price">${product.price}</p>
								</div>
							</div>
						);
					})}
				</div>

				<Pagination totalProducts={data.length} productsPerPage={productsPerPage} currentPage={currentPage} />

				
			</div>

			<Black />
		</>
	);
};

export default Catalog;
