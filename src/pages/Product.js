import { useParams } from "react-router-dom";
import React from "react";
import MainHead from "../components/main-head/MainHead";
import "./../css/style-product.css";
import CardList from "../components/cardList/CardList";

const Product = ({ data }) => {
	const { id } = useParams();
	const article = data.find((article) => article.id === parseInt(id, 10));
	const cardsPerPage = 3;

	if (!article) {
		return <div>Статья не найдена</div>;
	}

	const addProduct = () => {
		let cart = JSON.parse(localStorage.getItem("cart")) || [];
		const product = {
			id: article.id,
			count: article.count,
			title: article.title,
			img: article.img,
			price: article.price,
			
		};
		cart.push(product);
		localStorage.setItem("cart", JSON.stringify(cart));
	};

	return (
		<>
			<MainHead />

			<div className="slider">
				<button className="slider__rectangle">
					<svg
						width="12.399902"
						height="21.699951"
						viewBox="0 0 12.3999 21.7"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						// xmlns:xlink="http://www.w3.org/1999/xlink"
					>
						<desc>Created with Pixso.</desc>
						<defs />
						<path
							id="Vector"
							d="M12.39 3.1L4.64 10.85L12.39 18.6L10.85 21.7L0 10.85L10.85 0L12.39 3.1Z"
							fill="#000000"
							fillOpacity="1.000000"
							fillRule="nonzero"
						/>
					</svg>
				</button>
				<div className="slider__img">
					<img src={article.img} alt={article.title} />
				</div>

				<button className="slider__rectangle">
					<svg
						width="12.399902"
						height="21.699951"
						viewBox="0 0 12.3999 21.7"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						// xmlns:xlink="http://www.w3.org/1999/xlink"
					>
						<desc>Created with Pixso.</desc>
						<defs />
						<path
							id="Vector"
							d="M0 18.6L7.75 10.85L0 3.1L1.54 0L12.39 10.85L1.54 21.7L0 18.6Z"
							fill="#000"
							fillOpacity="1.000000"
							fillRule="nonzero"
						/>
					</svg>
				</button>
			</div>

			<div className="purchase center">
				<div className="purchase-form center">
					<h3 className="purchase-form__h3">WOMEN COLLECTION</h3>
					<div className="purchase-form__line1"></div>
					<h2 className="purchase-form__h2">{article.title}</h2>

					<p className="purchase-form__text">{article.text}</p>
					<p className="purchase-form__price">${article.price}</p>
					<div className="purchase-form__line2"></div>
					<div className="purchase-form__menu">
						<a href="#" className="purchase-form__link">
							CHOOSE COLOR
						</a>
						<a href="#" className="purchase-form__link">
							CHOOSE SIZE
						</a>
						<a href="#" className="purchase-form__link">
							QUANTITY
						</a>
					</div>
					<button onClick={addProduct} className="purchase-form__button">
						Add to Cart
					</button>
				</div>
			</div>

			<CardList cardsPerPage={cardsPerPage} data={data} />
		</>
	);
};

export default Product;
