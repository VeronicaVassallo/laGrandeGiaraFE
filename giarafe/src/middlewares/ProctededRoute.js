import { Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

export const isAuth = () => {
	return JSON.parse(localStorage.getItem("loggedInUser"));
};

const ProtectedRoutes = () => {
	const auth = isAuth();

	return auth ? <Outlet /> : <LoginPage />;
};

export default ProtectedRoutes;
