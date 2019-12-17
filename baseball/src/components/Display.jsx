import React from "react";

export default function Display({ gameState }) {
	return (
		<div className="display">
			<div>{gameState.state.hits}</div>
			<div>{gameState.state.balls}</div>
			<div>{gameState.state.strikes}</div>
		</div>
	);
}
