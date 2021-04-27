import React from "react";

export default class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedtLight: null
		};
	}
	render() {
		let redExtraStuff = "";
		if (this.state.clickedtLight === "red") redExtraStuff = "selected";

		let yellowExtraStuff = "";
		if (this.state.clickedtLight === "yellow")
			yellowExtraStuff = "selected";

		let greenExtraStuff = "";
		if (this.state.clickedtLight === "green") greenExtraStuff = "selected";

		return (
			<div>
				<div id="trafficTop"></div>
				<div id="container">
					<div
						className={"red light " + redExtraStuff}
						onClick={() =>
							this.setState({ clickedtLight: "red" })
						}></div>
					<div
						className={"yellow light " + yellowExtraStuff}
						onClick={() =>
							this.setState({ clickedtLight: "yellow" })
						}></div>
					<div
						className={"green light " + greenExtraStuff}
						onClick={() =>
							this.setState({ clickedtLight: "green" })
						}></div>
				</div>
			</div>
		);
	}
}
