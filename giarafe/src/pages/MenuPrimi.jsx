import JumbotronMenu from "../components/JumbotronMenu";
import MenuGeneric from "../components/MenuGeneric";
import "../style.css";
const MenuPrimi = () => {
	return (
		<div className="bg_homepage">
			<div className="jumbotronMenu jumbotronMenuImg1 text-center">
				<JumbotronMenu />
			</div>
			<MenuGeneric titleMenu={"I nostri Primi:"} typologyProduct={"primi"} />
		</div>
	);
};
export default MenuPrimi;
