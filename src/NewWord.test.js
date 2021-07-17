import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../test/testUtils";
import NewWord from "./NewWord";

const defaultProps = { display: false };

const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<NewWord {...setupProps} />);
};

describe("NewWord Component", () => {
	test("renders without errors", () => {
		const wrapper = setup();

		const component = findByTestAttr(wrapper, "component-new-word");

		expect(component.length).toBe(1);
	});

	test("renders no text when display prop is false", () => {
		const wrapper = setup({ display: false });

		const component = findByTestAttr(wrapper, "component-new-word");

		expect(component.text()).toBe("");
	});

	test("renders non-empty text when display prop is true", () => {
		const wrapper = setup({ display: true, resetAction: () => {} });

		const component = findByTestAttr(wrapper, "component-new-word");

		expect(component.text().length).not.toBe(0);
	});

	test("does not throw warning with expected props", () => {
		const expectedProps = { display: false, resetAction: () => {} };
		checkProps(NewWord, expectedProps);
	});

	test("calls resetAction prop upon button click", () => {
		// create a mock function so we can see whether it's called on click
		const resetActionMock = jest.fn();
		const wrapper = setup({ display: true, resetAction: resetActionMock });

		// find the button (which is the top level element of this component)
		const resetButton = findByTestAttr(wrapper, "component-new-word");
		resetButton.simulate("click");

		// expect the mock to have been called once
		expect(resetActionMock.mock.calls.length).toBe(1);
	});
});
