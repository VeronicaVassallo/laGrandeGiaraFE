import BottonJar from "../components/BottonJar";
import CardSectionMenu from "../components/CardSectionMenu";

import { useDispatch, useSelector } from "react-redux";
import { allProducts, getProductsFromApi } from "../reducers/menuReducer";

import "../style.css";
import { useEffect } from "react";

const MenuGeneric = (props) => {
	let completeProducts = useSelector(allProducts);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductsFromApi()).then(() => {});
	}, []);
	return (
		<>
			<h2 className="bg-red p-2 d-flex align-items-center py-3 text-light">
				{/*Puoi modificare la rotta di destinazione del pulsante BottonJar,
				 modificando l'info della prop routePage  */}
				<BottonJar routePage={"/"} />

				<div>{props.titleMenu}</div>
			</h2>
			<div className="d-flex flex-column align-items-center mb-0">
				{completeProducts &&
					completeProducts.products &&
					completeProducts.products
						.filter((t) => t.typology === props.typologyProduct)
						.map((pizza) => (
							<CardSectionMenu
								key={pizza.productName}
								product={pizza.productName}
								ingredients={pizza.ingredients}
								price={pizza.price}
								img={pizza.img}
							/>
						))}
			</div>
		</>
	);
};

export default MenuGeneric;
