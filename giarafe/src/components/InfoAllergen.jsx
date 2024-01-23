import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const InfoAllergen = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<div className="mx-3 navMenu" onClick={handleShow}>
				{" "}
				Info allergeni <i className="bi bi-info-circle"></i>
			</div>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header className="bg-danger text-light" closeButton>
					<Modal.Title>NOTA PER I CLIENTI</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>Allergeni alimentari: cosa sono?</p>
					<p>
						Comprendere il significato della parola "allergene alimentare" è
						molto semplice, vengono cosi definiti infatti gli alimenti o gli
						ingredienti presenti in essi che possono scatenare reazioni
						allergiche in chi determinati soggetti predisposti.
					</p>
					<div></div>
					<p>
						Se sai di essere un soggetto allergico, ti preghiamo di informare il
						personale addetto alle ordinazioni e faremo il possibile per
						prevenire e assecondare le tue esigenze.
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary">Understood</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default InfoAllergen;
