import JumbotronMenu from "../components/JumbotronMenu";
import { pizzes } from "../products/pizza";
import BottonJar from "../components/BottonJar";
import CardSectionMenu from "../components/CardSectionMenu";

//redux
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { allProducts, getProductsFromApi } from "../reducers/menuReducer";
import "../style.css";
import { useEffect } from "react";
const MenuPizza = () => {
	const completeProducts = useSelector(allProducts);

	const dispatch = useDispatch();
	console.log("ciao", completeProducts);

	useEffect(() => {
		dispatch(getProductsFromApi());
	}, []);
	return (
		<div className="bg_homepage">
			<div className="jumbotronMenu jumbotronMenuImg1 text-center">
				<JumbotronMenu />
			</div>
			<h2 className="bg-red p-2 d-flex align-items-center py-3 text-light">
				{/*Puoi modificare la rotta di destinazione del pulsante BottonJar,
				 modificando l'info della prop routePage  */}
				<BottonJar routePage={"/"} />

				<div>Le nostre pizze:</div>
			</h2>
			<div className="d-flex flex-column align-items-center mb-0">
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
