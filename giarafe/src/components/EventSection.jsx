import { Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import eventImg1 from "../assets/eventi1.jpg";
import eventImg2 from "../assets/eventi2.jpg";
import eventImg3 from "../assets/eventi3.jpg";
import "../style.css";
const EventSection = () => {
	return (
		<>
			<h1 id="eventi" className="bg-red text-center text-light mb-0">
				Eventi :
			</h1>
			<Container fluid className="gx-0">
				<Row className="gx-0">
					<Carousel data-bs-theme="light">
						<Carousel.Item>
							<div className="containerImgEventSection ">
								<img src={eventImg1} alt="img_event1" />
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className="containerImgEventSection ">
								<img src={eventImg2} alt="img_event2" />
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className="containerImgEventSection ">
								<img src={eventImg3} alt="img_event3" />
							</div>
						</Carousel.Item>
					</Carousel>
				</Row>
			</Container>
		</>
	);
};
export default EventSection;
