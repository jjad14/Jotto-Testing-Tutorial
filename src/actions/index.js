import axios from "axios";
import { getLetterMatchCount } from "../helpers";

export const actionTypes = {
	CORRECT_GUESS: "CORRECT_GUESS",
	GUESS_WORD: "GUESS_WORD",
};

export const guessWord = (guessedWord) => (dispatch, getState) => {
	const secretWord = getState().secretWord;
	const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

	dispatch({
		type: actionTypes.GUESS_WORD,
		payload: { guessedWord, letterMatchCount },
	});

	if (guessedWord === secretWord) {
		dispatch({
			type: actionTypes.CORRECT_GUESS,
		});
	}
};

export const getSecretWord = () => {
	// TODO: write the actual action in Redux / Context section
	return axios.get("http:localhost:3030").then((res) => res.data);
};
