import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./css/style_brand.css";
import "./css/reset_brand.css";
import Header from "./components/header/Header";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ScrollToTop from "./utils/scrollToTop";
import Product from "./pages/Product";
import { data } from "./helpers/cardList";
import Cart from "./pages/Cart";
import Registration from "./pages/Registration";

function App() {
	return (
		<div className="App">
			<Router>
				<ScrollToTop />
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart data={data} />} />
					<Route path="/registration" element={<Registration />} />
					{/* <Route path="/catalog" element={<Catalog data={data} />} /> */}
					<Route path="/page/:pageNumber" element={<Catalog data={data} />} />

					{/* <Route path="/product" element={<Product />} /> */}
					<Route path="/articles/:id" element={<Product data={data} />} />
			
				</Routes>
				<Subscribe />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
