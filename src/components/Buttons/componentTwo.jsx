import React, { Component } from 'react';

class Button extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<h3>You have clicked the button {this.props.value} times</h3>
				<p>(This and the text above is a sub component from the button, whaaattt...)</p>
			</div>
		);
	}
}

export default Button;
