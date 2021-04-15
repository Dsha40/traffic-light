import React from "react";
import PropTypes from "prop-types";

import { Navbar, Nav, Container } from "react-bootstrap/";

export const Footer = () => {
	return (
		<div className="mt-4">
			<Navbar
				collapseOnSelect
				bg="dark"
				expand="lg"
				variant="dark"
				className="m-0 mx-auto">
				<Container>
					<Navbar.Brand href="#footerText" className="m-auto">
						Copyright Your Website 2021
					</Navbar.Brand>
				</Container>
			</Navbar>
		</div>
	);
};
