const AddButton = ({ addProduct, id }) => {
	return (
		<button
			onClick={() => {
				addProduct(id);
			}}
			className="hiden_button"
		>
			Add to Cart
		</button>
	);
};

export default AddButton;
