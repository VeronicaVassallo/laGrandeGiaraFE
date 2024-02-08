import BottonJar from "../components/BottonJar";
import CardSectionMenu from "../components/CardSectionMenu";
import { useDispatch, useSelector } from "react-redux";
import { allProducts, getProductsFromApi } from "../reducers/menuReducer";
import "../style.css";
import { useEffect } from "react";
const MenuPage = (props) => {
	let completeProducts = useSelector(allProducts);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductsFromApi());
	}, []);
	return (
		<div className="bg_homepage">
			<div className="jumbotronMenu  text-center">
				<img src={props.img} alt="img_jumbotron" />
				<div className="positionLabelPageMenu">
					<h1 className="title_jumbotron text-light ">
						La Pizzeria La Grande Giara
						<br />
						<span> di Vassallo Domenico</span>
					</h1>
				</div>
			</div>
			<h2 className="bg-red p-2 d-flex align-items-center py-3 text-light">
				{/*Puoi modificare la rotta di destinazione del pulsante BottonJar,
				 modificando l'info della prop routePage  img titleMenu typologyProduct*/}
				<BottonJar routePage={"/"} />

				<div>{props.titleMenu}</div>
			</h2>
			<div className="d-flex flex-column align-items-center mb-0">
				{completeProducts &&
					completeProducts.products &&
					completeProducts.products
						.filter((t) => t.typology === props.typologyProduct)
						.map((singleProduct) => (
							<CardSectionMenu
								key={singleProduct.productName}
								product={singleProduct.productName}
								ingredients={singleProduct.ingredients}
								price={singleProduct.price}
								img={singleProduct.img}
							/>
						))}
			</div>
		</div>
	);
};
export default MenuPage;
