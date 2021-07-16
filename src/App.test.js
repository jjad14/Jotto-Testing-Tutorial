import { mount } from "enzyme";
import { findByTestAttr, storeFactory } from "../test/testUtils";
import { Provider } from "react-redux";

import App from "./App";

// Activate Global Mock to make sure getSecretWord doesnt make network call
jest.mock("./actions");

// will be the mock file in actions/__mocks__/index
// eslint-disable-next-line
import { getSecretWord as mockGetSecretWord } from "./actions";

const setup = () => {
	const store = storeFactory();

	return mount(
		<Provider store={store}>
			<App />
		</Provider>
	);
};

test("renders without error", () => {
	const wrapper = setup();
	const appComponent = findByTestAttr(wrapper, "component-app");

	expect(appComponent).toHaveLength(1);
});

describe("get secret word", () => {
	beforeEach(() => {
		// clear the mock calls from previous tests
		mockGetSecretWord.mockClear();
	});

	test("getSecretWord on app mount", () => {
		const wrapper = setup();

		expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
	});

	test("getSecretWord does not run on app update", () => {
		const wrapper = setup();

		// clears the mock secret word that was called on set up
		mockGetSecretWord.mockClear();

		// using setProps because wrapper.update() doesnt trigger useEffect
		// https://github.com/enzymejs/enzyme/issues/2254
		wrapper.setProps();

		expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
	});
});
