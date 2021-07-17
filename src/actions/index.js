import axios from "axios";

export const actionTypes = {
	CORRECT_GUESS: "CORRECT_GUESS",
	GUESS_WORD: "GUESS_WORD",
};

export const guessWord = (guessedWord) => (dispatch, getState) => {};

export const getSecretWord = () => {
	// TODO: write the actual action in Redux / Context section
	return axios.get("http:localhost:3030").then((res) => res.data);
};
