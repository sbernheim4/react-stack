import React, { Component } from 'react';
import ComponentTwo from './componentTwo.jsx';

import '../../scss/SomeOtherComponent.scss';

class SomeOtherComponent extends Component {
	constructor() {
		super();

		this.state = {
			timesClicked: this.getInitialValue(),
		};
	}

	// The number of times the button is clicked is stored in localstorage
	getInitialValue() {
		return JSON.parse(localStorage.getItem('timesClicked')) || 1;
	}

	// Every time the button is clicked, update the state variable and the value in 
	// local storage so that it persists even if the browser is quit
	updateValue() {
		let newValue = this.state.timesClicked + 1
		localStorage.setItem('timesClicked', JSON.stringify(newValue));
		this.setState({timesClicked : newValue});
	}

	// Reset the value of the click counter both in state and local storage
	clearValue() {
		localStorage.setItem('timesClicked', JSON.stringify(0));
		this.setState({timesClicked : 0});	
	}

	render() {
		return (
			<div className="SomeOtherComponent">
				<button className="button" onClick={() => this.updateValue()}>
					Click me to see what happens
				</button>

				<button className='button' onClick={() => this.clearValue()}>
					Reset value 
				</button>

				<ComponentTwo value={this.state.timesClicked}/>

			</div>
		);
	}
}



export default SomeOtherComponent;
