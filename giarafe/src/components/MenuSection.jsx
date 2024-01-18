import pizza from "../assets/jumbotron2.jpg";
import primipiatti from "../assets/primipiatti1.jpg";
import antipasti from "../assets/antipasti2.jpg";
import bibite from "../assets/bibite.jpg";
import { Link } from "react-router-dom";
import "../style.css";

const MenuSection = () => {
	return (
		<div className="d-flex flex-lg-row justify-content-lg-around flex-column align-items-center mb-5">
			<div className="menu">
				<Link className="text-decoration-none" to={"/menuAntipasti"}>
					<h4 className="card__title ">Antipasti</h4>
					<img src={antipasti} alt="pizza" />
				</Link>
			</div>

			<div className="menu">
				<Link className="text-decoration-none" to={"/menuPizza"}>
					<h4 className="card__title">Pizze</h4>
					<img src={pizza} alt="pizza" />
				</Link>
			</div>
			<div className="menu">
				<Link className="text-decoration-none" to={"/menuPrimi"}>
					<h4 className="card__title">Primi piatti</h4>
					<img src={primipiatti} alt="pizza" />
				</Link>
			</div>
			<div className="menu">
				<Link className="text-decoration-none" to={"/menuBibite"}>
					<h4 className="card__title">Bibite</h4>
					<img src={bibite} alt="pizza" />
				</Link>
			</div>
		</div>
	);
};

export default MenuSection;
