import pizza from "../assets/jumbotron2.jpg";
import primipiatti from "../assets/primipiatti1.jpg";
import antipasti from "../assets/antipasti2.jpg";
import bibite from "../assets/bibite.jpg";
import CardMenu from "./CardMenu";
import "../style.css";

const MenuSection = () => {
	return (
		<div className="d-flex flex-lg-row justify-content-lg-around flex-column align-items-center pb-5">
			<CardMenu
				routeCard={"/menuAntipasti"}
				tipology={"Antipasti"}
				img={antipasti}
				altImg={"img_appetizers"}
			/>
			<CardMenu
				routeCard={"/menuPizza"}
				tipology={"Pizze"}
				img={pizza}
				altImg={"img_pizza"}
			/>
			<CardMenu
				routeCard={"/menuPrimi"}
				tipology={"Primi piatti"}
				img={primipiatti}
				altImg={"img_first_dishes"}
			/>
			<CardMenu
				routeCard={"/menuBibite"}
				tipology={"Bibite"}
				img={bibite}
				altImg={"img_drinks"}
			/>
		</div>
	);
};

export default MenuSection;
