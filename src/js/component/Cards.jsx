import React from "react";
import { Card, Button, CardGroup } from "react-bootstrap/";

export const Cards = () => {
	return (
		<CardGroup className="w-75 m-auto">
			<Card style={{ width: "18rem" }} className="mr-3">
				<Card.Img
					variant="top"
					src="https://www.stevensegallery.com/640/360"
				/>
				<Card.Body>
					<Card.Title>Rock</Card.Title>
					<Card.Text>
						Reservar sus boletos para los proximos conciertos de
						rock. Por la pandemia solo se realizan conciertos
						virtuales.
					</Card.Text>
					<Button className="d-block" variant="primary">
						Go somewhere
					</Button>
				</Card.Body>
			</Card>
			<Card style={{ width: "18rem" }} className="mr-3">
				<Card.Img variant="top" src="https://placebear.com/640/360" />
				<Card.Body>
					<Card.Title>Exotico</Card.Title>
					<Card.Text>
						Reservar boletos para ver animales exoticos en un
						exclusivo zoologico. Para mas informacion contactenos.
					</Card.Text>
					<Button className="d-block" variant="primary">
						Go somewhere
					</Button>
				</Card.Body>
			</Card>
			<Card style={{ width: "18rem" }} className="mr-3">
				<Card.Img variant="top" src="http://placeimg.com/640/360/any" />
				<Card.Body>
					<Card.Title>Random</Card.Title>
					<Card.Text>
						Esta tarjeta mostrara imagenes random cada vez que
						refresques la pagina. Adivina cual sera la siguiente
						imagen
					</Card.Text>
					<Button className="d-block" variant="primary">
						Go somewhere
					</Button>
				</Card.Body>
			</Card>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src="https://baconmockup.com/640/360" />
				<Card.Body>
					<Card.Title>Parrilla</Card.Title>
					<Card.Text>
						Puede encontrar las mejores carnes para parrilla y
						parrilleras de la mejor calidad en esta tarjeta
					</Card.Text>
					<Button className="d-block" variant="primary">
						Go somewhere
					</Button>
				</Card.Body>
			</Card>
		</CardGroup>
	);
};
