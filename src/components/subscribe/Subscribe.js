import women_face from "./women_face.png"
import "./style.css"

function Subscribe() {
	return (
		<section className="subscribe">
		<div className="subscribe_main center">
			<div className="subscribe__item1">
				<img src={women_face} alt="" />
				<p>
					“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
					<span>a pulvinar purus condimentum</span>“
				</p>
			</div>
			<div className="subscribe__item2">
				<h4>SUBSCRIBE</h4>
				<p>FOR OUR NEWLETTER AND PROMOTION</p>
				<form>
					<input type="email" placeholder="Enter Your Email" required />
					<button>Subscribe</button>
				</form>
			</div>
		</div>
	</section>
	);
}

export default Subscribe;