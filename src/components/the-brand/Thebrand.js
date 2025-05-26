import "./style.css"
import thebrand from "./img_thebrand.svg"

function Thebrand() {
	return ( 
		<section>
			<div className="thebrand center">
				<img className="hidden" src={thebrand} alt="men" />
				<div className="thebrand__title">
					<h1>the brand</h1>
					<h2>of luxurious <span>fashion</span></h2>
				</div>
				
			</div>
		</section>
	);
}

export default Thebrand;