import Jumbotron from "../components/Jumbotron";
import MenuSection from "../components/MenuSection";
import InfoAllergen from "../components/InfoAllergen";
import { Footer } from "../components/Footer";
import "../style.css";

const Home = () => {
	return (
		<div className="bg_homepage text-light">
			<Jumbotron />

			<h1 className="bg-red text-center text-light">Menù</h1>
			<div className="d-flex justify-content-center">
				<div className="mx-3 navMenu">Contatti</div>
				<div className="mx-3 navMenu">Eventi</div>
				<InfoAllergen />
			</div>

			<MenuSection />
			<Footer />
		</div>
	);
};

export default Home;
