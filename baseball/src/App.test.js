import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
	const { getByText } = render(<App />);
	const linkElement = getByText(/hit/i);
	expect(linkElement).toBeInTheDocument();
});

test("renders buttons", () => {
	const { container, debug } = render(<App />);
	const buttons = container.querySelectorAll("button");
	expect(buttons.length).not.toBe(null);
	expect(buttons.length).toBe(3);

	buttons.forEach(btn => {
		fireEvent.click(btn);
	});
});

test("renders buttons", () => {
	const { container, debug, getByText } = render(<App />);
	const singleButton = container.querySelectorAll("button")[1];
	fireEvent.click(singleButton);
	fireEvent.click(singleButton);

	const linkElement = getByText(/2/i); // 2 because we clicked twice
	expect(linkElement).toBeInTheDocument();

	// console.log(debug());
});
