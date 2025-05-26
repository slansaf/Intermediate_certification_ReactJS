import { useEffect, useState } from "react";
import ShoppingCart from "../components/shoppingСart/ShoppingCart";
import "./../css/style-cart.css";

const Cart = ({ data }) => {
	const [cart, setCart] = useState(data);
	const [subTotal, setSubTotal] = useState(0);
	const [grandTotal, setGrandTotal] = useState(0);
	
	// useState(cart.reduce((total, product) => total + product.price, 0));

	useEffect(() => {
		const cartData = JSON.parse(localStorage.getItem("cart"));
		setCart(cartData);
		calculateTotals(cartData);
	}, []);

	const deleteProduct = (id) => {
		const updatedCart = cart.filter((product) => id !== product.id);
		setCart(updatedCart);
		localStorage.setItem("cart", JSON.stringify(updatedCart));
		calculateTotals(updatedCart);
	};

	const calculateTotals = (cart) => {
		const newSubTotal = cart.reduce((total, product) => {
			return total + (product.price * product.count);
		}, 0);
		setSubTotal(newSubTotal);
		setGrandTotal(newSubTotal); // Если у вас есть дополнительные налоги или сборы, добавьте их здесь
	};

	const handleQuantityChange = (id, newQuantity) => {
		const updatedCart = cart.map((product) => {
			if (product.id === id) {
				return { ...product, count: newQuantity }; // Обновляем количество товара
			}
			return product;
		});
		setCart(updatedCart);
		calculateTotals(updatedCart);
	};

	const products = cart.map((data) => {
		return (
			<ShoppingCart
				data={data}
				key={data.id}
				deleteProduct={deleteProduct}
				onQuantityChange={handleQuantityChange}
			/>
		);
	});

	return (
		<>
			<section className="main-head center">
				<div className="top-head">
					<h2 className="top-head__heading">SHOPPING CART</h2>
				</div>
			</section>
			<section className="cart center">
				<div className="cart__cards">
					<div className="cart__add-cards"></div>
					{products}
					<div className="cart__buttons">
						<button className="cart__button">CLEAR SHOPPING CART</button>
						<button id="continue" className="cart__button">
							CONTINUE SHOPPING
						</button>
					</div>
				</div>

				<div className="cart__adress">
					<div className="cart__form">
						<h2 className="cert__heading">SHIPPING ADRESS</h2>
						<input
							type="text"
							className="cart__input"
							placeholder="Bangladesh"
						/>
						<input
							type="text"
							className="cart__input"
							placeholder="State"
						/>
						<input
							type="text"
							className="cart__input"
							placeholder="Postcode / Zip"
						/>
						<button className="cart__button cart__button_adress">
							GET A QOUTE
						</button>
					</div>

					<div className="cart__checkout">
						<p className="cart__sub-total">
							SUB TOTAL
							<span className="cart__sub-total_price">
								${subTotal.toFixed(2)}
							</span>
						</p>
						<p className="cart__grand-total">
							GRAND TOTAL
							<span className="cart__grand-total_price">
								{" "}
								${grandTotal.toFixed(2)}
							</span>
						</p>
						<hr className="cart__line" />
						<button className="cart__button cart__button_checkaut">
							PROCEED TO CHECKOUT
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Cart;
