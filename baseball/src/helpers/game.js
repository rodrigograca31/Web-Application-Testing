import React, { useState } from "react";

export default function GameState() {
	const [game, setGame] = useState({
		hits: 0,
		balls: 0,
		strikes: 0
	});

	const addHit = () => {
		setGame(oldState => {
			return {
				...game,
				hits: oldState.hits + 1
			};
		});
	};
	const addBall = () => {
		setGame(oldState => {
			return {
				...game,
				balls: oldState.balls === 3 ? 0 : oldState.balls + 1 // 0, 1, 2, 3
			};
		});
	};

	const addStrike = () => {
		setGame(oldState => {
			return {
				...game,
				strikes: oldState.strikes === 2 ? 0 : oldState.strikes + 1 // 0, 1, 2
			};
		});
	};

	return {
		state: game,
		hit: addHit,
		ball: addBall,
		strike: addStrike
	};
}
