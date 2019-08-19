const path = require('path');
const webpack = require('webpack');

module.exports = {
	name: 'wordrelay-setting',
	mode: 'development', // 실서비스: production
	devtool: 'eval', // hidden-source-map
	resolve: {
		extensions: ['.jsx', 'js', '.ts'],
	},
	entry: {
		app: ['./client.jsx'],
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			options: {
				presets: [ '@babel/preset-env', '@babel/preset-react' ],
				plugins: ['@babel/plugin-proposal-class-properties'],
			},
			exclude: /node_modules/,
		}],
	},
	plugins: [

	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'app.js',
	}
};