import React from 'react';
import ReactDOM from 'react-dom';

/* Import components that we want to render on the page*/
import Navbar from './Navbar/Navbar.jsx';
import Header from './Header/Header.jsx';
import Buttons from './Buttons/Buttons.jsx';
import TicTacToe from './TicTacToe/TicTacToe.jsx';

ReactDOM.render(<Navbar />, document.getElementById('Navbar'));
ReactDOM.render(<Header />, document.getElementById('Header'));
ReactDOM.render(<Buttons />, document.getElementById('Button'));
ReactDOM.render(<TicTacToe />, document.getElementById('TicTacToe'));
