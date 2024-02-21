import BottonJar from "../components/BottonJar";
import { useNavigate } from "react-router-dom";
import "../style.css";
import env from "react-dotenv";
import { useState } from "react";
const LoginPage = () => {
	const navigate = useNavigate();
	const [loginData, setLoginData] = useState({});
	const [dataToken, setDataToken] = useState(null);

	const handleInpuntChange = (e) => {
		const { name, value } = e.target;

		setLoginData({
			...loginData,
			[name]: value,
		});
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(
				`${env.REACT_APP_SERVER_BASE_URL}/loginAdmin`,
				{
					headers: { "Content-type": "application/json" },
					method: "POST",
					body: JSON.stringify(loginData),
				}
			);
			const data = await response.json();

			if (data.token) {
				localStorage.setItem("loggedInUser", JSON.stringify(data.token));
				navigate("/backoffice");
			} else {
				alert("Il nome utente o la password non sono correte");
			}
			setDataToken(data);
		} catch (error) {
			console.log(`Error: ${error}`);
		}
	};
	return (
		<div className="loginPageSize ">
			<div>
				<div className="d-flex align-items-beseline pt-3 bg-red mb-5">
					<BottonJar routePage={"/"} />
					<h1 className="text-center p-4">Login!</h1>
				</div>

				<div>
					<form
						className="cardLogin d-flex flex-column p-3 m-auto"
						onSubmit={onSubmit}
					>
						<label htmlFor="nomeUtente"> Nome utente:</label>
						<input
							type="text"
							name="nameAdmin"
							id="nameAdmin"
							required
							onChange={handleInpuntChange}
						/>
						<label htmlFor="nomeUtente"> Password:</label>
						<input
							type="password"
							name="password"
							id="password"
							required
							onChange={handleInpuntChange}
						/>
						<button
							type="submit"
							className="my-4 mx-auto text-decoration-none buttonLogin text-center pt-2"
						>
							Accedi
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
