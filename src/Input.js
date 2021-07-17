import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { guessWord, giveUp } from "./actions";

const Input = ({ secretWord }) => {
	const dispatch = useDispatch();
	const [currentGuess, setCurrentGuess] = React.useState("");

	const success = useSelector((state) => state.success);
	const gaveUp = useSelector((state) => state.gaveUp);

	if (success || gaveUp) {
		return <div data-test="component-input"></div>;
	}

	return (
		<div data-test="component-input">
			<form className="form-inline">
				<input
					type="text"
					data-test="input-box"
					className="mb-2 mx-sm-3"
					placeholder="Enter guess"
					value={currentGuess}
					onChange={(e) => setCurrentGuess(e.target.value)}
				/>
				<button
					data-test="submit-button"
					className="btn btn-primary mb-2 mr-1"
					onClick={(e) => {
						e.preventDefault();
						dispatch(guessWord(currentGuess));
						setCurrentGuess("");
					}}
				>
					Submit
				</button>
				<button
					data-test="give-up-button"
					onClick={(evt) => {
						evt.preventDefault();
						dispatch(giveUp());
					}}
					className="btn btn-danger mb-2"
				>
					Give up
				</button>
			</form>
		</div>
	);
};

Input.propTypes = {
	secretWord: PropTypes.string.isRequired,
};

export default Input;
