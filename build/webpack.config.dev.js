const merge = require('webpack-merge');
const commonConfig = require('./webpack.config');
const { resolve } = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = merge(commonConfig, {
	entry: resolve('./demo/index.js'),
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: resolve('./demo'),
		compress: true,
		clientLogLevel: 'error',
	},
	module: {
		rules: [
			{
				test: /\.css/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
				],
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: resolve('./demo/index.html'),
			filename: './index.html',
		}),
	],
	node: {
		console: true,
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
	},
});
