module.exports = {
	entry: __dirname + '/src/index.js',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{ test: /\.css$/, loader: "style-loader!css-loader" }
		]
	},
	resolve: {
		extensions: ['*', '.js', '.json']
	}
};
