import { actionTypes } from "../actions";

const reducer = (state = [], action) => {
	switch (action.type) {
		case actionTypes.GUESS_WORD:
			return [...state, action.payload];
		case actionTypes.RESET_GAME:
			return [];
		default:
			return state;
	}
};

export default reducer;
