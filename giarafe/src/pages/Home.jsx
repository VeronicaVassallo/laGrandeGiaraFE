import NavbarComponent from "../components/NavbarComponent";
import Jumbotron from "../components/Jumbotron";
import MenuSection from "../components/MenuSection";
import "../style.css";

const Home = () => {
	return (
		<div className="bg_homepage">
			<p className="text-center">
				<i class="bi bi-geo-alt"></i> {""} Via Pietro Nenni 69 (90014),
				Casteldaccia, PA
			</p>
			<p className="text-center">
				<i class="bi bi-clock"></i> {""}Da lunedì alla domenica (chiuso il
				martedì)
			</p>
			<p className="text-center">
				<i className="bi bi-telephone"></i>
				{""}+39 327 1649057
			</p>
			<Jumbotron />
			<h1 className="bg-danger text-center text-light">Menù</h1>

			<MenuSection />
		</div>
	);
};

export default Home;
