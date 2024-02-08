import pizza from "../assets/jumbotron2.jpg";
import primipiatti from "../assets/primipiatti1.jpg";
import antipasti from "../assets/antipasti2.jpg";
import bibite from "../assets/jumbotron0.jpg";
import CardMenu from "./CardMenu";
import contorno from "../assets/patateAlForno.jpg";
import dessert from "../assets/parfait.jpg";
import schiaccite from "../assets/schiacciate.jpg";
import secondi from "../assets/pescespada.jpg";
import "../style.css";

const MenuSection = () => {
	return (
		<div className="d-flex flex-wrap flex-lg-row justify-content-lg-around flex-column align-items-center pb-5">
			<CardMenu
				routeCard={"/menuAntipastiRustici"}
				tipology={"Antipasti"}
				img={antipasti}
				altImg={"img_appetizers"}
			/>
			<CardMenu
				routeCard={"/menuContorni"}
				tipology={"Contorni"}
				img={contorno}
				altImg={"img_sideDish"}
			/>
			<CardMenu
				routeCard={"/menuPizza"}
				tipology={"Pizze"}
				img={pizza}
				altImg={"img_pizza"}
			/>
			<CardMenu
				routeCard={"/menuSchiacciate"}
				tipology={"Schiacciate e Mezzelune"}
				img={schiaccite}
				altImg={"img_schiacciate"}
			/>
			<CardMenu
				routeCard={"/menuPrimi"}
				tipology={"Primi piatti"}
				img={primipiatti}
				altImg={"img_first_dishes"}
			/>
			<CardMenu
				routeCard={"/menuSecondi"}
				tipology={"Secondi"}
				img={secondi}
				altImg={"img_second_dishes"}
			/>
			<CardMenu
				routeCard={"/menuDessert"}
				tipology={"Dessert"}
				img={dessert}
				altImg={"img_dessert"}
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
