import React from 'react';
import ReactDOM from 'react-dom';

/* Import components that we want to render on the page*/
import App from './components/App/App.jsx';
import SomeOtherComponent from './components/SomeOtherComponent/SomeOtherComponent.jsx';
import Game from './components/Game/Game.jsx';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<SomeOtherComponent />, document.getElementById('root2'));
ReactDOM.render(<Game />, document.getElementById('root3'));
