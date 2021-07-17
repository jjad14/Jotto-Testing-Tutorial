import React from "react";
import PropTypes from "prop-types";

const SecretWordReveal = ({ display, secretWord }) => {
	if (display) {
		return (
			<div
				data-test="component-secret-word-reveal"
				className="alert alert-danger"
			>
				<span data-test="reveal-message">
					The secret word was "{secretWord}" Better luck next time!
				</span>
			</div>
		);
	} else {
		return <div data-test="component-secret-word-reveal" />;
	}
};

SecretWordReveal.propTypes = {
	display: PropTypes.bool.isRequired,
	// not "isRequired" because it's *not* required if display is false
	secretWord: PropTypes.string,
};

export default SecretWordReveal;
