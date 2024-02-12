import contatti from "../assets/contatti.jpg";

export const Footer = () => {
	return (
		<>
			<h1 id="contatti" className="bg-red text-center text-light mb-0">
				Contatti :
			</h1>
			<footer className="py-3 containerFooter text-center text-light">
				<div className="d-flex align-items-center flex-column-reverse flex-lg-row justify-content-lg-center">
					<div>
						<h5 className="text-uppercase">
							<i class="bi bi-facebook"></i>{" "}
							<i class="bi bi-instagram">
								{" "}
								<i class="bi bi-whatsapp"></i>
							</i>
						</h5>
						<p className="text-center">
							<i className="bi bi-geo-alt"></i> {""} Via Pietro Nenni 69
							(90014), Casteldaccia, PA
						</p>
						<p className="text-center">
							<i className="bi bi-clock"></i> {""}Da lunedì alla domenica
							(chiuso il martedì)
						</p>
						<p className="text-center">
							<i className="bi bi-telephone"></i>
							{""}+39 327 1649057
						</p>
					</div>
					<div className="imgFooter my-5">
						<img src={contatti} alt="img_footer" />
					</div>
				</div>
			</footer>
		</>
	);
};
