import React, { useState } from "react";

export default function GameState() {
	const [state, setState] = useState({
		hits: 0,
		balls: 0,
		strikes: 0
	});

	const addHit = () => {
		setState(oldState => {
			return {
				...state,
				hits: oldState.hits + 1
			};
		});
	};
	const addBall = () => {
		setState(oldState => {
			return {
				...state,
				balls: oldState.balls === 3 ? 0 : oldState.balls + 1 // 0, 1, 2, 3
			};
		});
	};

	const addStrike = () => {
		setState(oldState => {
			return {
				...state,
				strikes: oldState.strikes === 2 ? 0 : oldState.strikes + 1 // 0, 1, 2
			};
		});
	};

	return {
		state: state,
		hit: addHit,
		ball: addBall,
		strike: addStrike
	};
}
