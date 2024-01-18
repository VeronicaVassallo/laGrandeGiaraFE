import { Link } from "react-router-dom";
import parmigiana from "../assets/parmigiana.jpg";
import JumbotronPizza from "../components/JumbotronPizza";
import Card from "react-bootstrap/Card";
import { pizzes } from "../products/pizza";
import "../style.css";
const MenuPizza = () => {
	return (
		<div className="bg_homepage">
			<JumbotronPizza />
			<h2 className="bg-danger p-2 d-flex align-items-center py-3">
				<div className="mx-5 boxJar">
					<div className="headJar"></div>
					<div className="sideJarR"></div>
					<div className="sideJarL"></div>
					<div className="sideJarWhiteR"></div>
					<div className="sideJarWhiteL"></div>
					<div className="bodyJar">
						<Link className="goBack" to={"/"}>
							<i class="bi bi-arrow-left-circle"></i>
						</Link>
					</div>
				</div>
				<div>Le nostre pizze:</div>
			</h2>
			<div className="d-flex flex-column align-items-center mb-5">
				{pizzes.map((pizza) => (
					<>
						<div className="card_food d-flex w-100 justify-content-between">
							<div className="">
								<Card.Body>
									<Card.Title>{pizza.namePizza}</Card.Title>
									<Card.Text>{pizza.ingredients}</Card.Text>
									<Card.Text>{pizza.prize}€</Card.Text>
								</Card.Body>
							</div>
							<div>
								{pizza.img ? (
									<img className="sizeimg" src={pizza.img} />
								) : (
									<div className="sizeimg"></div>
								)}
							</div>
						</div>
						<hr />
					</>
				))}
			</div>
			{/*
	<table className="table table-hover">
				<thead>
					<tr>
						<th scope="col"></th>
						<th scope="col"></th>
						<th scope="col"></th>
						<th scope="col"></th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row"></th>
						<td>Biancaneve</td>
						<td>Mozzarella</td>
						<td>6,00€</td>
						<td></td>
					</tr>
					<tr>
						<th scope="row"></th>
						<td>Margherita</td>
						<td>Pomodoro e mozzarella </td>
						<td>6,00€</td>
						<td>
							{" "}
							<img className="sizeimg" src={margherita} />{" "}
						</td>
					</tr>
					<tr>
						<th scope="row"></th>
						<td>Marinara</td>
						<td>Pomodoro, aglio e acciughe</td>
						<td>5,00€</td>
						<td></td>
					</tr>
					<tr>
						<th scope="row"></th>
						<td>Napoli</td>
						<td>Pomodoro, mozzarella e acciughe</td>
						<td>6,50€</td>
						<td></td>
					</tr>
					<tr>
						<th scope="row"></th>
						<td>Rianata</td>
						<td>Pomodoro, scaglie di mandorle, prezzemolo e grana</td>
						<td>6,50€</td>
						<td></td>
					</tr>
					<tr>
						<th scope="row"></th>
						<td>Topolino</td>
						<td>Pomodoro, mozzarella, würstel e patatine</td>
						<td>7,00€</td>
						<td></td>
					</tr>
					<tr>
						<th scope="row"></th>
						<td>Romana</td>
						<td>Pomodoro, mozzarella e prosciutto cotto</td>
						<td>7,00€</td>
						<td></td>
					</tr>
					<tr>
						<th scope="row"></th>
						<td>Diavola</td>
						<td>Pomodoro, mozzarella, salamino piccante e peperoni</td>
						<td>7,00€</td>
						<td></td>
					</tr>
					<tr>
						<th scope="row"></th>
						<td>Cudduruni</td>
						<td>Mozzarella, tuma, acciughe, cipolla e pecorino</td>
						<td>6,50€</td>
						<td></td>
					</tr>
					<tr>
						<th scope="row"></th>
						<td>Faccia ra vecchia</td>
						<td>Pane pizza, acciuga e cipolla</td>
						<td>5,00€</td>
						<td></td>
					</tr>
					<tr>
						<th scope="row"></th>
						<td>Parmigiana</td>
						<td>Pomodoro, mozzarella, melanzane e grana</td>
						<td>7,00€</td>
						<td>
							{" "}
							<img className="sizeimg" src={parmigiana} />{" "}
						</td>
					</tr>
				</tbody>
			</table>
 */}
		</div>
	);
};
export default MenuPizza;
