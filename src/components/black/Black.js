import "./style.css"
import truck from "./truck.svg"
import percent from "./percent.svg"
import crown from "./crown.svg"

function Black() {
	return (
		<section className="black">
		<div className="black_items center">
			<div className="black__item1 black_main">
				<img src={truck} alt="truck" />
				<h4>Free Delivery</h4>
				<p>
					Worldwide delivery on all. Authorit tively morph
					next-generation innov tion with extensive models.
				</p>
			</div>
			<div className="black__item2 black_main">
				<img src={percent} alt="percent" />
				<h4>Sales & discounts</h4>
				<p>
					Worldwide delivery on all. Authorit tively morph
					next-generation innov tion with extensive models.
				</p>
			</div>
			<div className="black__item3 black_main">
				<img src={crown} alt="crown" />
				<h4>Quality assurance</h4>
				<p>
					Worldwide delivery on all. Authorit tively morph
					next-generation innov tion with extensive models.
				</p>
			</div>
		</div>
	</section>

	);
}

export default Black;