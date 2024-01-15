import { Link } from "react-router-dom";
const ErrorPage = () => {
	return (
		<div>
			<h1>OPSSS!La pagina non esiste -__-</h1>
			<p>
				<Link to={"/"}>Torna all'home</Link>
			</p>
		</div>
	);
};

export default ErrorPage;
