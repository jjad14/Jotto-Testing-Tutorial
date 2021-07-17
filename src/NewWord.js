import React from "react";
import PropTypes from "prop-types";

const NewWord = ({ display, resetAction }) => {
	if (display) {
		return (
			<button
				data-test="component-new-word"
				className="btn btn-primary spacer-bottom"
				onClick={resetAction}
			>
				New Word
			</button>
		);
	}

	return <div data-test="component-new-word"></div>;
};

NewWord.propTypes = {
	display: PropTypes.bool.isRequired,
	resetAction: PropTypes.func,
};

export default NewWord;
