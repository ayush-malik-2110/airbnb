/* eslint-disable no-undef, @typescript-eslint/no-var-requires */
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
// const webpack = require('webpack');

module.exports = {
	watch: false,
	entry: ['./src/index.js'],
	output: {
		path: path.resolve(__dirname, './build'),
		filename: '[name].js',
		publicPath: '/',
	},
	// node: { fs: 'empty' },
	devtool: 'source-map',
	devServer: {
		historyApiFallback: true,
		port: 9000,
	},
	resolve: {
		extensions: ['.js', '.json', '.jsx', '.css', '.scss', '.ts', '.tsx'],
		alias: {
			assets: path.resolve(__dirname, 'src/assets'),
			components: path.resolve(__dirname, 'src/components'),
			config: path.resolve(__dirname, 'src/config'),
			utils: path.resolve(__dirname, 'src/utils'),
		},
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html',
			// favicon: './src/assets/images/LOGO.png',
		}),
		new CopyWebpackPlugin([
			{
				from: 'src/assets',
				to: 'assets',
			},
			{
				from: 'src/manifest.json',
				to: 'manifest.json',
			},
		]),
	],
};
