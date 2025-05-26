	import React, { useState } from "react";
	import ButtonDelete from "../buttonDelete/ButtonDelete";

	const ShoppingCart = ({
		data,
		deleteProduct,
		onQuantityChange,
	}) => {
		const { img, title, price, size, count, id } = data;
		const [quantity, setQuantity] = useState(count);

		const handleQuantityChange = (e) => {
			const newQuantity = parseInt(e.target.value);
			if (!isNaN(newQuantity) && newQuantity >= 0) {
				setQuantity(newQuantity);
				onQuantityChange(id, newQuantity); // Передаем id и новое количество в родительский компонент
			}
		};

		const handleDelete = () => {	
			deleteProduct(id);
		};



		return (
			<div className="cart__card">
				<img className="cart__img" src={img} alt={title} />
				<div className="cart__price">
					<a href="#" className="cart__head">
						{title}
					</a>
					<ul className="cart__ul">
						<li>
							Price: <span className="cart__ul_color">${price}</span>
						</li>
						<li>Color: Red</li>
						<li>Size: {size}</li>
						<li>
							Quantity:
							<input
								type="number"
								value={quantity}
								onChange={handleQuantityChange}
								className="cart__ul_quantity"
								step="1"
							/>
						</li>
						<li>
							Subtotal:{" "}
							<span className="cart__ul_color">
								${(quantity * price).toFixed(2)}
							</span>
						</li>
					</ul>
					<ButtonDelete deleteProduct={handleDelete} id={id} />
				</div>
			</div>
		);
	};

	export default ShoppingCart;
