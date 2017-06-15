import React from 'react';
import '../../scss/game.scss';

function Square(props) {
	return (
		<button
			className="square"
			onClick={props.onClick}
		>
			{props.value}
		</button>
	);
}

class Board extends React.Component {

	constructor() {
		super();
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true,
			status: "Next Player: X"
		};
	}

	handleClick(i) {
		const newSquares = this.state.squares.slice();

		if (calculateWinner(newSquares) || movesLeft(!newSquares)) {
			return;
		}

		// Don't allow someone to go on top of where someone else has played
		if (newSquares[i] != 'X' && newSquares[i] != 'O') {

			newSquares[i] = this.state.xIsNext ? 'X' : 'O';

			this.setState({
				squares : newSquares,
				xIsNext : !this.state.xIsNext,
				status: this.determineStatus(newSquares)
			});

		}

	}

	renderSquare(i) {
		return (
			<Square
			value={this.state.squares[i]}
			onClick={() => this.handleClick(i)}
			/>
		)
	}

	resetGame() {
		const newSquareState = this.state.squares.slice();

		for (var i = 0; i < newSquareState.length; i++){
			newSquareState[i] = '';
		}

		this.setState({
			squares : newSquareState,
			xIsNext : !this.state.xIsNext,
			status : this.determineStatus(newSquareState)
		});
	}

	determineStatus(updatedSquares) {
		const winner = calculateWinner(updatedSquares);

		if (winner) {
			return 'Winner ' + winner;
		} else if (!movesLeft(updatedSquares)) {
			return 'Tie Game';
		} else {
			return 'Next Player: '.concat(this.state.xIsNext ? 'O' : 'X');
		}
	}

	render() {
		return (
			<div>
				<p className="status">{this.state.status}</p>

				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>

				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>

				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>

				<button onClick={() => this.resetGame()}>
					New Game
				</button>
			</div>
		);
	}
}

class TicTacToe extends React.Component {
	render() {
		return (
			<div className="game">
				<div className="game-board">
					<Board />
				</div>

				<div className="game-info">
					<div>{/* status */}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}
}

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}

// Returns true if there are still moves to be made and false if no more moves are possible
function movesLeft(squares){
	for (let i = 0; i < squares.length; i++) {
		if (squares[i] === null || squares[i] === '') {
			return true;
		}
	}
	return false;
}

export default TicTacToe;
