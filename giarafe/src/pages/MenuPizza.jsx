import JumbotronMenu from "../components/JumbotronMenu";
import { pizzes } from "../products/pizza";
import BottonJar from "../components/BottonJar";
import CardSectionMenu from "../components/CardSectionMenu";
import "../style.css";
const MenuPizza = () => {
	return (
		<div className="bg_homepage">
			<div className="jumbotronMenu text-center">
				<JumbotronMenu />
			</div>
			<h2 className="bg-danger p-2 d-flex align-items-center py-3">
				{/*Puoi modificare la rotta di destinazione del pulsante BottonJar,
				 modificando l'info della prop routePage  */}
				<BottonJar routePage={"/"} />

				<div>Le nostre pizze:</div>
			</h2>
			<div className="d-flex flex-column align-items-center mb-5">
				{pizzes.map((pizza) => (
					<CardSectionMenu
						key={pizza.namePizza}
						product={pizza.namePizza}
						ingredients={pizza.ingredients}
						prize={pizza.prize}
						img={pizza.img}
					/>
				))}
			</div>
		</div>
	);
};
export default MenuPizza;
