import React, { Component } from 'react';
import '../css/SomeOtherComponent.css';

class SomeOtherComponent extends Component {
	constructor() {
		super();

		this.state = {
			timesClicked: 1,
		};
	}

	someFunc() {
		this.setState({timesClicked : this.state.timesClicked + 1});
	}

	render() {
		return (
			<div className="SomeOtherComponent">
				<button className="button" onClick={() => this.someFunc()}>
					Click me to see what happens
				</button>

				<p>Times clicked: {this.state.timesClicked}</p>
			</div>
		);
	}
}

export default SomeOtherComponent;
