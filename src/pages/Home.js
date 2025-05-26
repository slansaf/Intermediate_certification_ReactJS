import Black from "../components/black/Black";
import Cardmenu from "../components/cardmenu/Cardmenu";
import Fetureditems from "../components/fetured-items/Fetureditems";
import Thebrand from "../components/the-brand/Thebrand";

const Home = () => {
	return (
		<>
			<Thebrand />
			<Cardmenu />
			<Fetureditems />
			<Black />
		</>
	);
};

export default Home;
