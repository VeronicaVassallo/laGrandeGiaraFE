import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import MenuBibite from "./pages/MenuBibite";
import LoginPage from "./pages/LoginPage";
import Backoffice from "./pages/Backoffice";
import contorno from "../src/assets/patateAlForno2.jpg";
import primo from "../src/assets/primipiatti2.jpg";
import secondo from "../src/assets/orata.jpg";
import dessert from "../src/assets/parfait2.jpg";

import MenuPage from "./pages/MenuPage";
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
							<MenuPage
								img={pizza}
								titleMenu={"I nostri Antipasti:"}
								typologyProduct={"antipasti rustici"}
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
					<Route path="/menuBibite" element={<MenuBibite />} />
					<Route path="/admin" element={<LoginPage />} />
					<Route path="/backoffice" element={<Backoffice />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
