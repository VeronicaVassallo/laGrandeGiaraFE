import Card from "react-bootstrap/Card";

const CardSectionMenu = (prop) => {
	return (
		<div className="card_food d-flex w-100  justify-content-between text-light">
			<div className="">
				<Card.Body>
					<Card.Title>{prop.product}</Card.Title>
					<Card.Text>{prop.ingredients}</Card.Text>
					<Card.Text>{prop.prize}€</Card.Text>
				</Card.Body>
			</div>
			<div>
				{prop.img ? (
					<img className="sizeimg p-2" src={prop.img} />
				) : (
					<div className="sizeimg"></div>
				)}
			</div>
		</div>
	);
};

export default CardSectionMenu;
