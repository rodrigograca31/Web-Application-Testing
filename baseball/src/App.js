import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

import GameState from "./helpers/game";

function App() {
	const state = GameState();

	return (
		<div className="App">
			<Display gameState={state}></Display>
			<Dashboard gameState={state}></Dashboard>
		</div>
	);
}

export default App;
