import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { isAuth } from "./middlewares/ProctededRoute";
const useSession = () => {
	const session = isAuth();
	const decodeSession = session ? jwtDecode(session) : null;

	const navigate = useNavigate();
	const checkTokenExpirationTime = () => {
		const convertUnixDateToMillisecond = decodedSession.exp * 1000;
		const expirationDate = new Date(convertUnixDateToMillisecond);
		const currentDate = new Date();
		if (expirationDate < currentDate) {
			localStorage.clear();
		}
		checkTokenExpirationTime();
	};

	useEffect(() => {
		if (!session) {
			navigate("/", { replace: true });
		}
	}, [navigate, session]);
	return decodeSession;
};
export default useSession;
