import contatti from "../assets/contatti.jpg";

export const Footer = () => {
	return (
		<footer className="py-3 containerFooter text-center">
			<div>
				<div>
					<h5 className="text-uppercase">Contatti:</h5>
					<p className="text-center">
						<i className="bi bi-geo-alt"></i> {""} Via Pietro Nenni 69 (90014),
						Casteldaccia, PA
					</p>
					<p className="text-center">
						<i className="bi bi-clock"></i> {""}Da lunedì alla domenica (chiuso
						il martedì)
					</p>
					<p className="text-center">
						<i className="bi bi-telephone"></i>
						{""}+39 327 1649057
					</p>
				</div>
			</div>
		</footer>
	);
};
