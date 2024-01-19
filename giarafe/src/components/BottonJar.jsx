import "../style.css";
import { Link } from "react-router-dom";

const BottonJar = (prop) => {
	return (
		<div className="mx-5 boxJar">
			<div className="headJar"></div>
			<div className="sideJarR"></div>
			<div className="sideJarL"></div>
			<div className="sideJarWhiteR"></div>
			<div className="sideJarWhiteL"></div>
			<div className="bodyJar">
				<Link className="goBack" to={prop.routePage}>
					<i className="bi bi-arrow-left-circle"></i>
				</Link>
			</div>
		</div>
	);
};

export default BottonJar;
