import React from "react";
import TrafficLight from "./trafficLigth.jsx";

import "../../styles/index.scss";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5">
			<TrafficLight />
		</div>
	);
};

export default Home;
