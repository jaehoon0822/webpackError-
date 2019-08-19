const path = require('path');
const webpack = require('webpack');

// module.exports = {
// 	mode: 'development', // 실서비스: production
// 	devtool: 'eval', // hidden-source-map
// 	resolve: {
// 		extensions: ['.jsx', 'js', '.ts'],
// 	},
// 	entry: {
// 		app: ['./client.jsx'],
// 	},
// 	module: {
// 		rules: [{
// 			test: /\.jsx?$/,
// 			loader: 'babel-loader',
// 			options: {
// 				presets: [ ['@babel/preset-env', {
// 					targets: {
// 						browsers: ['> 1% in KR'],
// 					}
// 				}], '@babel/preset-react' ],
// 				plugins: ['@babel/plugin-proposal-class-properties'],
// 			},
// 		}],
// 	},
// 	plugins: [
// 		new webpack.LoaderOptionsPlugin({ debug: true }),
// 	],
// 	output: {
// 		path: path.join(__dirname, 'dist'),
// 		filename: 'app.js',
// 	}
// };

module.exports = {
	mode: 'development', // 실서비스: production
	devtool: 'eval', // hidden-source-map
	resolve: {
		extensions: ['.jsx', 'js'],
	},
	
	entry: {
		app: './client',
	},

	module: {
		rules: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			options: {	
				presets: [['@babel/preset-env', {
						targets: {
							browsers: ['> 1% in KR'],
						},
						debug: true,	
					}], '@babel/preset-react'],
				plugins: ['@babel/plugin-proposal-class-properties']
			},
		}],
	},

 	plugins: [
 		new webpack.LoaderOptionsPlugin({ debug: true }),
 	],

	output: {
		filename: 'app.js',
		path: path.join(__dirname, 'dist'),
	}
};

// module.exports = {	
// 	mode: 'development',
// 	devtool: 'eval',
// 	resolve: {
// 		extensions: ['.jsx', '.js'],
// 	},

// 	entry: {
// 		app: './client'	
// 	},

// 	module: {
// 		rules: [{
// 			test: /\.jsx?$/,
// 			loader: 'babel-loader',
// 			options: {	
// 				presets: [['@babel/preset-env', {
// 						targets: {
// 							browsers: ['> 1% in KR'],
// 						},
// 						debug: true,	
// 					}], '@babel/preset-react'],
// 				plugins: ['@babel/plugin-proposal-class-properties']
// 			},
// 		}],
// 	},

// 	plugins: [
// 		new webpack.LoaderOptionsPlugin({ debug: true }),
// 	],

// 	output: {
// 		filename: 'app.js',
// 		path: path.join(__dirname, 'dist')
// 	},
// };