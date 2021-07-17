import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";

import rootReducer from "../src/reducers";
import { middlewares } from "../src/configureStore";

export const storeFactory = (initialState) => {
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(...middlewares)
	);
};

/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val  - Value of data-test attribute for search
 * @returns  {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
	return wrapper.find(`[data-test='${val}']`);
};

export const checkProps = (component, props) => {
	const propError = checkPropTypes(
		component.propTypes,
		props,
		"prop",
		component.name
	);

	expect(propError).toBeUndefined();
};
