import { Link } from "react-router-dom";
import "../style.css";

const CardMenu = (prop) => {
	return (
		<div className="menu">
			<Link className="text-decoration-none" to={prop.routeCard}>
				<h4 className="card__title">{prop.tipology}</h4>
				<img src={prop.img} alt={prop.altImg} />
			</Link>
		</div>
	);
};

export default CardMenu;
