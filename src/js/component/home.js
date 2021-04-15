import React from "react";

import { Menu } from "./Menu.jsx";
import { Jumbo } from "./Jumbotron.jsx";
import { Cards } from "./Cards.jsx";
import { Footer } from "./Footer.jsx";

//create your first component
export function Home() {
	return (
		<div className="m-0 p-0">
			<Menu />
			<div className="mb-4">
				<Jumbo />
			</div>
			<Cards />
			<Footer />
		</div>
	);
}
