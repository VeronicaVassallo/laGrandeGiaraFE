import Carousel from "react-bootstrap/Carousel";
import "../style.css";
const jumbotronMenu = () => {
	return (
		<Carousel.Caption>
			<h1 className="title_jumbotron text-light pb-5">
				La Pizzeria La Grande Giara
				<br />
				<span> di Vassallo Domenico</span>
			</h1>
		</Carousel.Caption>
	);
};
export default jumbotronMenu;
