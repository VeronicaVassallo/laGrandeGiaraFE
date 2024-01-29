import JumbotronMenu from "../components/JumbotronMenu";
import { drinks, beers, wine } from "../products/drinks";
import BottonJar from "../components/BottonJar";
import CardSectionMenu from "../components/CardSectionMenu";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../style.css";

const MenuBibite = () => {
	return (
		<>
			<div className="bg_homepage">
				<div className="jumbotronMenu jumbotronMenuImg2 text-center">
					<JumbotronMenu />
				</div>
				<h2 className="bg-red p-2 d-flex align-items-center py-3 text-light">
					{/*Puoi modificare la rotta di destinazione del pulsante BottonJar,
				 modificando l'info della prop routePage  */}
					<BottonJar routePage={"/"} />

					<div>Le nostre bibite:</div>
				</h2>

				<Tabs
					defaultActiveKey="Bibite"
					id="fill-tab-example"
					className="mb-3"
					fill
				>
					<Tab eventKey="Bibite" title="Bibite">
						<h2 className="bg-red p-2 text-light">Bibite</h2>
						<div className="d-flex flex-column align-items-center">
							{drinks.map((item) => (
								<CardSectionMenu
									key={item.nameProducts}
									product={item.nameProducts}
									prize={item.prize}
									img={item.img}
								/>
							))}
						</div>
					</Tab>
					<Tab eventKey="Birre" title="Birre">
						<h2 className="bg-red p-2 text-light">Birre</h2>
						<div className="d-flex flex-column align-items-center">
							{beers.map((item) => (
								<CardSectionMenu
									key={item.nameProducts}
									product={item.nameProducts}
									prize={item.prize}
									img={item.img}
								/>
							))}
						</div>
					</Tab>
					<Tab eventKey="Vini" title="Vini">
						<h2 className="bg-red p-2 text-light">Vini</h2>
						<div className="d-flex flex-column align-items-center">
							{wine.map((item) => (
								<CardSectionMenu
									key={item.nameProducts}
									product={item.nameProducts}
									prize={item.prize}
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
