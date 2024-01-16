import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MenuPizza from "./pages/MenuPizza";
import MenuAntipasti from "./pages/MenuAntipasti";
import MenuPrimi from "./pages/MenuPrimi";
import ErrorPage from "./pages/ErrorPage";
import MenuBibite from "./pages/MenuBibite";
function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/menuAntipasti" element={<MenuAntipasti />} />
					<Route path="/menuPizza" element={<MenuPizza />} />
					<Route path="/menuPrimi" element={<MenuPrimi />} />
					<Route path="/menuBibite" element={<MenuBibite />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
