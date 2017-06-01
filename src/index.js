import React from 'react';
import ReactDOM from 'react-dom';

/* Import components that we want to render on the page*/
import App from './components/App';
import SomeOtherComponent from './components/SomeOtherComponent';
import Game from './components/Game';

import './css/normalize.css';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<SomeOtherComponent />, document.getElementById('root2'));
ReactDOM.render(<Game />, document.getElementById('root3'));
