import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";

import App from "./App";
import { findByTestAttr, storeFactory } from "../test/testUtils";

// activate global mock to make sure getSecretWord doesn't make api call
jest.mock("./actions");

// FUNCTIONAL TESTS

const setup = (initialState = {}) => {
	const store = storeFactory(initialState);
	const wrapper = mount(
		<Provider store={store}>
			<App />
		</Provider>
	);

	// add value to input box
	const inputBox = findByTestAttr(wrapper, "input-box");
	inputBox.simulate("change", { target: { value: "train" } });

	// simulate click on submit button
	const submitButton = findByTestAttr(wrapper, "submit-button");
	submitButton.simulate("click", { preventDefault() {} });

	return wrapper;
};

describe("no words have been guessed", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({
			secretWord: "party",
			success: false,
			guessedWords: [],
		});
	});

	test("creates the GuessedWords table with one row", () => {
		const guessedWordRows = findByTestAttr(wrapper, "guessed-word");

		expect(guessedWordRows).toHaveLength(1);
	});
});

describe("some words have been guessed", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({
			secretWord: "party",
			success: false,
			guessedWords: [{ guessedWord: "agile", letterMatchCount: 1 }],
		});
	});

	test("adds a row to guessedWords table", () => {
		const guessedWordRows = findByTestAttr(wrapper, "guessed-word");

		expect(guessedWordRows).toHaveLength(2);
	});
});

describe("guessed the secret word", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({
			secretWord: "party",
			success: false,
			guessedWords: [{ guessedWord: "agile", letterMatchCount: 1 }],
		});

		// add value to input box
		const inputBox = findByTestAttr(wrapper, "input-box");
		const mockEvent = { target: { value: "party" } };
		inputBox.simulate("change", mockEvent);

		// simulate click on submit button
		const submitButton = findByTestAttr(wrapper, "submit-button");
		submitButton.simulate("click", { preventDefault() {} });
	});

	test("adds row to guessedWords table", () => {
		const guessedWordsRow = findByTestAttr(wrapper, "guessed-word");

		expect(guessedWordsRow).toHaveLength(3);
	});

	test("display congrats component", () => {
		const congrats = findByTestAttr(wrapper, "component-congrats");

		expect(congrats.text().length).toBeGreaterThan(0);
	});

	test("does not display input component contents", () => {
		const inputBox = findByTestAttr(wrapper, "input-box");
		expect(inputBox.exists()).toBe(false);

		const submitButton = findByTestAttr(wrapper, "submit-button");
		expect(submitButton.exists()).toBe(false);
	});
});
