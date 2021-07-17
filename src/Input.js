import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { guessWord } from "./actions";

const Input = ({ secretWord }) => {
	const dispatch = useDispatch();
	const [currentGuess, setCurrentGuess] = React.useState("");

	const success = useSelector((state) => state.success);

	if (success) {
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
					className="btn btn-primary mb-2"
					onClick={(e) => {
						e.preventDefault();
						dispatch(guessWord(currentGuess));
						setCurrentGuess("");
					}}
				>
					Submit
				</button>
			</form>
		</div>
	);
};

Input.propTypes = {
	secretWord: PropTypes.string.isRequired,
};

export default Input;
