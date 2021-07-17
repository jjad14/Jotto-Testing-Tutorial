import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../test/testUtils";
import TotalGuesses from "./TotalGuesses";

const defaultProps = { guessCount: 0 };

const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<TotalGuesses {...setupProps} />);
};

test("renders without errors", () => {
	const wrapper = setup();
	const component = findByTestAttr(wrapper, "component-total-guesses");

	expect(component.length).toBe(1);
});

test("renders the correct number of guesses", () => {
	const guessCount = 8;
	const wrapper = setup({ guessCount });
	const component = findByTestAttr(wrapper, "component-total-guesses");

	expect(component.text()).toContain(guessCount.toString());
});
