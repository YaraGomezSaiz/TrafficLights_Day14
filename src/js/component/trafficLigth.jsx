import React, { useState } from "react";

export default function TrafficLight() {
	const [redselected, setRedSelected] = useState("red light");
	const [yellowselected, setYellowSelected] = useState("yellow light");
	const [greenselected, setGreenSelected] = useState("green light");

	function setRed() {
		setRedSelected("red light selected");
		setYellowSelected("yellow light");
		setGreenSelected("green light");
	}

	function setYellow() {
		setRedSelected("red light");
		setYellowSelected("yellow light selected");
		setGreenSelected("green light");
	}

	function setGreen() {
		setRedSelected("red light");
		setYellowSelected("yellow light");
		setGreenSelected("green light selected");
	}

	return (
		<div>
			<div id="TrafficTop"></div>
			<div id="container">
				<div className={redselected} onClick={() => setRed()}></div>
				<div
					className={yellowselected}
					onClick={() => setYellow()}></div>
				<div className={greenselected} onClick={() => setGreen()}></div>
			</div>
		</div>
	);
}
