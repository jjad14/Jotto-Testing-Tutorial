import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import TotalGuesses from "./TotalGuesses";
import NewWord from "./NewWord";

import { getSecretWord, resetGame } from "./actions";
import "./App.css";

function App() {
	const success = useSelector((state) => state.success);
	const guessedWords = useSelector((state) => state.guessedWords);
	const secretWord = useSelector((state) => state.secretWord);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSecretWord());
	}, [dispatch]);

	return (
		<div className="container" data-test="component-app">
			<h1>Jotto</h1>
			<div>The secret word is {secretWord}</div>
			<Congrats success={success} />
			<NewWord
				display={success}
				resetAction={() => dispatch(resetGame())}
			/>
			<Input success={success} secretWord={secretWord} />
			<GuessedWords guessedWords={guessedWords} />
			<TotalGuesses guessCount={guessedWords.length} />
		</div>
	);
}

export default App;
