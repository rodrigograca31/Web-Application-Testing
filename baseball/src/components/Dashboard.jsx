import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

export default function Dashboard({ gameState }) {
	const click = () => {
		// setBalls(++balls);
		gameState.hit();
	};

	return (
		<div>
			<div className="display">
				<div>
					<Button
						variant="contained"
						color="secondary"
						onClick={e => {
							gameState.hit();
						}}
					>
						<AddIcon /> Hit
					</Button>
				</div>
				<div>
					<Button
						variant="contained"
						color="secondary"
						onClick={e => {
							gameState.ball();
						}}
					>
						<AddIcon /> Ball
					</Button>
				</div>
				<div>
					<Button
						variant="contained"
						color="secondary"
						onClick={e => {
							gameState.strike();
						}}
					>
						<AddIcon /> Strike
					</Button>
				</div>
			</div>
		</div>
	);
}
