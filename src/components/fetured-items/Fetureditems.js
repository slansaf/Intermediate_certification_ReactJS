
import "./style.css";
import {data} from "./../../helpers/cardList";
import CardList from "../cardList/CardList";

function Fetureditems() {
	const cardsPerPage = 6
	return (
		<section className="fetured_items center">
			<h2 className="fetured_items__head">Fetured Items</h2>
			<p className="fetured_items__text">
				Shop for items based on what we featured in this week
			</p>
			<CardList cardsPerPage={cardsPerPage} data={data} />
			<button className="fetured_items__button">Browse All Product</button>
		</section>
	);
}

export default Fetureditems;
