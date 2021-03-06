import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../test/testUtils";
import SecretWordReveal from "./SecretWordReveal";

const secretWord = "party";
const defaultProps = { display: false, secretWord };

const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<SecretWordReveal {...setupProps} />);
};

test("renders without errors", () => {
	const wrapper = setup();
	const component = findByTestAttr(wrapper, "component-secret-word-reveal");

	expect(component.length).toBe(1);
});

test("renders no text when display prop is false", () => {
	const wrapper = setup({ display: false });
	const component = findByTestAttr(wrapper, "component-secret-word-reveal");

	expect(component.text()).toBe("");
});

test("renders message containing secret word when display prop is true", () => {
	const wrapper = setup({ display: true });
	const component = findByTestAttr(wrapper, "reveal-message");

	expect(component.text()).toContain(secretWord);
});

test("does not throw warning with expected props", () => {
	const expectedProps = { display: false, secretWord };
	checkProps(SecretWordReveal, expectedProps);
});
