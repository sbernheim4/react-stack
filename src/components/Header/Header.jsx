import React, { Component } from 'react';
import Cosmic from 'cosmicjs';
import '../../scss/app.scss';

var config = {
	bucket: {
		slug: 'testing-env',
		read_key: 'NDtZpEwPBcFycscf2ul8yu9CgUk4goZCSc3U66YKbhL7nOMsIS'
	},
	object: {
		slug: 'my-first-article'
	}
};

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Loading title...',
			content: 'Loading content...'
		}
	}

	componentDidMount() {
		let info = {}
		Cosmic.getObject(config, config.object, (err, res) => {
			console.log(res);
			let content = this.strip(res.object.content)
			this.setState({
				title: res.object.title,
				content: content
			})
		});
	}

	strip(val) {
		return val.replace(/<.[a-z]*[A-Z]*[0-9]*>/g, '');
	}

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2>{this.state.title}</h2>
					<p>{this.state.content}</p>
				</div>
			</div>
		);
	}
}

export default Header;
