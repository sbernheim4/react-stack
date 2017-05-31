import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SomeOtherComponent from './SomeOtherComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<SomeOtherComponent />, document.getElementById('root2'));

registerServiceWorker();
