import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SomeOtherComponent from './SomeOtherComponent';
import Game from './Game';

import './css/normalize.css';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<SomeOtherComponent />, document.getElementById('root2'));
ReactDOM.render(<Game />, document.getElementById('root3'));
