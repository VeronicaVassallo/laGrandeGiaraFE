import NavbarComponent from "../components/NavbarComponent";
import Jumbotron from "../components/Jumbotron";
import MenuSection from "../components/MenuSection";
const Home = () => {
	return (
		<div>
			<p>15:00-00:00, chiuso il martedì </p>
			<Jumbotron />
			<NavbarComponent />
			<h1>Home</h1>
			<MenuSection />
		</div>
	);
};

export default Home;
