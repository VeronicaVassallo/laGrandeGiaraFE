import margherita from "../assets/margherita.jpg";
import parmigiana from "../assets/parmigiana.jpg";
import "../style.css";
const MenuPizza = () => {
	return (
		<>
			<h2>Le nostre pizze:</h2>
			<table class="table table-hover">
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
						<td>5,00€</td>
						<td></td>
					</tr>
					<tr>
						<th scope="row"></th>
						<td>Margherita</td>
						<td>Pomodoro e mozzarella </td>
						<td>5,00€</td>
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
						<td>5,00€</td>
						<td></td>
					</tr>
					<tr>
						<th scope="row"></th>
						<td>Topolino</td>
						<td>Pomodoro, mozzarella, würstel e patatine</td>
						<td>6,00€</td>
						<td></td>
					</tr>
					<tr>
						<th scope="row"></th>
						<td>Diavola</td>
						<td>Pomodoro, mozzarella, salamino e peperoni</td>
						<td>6,00€</td>
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
		</>
	);
};
export default MenuPizza;
