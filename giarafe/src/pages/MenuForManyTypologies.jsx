import BottonJar from "../components/BottonJar";
import CardSectionMenu from "../components/CardSectionMenu";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { useDispatch, useSelector } from "react-redux";
import { allProducts, getProductsFromApi } from "../reducers/menuReducer";
import { useEffect } from "react";
import "../style.css";

const MenuForManyTypologies = (props) => {
	let gatto = true;
	let completeProducts = useSelector(allProducts);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductsFromApi());
	}, []);
	return (
		<>
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
				<h2 className="bg-red p-2 d-flex align-items-center py-3 text-light mb-0">
					{/*Puoi modificare la rotta di destinazione del pulsante BottonJar,
				 modificando l'info della prop routePage  */}
					<BottonJar routePage={"/"} />

					<div>{props.labelMenu}</div>
				</h2>

				<Tabs defaultActiveKey={props.firstProduct} id="fill-tab-example" fill>
					<Tab eventKey={props.firstProduct} title={props.firstProduct}>
						<h2 className="bg-red p-2 text-light">{props.firstProduct}</h2>
						<div className="d-flex flex-column align-items-center">
							{completeProducts &&
								completeProducts.products &&
								completeProducts.products
									.filter((t) => t.typology === props.firstTypology)
									.map((item) => (
										<CardSectionMenu
											key={item.productName}
											product={item.productName}
											price={item.price}
											img={item.img}
										/>
									))}
						</div>
					</Tab>
					<Tab eventKey={props.secondProduct} title={props.secondProduct}>
						<h2 className="bg-red p-2 text-light">{props.secondProduct}</h2>
						<div className="d-flex flex-column align-items-center">
							{completeProducts &&
								completeProducts.products &&
								completeProducts.products
									.filter((t) => t.typology === props.secondTypology)
									.map((item) => (
										<CardSectionMenu
											key={item.productName}
											product={item.productName}
											price={item.price}
											img={item.img}
										/>
									))}
						</div>
					</Tab>
					{props.thirdProduct && props.thirdTypology && (
						<Tab eventKey={props.thirdProduct} title={props.thirdProduct}>
							<h2 className="bg-red p-2 text-light">{props.thirdProduct}</h2>
							<div className="d-flex flex-column align-items-center">
								{completeProducts &&
									completeProducts.products &&
									completeProducts.products
										.filter((t) => t.typology === props.thirdTypology)
										.map((item) => (
											<CardSectionMenu
												key={item.productName}
												product={item.productName}
												price={item.price}
												img={item.img}
											/>
										))}
							</div>
							<h2 className="bg-red p-2 mb-0 text-light">
								Amaro della casa o Limoncello 3,50€
							</h2>
						</Tab>
					)}
				</Tabs>
			</div>
		</>
	);
};
export default MenuForManyTypologies;
