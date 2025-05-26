import AddButton from "../addButton/AddButton";

const Card = ({ title, img, text, price, id, count }) => {
	const addProduct = () => {
		let cart = JSON.parse(localStorage.getItem("cart")) || [];
		const product = { id, count, title, img, price };
		cart.push(product);
		localStorage.setItem("cart", JSON.stringify(cart));
	};

	return (
		<div className="item1 items">
			<div className="items__img">
				<img src={img} alt={title} />
				<AddButton
					key={id}
					addProduct={addProduct}
					id={id}
				/>
			</div>

			<div className="card_items">
				<h3 className="card_items__head">{title}</h3>
				<p className="card_items__text">{text}</p>
				<p className="card_items__price">${price}</p>
			</div>
		</div>
	);
};

export default Card;
