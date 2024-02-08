import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MenuAntipasti from "./pages/MenuAntipasti";
import ErrorPage from "./pages/ErrorPage";
import MenuBibite from "./pages/MenuBibite";
import LoginPage from "./pages/LoginPage";
import Backoffice from "./pages/Backoffice";

import MenuPage from "./pages/MenuPage";
import pizza from "../src/assets/pizzaA.jpg";
function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route
						path="/menuAntipastiRustici"
						element={
							<MenuPage
								img={pizza}
								titleMenu={"I nostri Antipasti rustici:"}
								typologyProduct={"antipasti rustici"}
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
								img={pizza}
								titleMenu={"I nostri Primi:"}
								typologyProduct={"primi"}
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
