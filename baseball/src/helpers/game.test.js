import GameState from "./game";
import { renderHook, act } from "@testing-library/react-hooks";

describe("helpers", () => {
	it("should work", () => {
		const { result } = renderHook(() => GameState());
		console.log(result);

		expect(result.current.state).toBeDefined();
		expect(result.current.state).toEqual({
			hits: 0,
			balls: 0,
			strikes: 0
		});
	});

	it("test increments", () => {
		const { result } = renderHook(() => GameState());

		expect(result.current.state.hits).toBe(0);

		act(() => {
			result.current.hit();
			result.current.hit();
			result.current.hit();
			result.current.hit();
		});
		expect(result.current.state.hits).toBe(4);

		act(() => {
			result.current.ball();
			result.current.ball();
			result.current.ball();
			result.current.ball();
		});
		expect(result.current.state.balls).toBe(0);

		act(() => {
			result.current.strike();
			result.current.strike();
			result.current.strike();
		});
		expect(result.current.state.strikes).toBe(0);
	});
});
