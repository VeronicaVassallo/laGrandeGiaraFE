import NavbarComponent from "../components/NavbarComponent";
import Jumbotron from "../components/Jumbotron";
import MenuSection from "../components/MenuSection";

const Home = () => {
	return (
		<div>
			<p className="text-center">
				<i class="bi bi-geo-alt"></i> {""} Via Pietro Nenni 69 (90014),
				Casteldaccia
			</p>
			<p className="text-center">
				<i class="bi bi-clock"></i> {""}Da lunedi alla domenica (chiuso il
				martedì)
			</p>
			<p className="text-center">
				<i className="bi bi-telephone"></i>
				{""} 327 1649057
			</p>
			<Jumbotron />
			<NavbarComponent />
			<h1>Menù</h1>

			<MenuSection />
		</div>
	);
};

export default Home;
