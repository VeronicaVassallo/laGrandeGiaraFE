import JumbotronMenu from "../components/JumbotronMenu";
import MenuGeneric from "../components/MenuGeneric";
import "../style.css";
const MenuPizza = () => {
	return (
		<div className="bg_homepage">
			<div className="jumbotronMenu jumbotronMenuImg1 text-center">
				<JumbotronMenu />
			</div>
			<MenuGeneric titleMenu={"Le nostre Pizze:"} typologyProduct={"pizza"} />
		</div>
	);
};
export default MenuPizza;
