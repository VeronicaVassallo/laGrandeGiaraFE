import Jumbotron from "../components/Jumbotron";
import MenuSection from "../components/MenuSection";
import InfoAllergen from "../components/InfoAllergen";
import { Footer } from "../components/Footer";
import EventSection from "../components/EventSection";
import "../style.css";

const Home = () => {
	return (
		<div className="bg_homepage">
			<Jumbotron />

			<h1 className="bg-red text-center text-light">Menù</h1>
			<div className="d-flex justify-content-center">
				<div className="mx-3">
					<a className="text-decoration-none navMenu" href="#contatti">
						Contatti
					</a>{" "}
				</div>
				<div className="mx-3">
					<a className="text-decoration-none navMenu" href="#eventi">
						Eventi
					</a>{" "}
				</div>
				<InfoAllergen />
			</div>

			<MenuSection />
			<EventSection />
			<Footer />
		</div>
	);
};

export default Home;
