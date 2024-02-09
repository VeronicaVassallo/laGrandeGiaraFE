import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import Backoffice from "./pages/Backoffice";
import contorno from "../src/assets/patateAlForno2.jpg";
import primo from "../src/assets/primipiatti2.jpg";
import secondo from "../src/assets/orata.jpg";
import dessert from "../src/assets/parfait2.jpg";
import bibite from "../src/assets/jumbotron0.jpg";
import antipasti from "../src/assets/gamberi2.jpg";
import schiacciata from "../src/assets/schiacciata.jpg";

import MenuPage from "./pages/MenuPage";
import MenuForManyTypologies from "./pages/MenuForManyTypologies";
import pizza from "../src/assets/pizzaA.jpg";
function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route
						path="/menuAntipasti"
						element={
							<MenuForManyTypologies
								img={antipasti}
								labelMenu={"I nostri Antipasti: "}
								firstProduct={"Antipasti Rustici"}
								firstTypology={"antipasti rustici"}
								secondProduct={"Antipasti di Mare"}
								secondTypology={"antipasti di mare"}
								thirdProduct={null}
								thirdTypology={null}
							/>
						}
					/>
					<Route
						path="/menuContorni"
						element={
							<MenuPage
								img={contorno}
								titleMenu={"I nostri Contorni:"}
								typologyProduct={"contorno"}
							/>
						}
					/>
					<Route
						path="/menuPizza"
						element={
							<MenuPage
								img={pizza}
								titleMenu={"Le nostre pizze:"}
								typologyProduct={"pizza"}
							/>
						}
					/>
					<Route
						path="/menuSchiacciateEmezzelune"
						element={
							<MenuForManyTypologies
								img={schiacciata}
								labelMenu={"Le nostre Schiacciate e Mezzelune: "}
								firstProduct={"Schiacciate"}
								firstTypology={"schiacciate"}
								secondProduct={"Mezzelune"}
								secondTypology={"mezzelune"}
								thirdProduct={null}
								thirdTypology={null}
							/>
						}
					/>
					<Route
						path="/menuPrimi"
						element={
							<MenuPage
								img={primo}
								titleMenu={"I nostri Primi:"}
								typologyProduct={"primi"}
							/>
						}
					/>
					<Route
						path="/menuSecondi"
						element={
							<MenuPage
								img={secondo}
								titleMenu={"I nostri Secondi:"}
								typologyProduct={"secondi"}
							/>
						}
					/>
					<Route
						path="/menuDessert"
						element={
							<MenuPage
								img={dessert}
								titleMenu={"I nostri Dessert:"}
								typologyProduct={"dessert"}
							/>
						}
					/>
					<Route
						path="/menuBibite"
						element={
							<MenuForManyTypologies
								img={bibite}
								labelMenu={"Le nostre Bibite: "}
								firstProduct={"Bibite"}
								firstTypology={"bibita"}
								secondProduct={"Birre"}
								secondTypology={"birra"}
								thirdProduct={"Vini"}
								thirdTypology={"vino"}
							/>
						}
					/>
					<Route path="/admin" element={<LoginPage />} />
					<Route path="/backoffice" element={<Backoffice />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
