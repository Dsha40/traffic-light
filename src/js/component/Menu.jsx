import React from "react";
import PropTypes from "prop-types";

import { Navbar, Nav, Container } from "react-bootstrap/";

export const Menu = () => {
	return (
		<Navbar
			collapseOnSelect
			bg="dark"
			expand="lg"
			variant="dark"
			className="m-0 mx-auto">
			<Container>
				<Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
						<Nav.Link href="#ervices">Services</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
