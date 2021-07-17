import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import TotalGuesses from "./TotalGuesses";
import NewWord from "./NewWord";
import SecretWordReveal from "./SecretWordReveal";

import { getSecretWord, resetGame } from "./actions";
import "./App.css";

function App() {
	const success = useSelector((state) => state.success);
	const guessedWords = useSelector((state) => state.guessedWords);
	const secretWord = useSelector((state) => state.secretWord);
	const gaveUp = useSelector((state) => state.gaveUp);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSecretWord());
	}, [dispatch]);

	return (
		<div className="container" data-test="component-app">
			<div className="d-flex flex-column">
				<h1 className="text-center">Jotto</h1>
				<Congrats success={success} />
				<SecretWordReveal display={gaveUp} secretWord={secretWord} />
				<NewWord
					display={success || gaveUp}
					resetAction={() => dispatch(resetGame())}
				/>
				<Input success={success} secretWord={secretWord} />
				<GuessedWords guessedWords={guessedWords} />
				<TotalGuesses guessCount={guessedWords.length} />
			</div>
		</div>
	);
}

export default App;
