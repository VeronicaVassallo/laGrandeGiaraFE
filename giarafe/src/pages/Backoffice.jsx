import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Addproduct from "../components/AddProduct";
import "../style.css";

const Backoffice = () => {
	const [allProducts, setAllProducts] = useState([]);
	const [typologyValue, setTypologyValue] = useState("pizza");
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	try {
		const getData = async () => {
			const responce = await fetch(
				`http://localhost:5050/product/${typologyValue}`
			);
			let data = await responce.json();

			setAllProducts(data.products);
		};

		useEffect(() => {
			getData();
		}, [typologyValue]);
	} catch (error) {
		console.error(`Backoffice error:`, error);
		alert("Errore durante l'operazione, riprovare o chiamare  l'assistenza");
	}

	return (
		<div className="loginPageSize">
			<div className="text-center text-light py-2">
				<div className="d-flex justify-content-around align-items-center py-3">
					<div>
						<h2>Backoffice </h2>
					</div>
					<div>
						<Addproduct />
					</div>
					<div>
						<form>
							<label className="pe-3" for="typology">
								Seleziona tipologia prodotto:
							</label>
							<select
								name="typology"
								id="typology"
								onChange={(e) => setTypologyValue(e.target.value)}
							>
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
						</form>
					</div>
				</div>

				<table className="tableBackOffice text-light">
					<thead>
						<tr>
							<th>Nome</th>
							<th>Ingredienti</th>
							<th>€</th>
							<th>Img</th>
						</tr>
					</thead>
					<tbody>
						{allProducts &&
							allProducts?.map((p) => {
								return (
									<tr key={p._id} onClick={handleShow}>
										<td>{p.productName}</td>
										<td>{p.ingredients}</td>
										<td>{p.price}</td>
										<td>{p.img && <img src={p.img} alt="photo_product" />}</td>
									</tr>
								);
							})}
					</tbody>
				</table>
			</div>
			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Modifica Prodotto</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form className="d-flex flex-column">
						<label for="typology">Seleziona tipologia prodotto:</label>
						<select name="typology" id="typology">
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
						</select>

						<label htmlFor="productName"> Nome prodotto:</label>
						<input type="text" name="productName" id="productName" />
						<label htmlFor="ingredients"> Ingredienti:</label>
						<input type="text" name="ingredients" id="ingredients" />
						<label htmlFor="price"> Prezzo € :</label>
						<input type="number" name="price" id="price" />
						<label htmlFor="img"> Cover:</label>
						<input type="text" name="img" id="img" />
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="danger">Elimina prodotto</Button>
					<Button variant="secondary" onClick={handleClose}>
						Chiudi
					</Button>
					<Button variant="primary">Salva modifica</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Backoffice;
