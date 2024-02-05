import JumbotronMenu from "../components/JumbotronMenu";
import BottonJar from "../components/BottonJar";
import CardSectionMenu from "../components/CardSectionMenu";

//redux
import { useDispatch, useSelector } from "react-redux";
import { allProducts, getProductsFromApi } from "../reducers/menuReducer";
import "../style.css";
import { useEffect, useState } from "react";

const MenuPrimi = () => {
	const [justPrimi, setJustPrimi] = useState([]);
	const completeProducts = useSelector(allProducts);

	const primiFiltered = async () => {
		const filtered = await completeProducts.products.filter(
			(t) => t.typology === "primi"
		);
		setJustPrimi(filtered);
	};
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductsFromApi());
		primiFiltered();
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

				<div>I nostri Primi Piatti:</div>
			</h2>
			<div className="d-flex flex-column align-items-center mb-0">
				{justPrimi &&
					justPrimi.map((pizza) => (
						<CardSectionMenu
							key={pizza.productName}
							product={pizza.productName}
							ingredients={pizza.ingredients}
							price={pizza.price}
							img={pizza.img}
						/>
					))}
			</div>
		</div>
	);
};
export default MenuPrimi;
