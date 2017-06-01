/* Used to extract the scss, compile it and write it to its own file */
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/* Used to minify the css after it has been written to its output file */
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const nano = require('cssnano');

module.exports = {
	entry: __dirname + '/src/index.js',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.json', '.scss']
	},
	plugins: [
		new ExtractTextPlugin('index.css'),
		new OptimizeCssAssetsPlugin({
			cssProcessor: nano,
			cssProcessorOptions: {discardComments: {removeAll: true} },
			canPrint: true
		})
	]
};
