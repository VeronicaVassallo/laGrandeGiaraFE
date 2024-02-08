import JumbotronMenu from "../components/JumbotronMenu";
import BottonJar from "../components/BottonJar";
import CardSectionMenu from "../components/CardSectionMenu";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { useDispatch, useSelector } from "react-redux";
import { allProducts, getProductsFromApi } from "../reducers/menuReducer";
import { useEffect } from "react";
import "../style.css";

const MenuBibite = () => {
	let completeProducts = useSelector(allProducts);

	const dispatch = useDispatch();

	useEffect(() => {
		debugger;
		dispatch(getProductsFromApi());
	}, []);
	return (
		<>
			<div className="bg_homepage">
				<div className="jumbotronMenuLabel jumbotronMenuImg2 text-center">
					<JumbotronMenu />
				</div>
				<h2 className="bg-red p-2 d-flex align-items-center py-3 text-light mb-0">
					{/*Puoi modificare la rotta di destinazione del pulsante BottonJar,
				 modificando l'info della prop routePage  */}
					<BottonJar routePage={"/"} />

					<div>Le nostre bibite:</div>
				</h2>

				<Tabs defaultActiveKey="Bibite" id="fill-tab-example" fill>
					<Tab eventKey="Bibite" title="Bibite">
						<h2 className="bg-red p-2 text-light">Bibite</h2>
						<div className="d-flex flex-column align-items-center">
							{completeProducts &&
								completeProducts.products &&
								completeProducts.products
									.filter((t) => t.typology === "bibita")
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
					<Tab eventKey="Birre" title="Birre">
						<h2 className="bg-red p-2 text-light">Birre</h2>
						<div className="d-flex flex-column align-items-center">
							{completeProducts &&
								completeProducts.products &&
								completeProducts.products
									.filter((t) => t.typology === "birra")
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
					<Tab eventKey="Vini" title="Vini">
						<h2 className="bg-red p-2 text-light">Vini</h2>
						<div className="d-flex flex-column align-items-center">
							{completeProducts &&
								completeProducts.products &&
								completeProducts.products
									.filter((t) => t.typology === "vino")
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
				</Tabs>
			</div>
		</>
	);
};
export default MenuBibite;
