import React from "react";
import PropTypes from "prop-types";

import { Jumbotron, Button } from "react-bootstrap/";

export const Jumbo = () => {
	return (
		<Jumbotron className="w-75 m-auto">
			<h1>Hello, world!</h1>
			<p>
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>
			<p>
				<Button variant="primary">Learn more</Button>
			</p>
		</Jumbotron>
	);
};
