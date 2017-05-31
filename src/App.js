import React, { Component } from 'react';
import SomeOtherComponent from './SomeOtherComponent';
import './css/App.css';

class App extends Component {
	render() {
		return (
			<div className="App">

				<div className="App-header">
					<h2>Welcome to React</h2>
				</div>

				<p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload</p>

				<SomeOtherComponent />
			</div>
		);
	}
}

export default App;
