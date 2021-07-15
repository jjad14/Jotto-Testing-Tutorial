import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../test/testUtils";
import Input from "./Input";

// mock entire module for destructuring useState on import ///
// const mockSetCurrentGuess = jest.fn();
// jest.mock("react", () => ({
//   ...jest.requireActual("react"),
//   useState: (initalState) => [initalState, mockSetCurrentGuess],
// }));

const setup = (secretWord = "party") => {
  return shallow(<Input secretWord={secretWord} />);
};

test("renders without error", () => {
  const wrapper = setup();

  const component = findByTestAttr(wrapper, "component-input");

  expect(component.length).toBe(1);
});

test("does not throw warning with expected props", () => {
  checkProps(Input, { secretWord: "party" });
});

describe("state controlled input field", () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;

  let originalUseState;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup();
  });

  afterEach(() => {
    React.useState = originalUseState;
  });

  test("state updates with value of input box upon change", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");

    // The effect of these two lines is simulating input box, getting a value of train.
    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  test("field is cleared upon submit button click", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");

    submitButton.simulate("click", { preventDefault() {} });

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
