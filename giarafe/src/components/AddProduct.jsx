import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import env from "react-dotenv";

const Addproduct = () => {
	const [show, setShow] = useState(false);

	//cloudinary
	const [dataProduct, setDataProduct] = useState({});
	const [fileImg, setFileImg] = useState(null);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleInpuntChange = (e) => {
		const { name, value } = e.target; //valore input
		if (value) {
			setDataProduct({
				...dataProduct,
				[name]: value,
			});
		} else {
			setDataProduct({
				...dataProduct,
				[name]: null,
			});
		}
	};

	const handleFileChange = (e) => {
		setFileImg(e.target.files[0]);
	};

	const uploadFileimg = async (img) => {
		const fileData = new FormData();
		fileData.append("img", img);

		try {
			const response = await fetch(
				`${env.REACT_APP_SERVER_BASE_URL}/product/cloudUpload`,
				{
					method: "POST",
					body: fileData,
				}
			);

			return await response.json();
		} catch (e) {
			console.log(`Error during file upload: ${e}`);
			alert(
				`Errore durante l'upload del file, riprovare o chiamare  l'assistenza: ${e}`
			);
		}
	};

	const postData = async () => {
		try {
			let uploadImg = null;
			if (fileImg) {
				uploadImg = await uploadFileimg(fileImg);
			} else {
				uploadImg = "";
			}

			const finalBody = {
				productName: dataProduct.productName,
				ingredients: dataProduct.ingredients,
				price: dataProduct.price,
				img: uploadImg.img,
				typology: dataProduct.typology,
			};
			const response = await fetch("http://localhost:5050/product/create", {
				headers: {
					"Content-type": "application/json",
				},
				method: "POST",
				body: JSON.stringify(finalBody),
			});
			const data = await response.json();
			alert("Prodotto caricato con successo!!!");
			window.location.reload();
		} catch (error) {
			console.log(`Backoffice error:`, error);
			alert(
				`Errore durante l'operazione, riprovare o chiamare  l'assistenza : ${error}`
			);
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
							type="file"
							name="img"
							id="img"
							onChange={handleFileChange}
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
