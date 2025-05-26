import "./style.css"

function Cardmenu() {
	return (
		<section className="cards_menu center">
			<div className="cards_menu_three">
				<div className="cards_menu__women">
					30% OFF <br /><span>FOR WOMEN</span>
				</div>
				<div className="cards_menu__men">
					HOT DEAL <br /><span>FOR MEN</span>
				</div>
				<div className="cards_menu__kids">
					NEW ARRIVALS <br /><span> FOR KIDS</span>
				</div>
			</div>
			<div>
				<div className="cards_menu__accesories">
					LUXIROUS & TRENDY <br /><span>ACCESORIES</span>
				</div>
			</div>
		</section>
	);
}

export default Cardmenu;