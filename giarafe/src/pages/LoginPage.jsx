import BottonJar from "../components/BottonJar";
import { Link } from "react-router-dom";
import "../style.css";
const LoginPage = () => {
	return (
		<div className="loginPageSize ">
			<div>
				<div className="d-flex align-items-beseline pt-3 bg-red mb-5">
					<BottonJar routePage={"/"} />
					<h1 className="text-center p-4">Login!</h1>
				</div>

				<div>
					<form className="cardLogin d-flex flex-column p-3 m-auto">
						<label htmlFor="nomeUtente"> Nome utente:</label>
						<input type="text" name="text" id="text" />
						<label htmlFor="nomeUtente"> Password:</label>
						<input type="password" name="password" id="password" />
						<Link
							className="my-4 mx-auto text-decoration-none buttonLogin text-center pt-2"
							to={"/backoffice"}
						>
							Accedi
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
