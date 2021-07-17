import React from "react";
import PropTypes from "prop-types";

const Congrats = (props) => {
	return (
		<>
			{props.success ? (
				<div
					data-test="component-congrats"
					className="alert alert-success"
				>
					<span data-test="congrats-message" className="text-center">
						Congratulations! You guessed the word!
					</span>
				</div>
			) : (
				<div data-test="component-congrats"></div>
			)}
		</>
	);
};

Congrats.propTypes = {
	success: PropTypes.bool.isRequired,
};

export default Congrats;
