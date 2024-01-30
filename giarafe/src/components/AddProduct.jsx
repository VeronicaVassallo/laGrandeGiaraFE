import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Addproduct = () => {
	const [show, setShow] = useState(false);
	const [dataProduct, setDataProduct] = useState({});

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleInpuntChange = (e) => {
		const { name, value } = e.target;
		setDataProduct({
			...dataProduct,
			[name]: value,
		});
	};

	const postData = async () => {
		try {
			const responce = await fetch("http://localhost:5050/product/create", {
				headers: {
					"Content-type": "application/json",
				},
				method: "POST",
				body: JSON.stringify(dataProduct),
			});
			window.location.reload();
		} catch (error) {
			console.error(`Backoffice error:`, error);
			alert("Errore durante l'operazione, riprovare o chiamare  l'assistenza");
		}
	};

	return (
		<>
			<Button variant="success" onClick={handleShow}>
				Aggiungi prodotto
			</Button>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Aggiungi Prodotto</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form className="d-flex flex-column">
						<label for="typology">Seleziona tipologia prodotto:</label>
						<select name="typology" id="typology" onChange={handleInpuntChange}>
							<option value="" disabled selected></option>
							<option value="pizza">pizza</option>
							<option value="antipasti rustici">antipasti rustici</option>
							<option value="antipasti di mare">antipasti di mare</option>
							<option value="primi">primi</option>
							<option value="secondi">secondi</option>
							<option value="contorno">contorno</option>
							<option value="schiacciate">schiacciate</option>
							<option value="mezzelune">mezzelune</option>
							<option value="dessert">dessert</option>
							<option value="bibita">bibite</option>
							<option value="vino">vini</option>
							<option value="birra">birra</option>
						</select>

						<label htmlFor="productName"> Nome prodotto:</label>
						<input
							type="text"
							name="productName"
							id="productName"
							onChange={handleInpuntChange}
						/>
						<label htmlFor="ingredients"> Ingredienti:</label>
						<input
							type="text"
							name="ingredients"
							id="ingredients"
							onChange={handleInpuntChange}
						/>
						<label htmlFor="price"> Prezzo € :</label>
						<input
							type="number"
							name="price"
							id="price"
							onChange={handleInpuntChange}
						/>
						<label htmlFor="img"> Cover:</label>
						<input
							type="text"
							name="img"
							id="img"
							onChange={handleInpuntChange}
						/>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Chiudi
					</Button>
					<Button variant="primary" onClick={postData}>
						Salva
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Addproduct;
