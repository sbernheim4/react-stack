import React, { Component } from 'react';
import ComponentTwo from './componentTwo.jsx';

import '../../scss/SomeOtherComponent.scss';

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

				<ComponentTwo value={this.state.timesClicked}/>

			</div>
		);
	}
}

export default SomeOtherComponent;
